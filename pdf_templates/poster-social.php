<?php

//==============================================================
//=========         SPORT NGIN TEMPLATE ONE           ==========
//==============================================================

// $request = json_decode( file_get_contents("php://input"), false );

require_once('date-conversion.php');

// $tournamentName 		= strtoupper($request->tournamentName);		
// $startDate 				= formatDate($request->startDate); 	
// $endDate 				= formatDate($request->endDate);
// $cookie 				= $request->userID;

$tournamentName 		= "TOURNAMENT NAME";		
$startDate 				= "May 30th 2016"; 	
$endDate 				= "June 2nd 2016";
$cookie 				= "12KI8JCK";


$html = "
<html>
<head>
<style>
	
	@page {
		size: 13.6in 13.6in;
		sheet-size: 13.6in 13.6in;
		margin: 0;
		background-image: url('../assets/img/baseball-template-one-SOCIAL.jpg');
		background-repeat: no-repeat;
		background-position: top left;
		background-image-resize: 6;
	}
	
	body {
		margin: 0;
		margin-collapse: collapse;
	}
	
	div.tournament-name {
		position: fixed; 
		width: 70%;
		left: 15%;
		text-align: center;
		bottom: 45%;
		font-family: 'Roboto', sans-serif;
		font-weight: bold;
		font-size: 80px;
		line-height: 1; 
		color: white;
		text-transform: uppercase;
		overflow: hidden;
 	}

    div.tournament-date {
	    position: fixed; 
		width: 70%;
		left: 15%;
		top: 60%;
		text-align: center;
		overflow: hidden;
  	}
  	 
  	div.date-wrapper {
		display: block;
		width: 490px;
		margin: 0 auto;
		padding: 8px 0;
		background: #fff;
		font-family: 'Roboto Condensed', sans-serif;
		font-weight: bold;
		font-size: 36px;
		color: black;
		text-align: center;
		overflow: hidden;
	}
  	
</style>
</head>

<body>
			
	<div class='tournament-name'>
		<span>{$tournamentName}</span>
	</div>

	<div class='tournament-date'>
		<div class='date-wrapper'>
			<span class='start-date'>{$startDate}</span> THRU <span class='end-date'>{$endDate}</span>
		</div>
	</div>
		
			
</body>
</html>
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
