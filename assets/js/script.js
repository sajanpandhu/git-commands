// JavaScript Document
$(document).ready(function () {
		function resize(){
			$("#banner").css("height",$(window).height())
			var navbarHeight = $('.main-header').height();
			var mainHeight = $('.bottom-section').height() + 2;
			$("#banner").css("height",$(window).height() - navbarHeight - mainHeight);
			//$("#banner").css("height",$(window).height() - navbarHeight);
			$(".main-header").css("height",navbarHeight);
		};
		resize();
		
	
	resize();
	window.onresize = function() {
	    resize();
	};

	$('.comparision').owlCarousel({
	    center: true,
	    items:2,
	    loop:true,
	    margin:10,
	    dots:false,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:1,
	            nav:false
	        },
	        800:{
	            items:2,
	            nav:false
	        },
	        1200:{
	            items:4,
	            nav:true,
	        },
	        1600:{
	            items:6,
	            nav:true,
	        }
	    }
	});
});