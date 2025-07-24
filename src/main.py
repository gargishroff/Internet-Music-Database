#! /usr/bin/python3

import json
from flask import Flask, render_template,request,redirect
from model import db, Song
# from app import app

from sqlalchemy.exc import IntegrityError

app1=Flask(__name__)

app1.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///songs.db'
db.init_app(app1)

@app1.route("/")
def index():
    return render_template("home.html")

@app1.route("/home.html")
def home():
    return render_template("home.html")

@app1.route("/artist.html")
def artist():
    return render_template("artist.html")

@app1.route("/about.html")
def about():
    return render_template("about.html")

@app1.route("/spotlight.html")
def spotlight():
    return render_template("spotlight.html")

@app1.route("/search.html")
def search():
    return render_template("search.html")

@app1.route("/playlist.html")
def playlist():
    song = Song.query.all()
    return render_template('playlist.html', songs=song)

@app1.route("/-_es.html")
def es1():
    return render_template("-_es.html")

@app1.route("/+_es.html")
def es2():
    return render_template("+_es.html")

@app1.route("/=_es.html")
def es3():
    return render_template("=_es.html")

@app1.route("/no6_es.html")
def es4():
    return render_template("no6_es.html")

@app1.route("/x_es.html")
def es5():
    return render_template("x_es.html")

@app1.route("/divide_es.html")
def es6():
    return render_template("divide_es.html")

@app1.route("/avici_avici.html")
def avici1():
    return render_template("avici_avici.html")

@app1.route("/life_avici.html")
def avici2():
    return render_template("life_avici.html")

@app1.route("/stories_avici.html")
def avici3():
    return render_template("stories_avici.html")

@app1.route("/Tim_avici.html")
def avici4():
    return render_template("Tim_avici.html")

@app1.route("/true_avici.html")
def avici5():
    return render_template("true_avici.html")

@app1.route("/born_pink_bp.html")
def bp1():
    return render_template("born_pink_bp.html")

@app1.route("/BPIYA.html")
def bp2():
    return render_template("BPIYA.html")

@app1.route("/kill_this_love_bp.html")
def bp3():
    return render_template("kill_this_love_bp.html")

@app1.route("/Special_Final_bp.html")
def bp4():
    return render_template("Special_Final_bp.html")

@app1.route("/the_album.html")
def bp5():
    return render_template("the_album.html")

@app1.route("/collage_cs.html")
def cs1():
    return render_template("collage_cs.html")

@app1.route("/memories_cs.html")
def cs2():
    return render_template("memories_cs.html")

@app1.route("/sickboy_cs.html")
def cs3():
    return render_template("sickboy_cs.html")

@app1.route("/wwj_cs.html")
def cs4():
    return render_template("wwj_cs.html")

@app1.route("/sfsg.html")
def cs5():
    return render_template("sfsg.html")

@app1.route("/fearless._ts.html")
def ts1():
    return render_template("fearless._ts.html")

@app1.route("/folklore_ts.html")
def ts2():
    return render_template("folklore_ts.html")

@app1.route("/lover_ts.html")
def ts3():
    return render_template("lover_ts.html")

@app1.route("/midnights_ts.html")
def ts4():
    return render_template("midnights_ts.html")

@app1.route("/reputation_ts.html")
def ts5():
    return render_template("reputation_ts.html")

@app1.route("/ed.html")
def ed():
    return render_template("ed.html")

@app1.route("/bp.html")
def bp():
    return render_template("bp.html")

@app1.route("/chainsmokers.html")
def cs():
    return render_template("chainsmokers.html")

@app1.route("/taylor.html")
def taylor():
    return render_template("taylor.html")

@app1.route("/avicii.html")
def avicii():
    return render_template("avicii.html")

# @app1.route("/playlist.html")
# def playlist():
#     return render_template("playlist.html")

# @app1.route("/add_to_playlist")
# def add():
#     return render_template("playlist.html")

@app1.route('/add_to_playlist', methods=['POST'])
def add_to_playlist():
    song_data = request.form
    new_song = Song(id=song_data['id'] ,title=song_data['title'], album=song_data['album'], artist=song_data['artist'] )
    try :
        db.session.add(new_song)
        db.session.commit()
        song = Song.query.all()
        message = f"{song_data['title']} added to playlist :)"
        return render_template('playlist.html', message=message, songs=song)
    except IntegrityError:
        db.session.rollback()
        song = Song.query.all()
        message = f"{song_data['title']} already exists in your playlist :)"
        return render_template('playlist.html', message=message, songs=song)

@app1.route('/remove_song', methods=['POST'])
def remove_song():
    song_id = request.form['id']
    song = Song.query.get(song_id)
    db.session.delete(song)
    db.session.commit()
    songs = Song.query.all()
    message = "Song removed from playlist :("
    return render_template('/playlist.html', message=message, songs=songs)
    
if __name__== '__main__':
    app1.run(debug=True)

