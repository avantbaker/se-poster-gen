<?php

$html = "
<style>
	body {
		background-image: url(../assets/img/soccer-template-one.jpg);
		height: 100%;
		width: 100%;
		background-position: cover;
		background-repeat: no-repeat;
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
  	}
	
	div.tournament-name {
      bottom: 62%;
      font-weight: 700;
      font-size: 3.25em; 
      color: white;
 	}

    div.date-and-location {
      top: 40%;
      color: #fbb03b;
      font-weight: 700;
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
    div.tournament-contact .contact-information {
        color: #fbb03b;
        font-size: 1em; 
    }

</style>
<body style='background-image: url(../assets/img/soccer-template-one.jpg);
		height: 100%;
		width: 100%;
		background-repeat: no-repeat;
		background-image-resize: 6;'>
	<div class='gen-content-right'>
		<div class='poster-canvas template-one'>
			<div class='aspect-wrapper'>
				<div class='template-wrapper'>
					<div class='template-element host-name'><span></span></div>
					<div class='template-element tournament-name'><span></span></div>
					<div class='template-element date-and-location'>
						<span class='tournament-city'></span>, <span class='tournament-state'></span>
						<br>
						<span class='start-date'></span> thru <span class='end-date'></span>
					</div>
					<div class='template-element tournament-details'>
						<div class='tournament-description'></div>
						<span class='tournament-teams'>Number of teams: <span class='teams-number'></span> | </span>
						<span class='tournament-minimum-games'>Game minimum: <span class='games-number'></span></span>
						<br />
						<span class='tournament-deadline'>Register by: <span class='register-date'>{}</span> | </span>
						<span class='tournament-fee'>Entry Fee: <span class='fee'>{}</span></span>
					</div>
					<div class='template-element tournament-contact'>
						<span class='tournament-website'>{</span>
						<br />
						<span class='contact-information'>Contact: 
							<span class='director-name'><span class='director-first'>{Name}</span> <span class='director-last'>{</span> |</span>
							<span class='director-email'><span class='email'>{</span> | </span>
							<span class='director-phone'></span>
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

function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

$rando = generateRandomString();
$mpdf=new mPDF();
$mpdf->SetDisplayMode('fullpage');
$mpdf->WriteHTML($html);
$mpdf->Output( SPORTNGIN . 'sportNgintest-'. $rando .'.pdf','F');

exit;
//==============================================================
//==============================================================
//==============================================================

?>