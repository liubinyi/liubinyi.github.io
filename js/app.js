angular.module('Mywebsite', ['ngRoute','ngAnimate'])
	.config(breakroomRouter);
function breakroomRouter($routeProvider) {
	$routeProvider
        .when('/', {
            templateUrl: 'partials/home.html'
        })
        .when('/about', {
          templateUrl: 'partials/about.html'
        })
        .when('/services', {
          templateUrl: 'partials/services.html'
        })
        .when('/portfolio', {
          templateUrl: 'partials/portfolio.html'
        })
        .when('/blog', {
          templateUrl: 'partials/blog.html'
        })
        .when('/contact', {
          templateUrl: 'partials/contact.html'
        })
}
function navController($scope, $location) {
	$scope.isActive = function (viewLocation) {
		return viewLocation === $location.path();
	};
}

$(document).ready(function() {
	// navigation click actions	
	$('.scroll-link').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});
	// scroll to top action
	$('.scroll-top').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:0}, 'slow'); 		
	});
	// mobile nav toggle
	$('#nav-toggle').on('click', function (event) {
		event.preventDefault();
		$('#main-nav').toggleClass("open");
	});
});
// scroll function
function scrollToID(id, speed){
	var offSet =0;
	var targetOffset = $(id).offset().top - offSet;
	var mainNav = $('#main-nav');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if (mainNav.hasClass("open")) {
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}

function scrollToElement( target ) {
    var topoffset = 50;
    var speed = 800;
    var destination = jQuery( target ).offset().top - topoffset;
    jQuery( 'html:not(:animated),body:not(:animated)' ).animate( { scrollTop: destination}, speed, function() {
        window.location.hash = target;
    });
    return false;
}


