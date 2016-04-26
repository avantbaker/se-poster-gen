$( document ).ready(function() {
	
	$( ".preloader-overlay" ).addClass("active");
	setTimeout(function(){
		$( ".preloader-overlay" ).fadeOut("800");
		$( "body" ).removeClass("no-scroll");
	}, 4400);

});