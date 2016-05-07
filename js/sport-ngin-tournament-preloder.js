$( document ).ready(function() {

	setTimeout(function(){ 
		$( ".preloader-overlay").fadeOut("900");
		$( 'body, html').removeClass("no-scroll"); 
	}, 900);

});