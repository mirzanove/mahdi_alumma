var link_disable = false;
var fontSize;
var fontSize2;
var fontSize3;
var printin_prosses = false;
var imag_loading = false;
var model_visible = false;
var stop = false;

var currpost =null;




function preventDefault(e){
    e.preventDefault();
}

function disableScroll(){
    document.body.addEventListener('touchmove', preventDefault, { passive: false });
}
function enableScroll(){
    document.body.removeEventListener('touchmove', preventDefault, { passive: false });
}










function off(){


if(printin_prosses==true){
return false;
}	


if (window.location == window.parent.location)
{

if (_isMobile() == mobiletrue)
{
	
	jQueryM_v1_4_5('#loading').show();
	
}
else
{
jQueryD_1_4_2('#loading').show();
}
						
						
				}
				else{
					
					window.parent.postMessage(["loading", "start"], "*");

				}






enableScroll();



setTimeout(function(){
document.getElementsByTagName('link')[1].disabled = false; 	 
	 if (_isMobile() == mobiletrue) {

					 jQueryM_v1_4_5("#overlay_print").remove();
                } else {

			jQueryD_1_4_2("#overlay_print").remove();
                }
	 
	

if(currpost){

	
			var idd = "#"+currpost;
			
			
			
			
			 if (_isMobile() == mobiletrue) {

		
					 
					 jQueryM_v1_4_5(".post").show();
					 jQueryM_v1_4_5(".header_topic").show();
					 jQueryM_v1_4_5(".page-break").show();
			setTimeout(function(){jQueryM_v1_4_5(idd)[0].scrollIntoView();}, 700);
					 
					 
                } else {

			
						jQueryD_1_4_2(".post").show();
						jQueryD_1_4_2(".header_topic").show();
						jQueryD_1_4_2(".page-break").show();
			setTimeout(function(){jQueryD_1_4_2(idd)[0].scrollIntoView();}, 700);
                }
			
			
currpost = null;			
}








	if (window.location == window.parent.location) {
		
		
		 if (_isMobile() == mobiletrue) {
                jQueryM_v1_4_5("html,body").removeAttr('style');
                } else {
                    jQueryD_1_4_2("html,body").removeAttr('style');
                }
		
	}
	else{
		
			 if (_isMobile() == mobiletrue) {
                 jQueryM_v1_4_5("html,body").css("height", "100%");
				 resize(jQueryM_v1_4_5("html"));
                } else {
                 jQueryD_1_4_2("html,body").css("height", "100%");
				 resize(jQueryD_1_4_2("html"));
                }
		
		
	}
	 

if (window.location == window.parent.location)
{
    if (_isMobile() == mobiletrue)
{
	
	jQueryM_v1_4_5('#loading').hide();
	
}
else
{
jQueryD_1_4_2('#loading').hide();
}
						
						
				}
				else{
					
					window.parent.postMessage(["loading", "stop"], "*");

				}
    },1000);		 
}


function getPageHeight(D) {
    var setsize = Math.max(Math.max(D.body.scrollHeight, D.documentElement.scrollHeight), Math.max(D.body.offsetHeight, D.documentElement.offsetHeight), Math.max(D.body.clientHeight, D.documentElement.clientHeight));
    window.parent.postMessage(["setsize", setsize], "*");
    return setsize;

}

function resize(elm) {
    //var height = elm.position().top + elm.offset().top + elm.outerHeight(true);
    //window.parent.postMessage(["setsize", height], "*");
    document.documentElement.style.display = 'none';
    document.documentElement.offsetHeight; // no need to store this anywhere, the reference is enough
    document.documentElement.style.display = '';
}

function checkURL(url) {
    
	if(url){
			return(url.match(/\.(jpeg|jpg|gif|png|JPG|PNG|GIF|JPEG)$/) != null);

	}
	
}

var stop = false;
var walk_the_DOM = function walk(node, func) {
//func(node);
node = node.lastChild


while (node && !stop) {      
walk(node, func);	

if(func(node)== true){
stop = true;
}
	
  node = node.previousSibling; 
	
}
};


var stop = false;
var walk_the_DOM = function walk(node, func) {
//func(node);
node = node.lastChild


while (node && !stop) {      
walk(node, func);	

if(func(node)== true){
stop = true;
}
	
  node = node.previousSibling; 
	
}
};


var stop2 = false;
var walk_the_DOM2 = function walk2(node, func) {


if(node.className != "move" && node.className != "language"){

node = node.firstChild;



while (node && !stop2) {      
walk2(node, func);	

if(func(node)== true){
stop2 = true;
}
	
  node = node.nextSibling;  
	
}

}
};




function clearHighlighting()
{
alert("clearing hightlighting...");

if (!document.body || typeof(document.body.innerHTML) == "undefined") {
    if (warnOnFailure) {
      alert("Sorry, for some reason the text of this page is unavailable. Searching will not work.");
    }
    return false;
  }

var re = new RegExp('<'+'FONT'+'[^><]*>|<.'+'FONT'+'[^><]*>','g')
var bodyText = document.body.innerHTML;

bodyText = bodyText.replace(re, '');
document.body.innerHTML = bodyText;
return true;

}

function redraw(element){
    //alert(element.innerHTML);
    if (!element) { return; }

    var n = document.createTextNode(' ');
    var disp = element.style.display;  // don't worry about previous display style

    element.appendChild(n);
    element.style.display = 'none';

    setTimeout(function(){
        element.style.display = disp;
        n.parentNode.removeChild(n);
    },20); // you can play with this timeout to make it as short as possible
}


function printDiv(divID) {
	return false;
}




function printDiv2(divID) {

       if(_isMobile() == mobiletrue) {
		 jQueryM_v1_4_5("#frame1").remove(); 
		 jQueryM_v1_4_5('font').removeAttr("size");
		 jQueryM_v1_4_5('em').contents().unwrap();
		 jQueryM_v1_4_5(".footer").remove(); 
	  }
	  else{
		 jQueryD_1_4_2("#frame1").remove(); 
		 jQueryD_1_4_2('font').removeAttr("size");
		 jQueryD_1_4_2('em').contents().unwrap();
		 jQueryD_1_4_2(".footer").remove(); 
		 
	  }
	  
	    //var contents = document.getElementById(divID).innerHTML;
		
	    var contents = divID[0].outerHTML
		//alert();
		//var contents = jQueryD_1_4_2('#'+divID).parent().html();
		var wrapper = document.createElement('div');
	    wrapper.innerHTML = contents;
       
		
	   walk_the_DOM(wrapper, function(el) {
        
		//el.removeAttribute('style');
		
		if(el.tagName =="FONT"){
		 //el.style.fontSize = jQueryD_1_4_2('.posttext').css('font-size'); 
		 //alert(el.tagName);
	    }
		
		if(el.className == "hide_param"|| el.className =="imglink2 padd"){
		 el.removeAttribute('style');
	    }
		if(el.className == "image_custom")
		{
			el.childNodes[0].removeAttribute('style');

		}
        });
		
       // alert(wrapper.innerHTML.replace("size\=+0",""));


		var frame1 = document.createElement('iframe');
            frame1.name = "frame1";
			frame1.id = "frame1";
            frame1.style.position = "absolute";
            frame1.style.top = "-9999px";
            document.body.appendChild(frame1);
            var frameDoc;
           
		   var iframe = document.getElementById("frame1")
		   if (IE <=7) {
                  // for IE 5.5, 6 and 7:
            frameDoc = iframe.contentWindow;
			//alert();	 
		   }
		   else{
		   
		    frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;

		   }

		   var v = '87px.png'/*tpa=http://localhost/vb_423/archive/clientscript/87px.png*/;
           var url = vburl;
		   url = url.substring(0, url.indexOf(v));
		   
		   frameDoc.document.open();
           frameDoc.document.write('<html dir = "rtl"><head>');
       
		   if(_isMobile() == mobiletrue) {
		   frameDoc.document.write('<link rel=\'stylesheet\' media=\'print\' type=\'text/css\' ] href=\''+url+'bookcss/print.css\'/>');
		   frameDoc.document.write( "<style>.posttext > div,.posttext >span ,font{line-height:"+jQueryM_v1_4_5('.posttext > div,.posttext > span ,font').css("line-height")+"} .posttext > div,.posttext > span ,font{font-size:"+jQueryM_v1_4_5('.posttext > div,.posttext >span').css('font-size')+"} div.posttext{font-family:'"+jQueryM_v1_4_5('#wrapper').css("font-family")+"'}</style>" );
		   }
	       else{
	       frameDoc.document.write('<link rel=\'stylesheet\' media=\'print\' type=\'text/css\' ] href=\''+url+'bookcss/print.css\'/>');
		   frameDoc.document.write( "<style>.posttext > div,.posttext >span ,font{line-height:"+jQueryD_1_4_2('.posttext > div,.posttext > span ,font').css("line-height")+"} .posttext > div,.posttext > span ,font{font-size:"+jQueryD_1_4_2('.posttext > div,.posttext >span').css('font-size')+"} div.posttext{font-family:'"+jQueryD_1_4_2('#wrapper').css("font-family")+"'}</style>" );
	       }
			
		  if (IE <=8) {     
	      frameDoc.document.write('<link type=\"text/css\" rel=stylesheet href=\''+url+'bookcss/ie876_fixFont.css\'/>');	
	      }
	      else{
	
	      if(_isMobile() == mobiletrue) {
		  
		  frameDoc.document.write('<link type=\"text/css\" rel=stylesheet href=\''+url+'bookcss/andriod_ios_fixFont.css\'/>');
	      }
	      else{
		   frameDoc.document.write('<link type=\"text/css\" rel=stylesheet href=\''+url+'bookcss/ff_ch_ie9_edg_fixFont.css\'/>');        	
	      }
	      }
			
			frameDoc.document.write('</head><body>');
            frameDoc.document.write(wrapper.innerHTML);
            frameDoc.document.write('</body></html>');
            frameDoc.document.close();
            
			printin_prosses = false;
			setTimeout(function () {
                
				window.frames["frame1"].focus();
                window.frames["frame1"].print();
				
                //document.body.removeChild(frame1);
				
				//jQueryM_v1_4_5('body').trigger('resize');
				//jQueryM_v1_4_5('.posttop').css("background-color", "#d5dc91");
                //jQueryM_v1_4_5("#wrapper").animate({ scrollTop:500 }, 0);
            }, 200);
            return false;

}


	


function someRandomFunction(){
    // This will be executed after myFirstFunction
	
if (_isMobile() == mobiletrue) {
}
else{

	setTimeout(function(){ 

	            var section = location.hash ? location.hash : null;
				if (section != null)
				{
					
			  jQueryD_1_4_2(section).css("background-color", "#d5dc91");
		
			  jQueryD_1_4_2(section)[0].scrollIntoView();
				}

	}, 0);
               


}
	
}



function run() {

//someRandomFunction();
	}
	
	// in case the document is already rendered
	if (document.readyState!='loading') run();
	// modern browsers
	else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
	// IE <= 8
	else document.attachEvent('onreadystatechange', function(){
	    if (document.readyState=='complete') run();
	});

	
	
	
	
	
function getParameterByName(name, url)
{
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, '\\$&');
	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	

	
	return (results[2].replace(/\+/g, ' '))
}
	
	
	
	
	
	


window.onload = function(){



		
if(IE=="6"&&IE=="7"){	

resize(window);

}
setTimeout(function() {

	//document.getElementById("loading").style.display = 'none';
	
	
	}, 0);

};
