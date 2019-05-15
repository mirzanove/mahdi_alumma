var link_disable = false;
var scrolling = false;
var elts = document.getElementsByTagName('div');




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




if (document.getElementById("checkbox_id1").checked){
document.getElementById("checkbox_id4").disabled = true;

}
else{

document.getElementById("checkbox_id4").disabled = false;

}


function toggleCheckbox(jj){

if(jj == 'checkbox_id1'){
document.getElementById("checkbox_id4").disabled = true;
}
else{
document.getElementById("checkbox_id4").disabled = false;
}
}


function toggleNDmode(e){

 var dropdowns = document.getElementsByClassName("dropdown-content");
       var i;
       for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
         if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
         }
       }

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
	



window.addEventListener("orientationchange", function() {


if (typeof window.orientation !== 'undefined') { 

if (window.matchMedia("(orientation: landscape)").matches) {

document.getElementById("myDropdown").style.overflowY = "hidden";
document.getElementById("myDropdown").style.height = "auto";

}
else{

document.getElementById("myDropdown").style.overflowY = "scroll";
document.getElementById("myDropdown").style.height = "200px";

}


}


}, false);




if (typeof window.orientation !== 'undefined') { 

if (window.matchMedia("(orientation: landscape)").matches) {

document.getElementById("myDropdown").style.overflowY = "scroll";
document.getElementById("myDropdown").style.height = "200px";


}
else{

document.getElementById("myDropdown").style.overflowY = "hidden";
document.getElementById("myDropdown").style.height = "auto";

}
}




function showdropdown() {
	    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {

  var target = event ? event.target : window.event.srcElement;
  //alert(target.className);
  if (target.className !='plus'&& target.className!='drop') {
    
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

var show = function() { 

//alert(link_disable); 
if(link_disable == true){
			return false;
		}

}
for (var i = elts.length - 1; i >= 0; --i) {
    elts[i].onclick = show;
}

var toc = document.getElementById('toc');

var three = document.getElementById('three2');

function scrollTo_up(){
//myScroll.scrollto();

document.getElementsByClassName("loading2")[0].style.display = 'block';
three.scrollTop = 0;
setTimeout(function() { document.getElementsByClassName("loading2")[0].style.display = 'none'}, 50);
}


function gotoBottom(id){
   var element = document.getElementById(id);
   element.scrollTop = element.scrollHeight - element.clientHeight;
}

function scrollTo_down(){

document.getElementsByClassName("loading2")[0].style.display = 'block';

//gotoBottom("three2");

//three.scrollTop = 400000000;

setTimeout(function() {
 gotoBottom("three2");
 document.getElementsByClassName("loading2")[0].style.display = 'none'}, 200);
}

document.getElementsByClassName("close")[0].addEventListener("click", close_modal);
function close_modal(){
document.getElementsByClassName("modal")[0].style.display = 'none';
setTimeout(function() { 
			  link_disable = false;
			  document.getElementById('iframe').contentWindow.postMessage(["link_disable","false"], "*");
			  }, 1000);

//document.documentElement.style.overflow = "auto";
//document.body.style.overflow = "auto";
}

/*toc.addEventListener("scroll", scroll_toc);
function scroll_toc(){
if(element.scrollHeight - element.scrollTop === element.clientHeight) {
alert("");
}}*/






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

function  go_topic(){

}

function chkbookmark(thiss){
if(thiss.className == "toc active"){
setTimeout(function() { 
			 
			   document.getElementById('iframe').contentWindow.postMessage(["get_ifram_location_href2",null], "*");
			  
			 }, 300);

}
}


	var textInput = document.getElementById('wSearch'),textInput2 = document.getElementById('websiteName'),
		clearBtn = document.getElementById('clear'),clearBtn2 = document.getElementById('clear2');
	
	// Hide the clear button on click, and reset the input value
	clearBtn.onclick = function() {
		this.style.visibility = "hidden";
		textInput.value = "";
	};
	
	clearBtn2.onclick = function() {
		this.style.visibility = "hidden";
		textInput2.value = "";
	};

textInput.addEventListener("input",function () {
  if (textInput.value.length == 0) {
	  
       clearBtn.style.visibility =  "hidden" ;
  }
  else{
	
	 clearBtn.style.visibility =  "" ; 
  }
})


function showclear2(input) {

var textInput = document.getElementById('websiteName'),
		clearBtn2 = document.getElementById('clear2');
		
if (document.getElementById("websiteName").value.length >= 1) {

		if(clearBtn2){
			
				clearBtn2.style.visibility = (textInput.value.length) ? "visible" : "hidden";
		}     
}

if (document.getElementById("websiteName").value.length < 1) {

		if(clearBtn2){
			
				clearBtn2.style.visibility =  "hidden";
		} 
	 
}


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


/*
history.pushState(null, null, window.location.href);
window.addEventListener('popstate', function(event) {
    if (event.state) {
        alert('!');
    }
}, false);*/






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
	//showclear2();
    if(localStorage.getItem('bookmarks') != null){
	 	   
		     var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	        

			
			if(bookmarks.length == "0"){
			document.getElementsByClassName("toc")[0].removeAttribute("style");
			}
			else{
			
			for(var i = 0; i < bookmarks.length; i++){

			 
		    if(bookmarks[i].url == get_current_url(data2)){
			   
               document.getElementsByClassName("toc")[0].setAttribute("style", "background-image: url(template/Charcoal_Grey/booked.png);");
  
			   break;
		    }
			else{
			
			   document.getElementsByClassName("toc")[0].removeAttribute("style");
			}
			}
			
			
			}
			
	}
   
   
   
 fetchBookmarks(data2);  
 
	if (textInput.value.length == 0) {
       clearBtn.style.visibility =  "hidden" ;
    }
  
   
}else{
 
   var gg = document.getElementById('toc');
   gg.innerHTML = '<br><br><div style = "text-Align:center;padding:4px;color:red;font-size:20px">متصفحك لايدعم خاصية حفظ روابط الموسوعة في المفضلة</div>';
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

       if(data){
		
		window.location.href = pur_link+"%23"+data+paramters;
	
	}else{
	
	  window.location.href = pur_link+paramters;
	  //location.reload();
	  return false;
	}
     break;
	 case 'saveCurrrURL':

	 localStorage.setItem("currURL", window.location.href);
	 break;
	 case 'gofull':

	toggfullScreen.call(); 
	 break;
	
}
},false);

	
function printIFrameContent()
{      
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf ("MSIE ");
  var iframe = document.getElementById("iframe");

  if (msie > 0) {
      iframe.contentWindow.document.execCommand('print', false, null);
  } else {
      iframe.contentWindow.print();
  }
}
//printIFrameContent();









	