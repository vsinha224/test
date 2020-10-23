jQuery(document).ready(function($) {
	jQuery('.stellarnav').stellarNav({
		theme: 'light'
	});
});	


$(function() {
   $('.expect-widget').matchHeight();
});

var j = jQuery.noConflict();
j('.jarallax').jarallax({
	speed: 0.5,
	imgWidth: 1366,
	imgHeight: 768
})

var j = jQuery.noConflict();
j(window).on("scroll", function() {
    if(j(window).scrollTop() > 50) {
        j(".nav-new").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       j(".nav-new").removeClass("active");
    }
});

var j = jQuery.noConflict();
j(window).on("scroll", function() {
    if(j(window).scrollTop() > 50) {
        j("#main-nav").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       j("#main-nav").removeClass("active");
    }
});

wow = new WOW(
  {
	animateClass: 'animated',
	offset:       100,
	callback:     function(box) {
	  console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
	}
  }
);
wow.init();