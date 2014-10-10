from contextlib import closing
from sqlite3 import dbapi2 as sqlite3
from flask import Flask, request, session, g, redirect, url_for, abort, \
     render_template, flash, jsonify

# configuration
DEBUG = True

app = Flask(__name__)
app.config.from_object(__name__)

import openthink.views

if __name__ == '__main__':
    app.run()