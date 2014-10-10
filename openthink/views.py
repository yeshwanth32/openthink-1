from openthink import app
from flask import Flask, request, session, g, redirect, url_for, abort, \
     render_template, flash, jsonify

@app.route('/')
def hello_world():
    return 'Welcome to OpenThink v2!'