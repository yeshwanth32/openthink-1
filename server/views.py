from server import app
from flask import Flask, request, session, g, redirect, url_for, abort, \
     render_template, flash, jsonify
from db_models import User

@app.route('/')
def index():
    return render_template('base.html')

@app.route("/login", methods=["POST"])
def login():
    user = User.login_user(request.form.get("username"), request.form.get("username"))
    if user:
        return jsonify(**{"username": user.username, "id": user.id})
    else:
        return jsonify(**{"error": "No user found"})

