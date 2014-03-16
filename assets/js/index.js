/**
 * Main JS file for Casper behaviours
 */


/*globals jQuery, document */
(function ($) {
    "use strict";

    function srcTo (el) {
    	$('html, body').animate({
			scrollTop: el.offset().top
		}, 1000);
    }


    $(document).ready(function(){

        $(".post-content").fitVids();

        $('#header-arrow').click(function () {
            srcTo ($('.post'));
        });

        // vars
        // var count = 0;
		var opacity = 0;
		var direction = "up";
		var goUp = true;
        setInterval(function() {

        	if (opacity <= 0) {
        		goUp = true;
        	}

        	if (opacity >= 1) {
        		goUp = false;
        	}

        	if (goUp) {
        		opacity += 0.1;
        	}
        	else {
        		opacity -= 0.1;
        	}

        	if ($("#header-arrow").is(':hover')) {
        		opacity = 1;
        	}

        	$('#header-arrow').css({
        		opacity: opacity
        	});
        	// console.log(opacity);

        	// if (opacity == ) {

        	// };
        	// if ($("#header-arrow").is(":hover")) {
	        	
	        // 	$("#header-arrow").css({
	        // 		opacity: 1
	        // 	});        		

        	// }
        	// else {
	        // 	count += 0.3;
	        // 	opacity = (1 + ( Math.sin(count)))/2;
	        // 	opacity = Math.round(opacity * 100) / 100;


	        // 	console.log(count+"    "+opacity)
	        // 	$("#header-arrow").css({
	        // 		opacity: opacity
	        // 	});        		
        	// };

        }, 100);



    });

}(jQuery));

