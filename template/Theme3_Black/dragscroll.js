/*MIT License */
/*global jQuery */
(function ($) {
    'use strict';
    var definer = $('<div dir="rtl" style="font-size: 14px; width: 4px; height: 1px; position: absolute; top: -1000px; overflow: scroll">ABCD</div>').appendTo('body')[0],
        type = 'reverse';

    if (definer.scrollLeft > 0) {
        type = 'default';
    } else {
        definer.scrollLeft = 1;
        if (definer.scrollLeft === 0) {
            type = 'negative';
        }
    }

    $(definer).remove();
    $.support.rtlScrollType = type;
}(jQuery));








/*
var mx = 0;
var curDown = false;
var scrolling = false;
$(".m").on({
  
   click: function(e) {

  },
  
  
  mousemove: function(e) {
	if(curDown === true){  
	  

	
  if($.support.rtlScrollType == "default" ||$.support.rtlScrollType == "negative"){
	  
	var mx2 = e.pageX - this.offsetLeft;
  }
  else{
	 var mx2 = -e.pageX + this.offsetLeft;
  }
	
	
    if(mx) this.scrollLeft = this.sx + mx - mx2;
	
	}
  },
  mousedown: function(e) {
	  
	curDown = true; 
    this.sx = this.scrollLeft;
    
  if($.support.rtlScrollType == "default" || $.support.rtlScrollType == "negative"){
	  
	  mx = e.pageX - this.offsetLeft;
  }
  else{
	  mx = -e.pageX + this.offsetLeft;
  }
	
	
	
	
  }
});

$(document).on("mouseup", function(){
  mx = 0;
  
  curDown = false;
  
  scrolling =false;
});




$( ".dragscroll" ).scroll(function() {
     
       scrolling =true;	 
								
});*/



/**
 * @fileoverview dragscroll - scroll area by dragging
 * @version 0.0.8
 * 
 * @license MIT, see http://github.com/asvd/dragscroll
 * @copyright 2015 asvd <heliosframework@gmail.com> 
 */


(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== 'undefined') {
        factory(exports);
    } else {
        factory((root.dragscroll = {}));
    }
}(this, function (exports) {
    var _window = window;
    var _document = document;
    var mousemove = 'mousemove';
    var mouseup = 'mouseup';
    var mousedown = 'mousedown';
    var EventListener = 'EventListener';
    var addEventListener = 'add'+EventListener;
    var removeEventListener = 'remove'+EventListener;
    var newScrollX, newScrollY;
	var down = false;

    var dragged = [];
    var reset = function(i, el) {
        for (i = 0; i < dragged.length;) {
            el = dragged[i++];
            el = el.container || el;
            el[removeEventListener](mousedown, el.md, 0);
            _window[removeEventListener](mouseup, el.mu, 0);
            _window[removeEventListener](mousemove, el.mm, 0);
        }

        // cloning into array since HTMLCollection is updated dynamically
        dragged = [].slice.call(_document.getElementsByClassName('dragscroll'));
        for (i = 0; i < dragged.length;) {
            (function(el, lastClientX, lastClientY, pushed, scroller, cont){
                (cont = el.container || el)[addEventListener](
                    mousedown,
                    cont.md = function(e) {
                        if (!el.hasAttribute('nochilddrag') ||
                            _document.elementFromPoint(
                                e.pageX, e.pageY
                            ) == cont
                        ) {
                            pushed = 1;
							down =true;
                            lastClientX = e.clientX;
                            lastClientY = e.clientY;
                            
                            e.preventDefault();
							
							 
							$( ".dragscroll" ).scroll(function() {
                                if (pushed) { 
								//document.getElementsByClassName('m')[0].style.pointerEvents = 'none';
								
								scrolling =true;	
								
								}								
								
                            });
						
					
							
                        }
                    }, 0
                );

                _window[addEventListener](
                    mouseup, cont.mu = function() {
						
						document.getElementsByClassName('m')[0].style = ''; 
						
						
						pushed = 0;
						setTimeout(function(){ scrolling =false; }, 100);
						
						
						
						}, 0
                );

                _window[addEventListener](
                    mousemove,
                    cont.mm = function(e) {
                        
						if (pushed) {  

                            el.classList.add("dragging");
	                        
 
                             if($.support.rtlScrollType == "default" ||$.support.rtlScrollType == "negative"){
                               (scroller = el.scroller||el).scrollLeft -=
                                newScrollX = (- lastClientX + (lastClientX=e.clientX));
                              }
                            else{
	                        (scroller = el.scroller||el).scrollLeft +=
                                newScrollX = (- lastClientX + (lastClientX=e.clientX));
                            }
 
 
							
                           


						   scroller.scrollTop -=
                                newScrollY = (- lastClientY + (lastClientY=e.clientY));
                            if (el == _document.body) {
                                (scroller = _document.documentElement).scrollLeft -= newScrollX;
                                scroller.scrollTop -= newScrollY;
                            }
                        }
                    }, 0
                );
             })(dragged[i++]);
        }
    }

      
    if (_document.readyState == 'complete') {
        reset();
    } else {
        _window[addEventListener]('load', reset, 0);
    }

    exports.reset = reset;
}));





