$(function() {

	$('input,textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		$(this).attr('placeholder','');
	});

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".hidden-mnu").slideToggle();
		return false;
	});
	
	$('input,textarea').blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
	});

	$(".slider").owlCarousel({
		items: 1,
		nav: false,
		loop: true,
		// autoplay: true
	});

	$(".slider-feed").owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		dots: false,
		navText: ["<i class='fas fa-2x fa-arrow-circle-left'></i>","<i class='fas fa-2x fa-arrow-circle-right'></i>"],
		autoplay: true
	});

	$(".slider-2").owlCarousel({
		items: 2,
		nav: true,
		loop: true,
		dots: false,
		navText: ["<i class='fas fa-2x fa-arrow-circle-left'></i>","<i class='fas fa-2x fa-arrow-circle-right'></i>"],
		// autoplay: true,
		responsive:{
				0:{
						items:1,
				},
				520:{
						items:1,
				},
				560:{
						items:1,
				},
				768:{
						items:2,
				},
				992:{
						items:2,
				},
				1200:{
						items:2,
				}
		}
	});

	$(".slider-news").owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		dots: false,
		navText: ["<i class='fas fa-2x fa-arrow-circle-left'></i>","<i class='fas fa-2x fa-arrow-circle-right'></i>"],
		// autoplay: true
	});

});
