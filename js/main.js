'use strict';
//Display menu
var show = document.querySelector('.menu-trigger');
var body = document.querySelector('body');
var hideMenu = document.querySelector('.menu-close');
var links = document.querySelectorAll('.menu-links');

for (var i = 0; i < links.length; i++) {
	links[i].addEventListener('click', closeMenu);
}
function openMenu(){
	body.classList.add('show');
	// hideMenu.classList.add('closingMenu');
}
show.addEventListener('click', openMenu);

//Hide Menu
function closeMenu(){
	body.classList.remove('show');
	// hideMenu.classList.remove('closingMenu');
}
hideMenu.addEventListener('click', closeMenu);

//Request more reasons with promises
function requestFetch(){
fetch('https://three-random-reasons-izwfjpgbqm.now.sh')
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    var reasons = json.reasons;
    var listHTML = '';
		var divAjax = document.querySelector('.divReasons');
    for (var i = 0; i < reasons.length; i++) {
      listHTML += '<div><h2>' + reasons[i].title + '</h2><p>' + reasons [i].description + '</p></div>';
			// divAjax.appendChild(listHTML);
    }
    divAjax.innerHTML = listHTML;
  });
}
var buttonRequest = document.querySelector('.reasonsBtn');
buttonRequest.addEventListener('click', requestFetch);
//
//
// //Request more reasons
// var request = new XMLHttpRequest();
// var buttonRequest = document.querySelector('.reasonsBtn');
// // function moreReasons(){
// 	request.open('GET', 'https://three-random-reasons-izwfjpgbqm.now.sh');
// 	request.addEventListener('load', addReasons);
// 	// request.send();
// // }
// function addReasons(){
// 	var response = request.responseText;
// 		var responseJSON = JSON.parse(response).reasons;
// 		var listReasons= '';
//   for (var i = 0; i < responseJSON; i++) {
//     listReasons += '<div>' + responseJSON[i] + '</div>';
//   }
//   var div = document.querySelector('.divReasons');
//   divReasons.innerHTML = listReasons;
// }
// console.log.addReasons();
// request.send();
//
// buttonRequest.addEventListener('click', newRequest);
// function newRequest(){
// 	request = new XMLHttpRequest();
// 	// moreReasons();
// }
// // moreReasons();
