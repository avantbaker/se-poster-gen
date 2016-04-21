<!DOCTYPE html>
<html lang="en-us" ng-app="sportNgin">
	
	<head>
		<meta charset="UTF-8">
	
		<title>Sport Ngin: Tournament Poster Generator - Letter Size Poster</title>
		
		<!--Webfonts -->
		<link rel="stylesheet" type="text/css" href="//cloud.typography.com/737218/772222/css/fonts.css" />
		<link href='https://fonts.googleapis.com/css?family=Titillium+Web:400,600|Oswald:700' rel='stylesheet' type='text/css'>
		
		<!--Stylesheets -->
		<link rel="stylesheet" type="text/css" href="../css/sport-ngin-tournament-poster.css" />
		<link rel="stylesheet" type="text/css" href="../css/sport-ngin-tournament-poster_baseball-poster.css" />
	        
		<!--Scripts -->
		<script type="text/javascript" src="../js/jquery-1.11.0.min.js"></script>
		<script type="text/javascript" src="../js/modernizr.js"></script>

	</head>
	
	<body class="static">


		<div class="poster-canvas letter-lock template-one">
			<div class="aspect-wrapper">
				<div class="template-wrapper">
					<div class="template-element host-name"><span>Host Organization</span></div>
					<div class="template-element tournament-name"><span>Tournament Name</span></div>
					<div class="template-element date-and-location">
						<span class="tournament-city">City</span>, <span class="tournament-state">State</span>
						<br>
						<span class="start-date">mm/dd/yyyy</span> thru <span class="end-date">mm/dd/yyyy</span>
					</div>
					<div class="template-element tournament-details">
						<span class="tournament-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat ligula nisi, blandit iaculis enim mattis in. Nunc commodo ultrices cursus. Fusce turpis orci, pellentesque vitae tempus ac, pharetra ut dui.</span>
						<span class="tournament-teams">Number of teams: <span class="teams-number">XXX</span> | </span>
						<span class="tournament-minimum-games">Game minimum: <span class="games-number">X</span></span>
						<br />
						<span class="tournament-deadline">Register by: <span class="register-date">MM/dd/yyyy</span> | </span>
						<span class="tournament-fee">Entry Fee: $<span class="fee">50</span></span>
					</div>
					<div class="template-element tournament-contact">
						<span class="tournament-website">Yoururl.com</span>
						<br />
						<span class="contact-information">Contact:
							<span class="director-name"><span class="director-first">Host</span> <span class="director-last">Name</span> |</span>
							<span class="director-email"><span class="email">email@mail.com</span> | </span>
							<span class="director-phone">111-222-3333</span>
						</span>
					</div>
				</div>		
			</div>
		</div>
		
		<script src="../js/sport-ngin-tournament-poster.js" type="text/javascript"></script>
		
	</body>
	
</html>
