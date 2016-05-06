<?php

//==============================================================
//=========         SPORT NGIN TEMPLATE ONE           ==========
//==============================================================

$request = json_decode( file_get_contents("php://input"), false );

require_once('date-conversion.php');

$excSite 				= $request->excludeWebsite;
$excPhone 				= $request->excludePhone;
$excLast 				= $request->excludeLast;
$excGames 				= $request->excludeGames;
$excFirst 				= $request->excludeFirst;
$excFee 				= $request->excludeFee;
$excEmail 				= $request->excludeEmail;

$hostOrg 				= strtoupper($request->hostOrg);
$tournamentName 		= strtoupper($request->tournamentName);	
$city 					= strtoupper($request->city);	
$state 					= strtoupper($request->state);	
$startDate 				= formatDate($request->startDate); 	
$endDate 				= formatDate($request->endDate);
$description 			= $request->description;	
$teams 					= strtoupper($request->numOfTeams);	
$gameMin 				= $request->gameMin;	
$register 				= formatDate($request->registerBy);	
$entry 					= $request->entryFee;	
$website 				= strtoupper($request->twebsiteName);	
$dirFName 				= strtoupper($request->dirFirstName);	
$dirLName 				= strtoupper($request->dirLastName);	
$email 					= strtoupper($request->tEmail);	
$phone 					= $request->tphone;	
$cookie 				= $request->userID;

$html = "
<style>
	body {
		background-image: url(../assets/img/baseball-template-one_SCREEN.jpg);
		height: 100%;
		width: 100%;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		background-image-resize: 6;
	}

	.template-element {
		text-align: center;
	}

	div.host-name {
	  position: fixed;
      color: #fbb03b;
      font-weight: 700;
      font-size: 1.5em;
      padding-bottom: 200px;
      font-family: titillium;
  	}
	
	div.tournament-name {
      bottom: 62%;
      font-weight: 700;
      font-size: 3.25em; 
      color: white;
      font-family: oswald;
 	}

    div.date-and-location {
      top: 40%;
      color: #fbb03b;
      font-family: titillium;
      font-size: 1.5em; 
  	}
    div.tournament-details {
      position: fixed;
      font-size: 1em;
      line-height: 1.5em; 
      padding-top: 100px;
  	}
    div.tournament-description {
	    position: fixed;
	    padding-top: 40px;
	    color: white;
    }
    span.tournament-teams,
    span.tournament-minimum-games,
    span.tournament-details .tournament-deadline,
    span.tournament-details .tournament-fee {
        color: #fbb03b;
        font-family: oswald; 
    }
    span.tournament-contact {
      bottom: 10%;
      font-weight: 700; 
 	}
    div.tournament-contact .tournament-website {
    width: 100%;
    padding-bottom: 2%;
    font-size: 1.75em; 
    color: white;
   	}

   	div.tournament-website {
   		font-family: oswald;
   	}
    div.tournament-contact .contact-information {
        color: #fbb03b;
        font-size: 1em; 
    }

    span.tournament-deadline,
    span.tournament-fee {
    	color: white;
    }

</style>
<body style='background-image: url(../assets/img/baseball-template-one_SCREEN.jpg);
		height: 100%;
		width: 100%;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		background-image-resize: 6;'>
	<div class='gen-content-right'>
		<div class='poster-canvas template-one'>
			<div class='aspect-wrapper'>
				<div class='template-wrapper'>
					<div class='template-element host-name'><span>{$hostOrg}</span></div>
					<div class='template-element tournament-name'><span>{$tournamentName}</span></div>
					<div class='template-element date-and-location'>
						<span class='tournament-city'>{$city}</span>, <span class='tournament-state'>{$state}</span>
						<br>
						<span class='start-date'>{$startDate}</span> thru <span class='end-date'>{$endDate}</span>
					</div>
					<div class='template-element tournament-details'>
						<div class='tournament-description'>{$description}</div>
						<span class='tournament-teams'>Number of teams: <span class='teams-number'>{$teams}</span> | </span>
						<span class='tournament-minimum-games'>Game minimum: <span class='games-number'>{$gameMin}</span></span>
						<br />
						<span class='tournament-deadline'>Register by: <span class='register-date'>{$register}</span> | </span>
						<span class='tournament-fee'>Entry Fee: <span class='fee'>$ {$entry}</span></span>
					</div>
					<div class='template-element tournament-contact'>";
					
if ($excSite === false) :
	$html .= "<span class='tournament-website'>{$website}</span>";
endif;

						$html .= "<br />
						<span class='contact-information'>Contact: 
							<span class='director-name'><span class='director-first'>{$dirFName}</span> <span class='director-last'>{$dirLName}</span> |</span>
							<span class='director-email'><span class='email'>{$email}</span> | </span>
							<span class='director-phone'>{$phone}</span>
						</span>
					</div>
				</div>		
			</div>
		</div>
	</div>
</body>
";


//==============================================================
//==============================================================
//==============================================================

include("../mpdf/mpdf.php");

$mpdf= new mPDF();
$mpdf->SetDisplayMode('fullpage');
$mpdf->WriteHTML($html);
$mpdf->Output( SPORTNGIN . $cookie .'-sportNgintest.pdf','F');

exit;
//==============================================================
//==============================================================
//==============================================================

?>
