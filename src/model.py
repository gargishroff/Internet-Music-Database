#! /usr/bin/python3

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///songs.db'
db = SQLAlchemy(app)

class Song(db.Model):
    id = db.Column(db.String(4), primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    album = db.Column(db.String(50), nullable=False)
    artist = db.Column(db.String(50), nullable=False)

with app.app_context():
    db.create_all()