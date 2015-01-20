from contextlib import closing
from sqlite3 import dbapi2 as sqlite3
from flask import Flask, request, session, g, redirect, url_for, abort, \
     render_template, flash, jsonify
from flask.ext.sqlalchemy import SQLAlchemy
from flask.ext.login import LoginManager
from localsettings import SETTINGS

# configuration
DEBUG = SETTINGS["DEBUG"]
# SQLALCHEMY_DATABASE_URI = 'sqlite:////tmp/openthink.db'
SQLALCHEMY_DATABASE_URI = SETTINGS["DB_CONNECTION_STRING"]

SECRET_KEY = 'why would I tell you my secret key?'

app = Flask(__name__)
app.config.from_object(__name__)

db = SQLAlchemy(app)
login_manager = LoginManager(app)


if __name__ == '__main__':
    app.run()
