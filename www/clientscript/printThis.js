

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

 
   
function printPage(id)
{

    var $;
   if (_isMobile() == mobiletrue) {
                    $ = jQueryM_v1_4_5.noConflict(true);
                } else {
                    $ = jQueryD_1_4_2.noConflict(true);
                }

          var v = '87px.png'
         var url = vburl;
		 url = url.substring(0, url.indexOf(v));

   //var newWindow = window.open(""+url+"print.html",'_blank','toolbar=0,scrollbars=0,status=0');
var gui = require('nw.gui');
//var newWindow =  gui.Window.open(""+url+"print.html",{toolbar:false,frame:true,"icon":'http://localhost:9090/87px.png'}, {}, function(newWin) {
//});


var newWindow  = gui.Window.open(""+url+"print.html", {
    title : 'MyApp',
    show : true,
    toolbar : false,
    frame : true,
	icon:"noon.png"
  });


/*var newWindow = gui.Window.open(""+url+"print.html",{toolbar:true,frame:true,icon:""+url+"87px.png"}, {}, function(newWin) {
});*/

 
 var movies = [id.html(),$('.posttext > div,.posttext > span ,font').css("line-height"),$('.posttext').css('font-size'),$('#wrapper').css("font-family")];
 localStorage.setItem("quentinTarantino", JSON.stringify(movies));
 
 
tooltip("remove", null);	   
 setTimeout(
        function(){

  		 //  newWindow.window.postMessage(["send_con",id.html(),$('.posttext > div,.posttext > span ,font').css("line-height"),$('.posttext').css('font-size'),$('#wrapper').css("font-family")], "*");

  		  // newWindow.window.postMessage(["send_con",id.html()], "*");

		   
        },
        (1000)
        );
  
  
  
  
  
  
  
  
}   
   


   
function printt(mode){
	
	var v = '87px.png'/*tpa=http://localhost/vb_423/archive/clientscript/87px.png*/;
         var url = vburl;
		 url = url.substring(0, url.indexOf(v)); 
	
	
	
     var $;
   if (_isMobile() == mobiletrue) {
                    $ = jQueryM_v1_4_5.noConflict(true);
                } else {
                    $ = jQueryD_1_4_2.noConflict(true);
                }
    
   
  $.fn.printMe = function(options){

	// Setup options
	var settings = $.extend({
		// Defaults options.
		path: [],
		title: "",
		head: false,
	}, options );
	
	// Set the properties and run the plugin
	return this.each(function(){
		
		// Store the object
		var $this = $(this);

		var w = window.open();
		w.document.write( "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">" );
		w.document.write( "<html>" );
		w.document.write( "<head>" );
		w.document.write( "<meta charset='utf-8'>" );

		// Add the style sheets
		for(i in settings.path){
			w.document.write('<link rel="stylesheet" href="'+settings.path[i]+'">');
		}
		
		// Close the head
		w.document.write('</head><body>');

		// Add a header when the title not is empty
		if (settings.title != "")
			w.document.write( "<h1>" + settings.title + "<\/h1>" );

		// Add a content to print
		w.document.write( $this.html() );
		w.document.write('<script type="text/javascript">function closeme(){window.close();}setTimeout(closeme,50);window.print();</script></body></html>');
		w.document.close();
	});
} 
   
   
 
 
 $("body").printMe(); 
 
 
 
 }  
   
   
   
   
 