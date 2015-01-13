from app import app
from flask import Flask, request, session, g, redirect, url_for, abort, \
     render_template, flash, jsonify
from db_models import User, Post, Relation, Comment, Vote
from transit.writer import Writer
from transit.reader import Reader
from StringIO import StringIO
from flask.ext.login import login_user, logout_user, login_required, current_user

def transitify(val, format='json'):
    io = StringIO()
    writer = Writer(io, format) # or "json-verbose", "msgpack"
    writer.write(val)
    return io.getvalue()

def writable_current_user():
    if not current_user.is_anonymous():
        return current_user.writeable
    return None

def dict_by_id(alist, key="id"):
    return dict([(item[key], item) for item in alist])

def handle_asks(post, list_of_wants):
    post = Post.query.filter(Post.id==post).one() if isinstance(post, int) else post
    ret = {"current_post": post.id}
    if "children" in list_of_wants:
        rels = post.get_child_relations()
        child_ids = [rel.child_id for rel in rels]
        children = Post.query.filter(Post.id.in_(child_ids)).all()
        posts = [p.writeable for p in children] + [post.writeable_with_children()]
        rels = [r.writeable_with_vote_info(current_user) for r in rels]
        ret["posts"] = dict_by_id(posts)
        ret["rels"] = dict_by_id(rels)

    if "comments" in list_of_wants:
        ret["comments"] = [c.writeable for c in post.get_comments()]
    return ret


@app.route('/post/<int:post_id>')
def post_page(post_id):
    print "post is %s" % post_id
    app_state = handle_asks(post_id, ["children", "comments"])
    app_state["user"] = writable_current_user()
    print app_state
    return render_template('base.html', app_state=transitify(app_state))


@app.route('/')
def index():
    app_state = {"user": writable_current_user()}
    return post_page(Post.root_post_id())

def get_post_data_from_req(request):
    reader = Reader()
    return reader.read(StringIO(request.data))

@app.route("/login", methods=["POST"])
def login():
    req_data = get_post_data_from_req(request)
    user = User.login_user(req_data.get("username"), req_data.get("password"))
    if user:
        login_user(user)
        return transitify({"username": user.username, "id": user.id})
    else:
        return transitify({"error": "No user found"})

@app.route("/logout", methods=["POST"])
@login_required
def logout():
    logout_user()
    return transitify("Log out successful")

@app.route("/register", methods=["POST"])
def register():
    req_data = get_post_data_from_req(request)
    user = User.register_user(req_data.get("username"), 
                              req_data.get("email"),
                              req_data.get("password"),
                              req_data.get("r-password"))
    if isinstance(user, basestring):
        return transitify({"error": user})
    login_user(user)
    return transitify({"username": user.username, "id": user.id})

@app.route("/submit-post", methods=["POST"])
def submit_post():
    req_data = get_post_data_from_req(request)
    post = Post.submit_post(current_user,
                     req_data.get("text"),
                     req_data.get("title"))
    if isinstance(post, basestring):
        return transitify({"error": post, "error_type": "create-post"})

    relation = Relation.link_posts(req_data.get('parent', Post.root_post_id()), 
                                   post, 
                                   current_user)
    if isinstance(relation, basestring):
        return transitify({"error": relation, "error_type": "link-posts"})

    app_state = {"success": "posted successfully"}
    if req_data.get('current_post') and req_data.get('ask_for'):
        app_state.update(handle_asks(req_data.get('current_post'), req_data.get('ask_for')))
    return transitify(app_state)

def get_post_id_from_text(s):
    return int(s)

@app.route("/link-post", methods=["POST"])
def link_post():
    req_data = get_post_data_from_req(request)
    relation = Relation.link_posts(req_data.get('parent'),
        get_post_id_from_text(req_data.get('child-text')), current_user)
    if isinstance(relation, basestring):
        return transitify({"error": relation})

    app_state = {"success": "linked successfully"}
    if req_data.get('current_post') and req_data.get('ask_for'):
        app_state.update(handle_asks(req_data.get('current_post'), req_data.get('ask_for')))
    return transitify(app_state)

@app.route("/post/<int:post_id>/comment", methods=["POST"])
def submit_comment(post_id):
    req_data = get_post_data_from_req(request)
    comment = Comment.submit_comment(current_user, post_id, req_data.get('body'))
    if isinstance(comment, basestring):
        return transitify({"error": comment})
    post = Post.query.filter(Post.id==post_id).one()
    return transitify({"comments": [c.writeable for c in post.get_comments()]})

@app.route("/vote", methods=["POST"])
def submit_vote():
    req_data = get_post_data_from_req(request)
    vote = Vote.submit_vote(current_user, int(req_data.get('rel_id')), int(req_data.get('value')))
    if isinstance(vote, basestring):
        return transitify({"error": vote})
    rel = Relation.query.filter(Relation.id==int(req_data.get('rel_id'))).one()
    return transitify({"rel": rel.writeable_with_vote_info()})
