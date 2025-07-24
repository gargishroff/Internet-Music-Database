var text="Welcome to the MeloVibz, developed by your very own iShapers. Our website is a hub for music lovers everywhere. Whether you're a casual listener or a die-hard fan, we aim to provide you with everything you need to enjoy your favorite tunes to the fullest."+
"We cover a wide range of genres, from classic rock to pop, hip-hop, electronic, and everything in between."+
"We also have a comprehensive database of songs and albums, so you can easily find what you're looking for and discover new music you'll love. Our website is designed to be user-friendly, so you can easily navigate through our pages and find what you're looking for quickly and easily."+
"Thank you for visiting our website. We hope you enjoy your time here, and we look forward to helping you discover new music and deepen your love for the songs you already know and love."

function typing(){
    var i=0;
    var speed=50;
    function type(){
        if(i<text.length){
            document.getElementById("text").innerHTML+=text.charAt(i);
            i++;
            setTimeout(type,speed);
        }
    }
    type();
}

document.addEventListener("DOMContentLoaded",function(){
    typing();
});