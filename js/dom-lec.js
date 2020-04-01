"use strict";

console.log('Hello form the dom-lec.js file.');

var header = document.getElementById('header');

console.log('header element', header);

header.style.backgroundColor = "#ef0";
header.style.color = "red";
header.innerText = "Document Object Model";

var grandpaElements = document.getElementsByClassName("grandpa");

console.log(grandpaElements);

var paragraphTags = document.getElementsByTagName("p");

console.log('P tags in page ', paragraphTags);
console.log('InnerText of p tag - ', paragraphTags[0].innerText);

var paragraph = paragraphTags[0];

paragraph.innerText = "We need MOAR dots!!!";
//paragraph.innerText = "<br><h1>Hello from header.</h1>";

paragraph.innerHTML = "<br><img src='imgs/pixel-art.gif' >";

console.log(document.forms.login.username.value);

var loginButton = document.getElementById('login-btn');
console.log(loginButton);

loginButton.addEventListener('click', function(e){
   e.preventDefault();
   var username = document.forms.login.username.value;
   var password = document.forms.login.password.value;

   alert('Username: ' + username + ' Password: ' + password);
});

// setInterval(function(){
//     var username = document.forms.login.username.value;
//     var password = document.forms.login.password.value;
//
//     console.log('As of now - Username: ' + username + ' Password: ' + password);
// }, 1000);

var img = document.getElementsByTagName('img')[0];
console.log(img);

console.log(img.hasAttribute("class"));

if(!img.hasAttribute("class")){
    img.setAttribute('class', 'fancy-gif billboard nice-scenery')
}

console.log("Contents of class attributes on the img." + img.getAttribute("class"));

var listElements = document.getElementsByTagName('li');
console.log(listElements);

for(var i = 0; i < listElements.length; i++){
    console.log(listElements[i].getAttribute('data-dbid'));
}

console.log(document.querySelector('.grand-daughter'));

document.querySelector('.grand-daughter').style.backgroundColor = "blue";

var inputs = document.querySelectorAll('input');
console.log(inputs);