<!DOCTYPE html>
<html lang="en-us" ng-app="sportNgin">
	
	<head>
		<meta charset="UTF-8">
	
		<title>Sport Ngin: Tournament Poster Generator</title>
		
		<!-- Meta Layout data -->
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="initial-scale=1,minimum-scale=1,width=device-width">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		
		<!-- Meta SEO data -->
		<meta name="title" content="Sport Ngin: Baseball Tournament Poster Generator" />
		<meta name="description" content="Promote your tourney with style, in minutes FOR FREE." />
		<meta name="keywords" content="tournament poster, poster generator, youth sports, amateur sports" />
		<meta name="classification" content="Youth and amateur sports tournament experts" />
		<meta name="author" content="Sport Ngin" />
		
		<!--Favicon -->
		<link href="../assets/img/favicon.png" type="image/png" rel="icon">
		
		<!--Webfonts -->
		<link rel="stylesheet" type="text/css" href="//cloud.typography.com/737218/772222/css/fonts.css" />
		
		<!--Stylesheets -->
		<link rel="stylesheet" type="text/css" href="../css/sport-ngin-tournament-poster.css" />
		<link rel="stylesheet" type="text/css" href="../css/sport-ngin-tournament-poster_baseball-poster.css" />
		
		<!--[if lt IE 9]>
	      <script type="text/javascript" src="../js/html5shiv.js"></script>
	      <script type="text/javascript" src="../js/selectivizr.js"></script>
	      <script type="text/javascript" src="../js/respond.js"></script>
		<![endif]-->
	        
		<!--Scripts -->
		<script type="text/javascript" src="../js/jquery-1.11.0.min.js"></script>
		<script type="text/javascript" src="../js/modernizr.js"></script>
		<script type="text/javascript" src="../js/sport-ngin-tournament-poster-preload.js"></script>

	</head>
	
	<body class="static download-page no-scroll">
		
		<!----------- Preloader -->
		<div class="preloader-overlay">
			<div class="preloader-wrapper">
				<div class="preloader-container">
					<span class="preloader-icon"></span>
					<span class="preloader-heading">
						<h3>Generating Posters</h3>
					</span>
				</div>
			</div>
		</div>
		
		<!----------- Poster Intro -->
		<header class="poster-builder-intro">
				
			<div class="container masthead">
				
				<h1 class="masthead-logo">Sport Ngin</h1>
				
				<aside class="sn-share header-share">
					<h5>Share</h5>
					<a class="facebook" href="#" onClick="window.open('https://www.facebook.com/dialog/share?app_id=464791073711834&display=iframe&href=http%3A%2F%2Fvertserver.com%2Fdev%2FsportNgin&redirect_uri=http%3A%2F%2Fvertserver.com%2Fdev%2FsportNgin&picture=<?php echo rawurlencode('http://www.vertserver.com/dev/sportNgin/assets/img/sn-tourney-builder-og-soccer.jpg');?>&name=Sport%20Ngin%20Baseball%20Tournament%20Poster%20Generator&description=<?php echo rawurlencode('Promote your tourney with style, in minutes FOR FREE.'); ?>&caption=Sport%20Ngin%20', 'Share', 'height=450, width=650'); ga('send', 'event', 'button', 'share', 'shareFacebook');">
						<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
							<path class="social-fill" d="M0,0V25H25V0H0ZM15.81,10L15.64,12.2h-2.3V20H10.43V12.2H8.88V10h1.55V8.45a4,4,0,0,1,.5-2.32A2.76,2.76,0,0,1,13.34,5a9.75,9.75,0,0,1,2.78.28l-0.39,2.3a5.24,5.24,0,0,0-1.25-.19,0.94,0.94,0,0,0-1.14.82V10h2.47Z"/>
						</svg>
					</a>
					<a class="twitter" href="https://twitter.com/intent/tweet?text=<?php echo rawurlencode('Promote your tourney with style, in minutes FOR FREE with the Tournament Poster Generator. http://www.vertserver.com/dev/sportNgin'); ?>" target="_blank" onclick="ga('send', 'event', 'button', 'share', 'shareTwitter');">
						<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
							<path class="social-fill" d="M0,0V25H25V0H0ZM18.46,9.44c0,0.13,0,.26,0,0.4A8.75,8.75,0,0,1,5,17.21a6.22,6.22,0,0,0,4.56-1.28A3.08,3.08,0,0,1,6.68,13.8a3.05,3.05,0,0,0,.58.05,3,3,0,0,0,.81-0.11,3.08,3.08,0,0,1-2.47-3v0A3.08,3.08,0,0,0,7,11.08,3.08,3.08,0,0,1,6,7a8.74,8.74,0,0,0,6.34,3.22,3.08,3.08,0,0,1,5.24-2.81,6.15,6.15,0,0,0,2-.75,3.08,3.08,0,0,1-1.35,1.7A6.16,6.16,0,0,0,20,7.85,6.24,6.24,0,0,1,18.46,9.44Z"/>
						</svg>
					</a>
				</aside>
				
			</div>
			
			<div class="container intro-content">
				<h2>Baseball Tournament Poster Generator</h2>
				<p class="intro">Promote your tourney with style, in minutes... <strong>FOR FREE</strong>. Walk through the steps below to customize a downloadable soccer tournament flyer and poster.</p>
			</div>
			
		</header>
		
		<!----------- Poster Hero -->	
		<div class="poster-builder-hero"></div>
		
		<!----------- Poster Builder -->
		<main class="page-wrapper">

			<!----------- Downloads -->	
			<section class="poster-builder-app" ng-controller="downloadCntrl">
							
				<div class="container gen-container">
					
					<div class="download-row header">
						<div class="col two-thirds">
							<h3>Your downloads are ready!</h3>
							<p>Use the buttons below to download or email yourself the flyer, poster and social media image below.</p>
						</div>
						<div class="col one-third button-col bottom">
							<a class="secondary-cta" href="../index.html">Generate another poster</a>
						</div>
					</div>
					
					<div class="download-row action-list">
						<div class="col one-third">
							<h6>8.5" x 11" Printable Flyer</h6>
						</div>
						<div class="col two-thirds button-col">
							<a id="small-poster-download" class="button outline-button spaced download" href="../mpdf/tmp/{{ userId }}-sportNgin8x11.pdf" target="_blank">Download</a>
							<!-- <button id="small-poster-email" class="outline-button spaced email">Email</button> -->
						</div>
					</div>
					
					<div class="download-row action-list">
						<div class="col one-third">
							<h6>11" x 17" Printable Poster</h6>
						</div>
						<div class="col two-thirds button-col">
							<a id="large-poster-download" class="button outline-button spaced download" href="../mpdf/tmp/{{ userId }}-sportNgin11x17.pdf" target="_blank">Download</a>
							<!--  <button id="large-poster-email" class="outline-button spaced email">Email</button> -->
						</div>
					</div>
					
					<div class="download-row action-list">
						<div class="col one-third">
							<h6>Sharable Social Graphic</h6>
						</div>
						<div class="col two-thirds button-col">
							<a id="social-image-download" class="button outline-button spaced download">Download</a>
							<!-- <button id="social-image-email" class="outline-button spaced email">Email</button> -->
							<button id="social-image-share" class="outline-button spaced share">Share</button>
						</div>
					</div>
					
					<div class="download-callout">
						<h4>Additional CTA Section</h4>
						<p>This area is prime real-estate to that can be used to drive users to another sportngin.com property.</p>
						<a class="button" href="http://www.sportngin.com">Call to Action</a>
					</div>
									
				</div>
									
			</section>
				
		</main>
		
		<!----------- Poster CTA -->
		<div class="poster-builder-cta-spacer"></div>
		
		<footer class="poster-builder-cta">
			
			<div class="container">
				
				<h3>Need more help with your tournament?</h3>
				<p>One of our tournament-management experts can help. Schedule some time.</p>
				<a class="button" href="http://www.sportngin.com/get-started/" target="_blank">Schedule Chat</a>
				
				<aside class="sn-share mobile-share">
					<h5>Share this App</h5>
					<a class="facebook" href="#" onClick="window.open('https://www.facebook.com/dialog/share?app_id=464791073711834&display=iframe&href=http%3A%2F%2Fvertserver.com%2Fdev%2FsportNgin&redirect_uri=http%3A%2F%2Fvertserver.com%2Fdev%2FsportNgin&picture=<?php echo rawurlencode('http://www.vertserver.com/dev/sportNgin/assets/img/sn-tourney-builder-og-soccer.jpg');?>&name=Sport%20Ngin%20Baseball%20Tournament%20Poster%20Generator&description=<?php echo rawurlencode('Promote your tourney with style, in minutes FOR FREE.'); ?>&caption=Sport%20Ngin%20', 'Share', 'height=450, width=650'); ga('send', 'event', 'button', 'share', 'shareFacebook');">
						<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
							<path class="social-fill" d="M0,0V25H25V0H0ZM15.81,10L15.64,12.2h-2.3V20H10.43V12.2H8.88V10h1.55V8.45a4,4,0,0,1,.5-2.32A2.76,2.76,0,0,1,13.34,5a9.75,9.75,0,0,1,2.78.28l-0.39,2.3a5.24,5.24,0,0,0-1.25-.19,0.94,0.94,0,0,0-1.14.82V10h2.47Z"/>
						</svg>
					</a>
					<a class="twitter" href="https://twitter.com/intent/tweet?text=<?php echo rawurlencode('Promote your tourney with style, in minutes FOR FREE with the Tournament Poster Generator. http://www.vertserver.com/dev/sportNgin'); ?>" target="_blank" onclick="ga('send', 'event', 'button', 'share', 'shareTwitter');">
						<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
							<path class="social-fill" d="M0,0V25H25V0H0ZM18.46,9.44c0,0.13,0,.26,0,0.4A8.75,8.75,0,0,1,5,17.21a6.22,6.22,0,0,0,4.56-1.28A3.08,3.08,0,0,1,6.68,13.8a3.05,3.05,0,0,0,.58.05,3,3,0,0,0,.81-0.11,3.08,3.08,0,0,1-2.47-3v0A3.08,3.08,0,0,0,7,11.08,3.08,3.08,0,0,1,6,7a8.74,8.74,0,0,0,6.34,3.22,3.08,3.08,0,0,1,5.24-2.81,6.15,6.15,0,0,0,2-.75,3.08,3.08,0,0,1-1.35,1.7A6.16,6.16,0,0,0,20,7.85,6.24,6.24,0,0,1,18.46,9.44Z"/>
						</svg>
					</a>
				</aside>
				
			</div>
			
		</footer>
		
		<!---------- Scripts -->
		<script src="../bower_components/angular/angular.min.js" type="text/javascript"></script>
		<script src="../bower_components/angular-resource/angular-resource.min.js" type="text/javascript"></script>
		<script src="../bower_components/angular-ui-router/release/angular-ui-router.min.js" charset="utf-8"></script>
		<script src="../bower_components/angular-animate/angular-animate.min.js" charset="utf-8"></script>
		<script src="../bower_components/angular-cookies/angular-cookies.min.js"></script>
		<script src="../app-download.js" type="text/javascript"></script>
		<script src="../js/sport-ngin-tournament-poster.js" type="text/javascript"></script>
		
	</body>
</html>