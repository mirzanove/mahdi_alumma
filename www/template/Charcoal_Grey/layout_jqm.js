
var link_disable = false;
var elts = document.getElementsByTagName('div');
$(document).on( "pagecontainershow", function(){
   //ScaleContentToDevice();
    
    $(window).on("resize orientationchange", function(){
     
	// ScaleContentToDevice();
if (typeof window.orientation !== 'undefined') { 

if (window.matchMedia("(orientation: landscape)").matches) {
$('#popupMenu2').css('overflow-y', 'scroll');
$('#popupMenu2').css('height', '235px');
}
else{
$('#popupMenu2').css('overflow-y', 'hidden');
$('#popupMenu2').css('height', 'auto');	
}
}

    })
});
function ScaleContentToDevice(){
 
	scroll(0, 0);
	if(!$('#one').hasClass("hide"))
    {
	
var screen = $.mobile.getScreenHeight();
var header = $("#home_header").hasClass("ui-header-fixed") ? $("#home_header").outerHeight() - 1 : $("#home_header").outerHeight();
var footer = $("#home_footer").hasClass("ui-footer-fixed") ? $("#home_footer").outerHeight() - 1 : $("#home_footer").outerHeight();
var contentCurrent = $(".ui-contentt").outerHeight() - $(".ui-contentt").height();
var content = screen - header - footer - contentCurrent;
$(".ui-contentt").height(content);
	
    }
else if(!$('#two').hasClass("hide")){
	
var screen = $.mobile.getScreenHeight();
var header = $("#toc_header").hasClass("ui-header-fixed") ? $("#toc_header").outerHeight() - 1 : $("#toc_header").outerHeight();
var footer = $("#toc_footer").hasClass("ui-footer-fixed") ? $("#toc_footer").outerHeight() - 1 : $("#toc_footer").outerHeight();
var contentCurrent = $(".ui-content").outerHeight() - $(".ui-content").height();
var content = screen - header - footer - contentCurrent;
$(".ui-content").height(content);
	
	
	}
else if(!$('#three').hasClass("hide")){
var screen = $.mobile.getScreenHeight();
var header = $("#search_header").hasClass("ui-header-fixed") ? $("#search_header").outerHeight() - 1 : $("#search_header").outerHeight();
var footer = $("#search_footer").hasClass("ui-footer-fixed") ? $("#search_footer").outerHeight() - 1 : $("#search_footer").outerHeight();
var contentCurrent = $(".ui-content").outerHeight() - $(".ui-content").height();
var content = screen - header - footer - contentCurrent;
$(".ui-content").height(content);
	}
}


function toggleNDmode(e){

$('.ui-popup').popup('close');

if(localStorage.getItem("NDmode")){
	
if(localStorage.getItem("NDmode")=="night"){
	
localStorage.setItem("NDmode", "daylight");
	
}
else{
	
localStorage.setItem("NDmode", "night");
	
}
document.getElementsByClassName("loading2")[0].style.display = 'block';
location.reload();	
}
else{
document.getElementsByClassName("loading2")[0].style.display = 'block';
localStorage.setItem("NDmode", "night");
location.reload();	
	
}
	
}






$(document).ready(function(){


if (typeof window.orientation !== 'undefined') { 

if (window.matchMedia("(orientation: landscape)").matches) {
$('#popupMenu2').css('overflow-y', 'scroll');
$('#popupMenu2').css('height', '235px');
}
else{
$('#popupMenu2').css('overflow-y', 'hidden');
$('#popupMenu2').css('height', 'auto');	
}

}

	
if(localStorage.getItem("NDmode")){	
if(localStorage.getItem("NDmode")=="night"){

document.getElementById('NDmode').innerHTML="تعيين التصفح الصباحي";	
	
}
else{


document.getElementById('NDmode').innerHTML="تعيين التصفح الليلي";
	
}
}
else{

document.getElementById('NDmode').innerHTML="تعيين التصفح الليلي";	

	
}




if (typeof process !== "undefined" && typeof require !== "undefined") {

var isScrolling;
var stopacrolld = true;
var stopacrollu = true;
var myVar;
var myVar2;


  
document.getElementById('three2').addEventListener('wheel',function (event){
  
   
	
	console.log( 'Scrolling' );
	// Clear our timeout throughout the scroll
	window.clearTimeout( isScrolling );
	
	    var delta;

        if (event.wheelDelta){
            delta = event.wheelDelta;
        }else{
            delta = -1 * event.deltaY;
        }

        if (delta < 0){
           //console.log(event.deltaY);
			if (event.deltaY > 0)
            {       myStopFunctionu();
                    event.preventDefault();
                    stopacrolld = false;
					stopacrollu = true;
	                smoothScrolld(document.getElementById('three2'),50,200)
            }
        }else if (delta > 0){
            //console.log(event.deltaY);
			if (event.deltaY < 0)
            {
			        myStopFunctiond();
                    event.preventDefault();
                    stopacrolld = true;
					stopacrollu = false;
	                smoothScrollu(document.getElementById('three2'),50,200)
			}
            
        }
	
	
    
	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {

		// Run the callback
		//console.log( 'Scrolling has stopped.' );
		//stopacroll = true;
		myStopFunctiond();
		myStopFunctionu();

	}, 400);
  
  
})

function myStopFunctiond() {
  clearTimeout(myVar);
  stopacrolld = true;
}

function myStopFunctionu() {
  clearTimeout(myVar2);
  stopacrollu = true;
}

function smoothScrolld(domElement,pixel,delay)
{

  const intervalToRepeat = 25;
  const step = (intervalToRepeat * pixel) / delay;
  //console.log(step);
  
  if ( step < pixel)
  {
    
    
	
	 if(stopacrolld == false){
	  domElement.scrollTop += step;
	 myVar = setTimeout(function (){
	 //console.log("hhhh"); 
     if(stopacrolld == false){
	 smoothScrolld(domElement,pixel - step,delay)
	 }
	
    },intervalToRepeat);
	}
	
  } 
}
function smoothScrollu(domElement,pixel,delay)
{

  const intervalToRepeat = 25;
  const step = (intervalToRepeat * pixel) / delay;
  //console.log(step);
  
  if ( step < pixel)
  {
    
    
	
	 if(stopacrollu == false){
	  domElement.scrollTop -= step;
	 myVar2 = setTimeout(function (){
	 //console.log("dddddd"); 
      if(stopacrollu == false){
	 smoothScrollu(domElement,pixel - step,delay)
	  }
	
    },intervalToRepeat);
	}
	
  } 
}


}



if (typeof process !== "undefined" && typeof require !== "undefined") {
	
	
                function copyToClipboard(text) {
                    var dummy = document.createElement("input");
                    document.body.appendChild(dummy);
                    dummy.setAttribute('value', text);
                    dummy.select();
                    document.execCommand("copy");
                    document.body.removeChild(dummy);
                }

                var el;

                function isEditable() {
                    el = document.activeElement; // focused element
                    if (el && ~['input', 'textarea'].indexOf(el.tagName.toLowerCase())) {
                        return !el.readOnly && !el.disabled;
                    }
                    el = getSelection()
                        .anchorNode; // selected node
                    if (!el) return undefined; // no selected node
                    el = el.parentNode; // selected element
                    return el.isContentEditable;
                }

                document.addEventListener("contextmenu", function (e) {
                   
                    
					//win.enterFullscreen();
					var gui = require('nw.gui');
					var menu = new gui.Menu();
                    e.preventDefault();
                    e.stopPropagation();
                    var link = this.href;
                    var clipboard = gui.Clipboard.get();
                    var text = clipboard.get('text');


                    var ff = false;
                    var showcntx = false;
                    var link = this.href;
                    for (var target = e.target; target && target != this; target = target.parentNode) {
                        // loop parent nodes from the target to the delegation node
                       
					   if (target.matches("A")) {

                            if (target.href != "") {

                                menu.append(new gui.MenuItem({
                                    label: 'Open in browser'
                                    , click: function (e) {
                                        //gui.Shell.openExternal(target.href);
									    gui.Shell.openItem(decodeURIComponent(target.href));
                                        
                                    }
                                }));
                                menu.append(new gui.MenuItem({
                                    label: 'Copy link address'
                                    , click: function (e) {
                                        copyToClipboard(target.href)
                                    }
                                }));
                                showcntx = true;

                            }

                            if (window.getSelection() != "") {

                                menu.append(new gui.MenuItem({
                                    label: "Copy"
                                    , click: function () {
                                        document.execCommand("copy");
                                    }
                                }));

                                showcntx = true;
                            }



                            ff = true;
                            break;

                        }
                    }
                    if (ff == false) {
                        for (var target = e.target; target && target != this; target = target.parentNode) {
                            if (target.matches("Div")) {

                                console.log(target.getAttribute("href"));

                                if ((target.getAttribute("href") != "") && (target.getAttribute("href") != null)) {

                                    menu.append(new gui.MenuItem({
                                        label: 'Open in browser'
                                        , click: function (e) {
                                            //gui.Shell.openExternal(target.getAttribute("href"));
											gui.Shell.openItem(decodeURIComponent(target.getAttribute("href")));
                                        }
                                    }));
                                    menu.append(new gui.MenuItem({
                                        label: 'Copy link address'
                                        , click: function (e) {
                                            copyToClipboard(target.getAttribute("href"))
                                        }
                                    }));
                                    showcntx = true;

                                }




                                if (window.getSelection() != "") {
                                    menu.append(new gui.MenuItem({
                                        label: "Copy"
                                        , click: function () {
                                            document.execCommand("copy");
                                        }
                                    }));

                                    if (isEditable() == true) {
                                        menu.append(new gui.MenuItem({
                                            label: "Cut"
                                            , click: function () {
                                                document.execCommand("cut");
                                            }
                                        }));
                                    }

                                    showcntx = true;
                                }

                                if (isEditable() == true) {

                                    if (text != "") {

                                        menu.append(new gui.MenuItem({
                                            label: "Paste"
                                            , click: function () {
                                                document.execCommand("paste");
                                            }

                                        }));
                                        showcntx = true;
                                    }


                                }



                                break;
                            }
                        }
                    }



                    if (showcntx == true) {
						//consol
                        menu.popup(e.clientX, e.clientY);
                    }

                }, false);

}







$("#websiteName").parent(".ui-input-search").addClass('hidesaerchico');


/*$(document).on('click','.wSearchResultTitle',function(){
	 var $links = $('.wSearchResultTitle');
	 $links.removeClass('curr');
	 $(this).addClass('curr');
	 
})*/
var show = function() { 
//alert(link_disable); 
if(link_disable == true){
			return false;
		}
}
for (var i = elts.length - 1; i >= 0; --i) {
    elts[i].onclick = show;
}
 
//alert(document.location.href.includes("&checkbox=0"));
 
if (document.location.href.indexOf("&checkbox=00")!= -1){
$('#checkbox_id1').prop('checked', false).checkboxradio('refresh');
$('#checkbox_id0').prop('checked', true).checkboxradio('refresh');
$('#checkbox_id2').prop('checked', false).checkboxradio('refresh');
$('#checkbox_id4').prop('checked', true).checkboxradio('refresh');
}
if (document.location.href.indexOf("&checkbox=01")!= -1){
$('#checkbox_id1').prop('checked', false).checkboxradio('refresh');
$('#checkbox_id0').prop('checked', true).checkboxradio('refresh');
$('#checkbox_id2').prop('checked', false).checkboxradio('refresh');
$('#checkbox_id4').prop('checked', false).checkboxradio('refresh');
}
if (document.location.href.indexOf("&checkbox=1")!= -1){
$('#checkbox_id1').prop('checked', true).checkboxradio('refresh');
$('#checkbox_id0').prop('checked', false).checkboxradio('refresh');
$('#checkbox_id2').prop('checked', false).checkboxradio('refresh');
} 
 
if (document.location.href.indexOf("&checkbox=20")!= -1){
$('#checkbox_id1').prop('checked', false).checkboxradio('refresh');
$('#checkbox_id0').prop('checked', false).checkboxradio('refresh');
$('#checkbox_id2').prop('checked', true).checkboxradio('refresh');
$('#checkbox_id4').prop('checked', true).checkboxradio('refresh');
}  
if (document.location.href.indexOf("&checkbox=21")!= -1){
$('#checkbox_id1').prop('checked', false).checkboxradio('refresh');
$('#checkbox_id0').prop('checked', false).checkboxradio('refresh');
$('#checkbox_id2').prop('checked', true).checkboxradio('refresh');
$('#checkbox_id4').prop('checked', false).checkboxradio('refresh');
}  
 
 
 
if (document.getElementById("checkbox_id1").checked){
$('#checkbox_id4').checkboxradio('disable');
}
else{
$('#checkbox_id4').checkboxradio('enable');
}
$('#checkbox_id1').on('click', function () {
  $('#checkbox_id4').checkboxradio('disable');
});
$('#checkbox_id0,#checkbox_id2').on('click', function () {
  $('#checkbox_id4').checkboxradio('enable');
});
	   $("div.toc-holder li").removeClass("ui-li-static").removeClass("ui-body-inherit").removeClass("ui-last-child");
		
		 $(".close").on("vclick", function(){
		      $(".modal").hide();
			  
			  setTimeout(function() { 
			  link_disable = false;
			  document.getElementById('iframe').contentWindow.postMessage(["link_disable","false"], "*");
			  }, 1000);
         });
		
		//$('a[data-icon=mapa]').addClass('.ui-icon-mapa');
		//$('a[data-icon=mapa2]').addClass('.ui-icon-mapa2');
	
		
});//end ready
function  go_topic(){
}
var content = document.getElementById('two');
function scrollTo_up(){
document.getElementsByClassName("loading2")[0].style.display = 'block';
content.scrollTop = 0;
setTimeout(function() { document.getElementsByClassName("loading2")[0].style.display = 'none'}, 50);
}
function scrollTo_down(){
document.getElementsByClassName("loading2")[0].style.display = 'block';
content.scrollTop = content.scrollHeight;
setTimeout(function() { document.getElementsByClassName("loading2")[0].style.display = 'none'}, 50);
}





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
	   $("#myModal").show() ;
	   $("body,html").css({'overflow' : 'hidden'});  
	}
	break;
	case 'image_url':
	   $("#img01").attr("src",data); 
	break;
	break;case 'loading': 
    if(data == "stop"){
	   document.getElementsByClassName("loading2")[0].style.display = 'none';
	   show_loading = false;
	 
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
	case 'check_stopwordhit_state': 
	     var chkBox = document.getElementById('checkbox_id4');
         if (chkBox.checked)
         {e.source.postMessage(["check_stopwordhit_state","true"], "*");}
         else
		 {e.source.postMessage(["check_stopwordhit_state","false"], "*");}
	break;
	case 'hide_drop': 
	if(data == "hide_drop"){ 
      $('.ui-popup').popup('close');
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
	case 'send_page_info':
	
	if(lsTest() === true){
	document.getElementById("websiteName").value = data; 
	document.getElementById("websiteUrl").value = data2;

	 if(localStorage.getItem('bookmarks') != null){
	 	   
		     var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	        
			
			if(bookmarks.length == "0"){
			
			      if(document.getElementsByClassName("toc_footer")[0]){
	                       $(".toc_footer").removeClass('star_yellow').addClass("ui-icon-star");
	               }
			}
			else{
			
			for(var i = 0; i < bookmarks.length; i++){
			 
		    if(bookmarks[i].url == get_current_url(data2)){
			   
               
			   
			   $(".tabButton").on("click", function(){
                     var href = $(this).prop("href");
                      if(href.substr(href.indexOf('#')) === "#two"){
					    $(this).removeClass('ui-icon-star').addClass("star_yellow");
					  }
               });
			   $(".toc_footer").removeClass('ui-icon-star').addClass("star_yellow");
			   break;
		    }
			else{
			 if(document.getElementsByClassName("toc_footer")[0]){
	               $(".toc_footer").removeClass('star_yellow').addClass("ui-icon-star");
	            }
			}
			}
			
			
			}
			
	}
	fetchBookmarks(data2);
	}
	else{
	
	var ll = document.getElementById('two');
    ll.innerHTML = '<br><div style = "text-Align:center;padding:4px;color:red;font-size:20px">متصفحك لايدعم خاصية حفظ روابط الموسوعة في المفضلة</div>';
	
	}
	break;
	
	
	case 'get_text':

	//document.getElementById('iframe').contentWindow.postMessage(["get",str], "*");
	break;
	
	case 'gotohash':


var pur_link = window.location.href.split('&')[0];
pur_link = pur_link.split('%23')[0];
var paramters="";

       if(getParameterByName("rhsearch", window.location)){	
		paramters +="&rhsearch="+getParameterByName("rhsearch", window.location);	
	   }
	   
	   if(getParameterByName("rhhlterm", window.location)){	
		paramters +="&rhhlterm="+getParameterByName("rhhlterm", window.location);	
	   }
	   	
	   if(getParameterByName("rhsyns", window.location)){
		paramters +="&rhsyns="+getParameterByName("rhsyns", window.location);	
	   }
	   
	   if(getParameterByName("checkbox", window.location)){
		paramters +="&checkbox="+getParameterByName("checkbox", window.location);	
	   }
	   
	   if(getParameterByName("pass", window.location)){
		paramters +="&pass="+getParameterByName("pass", window.location);	
	   }

      window.location.href = pur_link+"%23"+data+paramters;
     break;
	case 'saveCurrrURL':

	 localStorage.setItem("currURL", window.location.href);
	break;
	
	case 'gofull':

	toggfullScreen.call();
	break;
	
	
	
  }
},false);