


function createScript(url){

var v = '87px.png'/*tpa=http://localhost/vb_423/archive/clientscript/87px.png*/;
url = url.substring(0, url.indexOf(v));


if(disable_resoures == false){


//document.write('<script>if (typeof process !== "undefined" && typeof require !== "undefined") {global.window = window;}</script>');






if (IE <=8) {     
	document.write('<link type=\"text/css\" rel=stylesheet href=\''+url+'bookcss/ie876_fixFont.css\'/>');	

}
else{
	
	  if(_isMobile() == mobiletrue) {
		  document.write('<link type=\"text/css\" rel=stylesheet href=\''+url+'bookcss/andriod_ios_fixFont.css\'/>');
	  }
	  else{
		document.write('<link type=\"text/css\" rel=stylesheet href=\''+url+'bookcss/ff_ch_ie9_edg_fixFont.css\'/>');
	  }

}
if(localStorage.getItem("NDmode")){

if(localStorage.getItem("NDmode")=="night"){
	
document.write('<link type=\"text/css\" rel=stylesheet href=\''+url+'bookcss/archiveN.css\'/>');

	
}
else{
	
document.write('<link type=\"text/css\" rel=stylesheet href=\''+url+'bookcss/archiveD.css\'/>');

	
}

	
}
else{

document.write('<link type=\"text/css\" rel=stylesheet href=\''+url+'bookcss/archiveD.css\'/>');
	
}

	
}
}



function header(url){

document.write('<meta name="theme-color" content="black">');
document.write('<meta name="msapplication-navbutton-color" content="black">');
document.write('<meta name="apple-mobile-web-app-status-bar-style" content="black">');
}

function footer(url){
	
var v = '87px.png'/*tpa=http://localhost/vb_423/archive/clientscript/87px.png*/;
url = url.substring(0, url.indexOf(v));
	
if(disable_resoures == false){	
	
	
if(window.location == window.parent.location) {
	                      
}
else{
document.write('<script type=\"text/javascript\" src=\''+url+'clientscript/xregexp-all.js\'><\/script>');  
}


	

if (typeof encryptedMsg != 'undefined')
{
document.write('<script type=\"text/javascript\" src=\''+url+'clientscript/kryptojs-3.1.9-1-lib.js\'><\/script>');  
	                      
}



	
	
document.write('<script type=\"text/javascript\" src=\''+url+'js/index.js\'><\/script>'); 




if(_isMobile() == mobiletrue) {

document.write('<script type=\"text/javascript\" src=\''+url+'clientscript/jquery-1.11.1.min.js\'><\/script>');  
document.write('<script type=\"text/javascript\" src=\''+url+'clientscript/jquery-migrate-1.0.0.js\'><\/script>');  
document.write('<script type=\"text/javascript\" src=\''+url+'clientscript/jQueryMobile.v1.4.5.js\'><\/script>');  

	
}else{

document.write('<script type=\"text/javascript\" src=\''+url+'clientscript/jqueryD_1_4_2.min.js\'><\/script>');  
document.write('<script type=\"text/javascript\" src=\''+url+'clientscript/json2.js\'><\/script>');  
document.write('<script type=\"text/javascript\" src=\''+url+'clientscript/simple-postmessage.js\'><\/script>');  

}





document.write('<script type=\"text/javascript\" src=\''+url+'clientscript/ExFun.js\'><\/script>');  
document.write('<script type=\"text/javascript\" src=\''+url+'clientscript/jquery.inview.js\'><\/script>');  
document.write('<script type=\"text/javascript\" src=\''+url+'clientscript/jquery.ba-hashchange.min.js\'><\/script>');  
document.write('<script type=\"text/javascript\" src=\''+url+'clientscript/copy2clipboard.js\'><\/script>');  
document.write('<script type=\"text/javascript\" src=\''+url+'clientscript/config.js\'><\/script>');  

document.write('<script type=\"text/javascript\" src=\''+url+'clientscript/printThis.js\'><\/script>');  




if(_isMobile() == mobiletrue) {	
	document.write('<script type=\"text/javascript\" src=\''+url+'clientscript/MSettings.js\'><\/script>');  
}
else{
   document.write('<script type=\"text/javascript\" src=\''+url+'clientscript/DSettings.js\'><\/script>');  
   document.write('<script type=\"text/javascript\" src=\''+url+'js/gui_node.js\'><\/script>'); 
}

document.write('<script type=\"text/javascript\" src=\''+url+'template/exjs/fullscreen.js\'><\/script>');  
 


	
}	
	
	
	
	
}

