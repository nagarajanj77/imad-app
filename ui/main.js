console.log('Loaded!');


//change text

var element = document.getElementById("main-text");

element.innerHTML = "New value : Hai, Nagarajan J";


//move the image
var img = document.getElementById("madi");
img.onclick = function () {
  img.style.marginLeft = "100px";
};

