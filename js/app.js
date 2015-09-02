var today, hours, minutes, seconds, red, green, blue , hex;
var navSlide = false;


$(document).ready(function() {
	
	time();
	
	$(".project").mouseenter(function() {
		$(this).children(".p-desc").fadeIn();
	});
	
	$(".project").mouseleave(function() {
		$(this).children(".p-desc").fadeOut();
	});
	
	$("#navicon").click(function() {
		$(this).toggleClass("navicon");
		$(this).toggleClass("navi-click");
		
		showNavSlide();
	});
	
	function time() {
		today = new Date();
		hours = today.getHours();
		minutes = today.getMinutes();
		seconds = today.getSeconds();
	
		hours = formatTime(hours);
		minutes = formatTime(minutes);
		seconds = formatTime(seconds);
		hex = color(hours, minutes, seconds);
		$(".main").css("background-color", "#" + hex);
	
		setTimeout(function(){time()}, 500);
		}

		function formatTime(x) {
			if (x < 10) {
			x = "0" + x;
		}
		return x;
	}

	function color(hours, minutes, seconds) {
		red = Math.round(255 * (hours / 23)).toString(16);
		green = Math.round(255 * (minutes / 59)).toString(16);
		blue = Math.round(255 * (seconds / 59)).toString(16);
		return (red + green + blue).toUpperCase();
	}
	
	
	$("#homeLink").click(function() {
		$("body").animate({scrollTop:0}, 1000);	
		removeNavClick();
		showNavSlide();	
	});
	
	$("#aboutLink").click(function() {
		$('html, body').animate({
		scrollTop: $(".main").offset().top}, 1000);	
		removeNavClick();
		showNavSlide();	
	});
	
	$("#projectsLink").click(function() {
		$('html, body').animate({
		scrollTop: $(".projects").offset().top}, 1000);	
		removeNavClick();
		showNavSlide();	
	});
	
	$("#contactLink").click(function() {
		$('html, body').animate({
		scrollTop: $(".contact").offset().top}, 1000);	
		removeNavClick();
		showNavSlide();	
	});
	
	function showNavSlide() {
		if(!navSlide) {
			$(".side-nav").addClass("slideIn").show();
			return navSlide = true;
		} else {
			$(".side-nav").removeClass("slideIn");
			$(".side-nav").addClass("slideOut");
			setTimeout(function() {
				$(".side-nav").removeClass("slideOut");
				$(".side-nav").hide();
			},2000);
			return navSlide = false;
		}
	}
	
	function removeNavClick() {
		$("#navicon").addClass("navicon");
		$("#navicon").removeClass("navi-click");
	}
});

