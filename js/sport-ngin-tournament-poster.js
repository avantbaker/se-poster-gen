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
		$("body").addClass("mobile");
	}
	else {
		$("body").addClass("desktop");
	}

  	// Replace img SVG with PNG on unsupported browsers
  	if(!Modernizr.svg) {
	    $('img[src*="svg"]').attr('src', function() {
	      return $(this).attr('src').replace('.svg', '.png');
	    });
  	}
	
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
		}, 50);
	});
	
	// Add spacer height for fixed footer
	var footerHeight = $("footer").outerHeight();
	$( ".page-wrapper" ).css('margin-bottom', footerHeight + "px");
	
	$(window).resize(function(){
    	var footerHeight = $("footer").outerHeight();
		$( ".page-wrapper" ).css('margin-bottom', footerHeight + "px");
	});
	
	// Slide in toggle nav on scroll (mobile-only)
	$(window).scroll(function () {
		if ($(this).scrollTop() > 250) {
			$( ".poster-preview-toggle" ).addClass("viewable");
		} else {
			$( ".poster-preview-toggle" ).removeClass("viewable");
		}
	});
	
	// AVANT! -- This one needs to be in angular
	// Append Poster to pocket on mobile
	var windowWidth = $(window).width();
	if(windowWidth < 900){
		setTimeout(function(){
			$( ".poster-canvas" ).appendTo(".approval-inner");
		}, 3600);
	}
	
	$(window).resize(function(){
    	var windowWidth = $(window).width();
		if(windowWidth < 900){
			$( ".poster-canvas" ).appendTo(".approval-inner");
		}
	});
	
	
	// AVANT! -- This one needs to be in angular
	// Approval State
	var windowWidth = $(window).width();
	if(windowWidth > 900){
		$( '#approval-trigger' ).on('click', function(e) {
		    e.preventDefault();
		    var offsetY = window.pageYOffset
		    var posterWidth = $( '.poster-canvas' ).outerWidth();
			$( "body" ).css({'top': -offsetY + 'px'});
		    $( "body, html" ).addClass("no-scroll");
		    $( ".poster-canvas").css('width', posterWidth + "px");
		    setTimeout(function(){
			   $( "body" ).addClass("approval-state"); 
		    }, 100);
		    setTimeout(function(){
			   var posterHeight = $( '.poster-canvas' ).outerHeight();
			   $( ".approval-inner").css('min-height', posterHeight + "px");
			}, 400);
		});
	} else {
		$( '#approval-trigger' ).on('click', function(e) {
		    e.preventDefault();
		    var offsetY = window.pageYOffset
		    $( ".poster-preview-toggle" ).addClass("stuck");
		    $( "body" ).css({'top': -offsetY + 'px'});
		    $( "body, html" ).addClass("no-scroll");
		    setTimeout(function(){
			   $( "body" ).addClass("approval-state"); 
		    }, 100);
		});
	}
	
	var windowWidth = $(window).width();
	if(windowWidth > 900){
		$( '#approval-close' ).on('click', function(e) {
		    e.preventDefault();
		    var x = $('body').css('top');
		    var y = x.replace(/-/gi, '');
		    var pagePos = y.replace(/px/gi, '');
		    $( "body, html" ).removeClass("no-scroll");
		    $( "body" ).removeClass("approval-state");
		    $( ".poster-canvas").css("width", ""); 
		    $(window).scrollTop(pagePos);
		});
	} else {
		$( '#approval-close' ).on('click', function(e) {
		    e.preventDefault();
		    var x = $('body').css('top');
		    var y = x.replace(/-/gi, '');
		    var pagePos = y.replace(/px/gi, '');
		    $( "body, html" ).removeClass("no-scroll");
		    $(window).scrollTop(pagePos);
		    $( "body" ).removeClass("approval-state");
		     setTimeout(function(){
			   $( ".poster-preview-toggle" ).removeClass("stuck");
		    }, 100);
		});	
	}
	
	// Preview State
	$( '#preview-trigger' ).on('click', function(e) {
	    e.preventDefault();
	    var offsetY = window.pageYOffset
	    $( ".poster-preview-toggle" ).addClass("stuck");
	    $( "body" ).css({'top': -offsetY + 'px'});
	    $( "body, html" ).addClass("no-scroll");
	    setTimeout(function(){
		   $( "body" ).addClass("preview-state"); 
	    }, 100);
	});
	
	$( '#builder-trigger' ).on('click', function(e) {
	    e.preventDefault();
	    var x = $('body').css('top');
	    var y = x.replace(/-/gi, '');
	    var pagePos = y.replace(/px/gi, '');
	    $( "body, html" ).removeClass("no-scroll");
	    $(window).scrollTop(pagePos);
	    $( "body" ).removeClass("preview-state");
	     setTimeout(function(){
		   $( ".poster-preview-toggle" ).removeClass("stuck");
	    }, 100);
	});
  
});