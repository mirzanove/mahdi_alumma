<?php
function get_snippet($keyword, $txt) {
  $snippet='';
  $span = 15;
  preg_match_all("#(.{0,5})($keyword)(.{0,5})#im",$txt, $matches);
  
 // var_dump($matches);
  foreach($matches[0] as $match) {
    if (!$match = trim($match)) continue;
    if (isset($snippet)) $snippet .= "$match..."; else $snippet = "...$match...";
	
	//echo "dddddd";
  }
  $snippet = preg_replace("#($keyword)#i", '<b>$1</b>', $snippet);
  return $snippet;
}

$gg= "Since its launch in November 2007, Android Android not only dramatically increased consumer choice but also
improved the entire mobil Android e experience for users. Today, more than 150 million Android devices have been
activated worldwide with over 550,000 devices now lit up every day through a network of about 39 manufacturers
and 231 carriers in 123 countries. Given Android’s phenomenal success, we are always looking for new ways to
supercharge the Android ecosystem. That is why I am so excited today to announce that we have agreed to acquire
Motorola.";

echo get_snippet("Android", $gg);