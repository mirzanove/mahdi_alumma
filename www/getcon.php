<?php

function next_text($AppendText,$all_words,$row_next,$maxWords){
$added_next_text ="";	
$text ="";

  if(isset($all_words[$row_next])){
  if(mb_str_word_count($AppendText)< $maxWords){  
  $added_next_text = ' '.$all_words[$row_next];
  $AppendText = $AppendText.$added_next_text;  
  return next_text($AppendText,$all_words,$row_next+1,$maxWords);
  }
  else{
	
	preg_match('/^(?:\S+\s*){1,'.$maxWords.'}/', $AppendText, $match);
	return $match[0].".."; 
  }
  } 
  else{
  preg_match('/^(?:\S+\s*){1,'.$maxWords.'}/', $AppendText, $match);
  return $match[0]."..";
  }  

}


function back_text($AppendText,$all_words,$row_back,$maxWords){
	
	$added_next_text ="";	
    $text ="";
  
	
  if(isset($all_words[$row_back])){
  if(mb_str_word_count($AppendText)< $maxWords){
  $added_next_text = $all_words[$row_back].' ';
  $AppendText = $added_next_text.$AppendText;  
  return back_text($AppendText,$all_words,$row_back-1,$maxWords);
  
  }
  else{
	
	preg_match('/(?>\S+\s*){1,'.$maxWords.'}$/', $AppendText, $match);
	return "..".$match[0]; 
  }
  }
  else{
 
  preg_match('/(?>\S+\s*){1,'.$maxWords.'}$/', $AppendText, $match);
  return "..".$match[0];  

  }  
	
}

if (!function_exists('mb_str_word_count'))
{
    function mb_str_word_count($string, $format = 0, $charlist = '[]') {
        $string=trim($string);
        if(empty($string))
            $words = array();
        else
            $words = preg_split('~[^\p{L}\p{N}\']+~u',$string);
        switch ($format) {
            case 0:
                return count($words);
                break;
            case 1:
            case 2:
                return $words;
                break;
            default:
                return $words;
                break;
        }
    }
}

function clean($txt)
{
    $txt=preg_replace("{(<br[\\s]*(>|\/>)\s*){2,}}i", "\n", $txt);
   $txt=preg_replace("{(<br[\\s]*(>|\/>)\s*)}i", "\n", $txt);
    return $txt;
}


















function hit_keys($str,$words,$maxWords,$data){
$row_next="";
$row_back="";
$back= null;
$next= null;
$index =null;
$next_text =null;
$back_text =null;


$keywords = array();
$all_words = array();

$countK = 1;
$countS = 1;
$tot_countS = 1;


static $count = 1;
static $output = "";
static $dd = "";
static $hitword = "";
end($all_words);
$lastword_index = key($all_words);
$currKey_index ="";


$corr = [
          'ا' => '(?:[اإآأٱ]\\p{Mn}+|[اإآأٱ])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,'ب' => '(?:[ب]\\p{Mn}+|[ب])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,'ت' => '(?:[ت]\\p{Mn}+|[ت])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,'ث' => '(?:[ث]\\p{Mn}+|[ث])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,'ج' => '(?:[ج]\\p{Mn}+|[ج])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,'ح' => '(?:[ح]\\p{Mn}+|[ح])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,'خ' => '(?:[خ]\\p{Mn}+|[خ])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,'د' => '(?:[د]\\p{Mn}+|[د])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,'ذ' => '(?:[ذ]\\p{Mn}+|[ذ])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,'ر' => '(?:[ر]\\p{Mn}+|[ر])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,'ز' => '(?:[ز]\\p{Mn}+|[ز])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,'س' => '(?:[س]\\p{Mn}+|[س])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,'ش' => '(?:[ش]\\p{Mn}+|[ش])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,'ص' => '(?:[ص]\\p{Mn}+|[ص])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,'ض' => '(?:[ض]\\p{Mn}+|[ض])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,'ط' => '(?:[ط]\\p{Mn}+|[ط])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,'ظ' => '(?:[ظ]\\p{Mn}+|[ظ])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,'ع' => '(?:[ع]\\p{Mn}+|[ع])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,'غ' => '(?:[غ]\\p{Mn}+|[غ])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,'ف' => '(?:[ف]\\p{Mn}+|[ف])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,'ق' => '(?:[ق]\\p{Mn}+|[ق])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,'ك' => '(?:[ك]\\p{Mn}+|[ك])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,'ل' => '(?:[ل]\\p{Mn}+|[ل])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,'م' => '(?:[م]\\p{Mn}+|[م])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,'ن' => '(?:[ن]\\p{Mn}+|[ن])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,'ه' => '(?:[ه|ة]\\p{Mn}+|[ه|ة])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}‌])*' 
		 ,"و" =>'(?:[ؤو]\\p{Mn}+|[ؤو])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,"ؤ" =>'(?:[ؤو]\\p{Mn}+|[ؤو])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,"ى" =>'(?:[ىئ]\\p{Mn}+|[ىئ])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,"ي" =>'(?:[ي]\\p{Mn}+|[ي])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
		 ,"ء" =>'(?:[ء]\\p{Mn}+|[ء])(?:[_ـ\\x{200C}]\\p{Mn}+|[_ـ\\x{200C}])*'
//٠		 
,"0"=>'(?:0|\\x{0660}|\\؟|\\?)'
,"1"=>'(?:1|۱|١)'
,"2"=>'(?:2|۲|٢)'
,"3"=>'(?:3|۳|٣)'
,"4"=>'(?:4|٤|٤)'
,"5"=>'(?:5|٥|٥)'
,"6"=>'(?:6|٦|٦)'
,"7"=>'(?:7|٧|٧)'
,"8"=>'(?:8|۸|٨)'
,"9"=>'(?:9|۹|٩)'

		 ];
		 
$str = preg_replace('/(<script[^>]*>.+?<\/script>|<style[^>]*>.+?<\/style>|<title[^>]*>.+?<\/title>)/s', '', $str);
$str = preg_replace('/((.*?)<\/(.*?)>)(.*?)(<(.*?)[^>]*>(.*?))/is', "$1<br>$4$5", $str);
$str = preg_replace('/(.*?)(<(.*?)[^>]*>(.*?))/is', "$1<br>$2", $str);
$str=  strip_tags($str,'<br>');
$str = clean($str);		 

$cool = implode(preg_split('/\\s/', strtr($words, $corr)), '(?:<[^>]+>|[<br>\\n\\r\\s\\p{P}\\p{S}\\p{Mn}\\x{0640}\\x{200F}])*');
$result = preg_split("/\s*([^\s]*".$cool."[^\s]*)\s*/u", $str, -1, PREG_SPLIT_NO_EMPTY|PREG_SPLIT_DELIM_CAPTURE);



for ($i = 0; $i < count($result); $i++) { 

if (trim($result[$i]) != '' || trim($result[$i]) != null)
{
 
 if(preg_match("/(".$cool.")/u", $result[$i])){

	 $keywords[$countK]= array_fill_keys([$tot_countS],$result[$i]);
	 $countK = $countK+1;
 }


	 $text = trim(preg_replace('/\s+/u', ' ', $result[$i])); 
	 $all_words[$tot_countS] = $text;
	 $countS = $countS+1;

$tot_countS = $tot_countS+1;
}

}

/*echo "<pre>";
var_dump ($keywords);
echo "</pre>";*/

foreach($keywords as $index => $item) {
$dd =""	;
$gg = preg_split('/\r\n|\r|\n/', $item[key($item)]);
	
for ($i = 0; $i < count($gg); $i++) {
$ff = trim(preg_replace('/\s/u', '', $gg[$i])); 	
	
if($ff!= ''){
	
//$text = trim(preg_replace('/\s+/u', ' ', $gg[$i]));

//echo $gg[$i]."<br>";


//echo preg_replace('/('.$cool.')/u', '<mark>$1<mark>', $gg[$i])."<br>";




if(strpos(trim($item[key($item)]), ' ') !== false)
{
$dd .= "<a onclick = 'go_hit(this);' id =hit_".$count." href = ".$data."&hit=".$count.">".$gg[$i]."</a> ";
}
else
{
$dd .= preg_replace('/('.$cool.')/us',"<a onclick = 'go_hit(this);' id =hit_".$count." href = ".$data."&hit=".$count.">$1</a> ",$gg[$i]);
}


$count++;
}
}

$hitword =$dd;




$currKey_index = key($item);


if(isset($all_words[key($item)-1])){
	$back= $all_words[key($item)-1];
}

if(isset($all_words[key($item)+1])){
	$next= $all_words[key($item)+1];
}
else{
	$next ="";
}

$back_text = back_text($back,$all_words,(key($item)-1)-1,$maxWords);
$next_text = next_text($next,$all_words,(key($item)+1)+1,$maxWords);
	


$output .= "<div dir =rtl>".$back_text." ".$hitword ." ".$next_text."</div>";
}
/*echo '<pre>';
var_dump($all_words);
echo '</pre>';*/

//$output = trim(preg_replace('/\s+/u', ' ', $output));

return  $output;

}


$data = $_POST['data'];
$parts = parse_url($data);
parse_str($parts['query'], $query);

$words = str_replace('"', '', $query['rhhlterm']);
$str =  file_get_contents($data);
$maxWords = 7;

echo htmlspecialchars_decode(hit_keys($str,$words,$maxWords,$data));

