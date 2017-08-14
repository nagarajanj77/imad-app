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
var button = document.getElementById('counter');

button.onclick = function () {
    
    // create a request to end point
    var request = new XMLHttpRequest(); 
    
    // capture the response and store in a variable
    request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE)
        { 
            //take action
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        // not DONE
    };
    
    // make a request
    request.open('GET', 'http://nagarajanj77.imad.hasura-app.io/counter', true);
    request.send(null);
    
};


//Submit name

var submit = document.getElementById('submit_btn');
submit.onclick = function () {
  // make request to server

    // create a request to end point
    var request = new XMLHttpRequest(); 
    
    // capture the response and store in a variable
    request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE)
        { 
            //take action
            if (request.status === 200) {
                // capture list of name and render it as list
                  var names = request.responseText;
                  names = JSON.parse(names);
                  var list = '';
                  for (var i=0; i< names.length; i++) {
                      list += '<li>' + names[i] + '</li>';
                  }
                  var ul = document.getElementById('namelist');
                  ul.innerHTML = list;            }
        }
        // not DONE
    };

var nameInput = document.getElementById('name');
var name = nameInput.value;    
    // make a request
    request.open('GET', 'http://nagarajanj77.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);

  
};



