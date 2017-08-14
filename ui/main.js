//console.log('Loaded!');


//change text

//var element = document.getElementById("main-text");

//element.innerHTML = "New value : Hai, Nagarajan J";


//move the image
//var img = document.getElementById("madi");

//var marginLeft = 0;

//function moveRight() {
// marginLeft = marginLeft + 1;
// img.style.marginLeft = marginLeft + 'px';
//}

//img.onclick = function () {
//  var interval = setInterval(moveRight, 50);
//  img.style.marginLeft = "100px";
//};


// Counter code
var button = document.getElementByID("counter");
var counter = 0;

button.onclick = function () {
    
    // make a request to end point
    
    // capture the response and store in a variable
    
    // render the variable in correct span
    counter = counter + 1;
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
    
};