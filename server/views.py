from server import app
from flask import Flask, request, session, g, redirect, url_for, abort, \
     render_template, flash, jsonify
from db_models import User
from transit.writer import Writer
from transit.reader import Reader
from StringIO import StringIO
from flask.ext.login import login_user, logout_user, login_required


@app.route('/')
def index():
    return render_template('base.html')

def get_post_data_from_req(request):
    reader = Reader()
    return reader.read(StringIO(request.data))

def transitify(val, format='json'):
    io = StringIO()
    writer = Writer(io, format) # or "json-verbose", "msgpack"
    writer.write(val)
    return io.getvalue()

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
