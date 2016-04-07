// Spoprt Ngin Front End Scripts :: Vert Digital

$(document).ready(function() {
  
	// Explicitly set class for mobile and desktop browsers
  	var isMobile = {
		Android: function() {
		    return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
		    return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
		    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
		    return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
		    return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
		    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
		};
	if(isMobile.any()) {
		$("html").addClass("mobile");
	}
	else {
		$("html").addClass("desktop");
	}

  	// Replace img SVG with PNG on unsupported browsers
  	if(!Modernizr.svg) {
	    $('img[src*="svg"]').attr('src', function() {
	      return $(this).attr('src').replace('.svg', '.png');
	    });
  	}
  	
  	// Animated section jump
	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
	    e.preventDefault();
	    var target = this.hash,
	    $target = $(target);
	    $('html, body').stop().animate({
	          'scrollTop': $target.offset().top
	      }, 600, 'swing', function () {
	          window.location.hash = target;
	    });
	});
	
	// Add spacer height for fixed footer
	var footerHeight = $("footer").outerHeight();
	$(".poster-builder-cta-spacer").height(footerHeight);
	
	$(window).resize(function(){
    	var footerHeight = $("footer").outerHeight();
		$(".poster-builder-cta-spacer").height(footerHeight);
	});
  
});