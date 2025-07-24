Welcome to MeloVibz,a product developed by iShapers. MeloVibz is your go to IMDb (Internet Music Database).
The website is developed purely using HTML, CSS, JavaScript, Python and Flask on the text editor- Visual Studio Code. We have done our best to make the website interactive and engaging for the viewers while they vibe to their favourite music.

We at MeloVibz aim to provide a user-friendly environment to all our user. 
Following are some guidelines for operating MeloVibz -  
For opening the web application:
1. Open the terminal and type 'python3 main.py'
2. On running this command a local host server link will be generated. Copy this link and paste it on the browser.
3. Now you are on the home page of our website.

Features of our web appliaction:
1. On the top of the webpages is a navigation bar which contains the links to The Home Page, The About Page and the Artist Page. The user can hover over those links to get redirected to these page. 
2. At the end of each page there is a footer which contains some information about the developers of MeloVibz and links to The Home and The About Page, the user can use this links to navigate through the website.
3. For the convinience of the user the page on which user is currently on is indicated in the navigation bar.
4. All the images of The Artists and The Albums redirect to their respective pages.
5. For Detailed information about MeloVibz and its creators (The iShapers) the users are supposed to navigate to The About Page.
6. The Tops Songs (in the Top Charts) in the Home Page redirects yu to their respective Albums, so that you can get to Vibe to their Melody.
7. Search page enables users to search for their favourite songs from iTunes API. The page also implements filters according to duration and explicitness.
8. Soptlight page features our favourite artist - Taylor Swift. Users can visit this page to review Taylor Swift. Additionally there is a timer that counts down to the release of the upcoming album of our favourite aritist.
9. Every song has a "Add To Playlist" button that will add the song to your own personalised playlist. The playlist page displays your playlist and also gives options to remove any song.
10. Below is the detailed Project Directory Structure.
```
.
├── ASSUMPTIONS.md
├── README.md
└── src
    ├── instance
    │   └── songs.db
    ├── main.py
    ├── model.py
    ├── __pycache__
    │   └── model.cpython-310.pyc
    ├── static
    │   ├── about.js
    │   ├── Images
    │   ├── index.css
    │   ├── script.js
    │   ├── search.css
    │   ├── search.js
    │   ├── spotlight.css
    │   └── spotlight.js
    └── templates
        ├── about.html
        ├── artist.html
        ├── avici_avici.html
        ├── avicii.html
        ├── born_pink_bp.html
        ├── bp.html
        ├── BPIYA.html
        ├── chainsmokers.html
        ├── collage_cs.html
        ├── divide_es.html
        ├── ed.html
        ├── +_es.html
        ├── -_es.html
        ├── =_es.html
        ├── fearless._ts.html
        ├── folklore_ts.html
        ├── home.html
        ├── kill_this_love_bp.html
        ├── life_avici.html
        ├── lover_ts.html
        ├── memories_cs.html
        ├── midnights_ts.html
        ├── no6_es.html
        ├── playlist.html
        ├── reputation_ts.html
        ├── search.html
        ├── sfsg.html
        ├── sickboy_cs.html
        ├── Special_Final_bp.html
        ├── spotlight.html
        ├── stories_avici.html
        ├── taylor.html
        ├── the_album.html
        ├── Tim_avici.html
        ├── true_avici.html
        ├── wwj_cs.html
        └── x_es.html

```
6 directories, 50 files
