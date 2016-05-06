<?php 
/**
 * Rearrange the order of the values in the Array to 
 * a MM/DD/YY format
 * @param  array $array the array containing all the date information
 * @param  int $key     index of the value you want to rearrange
 * @return array        returns the reformatted array
 */
function rearrange_array($array, $key) {
    while ($key > 0) {
        $temp = array_shift($array);
        $array[] = $temp;
        $key--;
    }
    return $array;
}
/**
 * Pluck Zeros Checks to zero if there are any zeros in front of the 
 * Month or Day and removes them
 * @param  array $array the array containing all the date information
 * @return array        new array with plucked Data
 */
function pluckZeros($array){
	$newArray = array();
	
	foreach ( $array as $val ) {
		if( $val[0] == "0" ) {
			 $newArray[] =  $val = substr($val, 1);
		} else {
			 $newArray[] =  $val;
		}
	}
	
	return $newArray;
}
/**
 * Format Date does all the heavy lifting in one little formula to reformat
 * the date into the desired format
 * @param  $string $date takes the string representation of date from the user input
 * @return string        new reformatted string
 */
function formatDate($date) {
	
	$date = pluckZeros(explode("-", substr($date, 0, strpos($date, "T"))));
	$date = rearrange_array(rearrange_array($date, 2), 2);
	$date = implode("/", $date);

	return $date;
}
