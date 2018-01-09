'use strict';
//Display menu
var show = document.querySelector('.menu-trigger');
var body = document.querySelector('body');
var hideMenu = document.querySelector('.menu-close');

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
