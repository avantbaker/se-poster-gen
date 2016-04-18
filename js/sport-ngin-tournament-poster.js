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
	// $('a[href^="#"]').bind('click.smoothscroll',function (e) {
	//     e.preventDefault();
	//     var target = this.hash,
	//     $target = $(target);
	//     $('html, body').stop().animate({
	//           'scrollTop': $target.offset().top
	//       }, 600, 'swing', function () {
	//           window.location.hash = target;
	//     });
	// });
	
	//Match Hero height to header
	var headerHeight = $("header").outerHeight();
	$( ".poster-builder-hero").height(headerHeight + "px");
	
	// Parallax effect on hero
	$(window).scroll(function() {
      var s = $(window).scrollTop();
      $( ".poster-builder-hero" ).css("-webkit-transform", "translateY(" + -(s*.25) + "px)");
      $( ".poster-builder-hero" ).css("transform", "translateY(" + -(s*.25) + "px)");
    })
    
    // Adjust font-size in poster based on size in container 
    setTimeout(function() {
	    var posterWidth = $( ".poster-canvas" ).width();
		var fontPercent = (posterWidth / 612) * 100
    	$( ".poster-canvas" ).css('font-size', fontPercent + "%");
	}, 200);
	
	$(window).resize(function(){
		setTimeout(function() {
	    	var posterWidth = $( ".poster-canvas" ).width();
			var fontPercent = (posterWidth / 612) * 100
	    	$( ".poster-canvas" ).css('font-size', fontPercent + "%");
		}, 200);
	});
	
	// Add spacer height for fixed footer
	var footerHeight = $("footer").outerHeight();
	$( ".page-wrapper" ).css('margin-bottom', footerHeight + "px");
	
	$(window).resize(function(){
    	var footerHeight = $("footer").outerHeight();
		$( ".page-wrapper" ).css('margin-bottom', footerHeight + "px");
	});
	
	// AVANT REWORK IN ANGULAR
	// Toggle class for template selection
	$("#template-two-trigger").click(function () {
    	$(this).addClass("selected");
    	$("#template-one").removeClass("selected");
    });
    
    $("#template-one-trigger").click(function () {
    	$(this).addClass("selected");
    	$("#template-one").removeClass("selected");
    });
  
});