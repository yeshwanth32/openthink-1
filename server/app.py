from contextlib import closing
from sqlite3 import dbapi2 as sqlite3
from flask import Flask, request, session, g, redirect, url_for, abort, \
     render_template, flash, jsonify
from localsettings import SETTINGS

# configuration
DEBUG = True
# SQLALCHEMY_DATABASE_URI = 'sqlite:////tmp/openthink.db'
SQLALCHEMY_DATABASE_URI = SETTINGS["DB_CONNECTION_STRING"]

SECRET_KEY = 'why would I tell you my secret key?'

app = Flask(__name__)
app.config.from_object(__name__)


from views import blueprint
app.register_blueprint(blueprint)

from db_models import db, login_manager
db.init_app(app)
login_manager.init_app(app)


if __name__ == '__main__':
    app.run()
