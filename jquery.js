$(document).ready(function() {
    
	
	    $('.js-about-me-section').waypoint(function(direction){
        if (direction == "down") {
            $('.logo').addClass('sticky');
        } else {
            $('.logo').removeClass('sticky');
        }

    }, {
      offset: '60px;'
    });

	
/* Scroll on buttons */
    $('.js-about').click(function () {
    $('html, body').animate({scrollTop: $('.js-about-me-section').offset().top}, 500); 
    });
    
    $('.js-home').click(function () {
    $('html, body').animate({scrollTop: $('.js-home-section').offset().top}, 500); 
    });	
	
	$('.js-resume').click(function () {
    $('html, body').animate({scrollTop: $('.js-resume-section').offset().top}, 500); 
    });	
	
	$('.js-contact').click(function () {
    $('html, body').animate({scrollTop: $('.js-contact-section').offset().top}, 500); 
    });	
	
	$('.js-skills').click(function () {
    $('html, body').animate({scrollTop: $('.js-skills-section').offset().top}, 500); 
    });	
	
    $('.js-about-me-section').waypoint(function(direction){
        if (direction == "down") {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
		if (direction == "down") {
            $('.js-about').addClass('active');
			$('.js-home').removeClass('active');
			$('.js-contact').removeClass('active');
			$('.js-skills').removeClass('active');
			$('.js-resume').removeClass('active');
			
        } else if (direction == "up"){
            $('.js-home').addClass('active');
			$('.js-about').removeClass('active');
			$('.js-contact').removeClass('active');
			$('.js-skills').removeClass('active');
			$('.js-resume').removeClass('active');
        }
    }, {
      offset: '60px;'
    });
	
	  	
    $('.js-skills-section').waypoint(function(direction){
        if (direction == "down") {
            $('.navbar').addClass('sticky');
            $('.js-skills').addClass('active');
			$('.js-home').removeClass('active');
			$('.js-contact').removeClass('active');
			$('.js-about').removeClass('active');
			$('.js-resume').removeClass('active');
			
        } else if (direction == "up"){
            $('.js-about').addClass('active');
			$('.js-home').removeClass('active');
			$('.js-contact').removeClass('active');
			$('.js-skills').removeClass('active');
			$('.js-resume').removeClass('active');
			
        }
    }, {
      offset: '100px;'
    });
	
	
	
	$('.js-resume-section').waypoint(function(direction){
        if (direction == "down") {
            $('.navbar').addClass('sticky');
            $('.js-resume').addClass('active');
			$('.js-home').removeClass('active');
			$('.js-contact').removeClass('active');
			$('.js-about').removeClass('active');
			$('.js-skills').removeClass('active');
			
        } else if (direction == "up"){
            $('.js-skills').addClass('active');
			$('.js-home').removeClass('active');
			$('.js-contact').removeClass('active');
			$('.js-about').removeClass('active');
			$('.js-resume').removeClass('active');
			
        }
    }, {
      offset: '100px;'
    });
	
	
	
	$('.js-contact-section').waypoint(function(direction){
        if (direction == "down") {
            $('.navbar').addClass('sticky');
            $('.js-contact').addClass('active');
			$('.js-home').removeClass('active');
			$('.js-resume').removeClass('active');
			$('.js-about').removeClass('active');
			$('.js-skills').removeClass('active');
			
        } else if (direction == "up"){
            $('.js-resume').addClass('active');
			$('.js-home').removeClass('active');
			$('.js-about').removeClass('active');
			$('.js-skills').removeClass('active');
			$('.js-contact').removeClass('active');
			
        }
    }, {
      offset: '400px;'
    });
	
	
	
	    /* Animations on scroll */
    $('.js-wp-1').waypoint(function(direction) {
        $('.js-wp-1').addClass('animate__animated animate__tada');
    }, {
        offset: '80%'
    });
    
    $('.js-wp-2').waypoint(function(direction) {
        $('.js-wp-2').addClass('animate__animated animate__heartBeat');
    }, {
        offset: '80%'
    });
    
    $('.js-wp-3').waypoint(function(direction) {
        $('.js-wp-3').addClass('animate__animated animate__jello');
    }, {
        offset: '80%'
    });
    
    $('.js-wp-4').waypoint(function(direction) {
        $('.js-wp-4').addClass('animate__animated animate__bounceIn');
    }, {
        offset: '80%'
    });
	
	    $('.js-wp-5').waypoint(function(direction) {
        $('.js-wp-5').addClass('animate__animated animate__slideInLeft');
    }, {
        offset: '50%'
    });
	
	    $('.js-wp-6').waypoint(function(direction) {
        $('.js-wp-6').addClass('animate__animated animate__slideInLeft');
    }, {
        offset: '80%'
    });
    
    $('.js-wp-7').waypoint(function(direction) {
        $('.js-wp-7').addClass('animate__animated animate__slideInLeft');
    }, {
        offset: '80%'
    });
    
    $('.js-wp-8').waypoint(function(direction) {
        $('.js-wp-8').addClass('animate__animated animate__fadeInUp');
    }, {
        offset: '80%'
    });
    
    $('.js-wp-9').waypoint(function(direction) {
        $('.js-wp-9').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '80%'
    });
	
	    $('.js-wp-10').waypoint(function(direction) {
        $('.js-wp-10').addClass('animate__animated animate__shakeY');
    }, {
        offset: '80%'
    });
	
	$('.js-wp-11').waypoint(function(direction) {
        $('.js-wp-11').addClass('animate__animated animate__zoomIn');
    }, {
        offset: '80%'
    });
    
    $('.js-wp-12').waypoint(function(direction) {
        $('.js-wp-12').addClass('animate__animated animate__flash');
    }, {
        offset: '80%'
    });
    
    $('.js-wp-13').waypoint(function(direction) {
        $('.js-wp-13').addClass('animate__animated animate__fadeInDown');
    }, {
        offset: '80%'
    });
    
    $('.js-wp-14').waypoint(function(direction) {
        $('.js-wp-14').addClass('animate__animated animate__fadeInDown');
    }, {
        offset: '80%'
    });
	
	    $('.js-wp-15').waypoint(function(direction) {
        $('.js-wp-15').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });
	
});