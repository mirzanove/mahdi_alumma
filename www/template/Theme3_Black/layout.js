
/*$("#searhcform").submit(function(event){


});*/

$("#searhcform").on('keypress',function(event) {
    if(event.which == 13) {
     searchHelp(event, 'searchBoxSearchPage');
}
});

/*$("#searhcform").submit(function(event){

searchHelp(event, 'searchBoxSearchPage');
});*/


document.getElementsByClassName("loading2")[0].style.display = 'block';


if (document.location.href.indexOf("&checkbox=00")!= -1){
document.getElementById("checkbox_id1").checked = false;
document.getElementById("checkbox_id0").checked = true;
document.getElementById("checkbox_id2").checked = false;

document.getElementById("checkbox_id4").checked = true;
}

if (document.location.href.indexOf("&checkbox=01")!= -1){
document.getElementById("checkbox_id1").checked = false;
document.getElementById("checkbox_id0").checked = true;
document.getElementById("checkbox_id2").checked = false;

document.getElementById("checkbox_id4").checked = false;
}

if (document.location.href.indexOf("&checkbox=1")!= -1){
document.getElementById("checkbox_id1").checked = true;
document.getElementById("checkbox_id0").checked = false;
document.getElementById("checkbox_id2").checked = false;
} 
 
if (document.location.href.indexOf("&checkbox=20")!= -1){
document.getElementById("checkbox_id1").checked = false;
document.getElementById("checkbox_id0").checked = false;
document.getElementById("checkbox_id2").checked = true;

document.getElementById("checkbox_id4").checked = true;
}


if (document.location.href.indexOf("&checkbox=21")!= -1){
document.getElementById("checkbox_id1").checked = false;
document.getElementById("checkbox_id0").checked = false;
document.getElementById("checkbox_id2").checked = true;

document.getElementById("checkbox_id4").checked = false;
}



//showclear() ;


if (document.getElementById("checkbox_id1").checked){
document.getElementById("checkbox_id4").disabled = true;
$('#switch_checkbox_id4').addClass('disabled');

}
else{
document.getElementById("checkbox_id4").disabled = false;
$('#switch_checkbox_id4').removeClass('disabled');
}


document.getElementsByClassName("close")[0].addEventListener("click", close_modal);
function close_modal(){
document.getElementsByClassName("modal")[0].style.display = 'none';
setTimeout(function() { 
			  link_disable = false;
			  document.getElementById('iframe').contentWindow.postMessage(["link_disable","false"], "*");
			  }, 1000);

}

$('#clear').click(function () {
    $('#searchBoxSearchPage').val('');
	//$("#clear").prop("hidden", true);
	
      // this.style.visibility =  "hidden" ;
	   
	   $("#clear").addClass('hideclear');

	
	
});

$('#clear2').click(function () {
    $('#websiteName').val('');
	//$("#clear").prop("hidden", true);
	
      // this.style.visibility =  "hidden" ;
	   $("#clear2").addClass('hideclear');
	
	
});




function showclear2(input) {

var textInput = document.getElementById('websiteName'),
		clearBtn2 = document.getElementById('clear2');
		
if (document.getElementById("websiteName").value.length >= 1) {

		if(clearBtn2){
			
				//clearBtn2.style.visibility = (textInput.value.length) ? "visible" : "hidden";
				$("#clear2").removeClass('hideclear');
		}     
}

if (document.getElementById("websiteName").value.length < 1) {

		if(clearBtn2){
			
				//clearBtn2.style.visibility =  "hidden";
				$("#clear2").addClass('hideclear');
		} 
	 
}


}

function showclear(input) {

//console.log(document.getElementById("searchBoxSearchPage").value);
if (document.getElementById("searchBoxSearchPage").value.length >= 1) {
       				var searchForm = document.getElementById('searhcform'),
		textInput = document.getElementById('searchBoxSearchPage'),
		clearBtn = document.getElementById('clear');
		if(clearBtn){
			
				//clearBtn.style.visibility = (textInput.value.length) ? "visible" : "hidden";
				$("#clear").removeClass('hideclear');
		}     
}

if (document.getElementById("searchBoxSearchPage").value.length < 1) {
      //	$("#clear").prop("hidden", true);
	  
	  var clearBtn = document.getElementById('clear');
		if(clearBtn){
			
				//clearBtn.style.visibility =  "hidden";
				$("#clear").addClass('hideclear');
		} 
	  
	  
	  
	 
}


}



function em(input) {
    var emSize = parseFloat($("body").css("font-size"));
    return (emSize * input);
}


function px(input) {
    var emSize = parseFloat($("body").css("font-size"));
    return (Math.floor(input / emSize));
}


$(document).ready( function (){


	
	
$(window).on('hashchange', function() {
  
 
 if (window.location.hash.includes('&ux=search')) { 
       //alert(window.location.hash);
		
  }
 else if (window.location.hash.includes('&ux=bookmark')) { 
      
		
  }
  else{
	   
	   window.location.hash = window.location.hash;
	
		
		if($("#searchresults").is(":visible")) {
		
			go_topic(null);
		}
		
		if($("#tocold").is(":visible")) {
		
			go_topic(null);
		}
  }
 
 
});	
	
if($(window).innerWidth() >= em(59.49) && $(window).innerWidth() <= em(80.99)){

    $(".buttonbar").slimScroll({width: '80',
    height: '100%',
    position: 'left'});
}
else{
    $(".buttonbar").slimScroll({destroy:true});
	$(".buttonbar").css("width", "").css("height", "");
}	
	

	
$(document).on('click','.nolink',function(){


     document.getElementsByClassName("loading2")[0].style.display = 'block';
	 //var $links = $('.nolink');
	 //$(this).css("background-color", "yellow");
	// $links.removeClass('curr');
	// $(this).addClass('curr');
	 
})





})



function highlite(gg){
var elements = document.getElementsByClassName('wSearchResultTitle');

for (var i = 0; i < elements.length; i++) {
   elements[i].classList.remove('curr');
}


var element, name, arr;
    element = gg;
    name = "curr";
    arr = element.className.split(" ");
    if (arr.indexOf(name) == -1) {
        element.className += " " + name;
    }

current_select  = element.id;

git = false;
stop = true; 
  
setTimeout(function() { 
  
   git =true;
   stop = false; 
			
}, 300);
}







function go_bookmark(event){
    

document.getElementById("searchresults").className = "rh-hide";
document.getElementById("iframe").className = "rh-hide";
removeClass(document.getElementById("tocold"),"rh-hide");

	
	   //event.preventDefault();
	   
		 $('#pages_bar_note').hide();
		 


	        if($(window).innerWidth() < em(43.68)) {
              $('.content').css("bottom", "40px");
            }
			else if($(window).innerWidth() >= em(43.68) && $(window).innerWidth() <= em(59.49)){
			  $('.content').css("bottom", "80px");
			}
			else if($(window).innerWidth() >= em(59.5) && $(window).innerWidth() <= em(80.99)){
			  $('.content').css("bottom", "0px");
			}
			else if($(window).innerWidth() >= em(81)){
			  $('.content').css("bottom", "0px");
			 }	




	

     document.getElementById("tocold").removeAttribute("hidden");
	 document.getElementById("tocold").classList.remove("rh-hide");
	
	
	if(document.location.href.indexOf("&ux=bookmark")== -1){
	//history.replaceState(null, null, location.hash.replace(/(.*?)(\&|#)ux\=(search)(.*?)(&([^"]*)|$)/mg, "$1")+"&ux=bookmark");
	}		 
			


	
setTimeout(function() {
	if ($('.curr2').length > 0){
		
		$('.curr2')[0].scrollIntoView(1);	
	}
	}, 500);

	
	
	
	
	
	
	showclear2();
	
	
}



function go_topic(event){
	      //event.preventDefault();
          document.getElementById("iframe").removeAttribute("hidden");
	      document.getElementById("iframe").classList.remove("rh-hide");
		  



var stateObj = { scrollTop: $("em").scrollTop()};	
if(!document.getElementById("tocold").className){
document.getElementById("tocold").className += " "+"rh-hide";
}

if(document.getElementById("searchresults").className == "wSearchResults"){
	//alert(document.getElementById("searchresults").className);
	document.getElementById("searchresults").className += " "+"rh-hide";
}


		  $('#pages_bar_note').hide();
		  
		   if(document.location.href.indexOf("&ux=search")!= -1){
			
			   if(!(document.location.href.match(/((#|%23)td_threadtitle(.*?))/mg) ||document.location.href.match(/((#|%23)post(.*?))/mg))) {
			
      	         //document.getElementsByClassName("loading2")[0].style.display = 'block'; 	
					 
	           }
			   
			   
		   }
		   
		   if(document.location.href.indexOf("&ux=bookmark")!= -1){
			
			   if(!(document.location.href.match(/((#|%23)td_threadtitle(.*?))/mg) ||document.location.href.match(/((#|%23)post(.*?))/mg))) {
			
      	         //document.getElementsByClassName("loading2")[0].style.display = 'block'; 	
					 
	           }
  
		   }
	
	  

	        if($(window).innerWidth() < em(43.68)) {
				
				
              $('.content').css("bottom", "40px");
            }
			else if($(window).innerWidth() >= em(43.68) && $(window).innerWidth() <= em(59.49)){
			  $('.content').css("bottom", "80px");
			}
			else if($(window).innerWidth() >= em(59.5) && $(window).innerWidth() <= em(80.99)){
			  $('.content').css("bottom", "0px");
			}
			else if($(window).innerWidth() >= em(81)){
			  $('.content').css("bottom", "0px");
			   
			  
		    }
			
			
			
document.getElementById("searchresults").className = "rh-hide";
document.getElementById("tocold").className = "rh-hide";
removeClass(document.getElementById("iframe"),"rh-hide");


window.history.replaceState(null, null, location.hash.replace(/\&ux\=(search|bookmark)/mg, ""));

document.getElementsByClassName("loading2")[0].style.display = 'none'; 
}


var tempScrollTop =null;
selectscroll();
function selectscroll(){
if($(window).innerWidth() >= em(81)){



$('.contentholder').scroll(function() {
	if(!$('#searchresults').is(":hidden")){
		if ($('.curr').length == 0){
		
		 tempScrollTop = $('.contentholder').scrollTop();
		}
	}
  
});
	
}else{

$('#rh_scrollable_content').scroll(function() {
	if(!$('#searchresults').is(":hidden")){
		if ($('.curr').length == 0){
		
		tempScrollTop = $('#rh_scrollable_content').scrollTop();
		}
	}
  
});


}
}





function go_search(event){	



setTimeout(function() { 
if(tempScrollTop != null){
	

  
if($(window).innerWidth() >= em(81)){
  
  $('.contentholder').animate({

	  scrollTop:tempScrollTop
 
    }, 0); 
	
	
}else{


$('#rh_scrollable_content').animate({

	  scrollTop:tempScrollTop
 
    }, 0);		
}

}

	}, 500);



 
if($('#pageList >ul >li').length > 0){

$('#pages_bar_note').show();	
//removeClass(document.getElementById("pages_bar_note"),"rh-hide");


//event.preventDefault();


}



	

if($("#searchBoxSearchPage").is(":focus")){

}else{
if ($('.curr').length > 0){

setTimeout(function() { 
//var elements = document.getElementsByClassName('curr')[0];
if($(window).innerWidth() >= em(81)){
$('.contentholder').animate({
      //scrollTop: $('.curr').offset().top-30
	  scrollTop:$('.curr').offset().top - $('.contentholder').offset().top + $('.contentholder').scrollTop()
	 
	  
    }, 0);
//$('.curr')[0].scrollIntoView(1);
	
	
	}else{
$('#rh_scrollable_content').animate({
      //scrollTop: $('.curr').offset().top-30
	  scrollTop:$('.curr').offset().top - $('#rh_scrollable_content').offset().top + $('#rh_scrollable_content').scrollTop()
    }, 0);

//$('.curr')[0].scrollIntoView(1);	
}		
}, 500);	
	
	
/*toc = document.getElementById('rh_scrollable_content');	
toc.scrollTop = 0;*/
	
	
 }	
}

	
	   if($('.wSearchPageNumberSelected').length) 
		{	

setTimeout(function() { 

 $(".m").scrollCenter(".wSearchPageNumberSelected", 0);
 
}, 500);
	
		 
		 
			if($(window).innerWidth() < em(43.68)) {
              $('.content').css("bottom", "98px");
             } 
		    else if($(window).innerWidth() >= em(43.68) && $(window).innerWidth() <= em(59.49)){
			  $('.content').css("bottom", "135px");
			 }
			 else if($(window).innerWidth() >= em(59.5) && $(window).innerWidth() <= em(80.99)){
			  $('.content').css("bottom", "55px");
			 }
			 else if($(window).innerWidth() >= em(81)){
			  $('.content').css("bottom", "55px");
			 }
 
        }
		else{
			
			if($(window).innerWidth() < em(43.68)) {
              $('.content').css("bottom", "40px");
            }
			else if($(window).innerWidth() >= em(43.68) && $(window).innerWidth() <= em(59.49)){
			  $('.content').css("bottom", "80px");
			}
			else if($(window).innerWidth() >= em(59.5) && $(window).innerWidth() <= em(80.99)){
			  $('.content').css("bottom", "0px");
			}
			else if($(window).innerWidth() >= em(81)){
			  $('.content').css("bottom", "0px");
			 }
			
		}

		
		
		
		

document.getElementById("iframe").className = "rh-hide";
document.getElementById("tocold").className = "rh-hide";
removeClass(document.getElementById("searchresults"),"rh-hide");



    document.getElementById("searchresults").removeAttribute("hidden");
	document.getElementById("searchresults").classList.remove("rh-hide");
	if(document.location.href.indexOf("&ux=search")== -1){
//	history.replaceState(null, null, location.hash.replace(/(.*?)(\&|#)ux\=(bookmark)(.*?)(&([^"]*)|$)/mg, "$1")+"&ux=search");
	}	
		


showclear();

		
}



$.fn.hasScrollBar = function() {
                return  this.height();

}




var toc;
var toc2;
function scrollTo_up(){
	
if(!($('#searchresults').hasClass("rh-hide"))) 
{
toc = document.getElementById('searchresults');	

}
if(!($('#tocold').hasClass("rh-hide"))) 
{
			
toc = document.getElementById('tocold');	

}
document.getElementsByClassName("loading2")[0].style.display = 'block';
toc.scrollTop = 0;
setTimeout(function() { document.getElementsByClassName("loading2")[0].style.display = 'none'}, 50);
}





function scrollTo_down(){
	
if(!($('#searchresults').hasClass("rh-hide"))) 
{
toc = document.getElementById('searchresults');	

}
if(!($('#tocold').hasClass("rh-hide"))) 
{
			
toc = document.getElementById('tocold');	

}
	
document.getElementsByClassName("loading2")[0].style.display = 'block';
toc.scrollTop = toc.scrollHeight;
setTimeout(function() { document.getElementsByClassName("loading2")[0].style.display = 'none'}, 100);
}





$.fn.scrollCenter = function(elem, speed) {

  
if($.support.rtlScrollType == "default" || $.support.rtlScrollType == "negative"){
  
  
  
  var active = $(this).find(elem);
  var activeWidth = active.width() / 2; 
  var pos = active.position().left + activeWidth;
  var elpos = $(this).scrollLeft();
  var elW = $(this).width();

  pos = pos + elpos - elW / 2; 

  $(this).animate({
    scrollLeft: pos-30
  }, speed == undefined ? 1000 : speed);
  return this;
  
  
  
  }
  else{

  /*var active = $(this).find(elem);
  var activeWidth = active.width() / 2;


  var pos = active.position().left + activeWidth;
  var elpos = $(this).scrollLeft();
  var elW = $(this).width();

  pos = pos - elpos - elW / 2;

  $(this).animate({
    scrollLeft: -pos+30
  }, speed == undefined ? 1000 : speed);
  return this;*/
  
  
  var active = $(this).find(elem);
  var activeWidth = active.width() / 2; 
  var pos = active.position().left + activeWidth;
  var elpos = $(this).scrollLeft();
  var elW = $(this).width();

  pos = pos + elpos - elW / 2; 

  $(this).animate({
    scrollLeft: pos-30
  }, speed == undefined ? 1000 : speed);
  return this;
  
  
  
}
  
  
  };


function MyFunction(){
    document.getElementsByClassName("loading2")[0].style.display = 'block';
    str = document.location.href;
	str =str.replace("/responsiveStyle2.html", "/index.html");
	
	document.getElementById('iframe').contentWindow.postMessage(["get_ifram_location_href",str], "*");
	
}
function get_link_url(){
document.getElementsByClassName("loading2")[0].style.display = 'block';
document.getElementById('iframe').contentWindow.postMessage(["get_ifram_location_href",document.location.href], "*");
}


function showdropdown() {
	    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {

  /*var target = event ? event.target : window.event.srcElement;
  //alert(target.className);
  if (target.className !='dropbtn'&& target.className!='drop') {
    
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }*/
        var  matches;
		var  matches2;
        matches = $(event.target).is( ".dropbtn" );
		matches2 = $(event.target).is( "drop" );
		//var target = event ? event.target : window.event.srcElement;
		 /*if (target.id != 'dropbtn') {
               
               jQueryM_v1_4_5('#myDropdown').removeClass("show");
         }*/
		 
		if (matches && matches2) {
                 
                 
				 
				 var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        $('#myDropdown').removeClass("show");
      }
    }
				 
         }
  
  
}


window.onclick = function(event) {

  var target = event ? event.target : window.event.srcElement;
  //alert(target.className);
  
  if (target.className !='dropbtn'&& target.className!='drop') {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
		
      }
    }
  }
}



/*************
	
	Custom setting names. Used to hook into RH settings mechanism.

************/
var lastVisitedTopic = "cust_last_visited_topic";
var sidebarCSHRunCheck = "cust_sidebar_csh_run_check";
/*************
	
	Global variables

************/
var showSidebarInCSHMode = false;
var desktopSidebar = null;
/*************
	
	Special actions for mobile devices.

************/
var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
if(iOS && gbBlockIOSScaling) {/* Only when scaling is disabled */
	window.onorientationchange = function()
	{
	   //setTimeout("window.location.reload()", 500);
	}
}

var ua = navigator.userAgent;
if( ua.indexOf("Android") >= 0 )
{
	var Android = true;
	/* Refresh on orientation change to help problems with recalculating sidebar position */
	window.onorientationchange = function()
	{
	  // setTimeout("window.location.reload()", 500);
	}
  
  /* Android 2.3 set scaling to avoid issues. */
  var androidversion = parseFloat(ua.slice(ua.indexOf("Android")+8)); 
  if (androidversion < 2.3)
  {
	var tmpMetaTagsList = document.getElementsByTagName('meta');
	var contentString = "user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0";
	for (i=0; i<tmpMetaTagsList.length; i++)
	{
		if (tmpMetaTagsList[i].name == "viewport")
			tmpMetaTagsList[i].content = contentString;
	}
	if(i == tmpMetaTagsList.length)
	{
		var metaTag = document.createElement('meta');
		metaTag.setAttribute("name", "viewport");
		metaTag.setAttribute("content", contentString);
		var headTags = document.getElementsByTagName('head');
		headTags[0].appendChild(metaTag);
	}
  }
}
/*************
	
	Initialize the layout

************/

  
  
$(function(){
		
	/* More global vars */
	$body = $("body");
	$sidebar = $("div.sidebar");
	$content = $("div.content");
	$contentholder = $("div.contentholder", $content);
	$sidebarButton = $("div.closebutton");
	
	/*Set localisation titles*/
	setLocalisation();

	/* Modify layout back to top link. RH changes the link on generation, set it correct now. */
	$("a", "div.content_top_link").attr("href", "#content_top_placeholder");
	
	/* Modify layout back to top link. RH changes the link on generation, set it correct now. */
	$topPlaceHolder = $("a", "div.content_top_link");
	$(window).load(function(){ contentTopToggle(); });
	$(window).resize(function(){ contentTopToggle(); });
	
	/* Use RH's event scheduling service. This service makes custom script work better with RH widgets. Adding scripts on DOM ready may interfere with widget loading. */
	addRhLoadCompleteEvent(initializeLayout);
	
	/* Set Flash objects to not overflow other elements */
	$("object").each(function(){
		$(this).attr("wmode", "transparent")
			   .append('<param name="wmode" value="transparent">')
			   .append('<embed wmode="transparent" height="'+$(this).attr('height')+'" width="'+$(this).attr('width')+'">');
	});
	
});
function initializeLayout() {/* This function makes changes to the layout, including widgets. Called through RH event handler. */
	
	/* Add hover event to default RH widgets (RH doesn't support it out of the box)*/
	hoverwidget($("div.home"));
	hoverwidget($("div.brsBack"));
	hoverwidget($("div.print"));
	hoverwidget($("div.brsNext"));
	
	readSetting(lastVisitedTopic, changeTopicLink, false, false);/* Check for the latest visited topic. */
	
	/* Make the sidebar resizable */
	desktopSidebar = new resizableSidebar($sidebar, "div.content", $body);
	desktopSidebar.setToggleElement($sidebarButton);
	desktopSidebar.toggleElement.click(function(){ desktopSidebar.toggle() });
	readSetting(desktopSidebar.lastSideBarWidthSetting, setLastSidebarWidth, false, false);/* Load sidebar width setting */
	readSetting(sidebarCSHRunCheck, setSidebarCSHRunCheck, false, false);/* Begin the CSH check for the sidebar. Only show/hide the sidebar in CSH mode the first time the help is opened. */
	$(window).resize(function() {
		
if($(window).innerWidth() >= em(59.49) && $(window).innerWidth() <= em(80.99)){

			$(".buttonbar").slimScroll({width: '80',
    height: '100%',
    position: 'left'});
}
else{

    $(".buttonbar").slimScroll({destroy:true}); 
	$(".buttonbar").css("width", "").css("height", "");
}
		
		
		if(!($('#searchresults').hasClass("rh-hide"))) 
		{
			
			go_search();
		}
		
		if(!($('#iframe').hasClass("rh-hide"))) 
		{
			
			go_topic(null);
		}
		
		if(!($('#tocold').hasClass("rh-hide"))) 
		{
			
			go_bookmark(null);
		}
		
		
		

		selectscroll();

		if(desktopSidebar.sidebar.is(":visible")) {
			waitForFinalEvent(function(){
				desktopSidebar.reloadPane();
			}, 50, 'resize_content');
		} else {
			//$sidebar.attr("style", "");
			//$content.attr("style", "overflow-y:auto");
			
		}
	});
	
	setCheckBoxes();/* Change checkboxes into On/Off button */
	
	/* Set tab group hover */
	$("ul.wTabGroup li").hover(
							function(){tabButtonEvent($("ul.wTabGroup"))},
							function(){tabButtonEvent($("ul.wTabGroup"))})
						.click(function(){tabButtonEvent($("ul.wTabGroup"))});
						
	setTimeout(function(){ tabButtonEvent($("ul.wTabGroup"));/* Set images in tabs on sidebar */ }, 10);/* Set timeout because IE doesn't show the correct image directly. */
	
	var advancedSearch = new elementToggle($("div.cSearchSettingsToggle a"), $("div.wSearchResultSettings"));
	advancedSearch.setLinkState();
	advancedSearch.link.click(function(){ advancedSearch.toggle(); });
}
/*************
	
	Layout functions

************/

function contentTopToggle() {
	if($contentholder.prop('scrollHeight') > $contentholder.height() ) {
		$topPlaceHolder.show();
	} else {
		$topPlaceHolder.hide();
	}
}
var elementToggle = function(link, target) {
	this.link = link;
	this.target = target;
	this.linkVisibleClass = "opened";
	this.linkHiddenClass = "collapsed";
	this.state = function() { return (this.target.is(":visible")) ? true : false; };
	this.setLinkState = function (){
		if(this.state()) {
			this.link.removeClass(this.linkVisibleClass);
			this.link.addClass(this.linkHiddenClass);
		} else {
			this.link.addClass(this.linkVisibleClass);
			this.link.removeClass(this.linkHiddenClass);
		}
	}
	this.toggle = function() {
		if(this.state()) {
			this.target.hide();
			this.setLinkState();
		} else {
			this.target.show();
			this.setLinkState();
		}
	}
}
function hoverwidget(element) {
	 element.hover(
				function(){hoverWidgetButton($(this), 'hover')},
				function(){hoverWidgetButton($(this), 'unhover')})
			.click(function(){hoverWidgetButton($(this), 'hover')});
}
function hoverWidgetButton(element, action) {
	$hover = $("img.hover", element);
	$normal = $("img.normal", element);
	switch(action) {
		case 'hover':
				$hover.show();
				$normal.hide();
			break;
		case 'unhover':
				$normal.show();
				$hover.hide();
			break;s
	}
}
/*************
	
	Localisation

************/
function setLocalisation() {

	var localisationSetter = function(elementArray, string) {
		this.elements = elementArray;
		this.localisation = string;
		this.setLocalisation = function() {
			for(i=0;i<this.elements.length;i++) {
				var toSet = this.elements[i];
				toSet.attr("title", this.localisation).attr("alt", this.localisation);
				toSet.children().attr("title", this.localisation);
			}
		}
	}
	
	/* Set TOC title */
	var tocLocal = new localisationSetter(new Array($("div.bar_toc"), $("img", "#tocTabButton")), $("#localisation_toc").text());
	tocLocal.setLocalisation();
	var tocLocal = new localisationSetter(new Array($("div.bar_toc_active"), $("img", "#tocTabButton")), $("#localisation_toc").text());
	tocLocal.setLocalisation();
	/* Set IDX title */
	var idxLocal = new localisationSetter(new Array($("div.bar_index"), $("img", "#idxTabButton")), $("#localisation_idx").text());
	idxLocal.setLocalisation();
	var idxLocal = new localisationSetter(new Array($("div.bar_index_active"), $("img", "#idxTabButton")), $("#localisation_idx").text());
	idxLocal.setLocalisation();
	/* Set GLO title */
	var gloLocal = new localisationSetter(new Array($("div.bar_glossary"), $("img", "#gloTabButton")), $("#localisation_glo").text());
	gloLocal.setLocalisation();
	var gloLocal = new localisationSetter(new Array($("div.bar_glossary_active"), $("img", "#gloTabButton")), $("#localisation_glo").text());
	gloLocal.setLocalisation();
	/* Set FTS title */
	var ftsLocal = new localisationSetter(new Array($("div.bar_search")), $("#localisation_fts").text());
	ftsLocal.setLocalisation();
	var ftsLocal = new localisationSetter(new Array($("div.bar_search_active")), $("#localisation_fts").text());
	ftsLocal.setLocalisation();
	/* Set BACK title */
	var topicLocal = new localisationSetter(new Array($("div.bar_topic")), $("#localisation_back").text());
	topicLocal.setLocalisation();
	topicLocal = new localisationSetter(new Array($("div.bar_topic_active")), $("#localisation_back").text());
	topicLocal.setLocalisation();
}
/*************
	
	Sidebar

************/
var resizableSidebar = function(sidebar, reverseWidthElementName, baselineElement) {
	this.sidebar = sidebar;
	this.sidebarWidth = function() { return this.sidebar.width(); };
	this.setSidebarWidth = function(width) { this.sidebar.width(width); };
	this.reverse = reverseWidthElementName;
	this.reverseElement = $(reverseWidthElementName);
	this.reverseWidth = function() { return this.reverseElement.width(); };
	this.setReverseElementWidth = function(width) { this.reverseElement.width(width); };
	this.baseline = baselineElement;
	this.baselineWidth = function () { return this.baseline.width(); };
	this.maximumWidth = null
	this.minimumWidth = null;
	this.setMaximumWidth = function(maximum) { this.maximumWidth = maximum};
	this.resetMaximumWidth = function() { this.maximumWidth = this.baselineWidth()*0.75;};
	this.setMinimumWidth = function(minimum) { this.minimumWidth = minimum};
	this.resetMinimumWidth = function() { 
		if(this.toggleElement !== null) {
			this.minimumWidth = this.toggleElementWidth();
		} else {
			this.minimumWidth = this.baselineWidth()*0.02;
		}
	};
	this.handles = "e";
	
	this.toggleElement = null;
	this.toggleElementWidth = function () { return this.toggleElement.width(); };
	this.setToggleElement = function(element) { this.toggleElement = element; }
	this.toggleElementVisibleStyle = "buttonOpened";
	this.toggleElementHiddenStyle = "buttonClosed";
	this.setToggleOpeningState = function() { this.toggleElement.addClass(this.toggleElementHiddenStyle); this.toggleElement.removeClass(this.toggleElementVisibleStyle); };
	this.setToggleClosingState = function() { this.toggleElement.addClass(this.toggleElementVisibleStyle); this.toggleElement.removeClass(this.toggleElementHiddenStyle); };
	this.setToggleState = function() {
		if(this.sidebarWidth() > this.toggleElementWidth()) {
			this.setToggleClosingState();
		} else {
			this.setToggleOpeningState();
		}
	}
	this.toggle = function() {
		if(this.toggleElement === null) {
			return false;
		} else {
			if(this.sidebarWidth() > this.toggleElementWidth()) {
				this.setSidebarWidth(this.toggleElementWidth()-1);
			} else {
				this.setSidebarWidth(this.baselineWidth()*0.22);
			}
			this.setToggleState();
			this.reloadPane();
		}
	}
	
	this.lastSideBarWidthSetting = "cust_last_sidebar_width"+this.sidebar.reverseWidthElementName;
	this.saveSidebarWidth = function () { saveSetting(this.lastSideBarWidthSetting, this.sidebarWidth(), false); };
	
	this.reloadPane = function() {/* Function to reset pane sizes after page change or sidebar toggle */
		
		if(!this.sidebar.is(":visible")) {
			return false;/* Hidden, so do nothing. */
		}
		
		/* Set maximum width */
		this.resetMaximumWidth();
		this.resetMinimumWidth();
		this.sidebar.resizable({maxWidth: this.maximumWidth, minWidth: this.minimumWidth});
		
		if(this.baselineWidth() != (this.sidebarWidth() + this.reverseWidth())) {
			if(this.sidebarWidth() > this.baselineWidth()) {
				this.sidebar.width(this.maximumWidth);
			}
			
			this.reverseElement.width(this.baselineWidth() - this.sidebarWidth());
		}
		this.saveSidebarWidth();
		this.setToggleState();		
	}
	
	this.resetMaximumWidth();
	this.resetMinimumWidth();
	this.sidebar.resizable({alsoResizeReverseWidth: this.reverse, handles: this.handles, maxWidth: this.maximumWidth});
	
}
function setLastSidebarWidth(width, arg1, arg2) {
	if(width != "") {
		desktopSidebar.setSidebarWidth(width);
		desktopSidebar.reloadPane();
	}
}
function setSidebarCSHRunCheck(alreadyrunning, a, b) {
	return false;
	if(alreadyrunning == "") {
		saveSetting(sidebarCSHRunCheck, 'already_running', false);
		readSetting(RHCSHMODE, sidebarCSHCall);
	}
}
function sidebarCSHCall(cshmode, a, b) {/* Auto hide sidebar in CSH call */
	if(cshmode == CSHMODE) {
		if(showSidebarInCSHMode === false) {
			desktopSidebar.toggle();
		}
	}
}
/*************
	
	Tab buttons

************/
function tabButtonEvent(tabs) {
	$("li", tabs).each(function(){
		var img = $("img.normal", $(this));

		if($(this).attr("class") == "wTab") {
			hoverWidgetButton($(this), 'unhover');
		} else {
			hoverWidgetButton($(this), 'hover');
		}
	});
}
/*************
	
	Saving the last visited topic

************/
function setTopic() {
	/*var url = document.location.toString(),
		hashString = rh._.extractHashString(url);
	if(!hashString || -1 === hashString.search('ux=search')) {
		saveSetting(lastVisitedTopic, url, false);
		changeTopicLink(url);
	}*/
	
	
	
	
git = false;
stop = true; 
  
setTimeout(function() { 
  
   if(window.myScroll){ 
 
      window.myScroll.scrollto(curr_index);
   
   }
   //git =true;
   stop = false; 
			
}, 300);
 
	
	
	
	
	
	
	
}
function changeTopicLink(url, arg1, arg2) {/* Amend return link. Change default topic to last visited topic. */
	if(url != "") {
		$("a.back_to_last_topic").attr("href", url);
	}
}
/*************
	
	Turn checkboxes into sliders

************/


function toggleCheckbox(jj){

if(jj == 'checkbox_id1'){
document.getElementById("checkbox_id4").disabled = true;
$('#switch_checkbox_id4').addClass('disabled');
}
else{
document.getElementById("checkbox_id4").disabled = false;

$('#switch_checkbox_id4').removeClass('disabled');

}
}






function setCheckBoxes() {
	/* 
		Credit for On/Off switch logic: http://blog.dbrgn.ch/2011/11/21/jquery-checkbox-on-off-toggleswitch/
		
		Method is shared under Creative Commons license Attribution-ShareAlike 3.0 Unported - http://creativecommons.org/licenses/by-sa/3.0/
		
	*/
	$('.switch').each(function() {
		var checkbox = $(this).children('input[type=checkbox]');
		var toggle = $(this).children('label.switch-toggle');
		if (checkbox.length) {
			
			checkbox.addClass('hidden');
			toggle.removeClass('hidden');
			//alert(checkbox[0].checked);
			if (checkbox[0].checked) {
				toggle.addClass('on');
				toggle.removeClass('off');
				//toggle.text(toggle.attr('data-on'));
			    toggle.html('<img src="template/Theme3_Black/chktruebox.png">');
			
			} else { 
				toggle.addClass('off');
				toggle.removeClass('on');
				//toggle.text(toggle.attr('data-off'));
				toggle.html('<img src="template/Theme3_Black/chkfalsebox.png">');
				
				
			};
		}
	});
	
	$('.switch2').each(function() {
		var checkbox = $(this).children('input[type=radio]');
		var toggle = $(this).children('label.switch-toggle2');
		if (checkbox.length) {
			
			checkbox.addClass('hidden');
			toggle.removeClass('hidden');
			//alert(checkbox[0].checked);
			if (checkbox[0].checked) {
				toggle.addClass('on');
				toggle.removeClass('off');
				//toggle.text(toggle.attr('data-on'));
				toggle.html('<img src="template/Theme3_Black/chktrue.png">');
			
			} else { 
				toggle.addClass('off');
				toggle.removeClass('on');
				toggle.text(toggle.attr('data-off'));
				
			};
		}
	});
	
	
	$('.switch-toggle').click(function(){
		
		var checkbox = $(this).siblings('input[type=checkbox]')[0];
		var toggle = $(this); 
		//alert(checkbox.checked);
		if (checkbox.disabled == false) {
		
		if (checkbox.checked) {
			toggle.addClass('off');
			toggle.removeClass('on');
			//toggle.text(toggle.attr('data-off'));
			toggle.html('<img src="template/Theme3_Black/chkfalsebox.png">');
			
			checkbox.checked = false;
		} else {
			checkbox.checked = true;
			toggle.addClass('on');
			toggle.removeClass('off');
			//toggle.text(toggle.attr('data-on'));
			toggle.html('<img src="template/Theme3_Black/chktruebox.png">');
			

		}
		}
	});
	
	
	
	
	$('.switch-toggle2').click(function(){
		
		var checkbox = $(this).siblings('input[type=radio]')[0];
		var toggle = $(this); 
		//alert(checkbox.checked);
		if (checkbox.checked) {
			//toggle.addClass('off');
			//toggle.removeClass('on');
			//toggle.text(toggle.attr('data-off'));
			//checkbox.checked = false;
			
		} else {
			//checkbox.checked = true;
			//$('.switch-toggle2').removeClass('on');
			$('.switch-toggle2').addClass('off');
			$('.switch-toggle2').text(toggle.attr('data-off'));
			
			
			toggle.addClass('on');
			toggle.removeClass('off');
			//toggle.text(toggle.attr('data-on'));
			toggle.html('<img src="template/Theme3_Black/chktrue.png">');
		}
	});
	
	
}
/*************
	
	Helper functions

************/
var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      //Ignore
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();
/*************
	
	jQueryUI plugins

************/
$.ui.plugin.add("resizable", "alsoResizeReverseWidth", {

	start: function () {
		var that = $(this).data("ui-resizable"),
			o = that.options,
			_store = function (exp) {
				$(exp).each(function() {
					var el = $(this);
					el.data("ui-resizable-alsoresize-reverse", {
						width: parseInt(el.width(), 10), height: parseInt(el.height(), 10),
						left: parseInt(el.css("left"), 10), top: parseInt(el.css("top"), 10)
					});
				});
			};

		if (typeof(o.alsoResizeReverseWidth) === "object" && !o.alsoResizeReverseWidth.parentNode) {
			if (o.alsoResizeReverseWidth.length) { o.alsoResizeReverseWidth = o.alsoResizeReverseWidth[0]; _store(o.alsoResizeReverseWidth); }
			else { $.each(o.alsoResizeReverseWidth, function (exp) { _store(exp); }); }
		}else{
			_store(o.alsoResizeReverseWidth);
		}
	},

	resize: function (event, ui) {
		
		var that = $(this).data("ui-resizable"),
			o = that.options,
			os = that.originalSize,
			op = that.originalPosition,
			delta = {
				height: (that.size.height - os.height) || 0, width: (that.size.width - os.width) || 0,
				top: (that.position.top - op.top) || 0, left: (that.position.left - op.left) || 0
			},

			_alsoResizeReverseWidth = function (exp, c) {
				$(exp).each(function() {
					var el = $(this), start = $(this).data("ui-resizable-alsoresize-reverse"), style = {},
						/* Only resize the width of the element. */
						//css = c && c.length ? c : el.parents(ui.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
						css = c && c.length ? c : el.parents(ui.originalElement[0]).length ? ["width"] : ["width", "left"];

					$.each(css, function (i, prop) {
						var sum = (start[prop]||0) - (delta[prop]||0);
						if (sum && sum >= 0) {
							style[prop] = sum || null;
						}
					});

					el.css(style);
				});
			};

		if (typeof(o.alsoResizeReverseWidth) === "object" && !o.alsoResizeReverseWidth.nodeType) {
			$.each(o.alsoResizeReverseWidth, function (exp, c) { _alsoResizeReverseWidth(exp, c); });
		}else{
			_alsoResizeReverseWidth(o.alsoResizeReverseWidth);
		}
	},

	stop: function () {
		$(this).removeData("resizable-alsoresize-reverse");
	}
});






var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
eventer(messageEvent,function(e) {

    var eventName = e.data[0];
    var data = e.data[1];
	var data2 = e.data[2];
    data2= get_current_url(data2);
	switch(eventName) {
    
	case 'modal_display':
	if(data == "show"){
	   
	   link_disable = true;
	   e.source.postMessage(["link_disable","true"], "*");
	   document.getElementsByClassName("modal")[0].style.display = 'block';
	   //$("#myModal").show() ;
	   //$("body,html").css({'overflow' : 'hidden'});
	   document.documentElement.style.overflow = "hidden";
	   document.body.style.overflow = "hidden";
	}
	break;
	case 'image_url':
	   //$("#img01").attr("src",data);
       document.getElementById('img01').src = data;	   
	break;
	break;case 'loading': 
    if(data == "stop"){
	   document.getElementsByClassName("loading2")[0].style.display = 'none';
	
if(!document.getElementById("iframe").classList.contains("rh-hide")){


setTimeout(function() { 
	
	
	if ('scrollRestoration' in history) {
		//alert();
  // Back off, browser, I got this...
 // history.scrollRestoration = 'manual';
  //window.history.replaceState("", '', '')
//history.pushState("", "", location.href.replace(/(.*?)(\&|#)ux\=(search|bookmark)(.*?)(&([^"]*)|$)/mg, "$1"));		 

}


			 }, 1000);

}


  	


  
		

	 
	}else{
	   document.getElementsByClassName("loading2")[0].style.display = 'block';
	}
	break;
	case 'get_ifram_location_href': 
	 location.href = data;
	break;
	case 'get_href': 
	 e.source.postMessage(["send_href",document.location.href], "*");
	break;
	case 'check_highlight_state': 
	
	     var chkBox = document.getElementById('checkbox_id3');
         if (chkBox.checked)
         {e.source.postMessage(["check_highlight_state","true"], "*");}
         else
		 {e.source.postMessage(["check_highlight_state","false"], "*");}
	

	
	break;
	case 'hide_drop': 
	if(data == "hide_drop"){ 
       var dropdowns = document.getElementsByClassName("dropdown-content");
       var i;
       for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
         if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
         }
       }
    }		
	break;
	case 'send_page_info':
	
	
	
	
	
	
	if(lsTest() === true){
		document.getElementById("websiteName").value = data; 
	document.getElementById("websiteUrl").value = data2;
	showclear2();
	 var  jj = document.getElementsByClassName("bar_index");
	 
	 if(localStorage.getItem('bookmarks') != null){
	 	   
		     var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	        

			
			if(bookmarks.length == "0"){
		    $('#bookm').attr("class", "bar_index");
			$('#bookm').removeAttr( "style" );
			$('#booknormal').attr("src","template/Theme3_Black/index_buttonbar.png");

			}
			else{
			
			for(var i = 0; i < bookmarks.length; i++){

			 
		    if(bookmarks[i].url == data2){
	       
		     $('#booknormal').attr("src","template/Theme3_Black/index_buttonbar_booked_small.png");
			
			//$('.bar_index').css("background-image", "url(template/Theme3_Black/index_buttonbar_booked.png");
			$('#bookm').attr("class", "bar_index_book");

 
			   break;
		    }
			else{
			//alert();
            $('#bookm').attr("class", "bar_index").removeAttr( "style" );
		
			$('#booknormal').attr("src","template/Theme3_Black/index_buttonbar.png");
			  
			}
			}
			
			
			}
			
	}
	fetchBookmarks(data2);
	
	}
	else{
  
	var ll = document.getElementById('tocold');
    ll.innerHTML = '<br><div style = "text-Align:center;padding:4px;color:red;font-size:20px">متصفحك لايدعم خاصية حفظ روابط الموسوعة في المفضلة</div>';
	}
	
	
	break;
	case 'get_pass':
	var c = window.location.href;
    if (c.match(/[^"]*(\#|\?|\&|\#\&)pass\=(.*?)((&|#)([^"]*)|$)/mg)) {
			var ff = c.replace(/[^"]*(\?|\&|\#\&)pass\=(.*?)((&|#)([^"]*)|$)/mg, "$2");
			e.source.postMessage(["send_pass",ff], "*");
			
     }
	 else{
	        e.source.postMessage(["send_pass",""], "*");
	}
	break;
	case 'put_pass_in_adbr':
	var dd= location.hash;
	if (dd.match(/[^"]*\&rhsearch\=(.*?)((&|#)([^"]*)|$)/mg) ) {
		if (!location.hash.match(/(.*?)((\?|\&|\#\&)pass\=(.*?))(#([^"]*)|$)/mg) )
		{
			location.hash = location.hash+"&pass="+data;	
		}
		
		//location.hash = location.hash+"&pass="+data;	
	}
	else{
		var cc= location.hash.replace(/(.*?)((\?|\&|\#\&)pass\=(.*?))(#([^"]*)|$)/mg, "$1$5");
		location.hash = cc+"&pass="+data;
	}
	return false;
	break;
	
	
}
},false);

