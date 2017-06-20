
if(_isMobile()== mobiletrue){
$.mobile.page.prototype.options.domCache = true;
$.mobile.loader.prototype.options.disabled = true;	
$.mobile.ajaxEnabled=false;
$.mobile.loadingMessage = false;
$.mobile.hashListeningEnabled = false;
$.mobile.pushStateEnabled = false;
$.mobile.loading().hide();	

var jQueryM_v1_4_5 = $.noConflict(true);
	   		          
}//end
else
{

var jQueryD_1_4_2 = $.noConflict(true);	
	
}//end