/*function initializeMap() {
  var myOptions = {
    center: new google.maps.LatLng(-34.397, 150.644),
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementsByClassName("map-canvas"),
    myOptions);
}

$(document).on("pagecreate", initializeMap);*/


/*var screen = $.mobile.getScreenHeight();

var header = $(".ui-header").hasClass("ui-header-fixed") ? $(".ui-header").outerHeight()  - 1 : $(".ui-header").outerHeight();

var footer = $(".ui-footer").hasClass("ui-footer-fixed") ? $(".ui-footer").outerHeight() - 1 : $(".ui-footer").outerHeight();


var contentCurrent = $(".ui-content").outerHeight() - $(".ui-content").height();

var content = screen - header - footer - contentCurrent;

$(".ui-content").height(content);*/



  /*  function handle(e){
        if(e.keyCode === 13){
            alert("Enter was pressed was presses");
			
        }

        return false;
    }
*/



 


$(document).on("pageshow", "[data-role='page']", function(){

//alert("gggggg");



	
$("#home_header").removeClass("hide").trigger('resize');
$("#toc_header").addClass("hide");
$("#search_header").addClass("hide");

$("#home_footer").removeClass("hide").trigger('resize');
$("#toc_footer").addClass("hide");
$("#search_footer").addClass("hide");	

$(".tabView").addClass("visibility");
$("#one").removeClass("visibility").trigger('resize');

$(".tabButton").on("click", function(){

$(".tabView").addClass("visibility");

var href = $(this).prop("href");
    
if(href.substr(href.indexOf('#')) === "#one"){
$(".tabView").addClass("visibility");	

$("#home_header").removeClass("hide").trigger('resize');
$("#toc_header").addClass("hide");
$("#search_header").addClass("hide");

$("#home_footer").removeClass("hide").trigger('resize');
$("#toc_footer").addClass("hide");
$("#search_footer").addClass("hide");	


$("#one").removeClass("visibility").trigger('resize');
$("#content_t").css("overflow"," hidden");
document.getElementById('iframe').contentWindow.postMessage(["loaddsett",null], "*");

}	 
else if(href.substr(href.indexOf('#')) === "#two"){


$(".tabView").removeClass("ui-content");	
$("#two").addClass("ui-content");	

$("#home_header").addClass("hide");
$("#toc_header").removeClass("hide").trigger('resize');
$("#search_header").addClass("hide");

$("#home_footer").addClass("hide");
$("#toc_footer").removeClass("hide").trigger('resize');
$("#search_footer").addClass("hide");	


$(".tabView").addClass("visibility").trigger('resize');
$("#two").removeClass("visibility").trigger('resize');
$("#content_t").css("overflow"," hidden");
//var element = document.getElementsByClassName("selected");


setTimeout(function() { 
			  
			   document.getElementById('iframe').contentWindow.postMessage(["get_ifram_location_href2",null], "*");
			
			 }, 500);
			 
//$(".curr")[0].scrollIntoView();			 
			 

//alert();
/*var target1 = $.mobile.activePage.find('.selected').get(0).offsetTop;
var top = $('.selected').position().top+43;
$("#two").scrollTop( top );*/

	
}      

else if(href.substr(href.indexOf('#')) === "#three"){

$(".tabView").removeClass("ui-content");	
$("#three").addClass("ui-content");

	
$("#home_header").addClass("hide");
$("#toc_header").addClass("hide");
$("#search_header").removeClass("hide");

$("#home_footer").addClass("hide");
$("#toc_footer").addClass("hide");
$("#search_footer").removeClass("hide");	

$(".tabView").addClass("visibility").trigger('resize');
$("#three").removeClass("visibility").trigger('resize');
$("#content_t").css("overflow"," hidden");




if(a_QueryResultt){	
document.getElementsByClassName("loading2")[0].style.display = 'block';	

git = false;
stop = true; 
if(resizeDone){
    go_index();
	
}else{
setTimeout(function() { 
  
   if(window.myScroll){ 
 
      window.myScroll.scrollto(curr_index);
   
   }
   //git =true;
   stop = false; 
			
}, 300);
}
}



	
}

});
});

/*
$(".tabButton").removeClass("ui-btn-active");
    $(".tabView").addClass("hide").trigger('resize');
	$("#searchbar").hide();
	$("#searchbar2").show();
	$("#searchbar3").hide();
	//$(".tabView").addClass("hide");
	//$(".tabView").hide();
    $(".tabButton").eq(0).addClass("ui-btn-active");
    var viewHref  = $(".tabButton").eq(0).prop("href");
  
	 
	//$(viewHref.substr($(".tabButton").eq(0).prop("href").indexOf('#'))).show().trigger('resize');
   
   $(viewHref.substr($(".tabButton").eq(0).prop("href").indexOf('#'))).removeClass("hide").trigger('resize');
   
   
	//gettabhash(viewHref.substr($(".tabButton").eq(0).prop("href").indexOf('#')));
	//$.mobile.silentScroll($(".selected").offset().top); 
	
	
    $(".tabButton").on("click", function(){
        
	
		$(".tabButton").removeClass("ui-btn-active");        
       
	   
	   // $(".tabView").hide();
	   
	   
		$(".tabView").addClass("hide");
		
		
		
        var href = $(this).prop("href");
        //$(href.substr(href.indexOf('#'))).show().trigger('resize'); 
        $(href.substr(href.indexOf('#'))).removeClass("hide").trigger('resize');
		
        $(this).addClass("ui-btn-active");
      
		if(href.substr(href.indexOf('#'))=== "#one"){
		$("#searchbar").hide();
	    $("#searchbar3").hide();
		$("#searchbar2").show().trigger('resize');
		$("#footer").trigger('resize');
	
		
		}
		else if(href.substr(href.indexOf('#'))=== "#two"){
		$("#searchbar").hide();
		$("#searchbar2").hide();
		$("#searchbar3").show().trigger('resize');
		//$('.selected').ScrollTo();
		
		//target = $(".selected").get(0).offsetTop;
		//$.mobile.silentScroll(target);
		
		//$("html, body").animate({ "scrollTop" : target },0);
		
		$("#footer").trigger('resize');

		}
		else if(href.substr(href.indexOf('#'))=== "#three"){
	
		
		$("#searchbar").show().trigger('resize');
		$("#searchbar2").hide();
		$("#searchbar3").hide();
		$("#footer").trigger('resize');
		
		}
		
		return false;
    });

	
	
	});*/
//data-position="fixed"
