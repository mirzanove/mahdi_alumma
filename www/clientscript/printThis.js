

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
   


function print(mode){
	
     var $;
   if (_isMobile() == mobiletrue) {
                    $ = jQueryM_v1_4_5.noConflict(true);
                } else {
                    $ = jQueryD_1_4_2.noConflict(true);
                }
   
   
   
    function appendContent($el, content) {
        if (!content) return;

        // Simple test for a jQuery element
        $el.append(content.jquery ? content.clone() : content);
    }

    function appendBody($body, $element, opt) {
        // Clone for safety and convenience
        // Calls clone(withDataAndEvents = true) to copy form values.
        var $content = $element.clone(opt.formValues);

        if (opt.formValues) {
            // Copy original select and textarea values to their cloned counterpart
            // Makes up for inability to clone select and textarea values with clone(true)
            copyValues($element, $content, 'select, textarea');
        }

        if (opt.removeScripts) {
            $content.find('script').remove();
        }

        if (opt.printContainer) {
            // grab $.selector as container
            $content.appendTo($body);
        } else {
            // otherwise just print interior elements of container
            $content.each(function() {
                $(this).children().appendTo($body)
            });
        }
    }

    // Copies values from origin to clone for passed in elementSelector
    function copyValues(origin, clone, elementSelector) {
        var $originalElements = origin.find(elementSelector);

        clone.find(elementSelector).each(function(index, item) {
            $(item).val($originalElements.eq(index).val());
        });
    }

    var opt;
    $.fn.printThis = function(options) {
        opt = $.extend({}, $.fn.printThis.defaults, options);
        var $element =  $(this);

        var strFrameName = "printThis-" + (new Date()).getTime();

        if (window.location.hostname !== document.domain && navigator.userAgent.match(/msie/i)) {
            // Ugly IE hacks due to IE not inheriting document.domain from parent
            // checks if document.domain is set by comparing the host name against document.domain
            var iframeSrc = "javascript:document.write(\"<head><script>document.domain=\\\"" + document.domain + "\\\";</s" + "cript></head><body></body>\")";
            var printI = document.createElement('iframe');
            printI.name = "printIframe";
            printI.id = strFrameName;
            printI.className = "MSIE";
            document.body.appendChild(printI);
            printI.src = iframeSrc;

        } else {
            // other browsers inherit document.domain, and IE works if document.domain is not explicitly set
            var $frame = $("<iframe id='" + strFrameName + "' name='printIframe' />");
            $frame.appendTo("body");
        }

        var $iframe = $("#" + strFrameName);

        // show frame if in debug mode
        if (!opt.debug) $iframe.css({
             visibility:"hidden" ,position: "fixed",
            width: "0px",
            height: "0px",
            left: "-600px",
            top: "-600px"
        });

        // before print callback
        if (typeof opt.beforePrint === "function") {
            opt.beforePrint();
        }

        // $iframe.ready() and $iframe.load were inconsistent between browsers
        setTimeout(function() {

            // Add doctype to fix the style difference between printing and render
            function setDocType($iframe, doctype){
                var win, doc;
                win = $iframe.get(0);
                win = win.contentWindow || win.contentDocument || win;
                doc = win.document || win.contentDocument || win;
                doc.open();
                doc.write(doctype);
                doc.close();
            }

            if (opt.doctypeString){
                setDocType($iframe, opt.doctypeString);
            }

            var $doc = $iframe.contents(),
                $head = $doc.find("head"),
                $body = $doc.find("body"),
                $base = $('base'),
                baseURL;

			
	    var v = '87px.png'/*tpa=http://localhost/vb_423/archive/clientscript/87px.png*/;
         var url = vburl;
		 url = url.substring(0, url.indexOf(v)); 
	
	    
		   $head.append("<title>" + $('title').text() + "</title>");

		
		   if(_isMobile() == mobiletrue) {
		    $head.append('<link rel=\'stylesheet\' media=\'print\' type=\'text/css\' ] href=\''+url+'bookcss/archive_print.css\'/>');
		    $head.append("<style>.posttext > div,.posttext >span ,font{line-height:"+$('.posttext > div,.posttext > span ,font').css("line-height")+"} .posttext > div,.posttext > span ,font{font-size:"+$('.posttext > div,.posttext >span').css('font-size')+"} div.posttext{font-family:'"+$('#wrapper').css("font-family")+"'}</style>" );
		   }
	       else{
	        $head.append('<link rel=\'stylesheet\' media=\'print\' type=\'text/css\' ] href=\''+url+'bookcss/archive_print.css\'/>');
		    $head.append("<style>.posttext > div,.posttext >span ,font{line-height:"+$('.posttext > div,.posttext > span ,font').css("line-height")+"} .posttext > div,.posttext > span ,font{font-size:"+$('.posttext > div,.posttext >span').css('font-size')+"} div.posttext{font-family:'"+$('#wrapper').css("font-family")+"'}</style>" );
	       }
        
		 if(_isMobile() == mobiletrue) {
          $head.append('<link type=\"text/css\" rel=stylesheet href=\''+url+'bookcss/andriod_ios_fixFont.css\'/>');

          }
	      else{
		  $head.append('<link type=\"text/css\" rel=stylesheet href=\''+url+'bookcss/ff_ch_ie9_edg_fixFont.css\'/>');

	      }
	
		
		
		
		

			
			
			
			
			
			
			
			
			
			
            var pageHtml = $('html')[0];

            // CSS VAR in html tag when dynamic apply e.g.  document.documentElement.style.setProperty("--foo", bar);
            //$doc.find('html').prop('style', pageHtml.style.cssText);

            // copy 'root' tag classes
            var tag = opt.copyTagClasses;
            if (tag) {
                tag = tag === true ? 'bh' : tag;
                if (tag.indexOf('b') !== -1) {
                    $body.addClass($('body')[0].className);
                }
                if (tag.indexOf('h') !== -1) {
                    $doc.find('html').addClass(pageHtml.className);
                }
            }

            // print header
            appendContent($body, opt.header);

            if (opt.canvas) {
                // add canvas data-ids for easy access after cloning.
                var canvasId = 0;
                // .addBack('canvas') adds the top-level element if it is a canvas.
                $element.find('canvas').addBack('canvas').each(function(){
                    $(this).attr('data-printthis', canvasId++);
                });
            }

            appendBody($body, $element, opt);

            if (opt.canvas) {
                // Re-draw new canvases by referencing the originals
                $body.find('canvas').each(function(){
                    var cid = $(this).data('printthis'),
                        $src = $('[data-printthis="' + cid + '"]');

                    this.getContext('2d').drawImage($src[0], 0, 0);

                    // Remove the markup from the original
                    if ($.isFunction($.fn.removeAttr)) {
                        $src.removeAttr('data-printthis');
                    } else {
                        $.each($src, function(i, el) {
                            el.removeAttribute('data-printthis')
                        });
                    }
                });
            }

            // remove inline styles
            if (opt.removeInline) {
                // Ensure there is a selector, even if it's been mistakenly removed
                var selector = opt.removeInlineSelector || '*';
                // $.removeAttr available jQuery 1.7+
                if ($.isFunction($.removeAttr)) {
                    $body.find(selector).removeAttr("style");
                } else {
                    $body.find(selector).attr("style", "");
                }
            }

            // print "footer"
            appendContent($body, opt.footer);

            // attach event handler function to beforePrint event
            function attachOnBeforePrintEvent($iframe, beforePrintHandler) {
                var win = $iframe.get(0);
                win = win.contentWindow || win.contentDocument || win;

                if (typeof beforePrintHandler === "function") {
                    if ('matchMedia' in win) {
                        win.matchMedia('print').addListener(function(mql) {
                            if(mql.matches)  beforePrintHandler();
                        });
                    } else {
                        win.onbeforeprint = beforePrintHandler;
                    }
                }
            }
            attachOnBeforePrintEvent($iframe, opt.beforePrint);

            setTimeout(function() {
                if ($iframe.hasClass("MSIE")) {
                    // check if the iframe was created with the ugly hack
                    // and perform another ugly hack out of neccessity
                    window.frames["printIframe"].focus();
                    $head.append("<script>  window.print(); </s" + "cript>");
                } else {
                    // proper method
                    if (document.queryCommandSupported("print")) {
                        $iframe[0].contentWindow.document.execCommand("print", false, null);
                    } else {
                        $iframe[0].contentWindow.focus();
                        $iframe[0].contentWindow.print();
                    }
                }

                // remove iframe after print
                if (!opt.debug) {
                    setTimeout(function() {
                       $iframe.remove();
						

                    }, 1000);
                }

                // after print callback
                if (typeof opt.afterPrint === "function") {
                    opt.afterPrint();
					
                }
				
				tooltip("remove", null);

            }, opt.printDelay);

        }, 333);

    };

    // defaults
    $.fn.printThis.defaults = {
        debug: false,               // show the iframe for debugging
        importCSS: true,            // import parent page css
        importStyle: false,         // import style tags
        printContainer: true,       // print outer container/$.selector
        loadCSS: "",                // path to additional css file - use an array [] for multiple
        pageTitle: "",              // add title to print page
        removeInline: false,        // remove inline styles from print elements
        removeInlineSelector: "*",  // custom selectors to filter inline styles. removeInline must be true
        printDelay: 333,            // variable print delay
        header: null,               // prefix to html
        footer: null,               // postfix to html
        base: false,                // preserve the BASE tag or accept a string for the URL
        formValues: true,           // preserve input/form values
        canvas: false,              // copy canvas content
        doctypeString: '<!DOCTYPE html>', // enter a different doctype for older markup
        removeScripts: false,       // remove script tags from print content
        copyTagClasses: false,      // copy classes from the html & body tag
        beforePrintEvent: null,     // callback function for printEvent in iframe
        beforePrint: null,          // function called before iframe is filled
        afterPrint: null            // function called before iframe is removed
};

	if(mode == "whol"){
		$("#content").printThis();
	}
	else{
		$(mode).printThis();
	}
    
	 //location.reload();
}