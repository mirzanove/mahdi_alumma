
var oldfram = null;

function print(mode){
	
   var $;
   if (_isMobile() == mobiletrue) {
                    $ = jQueryM_v1_4_5.noConflict(true);
                } else {
                    $ = jQueryD_1_4_2.noConflict(true);
                }
   
    var opt;
 
    $.fn.printThis = function (options) {
        opt = $.extend({}, $.fn.printThis.defaults, options);
 
        var $element =$(this);
   
	   
	 if(oldfram){	
          $("#"+oldfram).remove();
      }
	 
	 
    // if Opera, open a new tab
        if ($.browser.opera)
        {
            var tab = window.open("","Print Preview");
            tab.document.open();
 
            var doc = tab.document;
        }
    // add dynamic iframe to DOM
        else
        {
			
				
        var strFrameName = ("printThis");
        oldfram = strFrameName;
            var $iframee = $("<iframe id='" + strFrameName +"'/>");
 
           $iframee.css({ visibility:"hidden" ,position: "fixed", width: "0px", height: "0px", left: "-600px", top: "-600px",  direction: "rtl" });
 
            $iframee.appendTo("body");
         
            var $doc = $("#" + strFrameName).contents();
        }
      
		 var v = '87px.png'/*tpa=http://localhost/vb_423/archive/clientscript/87px.png*/;
         var url = vburl;
		 url = url.substring(0, url.indexOf(v)); 

		  $("#" + strFrameName).contents().find("head").append("<title>" + $('title').text() + "</title>");

		   if(_isMobile() == mobiletrue) {
		    $("#" + strFrameName).contents().find("head").append('<link rel=\'stylesheet\' media=\'print\' type=\'text/css\' ] href=\''+url+'bookcss/print.css\'/>');
		    $("#" + strFrameName).contents().find("head").append("<style>.posttext > div,.posttext >span ,font{line-height:"+$('.posttext > div,.posttext > span ,font').css("line-height")+"} .posttext > div,.posttext > span ,font{font-size:"+$('.posttext > div,.posttext >span').css('font-size')+"} div.posttext{font-family:'"+$('#wrapper').css("font-family")+"'}</style>" );
		   }
	       else{
	        $("#" + strFrameName).contents().find("head").append('<link rel=\'stylesheet\' media=\'print\' type=\'text/css\' ] href=\''+url+'bookcss/print.css\'/>');
		    $("#" + strFrameName).contents().find("head").append("<style>.posttext > div,.posttext >span ,font{line-height:"+$('.posttext > div,.posttext > span ,font').css("line-height")+"} .posttext > div,.posttext > span ,font{font-size:"+$('.posttext > div,.posttext >span').css('font-size')+"} div.posttext{font-family:'"+$('#wrapper').css("font-family")+"'}</style>" );
	       }
        
		 if(_isMobile() == mobiletrue) {
          $("#" + strFrameName).contents().find("head").append('<link type=\"text/css\" rel=stylesheet href=\''+url+'bookcss/andriod_ios_fixFont.css\'/>');

          }
	      else{
		  $("#" + strFrameName).contents().find("head").append('<link type=\"text/css\" rel=stylesheet href=\''+url+'bookcss/ff_ch_ie9_edg_fixFont.css\'/>');

	      }
		
		$("#" + strFrameName).contents().find("head").append('<link rel=\'stylesheet\' media=\'print\' type=\'text/css\' ] href=\''+url+'bookcss/print.css\'/>');
         
        
         
        //grab outer container
        if (opt.printContainer) { 
		
		$("#" + strFrameName).contents().find("body").append($element.outer());
		//$doc.find("body").append($element.outer()); 
		
		}
        else { $element.each( function() { $doc.find("body").append($(this).html()); }); }
     
        //$doc.close();
        // print
        //($.browser.opera ? tab : $iframee[0].contentWindow).focus();
        //setTimeout( function() { ($.browser.opera ? tab : $iframee[0].contentWindow).print(); if (tab) { tab.close(); } }, 1000);
         
	    $("#" + strFrameName).ready(function(){
        
		
		
		($.browser.opera ? tab : $iframee[0].contentWindow).focus();
        setTimeout( function() {

        tooltip("cool", null);
		$iframee[0].contentWindow.print()
		
		//setTimeout(function () { $("#" + strFrameName).remove(); }, 3000);
		
		}, 2000);
         //console.log("ggggggggg");
		
		
		
		
       });
		 
		 
		 

    }
     
 
    $.fn.printThis.defaults = {
        debug: false, //show the iframe for debugging
        importCSS: true, // import page CSS
        printContainer: true, // grab outer container as well as the contents of the selector
        loadCSS: "" //path to additional css file
    };
 
     
    $.fn.outer = function() {
      return $($('<div></div>').html(this.clone())).html();
    }

	if(mode == "whol"){
		$("#content").printThis();
	}
	else{
		$(mode).printThis();
	}
    
	 //location.reload();
}