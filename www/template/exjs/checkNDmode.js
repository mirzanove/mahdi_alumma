function checkDNmode(){
var url = null;	
if(localStorage.getItem("NDmode")){

if(localStorage.getItem("NDmode")=="night"){
	
document.write('<link type=\"text/css\" rel=stylesheet href=\'bookcss/Njqm.css\'/>');

	
}
else{
	
document.write('<link type=\"text/css\" rel=stylesheet href=\'bookcss/Djqm.css\'/>');

	
}

	
}
else{

document.write('<link type=\"text/css\" rel=stylesheet href=\'bookcss/Djqm.css\'/>');
	
}


	
}