console.log('Loaded!');


//change text

var element = document.getElementById("main-text");

element.innerHTML = "New value : Hai, Nagarajan J";


//move the image
var img = document.getElementById("madi");

var marginLeft = 0;

function moveRight() {
 marginLeft = marginLeft + 10;
 img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function () {
  var interval = setInterval(moveRight, 100);
//  img.style.marginLeft = "100px";
};

