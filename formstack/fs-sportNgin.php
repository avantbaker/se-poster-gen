<?php 

require_once 'formstack-api.php';
require_once 'base.php';
$formStack = new FormstackApi('f1f1317437cd097662d1f695fbe80751');
$formId = '2370450';

$request = json_decode( file_get_contents("php://input"), false );

$first_name = $request->first_name;
$last_name = $request->last_name;
$personal_phone = $request->personal_phone;
$personal_email = $request->personal_email;
$host_organization = $request->host_organization;
$organization_type = $request->organization_type;
$organization_role = $request->organization_role;
$tournament_name = $request->tournament_name;
$tournament_description = $request->tournament_description;
$register_date = $request->register_date;
$city = $request->city;
$state = $request->state;
$start_time = $request->start_time;
$end_time = $request->end_time;
$number_of_teams = $request->number_of_teams;
$game_minimum = $request->game_minimum;
$entry_fee = $request->entry_fee;
$director_first_name = $request->director_first_name;
$director_last_name = $request->director_last_name;
$tournament_email = $request->tournament_email;
$tournament_phone_number = $request->tournament_phone_number;
$tournament_website_name = $request->tournament_website_name;

$field_ids = array(
       "42627903",
       "42627916",
       "42628641",
       "42628637",
       "42628643",
       "42628648",
       "42628653",
       "42628423",
       "42628506",
       "42628549",
       "42628431",
       "42628446",
       "42628458",
       "42628482",
       "42628452",
       "42628524",
       "42628539",
       "42632890",
       "42628581",
       "42628626",
       "42628562",
       "42628633"
);

$field_values = array(
	$first_name,
	$last_name,
	$personal_phone,
	$personal_email,
	$host_organization,
	$organization_type,
	$organization_role,
	$tournament_name,
	$tournament_description,
	$register_date,
	$city,
	$state,
	$start_time,
	$end_time,
	$number_of_teams,
	$game_minimum,
	$entry_fee,
	$director_first_name,
	$director_last_name,
	$tournament_email,
	$tournament_phone_number,
	$tournament_website_name
);

$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$statement = $pdo->prepare("INSERT INTO poster_generator_form_submit(first_name, last_name, personal_phone, personal_email, host_organization, organization_type, organization_role, tournament_name, tournament_description, register_date, city, state, start_time, end_time, number_of_teams, game_minimum, entry_fee, director_first_name, director_last_name, tournament_email, tournament_phone_number, tournament_website_name) VALUES(:fn, :ln, :pp, :pe, :ho, :ot, :orgr, :tn, :td, :rd, :ct, :st, :strt, :endd, :nt, :gm, :ef, :dfn, :dln, :te, :tpn, :twn)");
$statement->execute(array(
	'fn' => $first_name, 
	'ln' => $last_name, 
	'pp' => $personal_phone, 
	'pe' => $personal_email, 
	'ho' => $host_organization, 
	'ot' => $organization_type, 
	'orgr' => $organization_role,
	'tn' => $tournament_name,
	'td' => $tournament_description, 
	'rd' => $register_date, 
	'ct' => $city, 
	'st' => $state, 
	'strt' => $start_time, 
	'endd' => $end_time, 
	'nt' => $number_of_teams, 
	'gm' => $game_minimum, 
	'ef' => $entry_fee, 
	'dfn' => $director_first_name, 
	'dln' => $director_last_name, 
	'te' => $tournament_email, 
	'tpn' => $tournament_phone_number, 
	'twn' => $tournament_website_name
));

$formStack->submitForm($formId, $field_ids, $field_values);