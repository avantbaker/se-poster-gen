<?php
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
echo '<pre>';
print_r($request);
echo '</pre>';