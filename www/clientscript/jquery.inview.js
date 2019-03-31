/**
 * author Remy Sharp
 * url http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 */
jQuery(document).ready(function( $ ) {
    function getViewportHeight() {
        var height = window.innerHeight; // Safari, Opera
        var mode = document.compatMode;

        if ( (mode || !$.support.boxModel) ) { // IE, Gecko
            height = (mode == 'CSS1Compat') ?
            document.documentElement.clientHeight : // Standards
            document.body.clientHeight; // Quirks
        }

        return height;
    }
    
    var pics = [".inview", ".inview2"];
	
	var arrEdited2 = [];
        $('.lozad').each(function(i) {
            $(this).attr('id', 'id_' + (i + 1));
             arrEdited2.push($(this).attr('id'));
        });
	
	 var con;
	  if(window.location == window.parent.location) {
          con =   $(window);					 
	  }
      else{

       con =  $('#wrapper');
	  
      }

	
	
	
	
	
	
	
	con.scroll(function () {
        //alert();
		/*var vpH = $('#wrapper').innerHeight(),
            scrolltop = ($('#wrapper').scrollTop()),
            elems = [];*/
			
		  var vpH = getViewportHeight(),
            scrolltop = (con.scrollTop() ?
                con.scrollTop() :
                con.scrollTop()),
            elems = [];
			

	
	
            $.each(arrEdited2, function( i, l ){
              
				var $el = $('#id_'+(i+1)),
					top = $el.offset().top + $("#wrapper").scrollTop()+20,
                    height = $el.height(),
                    inview = $el.data('inview') || false;
					
					 
					
					
					
					if (scrolltop > (top + height) || scrolltop + vpH < top) {
                    
					if (inview) {
                        
						//$el.data('inview', false);
                        //$el.trigger('inview', [ false ]);                        
                    }
                } else if (scrolltop < (top + height)) {
                    if (!inview) {
	

if(!$el.attr("src")){
$el.parent().attr("class", 'alpom2 link_off');	

$el.attr("src", '../../clientscript/images/loading.gif');
var img = new Image();
//imag_loading = true;
img.onload = function() {
    $el.parent().attr("class", 'alpom2');
	$el.attr('src',$el.attr('data-src'));
	
	
	
	//imag_loading = false;
	//alert("loaded successfully");
}
img.onerror = img.onabort = function() {
    //imag_loading = true;
	$el.parent().attr("class", 'alpom2 link_off');
	$el.attr("src", '../../clientscript/images/linklost.jpg');
	
	$(".link_off").click(function(event) {
			  event.preventDefault();
              event.stopPropagation();	
	});
	
}
// only set .src AFTER event handlers are in place
img.src = $el.attr('data-src');
}						
                    }
                }   
          });

    });
 con.scroll();
});

  




