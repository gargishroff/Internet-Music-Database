var home=document.getElementById("homelink")
home.addEventListener("mouseover",function(){
    home.style.color="#FFBAB3";
    home.style.fontSize="30px";
});
home.addEventListener("mouseout",function(){
    home.style.color="navajowhite";
    home.style.fontSize="25px";
    var currentLocation = location.href;
var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
  if (links[i].href === currentLocation) {
    links[i].style.color = "rgb(255, 177, 32)";
    break;
  }
  if (currentLocation === 'http://127.0.0.1:5000/') {
    links[i].style.color =  "rgb(255, 177, 32)";
    break;
  }
}
});

var play=document.getElementById("playlink")
play.addEventListener("mouseover",function(){
    play.style.color="#FFBAB3";
    play.style.fontSize="30px";
});
play.addEventListener("mouseout",function(){
    play.style.color="navajowhite";
    play.style.fontSize="25px";
    var currentLocation = location.href;
var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
  if (links[i].href === currentLocation) {
    links[i].style.color = "rgb(255, 177, 32)";
    break;
  }
}
});

var home1=document.getElementById("artistlink")
home1.addEventListener("mouseover",function(){
    home1.style.color="#FFBAB3";
    home1.style.fontSize="30px";
});
home1.addEventListener("mouseout",function(){
    home1.style.color="navajowhite";
    home1.style.fontSize="25px"
    var currentLocation = location.href;
var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
  if (links[i].href === currentLocation) {
    links[i].style.color = "rgb(255, 177, 32)";
    break;
  }
}
});

var home2=document.getElementById("aboutlink")
home2.addEventListener("mouseover",function(){
    home2.style.color="#FFBAB3";
    home2.style.fontSize="30px";
});
home2.addEventListener("mouseout",function(){
    home2.style.color="navajowhite";
    home2.style.fontSize="25px"
    var currentLocation = location.href;
var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
  if (links[i].href === currentLocation) {
    links[i].style.color = "rgb(255, 177, 32)";
    break;
  }
}
});


var home3=document.getElementById("searchlink")
home3.addEventListener("mouseover",function(){
    home3.style.color="#FFBAB3";
    home3.style.fontSize="30px";
});
home3.addEventListener("mouseout",function(){
    home3.style.color="navajowhite";
    home3.style.fontSize="25px"
    var currentLocation = location.href;
var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
  if (links[i].href === currentLocation) {
    links[i].style.color = "rgb(255, 177, 32)";
    break;
  }
}
});

var home4=document.getElementById("spotlink")
home4.addEventListener("mouseover",function(){
    home4.style.color="#FFBAB3";
    home4.style.fontSize="30px";
});
home4.addEventListener("mouseout",function(){
    home4.style.color="navajowhite";
    home4.style.fontSize="25px"
    var currentLocation = location.href;
var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
  if (links[i].href === currentLocation) {
    links[i].style.color = "rgb(255, 177, 32)";
    break;
  }
}
});

var currentLocation = location.href;
var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
  if (links[i].href === currentLocation) {
    links[i].style.color = "rgb(255, 177, 32)";
    break;
  }
}
