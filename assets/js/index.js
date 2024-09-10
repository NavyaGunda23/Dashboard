"use strict";

var logoHeaderContent = $('.sidebar .logo-header').html();
$('.main-header .logo-header').html(logoHeaderContent);




$(document).ready(function () {


	var scrollbarDashboard = $('.sidebar .scrollbar');
	if (scrollbarDashboard.length > 0) {
		scrollbarDashboard.scrollbar();
	}


	$('#search-nav').on('shown.bs.collapse', function () {
		$('.nav-search .form-control').focus();
	});

	var toggle_sidebar = false,

		toggle_topbar = false,
		minimize_sidebar = false,

		nav_open = 0,
		topbar_open = 0,
		mini_sidebar = 0


	if (!toggle_sidebar) {
		var toggle = $('.sidenav-toggler');

		toggle.on('click', function () {
			if (nav_open == 1) {
				$('html').removeClass('nav_open');
				toggle.removeClass('toggled');
				nav_open = 0;
			} else {
				$('html').addClass('nav_open');
				toggle.addClass('toggled');
				nav_open = 1;
			}
		});
		toggle_sidebar = true;
	}



	if (!toggle_topbar) {
		var topbar = $('.topbar-toggler');

		topbar.on('click', function () {
			if (topbar_open == 1) {
				$('html').removeClass('topbar_open');
				topbar.removeClass('toggled');
				topbar_open = 0;
			} else {
				$('html').addClass('topbar_open');
				topbar.addClass('toggled');
				topbar_open = 1;
			}
		});
		toggle_topbar = true;
	}

	if (!minimize_sidebar) {
		var minibutton = $('.toggle-sidebar');
		if ($('.wrapper').hasClass('sidebar_minimize')) {
			minibutton.addClass('toggled');
			minibutton.html('<img src="assets/img/menu.svg" height="44" />');
			mini_sidebar = 1;
		}

		minibutton.on('click', function () {
			if (mini_sidebar == 1) {
				$('.wrapper').removeClass('sidebar_minimize')
				minibutton.removeClass('toggled');
				minibutton.html('  <img src="assets/img/menu.svg" height="44"  />');
				mini_sidebar = 0;
			} else {
				$('.wrapper').addClass('sidebar_minimize');
				minibutton.addClass('toggled');
				minibutton.html('<img src="assets/img/menu.svg" height="44" />');
				mini_sidebar = 1;
			}
			$(window).resize();
		});
		minimize_sidebar = true;
	}






});


