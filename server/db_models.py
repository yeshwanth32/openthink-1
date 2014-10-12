import datetime as dt

from server import app, login_manager
from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy
from flask.ext.bcrypt import Bcrypt
from flask.ext.login import UserMixin

db = SQLAlchemy(app)
bcrypt = Bcrypt()


class SurrogatePK(object):
    """A mixin that adds a surrogate integer 'primary key' column named
    ``id`` to any declarative-mapped class.
    """
    __table_args__ = {'extend_existing': True}

    id = db.Column(db.Integer, primary_key=True)

class User(db.Model, SurrogatePK, UserMixin):
    __tablename__ = 'users'
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(128), nullable=True)
    created_at = db.Column(db.DateTime, nullable=False, default=dt.datetime.utcnow)
    active = db.Column(db.Boolean(), default=False)
    is_admin = db.Column(db.Boolean(), default=False)

    def __init__(self, username, email, password=None, **kwargs):
        db.Model.__init__(self, username=username, email=email, **kwargs)
        if password:
            self.set_password(password)
        else:
            self.password = None

    def set_password(self, password):
        self.password = bcrypt.generate_password_hash(password)

    def check_password(self, value):
        return bcrypt.check_password_hash(self.password, value)

    @classmethod
    def login_user(cls, username, password):
        user = cls.query.filter_by(username=username).first()
        if user and user.check_password(password):
            return user
        else:
            return None

    def __repr__(self):
        return '<User({username!r})>'.format(username=self.username)

class Post(db.Model, SurrogatePK):
    __tablename__ = 'posts'
    title = db.Column(db.String(140))
    body = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', backref=db.backref('posts', lazy='dynamic'))
    time_posted = db.Column(db.DateTime, nullable=False, default=dt.datetime.utcnow)

    def __init__(self, title, body, user, time_posted=None):
        self.title = title
        self.body = body
        if time_posted is None:
            time_posted = dt.datetime.utcnow()
        self.time_posted = time_posted
        self.user = user

    def __repr__(self):
        return '<Post %r>' % self.title

class Relation(db.Model, SurrogatePK):
    __tablename__ = 'relations'
    parent_id = db.Column(db.Integer, db.ForeignKey('posts.id'))
    parent = db.relationship('Post', foreign_keys=[parent_id],
        backref=db.backref('parent_relations', lazy='dynamic'))
    child_id = db.Column(db.Integer, db.ForeignKey('posts.id'))
    child = db.relationship('Post', foreign_keys=[child_id],
        backref=db.backref('child_relations', lazy='dynamic'))
    linked_by_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    linked_by = db.relationship('User', backref=db.backref('links', lazy='dynamic'))
    time_linked = db.Column(db.DateTime, nullable=False, default=dt.datetime.utcnow)


    def __init__(self, parent, child, linked_by, time_linked=None):
        self.parent = parent
        self.child = child
        self.linked_by = linked_by
        if time_linked is None:
            time_linked = dt.datetime.utcnow()
        self.time_linked = time_linked

    def __repr__(self):
        return '<Relation %r>' % self.id

class Comment(db.Model, SurrogatePK):
    __tablename__ = 'comments'
    body = db.Column(db.Text)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'))
    post = db.relationship('Post', backref=db.backref('comments', lazy='dynamic'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', backref=db.backref('comments', lazy='dynamic'))
    time_posted = db.Column(db.DateTime, nullable=False, default=dt.datetime.utcnow)

    def __init__(self, body, post, user, time_posted=None):
        self.body = body
        self.post = post
        self.user = user
        if time_posted is None:
            time_posted = dt.datetime.utcnow()
        self.time_posted = time_posted

    def __repr__(self):
        return '<Comment %r>' % self.body

@login_manager.user_loader
def load_user(userid):
    return User.get(userid)

