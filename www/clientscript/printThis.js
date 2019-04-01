
function print(){
	
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
        var strFrameName = ("printThis-" + (new Date()).getTime());
         
            var $iframe = $("<iframe id='" + strFrameName +"' src='about:blank'/>");
 
            if (!opt.debug) { $iframe.css({ position: "absolute", width: "0px", height: "0px", left: "-600px", top: "-600px" }); }
 
            $iframe.appendTo("body");
         
            var $doc = $("#" + strFrameName).contents();
        }
    // allow iframe to fully render before action
    setTimeout ( function () {
         
		 var v = '87px.png'/*tpa=http://localhost/vb_423/archive/clientscript/87px.png*/;
         var url = vburl;
		 url = url.substring(0, url.indexOf(v)); 
		 
		   if(_isMobile() == mobiletrue) {
		   $doc.find("head").append('<link rel=\'stylesheet\' media=\'print\' type=\'text/css\' ] href=\''+url+'bookcss/print.css\'/>');
		   $doc.find("head").append("<style>.posttext > div,.posttext >span ,font{line-height:"+jQueryM_v1_4_5('.posttext > div,.posttext > span ,font').css("line-height")+"} .posttext > div,.posttext > span ,font{font-size:"+jQueryM_v1_4_5('.posttext > div,.posttext >span').css('font-size')+"} div.posttext{font-family:'"+jQueryM_v1_4_5('#wrapper').css("font-family")+"'}</style>" );
		   }
	       else{
	       $doc.find("head").append('<link rel=\'stylesheet\' media=\'print\' type=\'text/css\' ] href=\''+url+'bookcss/print.css\'/>');
		   $doc.find("head").append("<style>.posttext > div,.posttext >span ,font{line-height:"+jQueryD_1_4_2('.posttext > div,.posttext > span ,font').css("line-height")+"} .posttext > div,.posttext > span ,font{font-size:"+jQueryD_1_4_2('.posttext > div,.posttext >span').css('font-size')+"} div.posttext{font-family:'"+jQueryD_1_4_2('#wrapper').css("font-family")+"'}</style>" );
	       }
        
		 if(_isMobile() == mobiletrue) {
          $doc.find("head").append('<link type=\"text/css\" rel=stylesheet href=\''+url+'bookcss/andriod_ios_fixFont.css\'/>');

          }
	      else{
		  $doc.find("head").append('<link type=\"text/css\" rel=stylesheet href=\''+url+'bookcss/ff_ch_ie9_edg_fixFont.css\'/>');

	      }
		
		$doc.find("head").append('<link rel=\'stylesheet\' media=\'print\' type=\'text/css\' ] href=\''+url+'bookcss/print.css\'/>');
         
        
         
        //grab outer container
        if (opt.printContainer) { $doc.find("body").append($element.outer()); }
        else { $element.each( function() { $doc.find("body").append($(this).html()); }); }
     
        //$doc.close();
        // print
        ($.browser.opera ? tab : $iframe[0].contentWindow).focus();
        setTimeout( function() { ($.browser.opera ? tab : $iframe[0].contentWindow).print(); if (tab) { tab.close(); } }, 1000);
         
        //removed iframe after 60 seconds
        setTimeout(
        function(){
        $iframe.remove();
        },
        (60 * 1000)
        );
    }, 333 );
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

    $("#content").printThis();
	 //location.reload();
}