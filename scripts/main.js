var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/sobaka1.jpg.png") {
    myImage.setAttribute("src", "images/sobaka2.jpeg");
  } else {
    myImage.setAttribute("src", "images/sobaka1.jpg.png");
  }
};