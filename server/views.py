from server import app
from flask import Flask, request, session, g, redirect, url_for, abort, \
     render_template, flash, jsonify
from db_models import User
from transit.writer import Writer
from transit.reader import Reader
from StringIO import StringIO

@app.route('/')
def index():
    return render_template('base.html')

def get_post_data_from_req(request):
    reader = Reader()
    return reader.read(StringIO(request.data))

@app.route("/login", methods=["POST"])
def login():
    req_data = get_post_data_from_req(request)
    user = User.login_user(req_data.get("username"), req_data.get("password"))
    if user:
        return jsonify(**{"username": user.username, "id": user.id})
    else:
        return jsonify(**{"error": "No user found"})

