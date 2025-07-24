// // Wait for the page to load
// window.addEventListener('load', function () {
//   // Hide the splash screen after 2 seconds
//   setTimeout(function () {
//     var splashScreen = document.getElementById('splash-screen');
//     var content = document.getElementById('contents');
//     splashScreen.classList.add('hidden');
//     content.classList.add('show');
//   }, 2000);
// })

// window.addEventListener('load', function(){
//   var Img = document.getElementById("myImg");
//   zoomIn(Img);
//   zoomOut(Img);
// });

// function zoomIn(element) {
//   element.style.transform = "scale(1.2)";
//   // element.style.transform = "scale(1)";
// }

// function zoomOut(element) {
//   element.style.transform = "scale(1)";
// }

// const image = document.getElementById("myImg1");
// console.log(image)
// image.addEventListener("load", () => {
//   // Set the initial scale to 0
//   image.style.transform = "scale(0)";
  
//   // Add a transition to the image's scale property
//   image.style.transition = "transform 1s ease-in-out";
  
//   // Set the final scale to 1
//   image.style.transform = "scale(1)";
// });


// Get the image element
const image = document.getElementById('image');

// Zoom in effect
image.classList.add('zoom-in');

// Zoom out effect after 2 seconds
setTimeout(() => {
  image.classList.remove('zoom-in');
  image.classList.add('zoom-out');
}, 1000);


var countDownDate = new Date("2023-06-30T00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minutes").innerHTML = "0";
    document.getElementById("seconds").innerHTML = "0";
  }
}, 1000);

var reviews = [];

function submitReview() {
  //   var artistName = document.getElementById("artist-name").value;
  var reviewerName = document.getElementById("reviewer-name").value;
  var rating = document.querySelector('input[name="rating"]:checked').value;
  var review = document.getElementById("review").value;

  var reviewObject = {
    // artistName: artistName,
    reviewerName: reviewerName,
    rating: rating,
    review: review
  };
  reviews.push(reviewObject);

  displayReviews();
}

function displayReviews() {
  var tableBody = document.getElementById("review-table-body");
  tableBody.innerHTML = "";

  for (var i = 0; i < reviews.length; i++) {
    var row = tableBody.insertRow(i);
    // var artistNameCell = row.insertCell(0);
    var reviewerNameCell = row.insertCell(0);
    

    
    var ratingCell = row.insertCell(1);
   

    var reviewCell = row.insertCell(2);
    


    // artistNameCell.innerHTML = reviews[i].artistName;
    reviewerNameCell.innerHTML = reviews[i].reviewerName;

    ratingCell.innerHTML =reviews[i].rating;
    ratingCell.style.paddingLeft = "20px";

    reviewCell.innerHTML =reviews[i].review;
    reviewCell.style.paddingLeft = "20px";
  }
}