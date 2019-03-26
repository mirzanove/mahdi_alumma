
var posttopid;

function enable_select_text(xx){
var x= jQueryD_1_4_2(xx);
for(var i=0; i<x.length; i++) {
			makeselectable(x[i]);
}
}


function get_current_url(url){
	
var linkk = window.location.href
var linkk;
if(url){
linkk = url;	
}

//alert(linkk);
var index = linkk.indexOf("index.php/");
var help = linkk.indexOf("/help.html");
  
                if(index != -1) {
                var  link2 = linkk.substring(index, linkk.length);
	          
               }
               else{
	           
			   
			   if(help!= -1){ 
				  var  link2 = "help.html"; 
			   }
			   else{
				  var  link2 = "index.php.htm"; 
			   }
               }

			  if (typeof simplePostMessage !== 'undefined') {
					//simplePostMessage(["get_page_location_href",link2],"*",parent.parent);
              } 

	
return  link2;	
}


var strpass;
var passtext;


///////////////////////////////////////////////////////////////////////////
if(_isMobile() == mobiletrue) {
  
} ////////////////////////////////////////////////////////////////
else {

function childboxes(MainElement, ChildElement){
    
	var loc_target = "";
    var str = document.location.href;
	var dd;
	var gg;
	var extra = window.location.pathname + window.location.search;
    var regex = new RegExp("[&\\?]"+MainElement+'='+ChildElement, 'g');       
    
	if (str.match(/(#td_threadtitle_(.*?))/mg) ) {
	dd= str.replace(/(.*?)((\#)td_threadtitle_(.*?))(#([^"]*)|$)/mg, "$2");

	}
	
	if (str.match(/(#post(.*?))/mg) ) {
	dd= str.replace(/(.*?)((\#)post(.*?))(#([^"]*)|$)/mg, "$2");

	}
	
	
    extra = extra.replace(regex, "");
    extra = extra+ ( extra.indexOf("?") > -1 ? "&" : "?&" ) +MainElement+ '=' +ChildElement;
    window.history.pushState(null, null, extra);
	if(dd){
	location.hash=dd;	
	}
	
}
 
function insertParam(key, value)
{
    key = encodeURI(key); value = encodeURI(value);

    var kvp = document.location.search.substr(1).split('&');

    var i=kvp.length; var x; while(i--) 
    {
        x = kvp[i].split('=');

        if (x[0]==key)
        {
            x[1] = value;
            kvp[i] = x.join('=');
            break;
        }
    }

    if(i<0) {kvp[kvp.length] = [key,value].join('=');}

    //this will reload the page, it's likely better to store this until finished
    document.location.search = kvp.join('&'); 
}

//Get querystring value
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function changeUrl(key,value) {
	var str = document.location.href;
	var dd;
	
	if (str.match(/(#td_threadtitle_(.*?))/mg) ) {
	dd= str.replace(/(.*?)((\#)td_threadtitle_(.*?))(#([^"]*)|$)/mg, "$2");

	}
	
	if (str.match(/(#post(.*?))/mg) ) {
	dd= str.replace(/(.*?)((\#)post(.*?))(#([^"]*)|$)/mg, "$2");

	}
	
//Get query string value
	var searchUrl=location.search;
	if(searchUrl.indexOf("?")== "-1") {
		var urlValue='?'+key+'='+value;
		history.pushState({state:1, rand: Math.random()}, '', urlValue);
		if(dd){
	      location.hash=dd;	
	    }
	}
	else {
		

		
		
		//Check for key in query string, if not present
		if(searchUrl.indexOf(key)== "-1") {
			var urlValue=searchUrl+'&'+key+'='+value;
		}
		else {	//If key present in query string
			oldValue = getParameterByName(key);
			if(searchUrl.indexOf("?"+key+"=")!= "-1") {
				urlValue = searchUrl.replace('?'+key+'='+oldValue,'?'+key+'='+value);
			}
			else {
				urlValue = searchUrl.replace('&'+key+'='+oldValue,'&'+key+'='+value);	
			}
		}
		history.pushState({state:1, rand: Math.random()}, '', urlValue);
		if(dd){
	      location.hash=dd;	
	    }
	}

}


function setCookie(cname, cvalue, exdays) {
    
	var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function updateh1family(savefont) {
        
var selector, family, h1, fonttype;

	    if(savefont== true){

		 
		selector = document.getElementById('selecth1FontFamily');
		family = selector.options[selector.selectedIndex].value;
         h1 = document.getElementById('wrapper')
        h1.style.fontFamily = family; 
		
		}
		else{
		
		if(lsTest() === true){
		fonttype = localStorage.getItem('fonttype'); 
		if(fonttype || fonttype == null){	
		selector = document.getElementById('selecth1FontFamily');
		selector.selectedIndex = fonttype;
		strUser = selector.options[selector.selectedIndex].value;
		h1 = document.getElementById('wrapper')
        h1.style.fontFamily = strUser; 
		jQueryD_1_4_2('.posttext').removeAttr("style");	
		}
		}
		else{
		
		fonttype = getCookie("fonttype");
        if(fonttype || fonttype == null){		
		selector = document.getElementById('selecth1FontFamily');
		selector.selectedIndex = fonttype;
		strUser = selector.options[selector.selectedIndex].value;
		h1 = document.getElementById('wrapper')
        h1.style.fontFamily = strUser; 
		jQueryD_1_4_2('.posttext').removeAttr("style");	
		}
		}
			
		}
		
		
		
		
		if(selector.selectedIndex == 0){
						 /*jQueryD_1_4_2('.posttext').css("font-size","100%");
						 jQueryD_1_4_2('#content ul  > li').css("font-size","100%");
						 jQueryD_1_4_2('#navbar').css("font-size","77%");
						 jQueryD_1_4_2('.thread_title').css("font-size","85%");
						 ///jQueryD_1_4_2('.dropdown-content').css("font-size","0%");*/
						 
						  /*jQueryD_1_4_2('#wrapper').css("font-size",lateefsize+"%");
						  jQueryD_1_4_2('.posttext > div,.posttext > span').css("line-height", normal_hight+"%");*/
						  jQueryD_1_4_2('.posttext > div,.posttext > span').css("line-height", "normal");
						  jQueryD_1_4_2('#wrapper').css("font-size","170%");
						  jQueryD_1_4_2('.posttext').css("font-size","120%");
						 
						 
		             }
					 else{
						 
						 /*jQueryD_1_4_2('.posttext').css("font-size","85%");
						 jQueryD_1_4_2('#content ul  > li').css("font-size","90%");
						 jQueryD_1_4_2('#navbar').css("font-size","65%");
						 jQueryD_1_4_2('.thread_title').css("font-size","70%");*/
						 //jQueryD_1_4_2('.dropdown-content').css("font-size","60%");
						
						 /*jQueryD_1_4_2('#wrapper').css("font-size",othersize+"%");
						 jQueryD_1_4_2('.posttext > div,.posttext > span').css("line-height", safarilinehight+"%");*/
						 jQueryD_1_4_2('.posttext > div,.posttext > span').css("line-height", "140%");
						 jQueryD_1_4_2('#wrapper').css("font-size","135%");
						 jQueryD_1_4_2('.posttext').css("font-size","130%");
		 }
		 
		 
		 if(savefont== true){
		 if(lsTest() === true){
				 
				 localStorage.setItem('fonttype',selector.selectedIndex); 
		 }
		 else{
				
				 setCookie("fonttype", selector.selectedIndex, 1000);
 
		 }
		 }
		

		
}


function autolog(event,hh,pass){
if (typeof encryptedMsg != 'undefined')
{
	
	    
	    if(event == undefined){
			
			
			//alert();
		}
		else{
			 event.preventDefault();
		}
		
		
	    var passphrase;
		if(document.getElementById('staticrypt-password')){
			 if(hh == false){
			
				passphrase = pass;
			 }else{
			   
				 passphrase = document.getElementById('staticrypt-password').value;
				 
			 }
			 
		}
            
            var encryptedHMAC = encryptedMsg.substring(0, 64);
            var encryptedHTML = encryptedMsg.substring(64);
            var  decryptedHMAC = CryptoJS.HmacSHA256(encryptedHTML, CryptoJS.SHA256(passphrase).toString()).toString();
			
			
		//alert(decryptedHMAC);
		 	
			
        if (decryptedHMAC !== encryptedHMAC) {
            alert('كلمة السر غير صحيحة');
            
			//location.hash="";
			
			return;
        }
		else{
		    
			var plainHTML = CryptoJS.AES.decrypt(encryptedHTML, passphrase).toString(CryptoJS.enc.Utf8);
		
	
			
			
		strpass = passphrase.hexEncode();	
		passtext = "#&pass="+strpass;
		
		
		
		if(hh == true){
			//childboxes("pass", strpass);
			//insertParam("pass", strpass)
			if(window.location == window.parent.location) {
			   changeUrl("&pass", strpass);	
			}
			else{
			   window.parent.postMessage(["put_pass_in_adbr", strpass], "*");	
			}
		}
		
		
		
		if(hh == true){
		if(document.getElementById("pass")){
		if(document.getElementById("pass").checked){
			
			  if(lsTest() === true){
				 
				 localStorage.setItem('passebook',strpass); 
			  }
			  else{
				
				 setCookie("passebook", strpass, 1000);
				 
				 
				 
			  }
			  
			  
			
		}
		else{
			
             if(lsTest() === true){
				 
				localStorage.setItem('passebook',"");
			  }
			  else{
				  
			 setCookie("passebook", "", 1000);
				 
			  }
			
			
		}
		
		if(document.getElementById("pass2")){
		if(document.getElementById("pass2").checked){
		      if(lsTest() === true){
			
				 localStorage.setItem('autolog',true); 
			  }
			  else{
				
				 setCookie("autolog", true, 1000);
				 
				 
				 
			  }
		
		}
		else{
			
             if(lsTest() === true){
		
				localStorage.setItem('autolog',false);
				
				
			  }
			  else{
				  
			    setCookie("autolog", false, 1000);
				 
			  }
			
			
		}
		}
		}
		
		}
	
	    jQueryD_1_4_2( ".staticrypt-page" ).hide();
	
		if (fontstylelist == true) { 
 
		jQueryD_1_4_2( "#content" ).html("<div style =\"background-color:#b54b3d;color:white;font-Weight:bold;font-size:100%;text-align:center;padding:4px;\">صـــــفــحــة مشـــــفـــــرة<br><input type=\"checkbox\" id=\"pass3\"> الدخول التلقائي للبيانات المشفرة.. </input></div>"+plainHTML+"<div class=\"selecth1FontFamily\" >تغيير نوع الخط<br><select  id=\"selecth1FontFamily\" name=\"selectFontFamily\" onchange=\"updateh1family(true);\"><option> Lateef </option><option> Serif </option><option> Arial </option></select><div>");
        

		}
		else{
		jQueryD_1_4_2( "#content" ).html("<div style =\"background-color:#b54b3d;color:white;font-Weight:bold;font-size:100%;text-align:center;padding:4px;\">صـــــفــحــة مشـــــفـــــرة<br><input type=\"checkbox\" id=\"pass3\"> الدخول التلقائي للبيانات المشفرة.. </input></div>"+plainHTML);
	
		}


enable_select_text('.posttext');
enable_select_text('.thread_title');
enable_select_text('span.padd');
enable_select_text('#content>ul');

		
		if(lsTest() === true){
		var checked2 = localStorage.getItem('autolog');
		if (checked2 == "true") {
              document.getElementById("pass3").checked = true;
		     
        }
		else{
			document.getElementById("pass3").checked = false;
		}
		}
		else{
		var checked2 = getCookie('autolog');
		if (checked2 == "true") {
              document.getElementById("pass3").checked = true;
			
			  
        }
		else{
			document.getElementById("pass3").checked = false;
		}
		}
		
		

    jQueryD_1_4_2('#pass3').change(function() {
    // this will contain a reference to the checkbox   
    if (this.checked) {
       
	   if(lsTest() === true){
			
				 localStorage.setItem('autolog',true); 
	    }
		else{
				
				 setCookie("autolog", true, 1000);
			 
		}
	
    } else {
        if(lsTest() === true){
				 
				localStorage.setItem('autolog',false);
			}
			  else{
				  
			    setCookie("autolog", false, 1000);
				 
		}
    }
    });

}

		
}
if(hh == true){
if (typeof applyHighlight == 'function') { 
		    window.parent.postMessage(["check_highlight_state","check_highlight_state"], "*");	
          
}
}

return false;
}



jQueryD_1_4_2(document).ready(function() {


if (typeof encryptedMsg != 'undefined')
{
   
    jQueryD_1_4_2("#content").html('<div class="staticrypt-page" dir = "rtl"><div class="staticrypt-form" ><div class="staticrypt-instructions"><p class="staticrypt-title">**موضوع محمي**</p><hr><span>الرجاء مسح كاش المتصفح والمفضلة بعدالإنتهاء من الموسوعة في حال كان جهاز الذي تستخدمه غير شخصي ودخلت الى البيانات المشفرة<span><hr></div><input style= "" autocomplete="on" id="staticrypt-password" type="password" name="password" placeholder="كلمة السر"/><br><input type="checkbox" id="pass"> حفظ كلمة السر.. </input><br><input type="checkbox" id="pass2"> الدخول التلقائي للبيانات المشفرة.. </input><br><button autocomplete="on" type=\'submit\' id ="subment" class="staticrypt-decrypt-button">فك التشفير</button></div></div>');

		if(lsTest() === true){
		var checked = localStorage.getItem('passebook');
	
		if (checked) {
              document.getElementById("pass").checked = true;
			 

	          if(document.getElementById('staticrypt-password')){
				document.getElementById('staticrypt-password').value = checked.hexDecode();
	           }
			  
        }
		else{
			document.getElementById("pass").checked = false;
		}

		
		var checked2 = localStorage.getItem('autolog');
		if (checked2 == "true") {
              document.getElementById("pass2").checked = true;
		     
        }
		else{
			document.getElementById("pass2").checked = false;
		}

	
		}
		else{
	    
		
		var checked = getCookie('passebook');
		if (checked != "") {
              document.getElementById("pass").checked = true;
			 

	          if(document.getElementById('staticrypt-password')){
				document.getElementById('staticrypt-password').value = checked.hexDecode();
	           }
			  
        }
		else{
			document.getElementById("pass").checked = false;
		}
		
		
		var checked2 = getCookie('autolog');
		if (checked2 == "true") {
              document.getElementById("pass2").checked = true;
			
			  
        }
		else{
			document.getElementById("pass2").checked = false;
		}
	
		
		}
    

}



jQueryD_1_4_2("#subment").click(function(event){

		event.preventDefault();
		autolog(event,true,document.getElementById('staticrypt-password').value);
		return false;
		
		
});


jQueryD_1_4_2("#staticrypt-password").keypress(function(event) {
    if(event.which == 13) {
        event.preventDefault();
		autolog(event,true,document.getElementById('staticrypt-password').value);
		return false;
    }
});



if (fontstylelist == true) {

jQueryD_1_4_2("#content").append('<div class="selecth1FontFamily" >تغيير نوع الخط<br><select  id="selecth1FontFamily" name="selectFontFamily" onchange="updateh1family(true);"><option> Lateef </option><option> Serif </option><option> Arial </option></select><div>');
}
//jQueryD_1_4_2("#wrapper").append('<center><a target ="_blank" href="https://info.flagcounter.com/4Yvv"><img src="https://s11.flagcounter.com/count/4Yvv/bg_FFFFFF/txt_000000/border_CCCCCC/columns_3/maxflags_10/viewers_0/labels_1/pageviews_1/flags_0/percent_0/" alt="Free counters!" border="0"></a></td></center>');


if(window.location == window.parent.location) {
var c = window.location.href;
if (c.match(/[^"]*(\#|\?|\&|\#\&)pass\=(.*?)((&|#)([^"]*)|$)/mg)) {
			var ff = c.replace(/[^"]*(\?|\&|\#\&)pass\=(.*?)((&|#)([^"]*)|$)/mg, "$2")
			
			if(document.getElementById('staticrypt-password')){

				if(document.getElementById("pass")){
		        if(document.getElementById("pass").checked){
				document.getElementById('staticrypt-password').value = ff.hexDecode();
				}
				}
                
				
			}
			
			if(document.getElementById("pass2")){
		    if(document.getElementById("pass2").checked){
			autolog(null,false,ff.hexDecode());
			}
			}
			
}
}
else{
		
	     window.parent.postMessage(["get_pass", "get_pass"], "*");	
}







if (!document.getElementsByClassName) {
  document.getElementsByClassName = function(search) {
    var d = document, elements, pattern, i, results = [];
    if (d.querySelectorAll) { // IE8
      return d.querySelectorAll("." + search);
    }
    if (d.evaluate) { // IE6, IE7
      pattern = ".//*[contains(concat(' ', @class, ' '), ' " + search + " ')]";
      elements = d.evaluate(pattern, d, null, 0, null);
      while ((i = elements.iterateNext())) {
        results.push(i);
      }
    } else {
      elements = d.getElementsByTagName("*");
      pattern = new RegExp("(^|\\s)" + search + "(\\s|$)");
      for (i = 0; i < elements.length; i++) {
        if ( pattern.test(elements[i].className) ) {
          results.push(elements[i]);
        }
      }
    }
    return results;
  }
}


 


enable_select_text('.posttext');
enable_select_text('.thread_title');
enable_select_text('span.padd');
enable_select_text('#content>ul');




jQueryD_1_4_2(document).click(function() {
//clearSelection();
});
			
			

if (typeof process !== "undefined" && typeof require !== "undefined") {              

 function copyToClipboard(text){
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

 
 
document.body.addEventListener('contextmenu', function(ev) {
ev.preventDefault();

//get node webkit GUI
var gui = require('nw.gui');

// get the window object
var win = gui.Window.get();

var menu = new gui.Menu();
  /*menu.append(new gui.MenuItem({
    label: "Cut",
    click: function() {
      document.execCommand("cut");
    }
  }));*/
  

  

  /*menu.append(new gui.MenuItem({
    label: "Paste",
    click: function() {
      document.execCommand("paste");
    }
	
  }));*/
  
if(ev.path[0].href){ 
  menu.append(new gui.MenuItem({ 
            label: 'open in browser',
            click: function(e) {
gui.Shell.openExternal(ev.path[0].href);


            }
        }));
		
		menu.append(new gui.MenuItem({ 
            label: 'copy link address',
            click: function(e) {
//gui.Shell.openExternal();
copyToClipboard(ev.path[0].href)

            }
        }));
		
 }else{
	menu.append(new gui.MenuItem({
    label: "Copy",
    click: function() {
      document.execCommand("copy");
    }
  })); 
 }

menu.popup(ev.x, ev.y);


return false;
});
}


			
			
			
jQueryD_1_4_2("a").live("click", function(event) {
            link_img_show = true;
          
		
		var classname = jQueryD_1_4_2(this).attr('class');
            var link = this.href;

			//alert(classname);
			
			
            if (window.location != window.parent.location) {
                if (typeof link_disable !== 'undefined') {
                    if (link_disable == true) {
                        return false;
                    }
                }
            } else {
                if (typeof link_disable !== 'undefined') {
                    if (link_disable == true) {
                        event.preventDefault();
                        event.stopPropagation();
                        return false;
                    }
                }
            }



            if (location.hostname === this.hostname || !this.hostname.length) {
                
				var x = this.href;
                var c = window.location.href;
				
				if (checkURL(link)) {

                    
                    if (classname =='alpom2 link_off'){
                      event.preventDefault();
                      event.stopPropagation();
                      return false;
					}	
				
                    else if (classname == 'link_pic2'||classname =='extImag_go2'||classname =='linkstyle2 outsidelink enableselect') {
                      
						//event.preventDefault();
                        event.stopPropagation();
                        //return false;
                    }
					else{
		
				  
				    /*if(iee){
					jQueryD_1_4_2(this).attr("target","_heopenit");	
			        }*/
	
	               
				
						
					if (typeof disable_model !== 'undefined'){link_disable = false;link_disable = false;}
			         else{
			         
					// if(classname != "alpom2_go"){		 
					 event.preventDefault();
				     link_disable = true;
                     model_visible = true;
				         if(window.location != window.parent.location) {
                        window.parent.postMessage(["modal_display", "show"], "*");
                   
					   window.parent.postMessage(["image_url", link], "*");
                        } else {
						jQueryD_1_4_2(".modal").show();
                        jQueryD_1_4_2("#wrapper,body,html").css({
                            'overflow': 'hidden'
                        });
                        jQueryD_1_4_2("#img01").attr("src", link);
						jQueryD_1_4_2("#img01").removeAttr('style');
						jQueryD_1_4_2("#img01").removeAttr('height');
                        }
				     }
				
					//}
		
					}
                }
				else if(checkURL(x) == false) {

				if(c.indexOf("&checkbox=") !== -1) {
						c = c.replace(/([^"]*)(\&checkbox\=(.*?))(&([^"]*)|$)/mg, "$1");
                    }
					if(x.indexOf("#post") !== -1) {
                        x = x.substring(0, x.indexOf("#post") - 0);
                    }
                    if(c.indexOf("#post") !== -1) {
                        c = c.substring(0, c.indexOf("#post") - 0);
                    }
                    if(c.indexOf("?random=") !== -1) {
						c = c.substring(0, c.indexOf("?random=") - 0); 
				   }
				   if(c.indexOf("?rhsyns=") !== -1) {
                        c = c.substring(0, c.indexOf("?rhsyns=") - 0);
                   }
				   if(c.indexOf("?rhhlterm=") !== -1) {
                        c = c.substring(0, c.indexOf("?rhhlterm=") - 0);
                   }
				   if(c.indexOf("&rhsearch=") !== -1) {
                        c = c.substring(0, c.indexOf("&rhsearch=") - 0);
                   }
				   if(c.indexOf("&rhhlterm=") !== -1) {
                        c = c.substring(0, c.indexOf("&rhhlterm=") - 0);
                   }
				   if (c.match(/[^"]*(\#|\?)&pass\=(.*?)(&([^"]*)|$)/mg)) {
			         c = c.replace(/(.*?)(\#|\?)&pass\=(.*?)(#([^"]*)|$)/mg, "$1");
		           }
                   
				   c = c.replace("?", "");
                   
        
		
		var loc ="";
		strr =  document.location.href;	   
		
		if (strr.match(/[^"]*\&rhsearch\=(.*?)((&|#)([^"]*)|$)/mg) ) {
			loc+= strr.replace(/[^"]*\&rhsearch\=(.*?)((&|#)([^"]*)|$)/mg, "&rhsearch=$1");
		}
		if (strr.match(/[^"]*\&rhhlterm\=(.*?)((&|#)([^"]*)|$)/mg) ) {
			loc+= strr.replace(/[^"]*\&rhhlterm\=(.*?)((&|#)([^"]*)|$)/mg, "&rhhlterm=$1");
		}
		if (strr.match(/[^"]*\&checkbox\=(.*?)((&|#)([^"]*)|$)/mg) ) {
			loc+= strr.replace(/[^"]*\&checkbox\=(.*?)((&|#)([^"]*)|$)/mg, "&checkbox=$1");
		}
		if (strr.match(/[^"]*(\#|\?|\&|\#\&)pass\=(.*?)((&|#)([^"]*)|$)/mg)) {
			//loc = loc.replace("#", "");
			loc+= strr.replace(/[^"]*(\?|\&|\#\&)pass\=(.*?)((&|#)([^"]*)|$)/mg, "&pass=$2");
			//alert(loc);
		}
		
		
		if (loc.match(/(#post(.*?))/mg) ) {
			loc= loc.replace(/(.*?)#post(.*?)(&([^"]*)|$)/mg, "$1$3");
					 
		}
        if (loc.match(/(#td_threadtitle_(.*?))/mg) ) {
			loc= loc.replace(/(#td_threadtitle_[^"]*)/mg, "");			 
		}
		if(loc != ''){
		   loc = '?'+loc;
		}
	   			                    	

				   
				  // h = location.hash.substring(0, location.hash.indexOf("#post") - 0);
				   if (link.match(/(#post(.*?))/mg) ) {
					   h= link.replace(/[^"]*(#post(.*?))/mg, "$1");
					   link= link.replace(/(#post[^"]*)/mg, "");
					 
				   }
				   else if(link.match(/(#td_threadtitle(.*?))/mg) ) {
				       h= link.replace(/[^"]*(#td_threadtitle(.*?))/mg, "$1");
					   link= link.replace(/(#td_threadtitle[^"]*)/mg, "");
					 
				   }else{
					     h='';  
				   }


				   if(c != x) {
					   
				
                        if(classname != "btn_print up") {
						if(x.indexOf("heexternal://") == -1) {
 
						    if(window.location == window.parent.location) {
	                            jQueryD_1_4_2('#loading').show();
								if( classname !='whtbtnshow'){
								//location.reload(); 
								}
								
                            }
                            else{
						        window.parent.postMessage(["loading","run"], "*");
		                    }
                        
						if( classname !='whtbtnshow'){
						
						if(window.location == window.parent.location) { 
			            var gg =get_current_url(link).replace(/(.*?)#post(.*?)([^"]*|$)/mg, "$1");
									
							
						
						if(h.indexOf("#td_threadtitle_") !=-1){
					
								location.href = link+loc+h;
						
						   
							
						}else if(h.indexOf("#post") !=-1){
					        
							location.href = link+loc+h;
							
						}
						else{
							
							location.href = link+h+loc;
							
						}
						
								
									
						
							return false;
						}
						
						}

						}
						}
						
                    }else{
					   
				
					   
						 if (!this.href.match(/(#post(.*?))/mg) ) {
							
							if(window.location == window.parent.location) {
	                            jQueryD_1_4_2('#loading').show();
								if( classname !='whtbtnshow'){
								
								
								//location.reload(); 
								setTimeout(function(){ location.reload();  }, 100);
								}
								
                            }
                            else{
								
						        //window.parent.postMessage(["loading","run"], "*");
								//location.href = link;
								//setTimeout(function(){ location.reload();  }, 300);
								//return false;
		                    }
							 
						 }
						 
						 if( classname !='whtbtnshow'){
						
						 	
					
							 if(this.href.indexOf("#post") == -1) {
								if(window.location == window.parent.location) { 
                                
								var pass ="";
                                
			                      if(pass.match(/\#&pass\=([^.]+)/i)){
									  
									    
									 var locc = pass.match(/\#&pass\=([^.]+)/i);
                                     if(window.location == window.parent.location) {
									 location.href = loc;	
									 }
	
									 return false;
								  }
								  else{
									location.href = link+loc+h;
									var gg =get_current_url().replace(/(.*?)#post(.*?)([^"]*|$)/mg, "$1");
									
									
									return false;
									  
								  }
								}
                      
							 }
							 else{
                             
							   
							     
								var xx = this.href;
                                var cc = window.location.href;
								
								var hh;
								var match;
								  if (xx.match(/(#post(.*?))/mg) ) {
					               hh= xx.replace(/[^"]*(#post(.*?))/mg, "$1");

				                  }
								  
								  if (cc.match(/(#post(.*?))(\\#|)/mg) ) {
					               //match =  cc.match(/(#post(.*?))[^"]*/i);
								   match =cc.replace(/(.*?)#post(.*?)(\\#[^"]*|$)/mg, "#post$2");
								   //alert(match);
				                  }

                                if(loc){
									loc = "\\"+loc;
								}
                             
								setTimeout(function(){ location.hash = h }, 0);
								/*if (typeof simplePostMessage !== 'undefined') {
				                 
								  simplePostMessage(["send_pass_hash",get_current_url()+h],"*",parent.parent);
				                }*/
							
								jQueryD_1_4_2("#wrapper").animate({ scrollTop: jQueryD_1_4_2(hh).position().top + jQueryD_1_4_2("#wrapper").scrollTop() }, 0);
					            jQueryD_1_4_2(hh).css("background-color", "#d5dc91");	
                          
							   
														
							   return false;
							 }
							  
							  
							  
		                    

						 }
			            
					}
                }
				
				
				
            } else {
                
                if (checkURL(link)) {

                    // alert(classname);           
                    if (classname =='alpom2 link_off'){
                       event.preventDefault();
                        event.stopPropagation();
                       return false;
					}					
                    else if (classname == 'link_pic2'||classname =='extImag_go2'||classname =='linkstyle2 outsidelink enableselect') {
                        
						//event.preventDefault();
                        event.stopPropagation();
					
                    if(wkchrom){
				    event.stopPropagation();
					jQueryD_1_4_2(this).attr("target","_heexternal");
					var res = jQueryD_1_4_2(this).attr("href");
					res = res.replace("heexternal://", "");
					jQueryD_1_4_2(this).attr("href","heexternal://"+res).removeAttr('target');	
			        }    


					
					/*if(wke){
					jQueryD_1_4_2(this).attr("target","_heexternal");
					var res = jQueryD_1_4_2(this).attr("href");
					res = res.replace("heexternal://", "");
					jQueryD_1_4_2(this).attr("href","heexternal://"+res).removeAttr('target');	
					}
	
					if(iee){
                   					
					jQueryD_1_4_2(this).attr("target","_heexternal");	
					}
					*/	
						
                        //return false;
                    }
					else{

					
					/*if(wke){
					jQueryD_1_4_2(this).attr("target","_heexternal");
					var res = jQueryD_1_4_2(this).attr("href");
					res = res.replace("heexternal://", "");
					jQueryD_1_4_2(this).attr("href","heexternal://"+res).removeAttr('target');	
					}
	
					if(iee){
                   					
					jQueryD_1_4_2(this).attr("target","_heexternal");	
					}*/
					 
					 if(classname !='linkstyle2 outsidelink enableselect'){
					 if(classname != "alpom2_go"){
					 
					// if(!(wke || iee)){
					 event.preventDefault();
				     link_disable = true;
                     model_visible = true;
				         if(window.location != window.parent.location) {
                        window.parent.postMessage(["modal_display", "show"], "*");
                       
					   window.parent.postMessage(["image_url", link], "*");
                        } else {
						jQueryD_1_4_2(".modal").show();
                        jQueryD_1_4_2("#wrapper,body,html").css({
                            'overflow': 'hidden'
                        });
                        jQueryD_1_4_2("#img01").attr("src", link);
						jQueryD_1_4_2("#img01").removeAttr('style');
						jQueryD_1_4_2("#img01").removeAttr('height');
                        }
				     
					 //}
					 }
					 }
					
					
						
					}   

                } else {
			    
					if(wkchrom){
				    event.stopPropagation();
					jQueryD_1_4_2(this).attr("target","_heexternal");
					var res = jQueryD_1_4_2(this).attr("href");
					res = res.replace("heexternal://", "");
					jQueryD_1_4_2(this).attr("href","heexternal://"+res).removeAttr('target');	
			        }
					
					
					/*if(wke){
					jQueryD_1_4_2(this).attr("target","_heexternal");
					var res = jQueryD_1_4_2(this).attr("href");
					res = res.replace("heexternal://", "");
					jQueryD_1_4_2(this).attr("href","heexternal://"+res).removeAttr('target');	
					}

					if(iee){
					jQueryD_1_4_2(this).attr("target","_heexternal");	
					} */
				
				
                }

            }
		 // return false;
		});
});

if(window.location == window.parent.location) {
	 loaddsett();
 }  
		
function loaddsett(){    

	jQueryD_1_4_2.fn.hasScrollBar = function() {
      
		return this.get(0).scrollHeight > this.height();
     }
     


	 
	 
	 
	 
     jQueryD_1_4_2(window).resize(function() {
            resize(jQueryD_1_4_2("html"));
            //getPageHeight(document)
        });
     /*jQueryD_1_4_2(window).load(function() {
            resize(jQueryD_1_4_2("html"));
            //getPageHeight(document)
            //setTimeout(function() { jQueryD_1_4_2('.loading').hide();}, 150);
            jQueryD_1_4_2('.loading').hide();
      });*/


	  
	  
    jQueryD_1_4_2(document).ready(function() {
        //alert("deskstop");
       
	   
	   
jQueryD_1_4_2('.posttext').removeAttr("style");
if (fontstylelist == true) { 
updateh1family(false);
}
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
		//jQueryD_1_4_2('.posttext').css("font-size", "25px");	
		//jQueryD_1_4_2('.posttext').removeAttr("style");
        jQueryD_1_4_2('.up2 >img').removeAttr("style");
		
        


        var arrEdited = [];
        jQueryD_1_4_2('.imglink').each(function(i) {
            jQueryD_1_4_2(this).attr('id', 'id_' + (i + 1));

            arrEdited.push({
                id: jQueryD_1_4_2(this).attr('id'),
                href: jQueryD_1_4_2(this).parent().children('.hide_external_link').children('a').attr('href')

            });
        });

        jQueryD_1_4_2('.tooltiptext').remove();
       // jQueryD_1_4_2('.hide_external_link').remove();
        jQueryD_1_4_2('.pagebody').children(".page-break").last().remove();

        


	     jQueryD_1_4_2('.btn_print').click( function(event) {
			 
		 event.preventDefault();
         event.stopPropagation();
		if(printin_prosses == false){
			printin_prosses = true;
		    var c = jQueryD_1_4_2(event.currentTarget).parent().parent().parent().children('.posttext');
            var postID = jQueryD_1_4_2(event.currentTarget).parent().parent().attr("id");
			//var c = event.currentTarget.parentNode.parentNode.parentNode.childNodes;
		  tooltip(null, "الرجاء الانتظار يتم عرض الطباعة")
		  
		  setTimeout(function () {
			 //jQueryD_1_4_2.print(c);
			 printDiv2(c);
			 setTimeout(function () {
                //jQueryD_1_4_2(event.currentTarget).parent().parent().parent().children('.posttop').selectText();
				 location.reload(); 
				 
				 printin_prosses = false;
				 }, 300);
			  }, 3000);
		  //
		 
		}
			
		});
	

        var link_img_show = true;
        jQueryD_1_4_2(document).click(function(event) {
			
		 	
         if(event.which == 0 || event.which == 1) { //right click
         
		 
		 
		 event.stopPropagation();
  	     window.parent.postMessage(["hide_drop", "hide_drop"], "*");
		 // matches = event.target.matches ? event.target.matches('.dropbtn') : event.target.msMatchesSelector('.dropbtn');
		 matches = jQueryD_1_4_2(event.target).is( ".dropbtn" )
		 
		 //alert(jQueryD_1_4_2(event.target).is( ".dropbtn" ));
		 if (!matches) {

                 jQueryD_1_4_2('#myDropdown').removeClass("show");
         }

		 
			
			if(link_disable == false){
			    jQueryD_1_4_2('.image_custom').remove();
				jQueryD_1_4_2(".link_img").remove();
				jQueryD_1_4_2(".extImag").remove();
				jQueryD_1_4_2(".tooltiptext_custom").remove();
				jQueryD_1_4_2(".tooltiptext_custom_copy").remove();
                jQueryD_1_4_2('.tooltiptext').hide();
                jQueryD_1_4_2('.tooltiptext2').hide();
                jQueryD_1_4_2('.tooltiptext3').hide();
                jQueryD_1_4_2('.tooltiptext4').hide();
                jQueryD_1_4_2('.tooltiptext5').hide();
                jQueryD_1_4_2('.hide_external_link').hide();
                jQueryD_1_4_2('.hide_local_link').hide();
				jQueryD_1_4_2(".moveoff").unbind( "click" );
			   jQueryD_1_4_2(".selected").attr("class", 'selected enableselect');
              }
   
		 }	  
		link_img_show = false;
		stop = false;
		});

        
		
		jQueryD_1_4_2(".close").click(function(event) {
			
			//alert(link_disable);
			jQueryD_1_4_2(".modal").hide();
            jQueryD_1_4_2("#wrapper").css({
                    'overflow-y': 'auto'
            });
			setTimeout(function() {
				link_img_show = true;
				link_disable = false;
				model_visible = false;
            }, 1000);
        });

	
		
jQueryD_1_4_2(".link_pic").click(function(event) {
            
			imag_loading = true;
			stop = true;
			event.preventDefault();
            event.stopPropagation();
			link_img_show = false;
			
			
			jQueryD_1_4_2(".extImag").remove();
			jQueryD_1_4_2(".tooltiptext_custom").remove();
			
			
			//jQueryD_1_4_2(event.currentTarget).children(".selected").attr("class", 'alpom2 link_off');
			
			if(!jQueryD_1_4_2(event.currentTarget).children(".selected").hasClass( "moveoff" )){
				jQueryD_1_4_2(".selected").unbind( "click" );
				jQueryD_1_4_2(".selected").attr("class", 'selected enableselect');
				jQueryD_1_4_2(event.currentTarget).children(".selected").attr("class", 'selected moveoff enableselect');
				jQueryD_1_4_2(event.currentTarget).children(".selected").unbind('click').bind('click', function(event) {
			     	
					event.stopPropagation();
					//jQueryD_1_4_2( this ).off( event );
                				
                });
				
			}
			
			
			
			
			
			
			jQueryD_1_4_2(event.currentTarget).parent().append('<div class="extImag"><div class="extImag2"><a target="_blank" href=""><img class="img2" src="" height="200" width="200" alt=""></a></div><br><div class="extImag_go linkstyle"><a href="" target="_blank" >الذهاب الى الرابط</a></div><br><div class="extImag_copy linkstyle">نسخ الرابط</div></div>');
			

			jQueryD_1_4_2(event.currentTarget).parent().children(".extImag").children('.extImag2').children('a').attr("href",jQueryD_1_4_2(event.currentTarget).children(".NOTselected").children('a').attr('href'));
			
			//jQueryD_1_4_2(event.currentTarget).children(".NOTselected").children('a').selectText();
			
			
			
			
			
			
			
			
var img = new Image();

jQueryD_1_4_2(event.currentTarget).parent().children(".extImag").children('.extImag2').children('a').children('img').attr("src", '../../clientscript/images/loading.gif');
//$el.parent().attr("class", 'alpom2 link_off');
jQueryD_1_4_2(event.currentTarget).parent().children(".extImag").children('.extImag2').children('a').attr("class", 'alpom2 link_off');
img.onload = function() {
    
	jQueryD_1_4_2(event.currentTarget).parent().children(".extImag").children('.extImag2').children('a').children('img').attr("src", img.src);
	jQueryD_1_4_2(event.currentTarget).parent().children(".extImag").children('.extImag2').children('a').removeAttr('class');
	//imag_loading = false;
	//alert("loaded successfully");
}
img.onerror = img.onabort = function() {
    jQueryD_1_4_2(event.currentTarget).parent().children(".extImag").children('.extImag2').children('a').children('img').attr("src", '../../clientscript/images/linklost.jpg');
	jQueryD_1_4_2(event.currentTarget).parent().children(".extImag").children('.extImag2').children('a').attr("class", 'alpom2 link_off');
	
	//alert("broken image");
}
// only set .src AFTER event handlers are in place
img.src = jQueryD_1_4_2(event.currentTarget).children(".NOTselected").children('a').attr('href');
//alert(img.src);
			
			
			jQueryD_1_4_2(event.currentTarget).parent().children(".extImag").children('.extImag_go').children('a').attr("href", jQueryD_1_4_2(event.currentTarget).children(".NOTselected").children('a').attr('href'));
			
			jQueryD_1_4_2(".extImag_go > a").click(function(event) {
			  //event.preventDefault();
              event.stopPropagation();	
			  
			  if(wkchrom){
				    event.stopPropagation();
					jQueryD_1_4_2(this).attr("target","_heexternal");
					var res = jQueryD_1_4_2(this).attr("href");
					res = res.replace("heexternal://", "");
					jQueryD_1_4_2(this).attr("href","heexternal://"+res).removeAttr('target');	
			  } 
			  
			});

			jQueryD_1_4_2(".extImag_copy").click(function(event) {
                    event.stopPropagation();
	
					var c = event.currentTarget.parentNode.parentNode.childNodes;
					var i;
                    for(i = 0; i < c.length; i++) {
                    //alert(c[i].className);
					
					if(c[i].className == "link_pic") {
                       var cc = c[i].childNodes;
                           for(ii = 0; ii < cc.length; ii++) {
							  
							  	     if(c[ii].className!=null){
	
    
			   if(c[ii].className.indexOf("selected moveoff")!=-1) {

                 select_all_and_copy(c[ii]);
			//jQueryD_1_4_2(c[i]).selectText();

                }
				
			   }
				
							   
									   
						   }
                    }
                    
                    }
	
                });
				
				
				
				
				
			
jQueryD_1_4_2("#wrapper").scrollTop(jQueryD_1_4_2(this).position().top + jQueryD_1_4_2("#wrapper").scrollTop());
});
		
		
			
		jQueryD_1_4_2(".alpom2_go").click(function(event) {
			  //event.preventDefault();
              event.stopPropagation();

               if(wkchrom){
				    
					jQueryD_1_4_2(this).attr("target","_heexternal");
					var res = jQueryD_1_4_2(this).attr("href");
					res = res.replace("heexternal://", "");
					jQueryD_1_4_2(this).attr("href","heexternal://"+res).removeAttr('target');	
			  }			  
	    });
		
		jQueryD_1_4_2(".alpom2_copy").click(function(event) {
			  //event.preventDefault();
              event.stopPropagation();	
			  
			  	var c = event.currentTarget.parentNode.childNodes;
					var i;
                    for(i = 0; i < c.length; i++) {
                    //alert(c[i].className);
					 if(c[i].className!=null){
	
    
			   if(c[i].className.indexOf("selected")!=-1) {

                 select_all_and_copy(c[i]);
			//jQueryD_1_4_2(c[i]).selectText();

                }
				
			   }
				
                    
                    }
 
         });
		
		
		
		jQueryD_1_4_2(".link_org").click(function(event) {
            
			stop = true;
			event.preventDefault();
            event.stopPropagation();
            
			if (typeof disable_model !== 'undefined'){link_disable = false;link_disable = false;}
			else{
			   if(window.location != window.parent.location) {
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			   }else{
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}}	
			}
			link_img_show = false;

			
			
			if(!jQueryD_1_4_2(event.currentTarget).children(".selected").hasClass( "moveoff" )){
				jQueryD_1_4_2(".selected").unbind( "click" );
				jQueryD_1_4_2(".selected").attr("class", 'selected enableselect');
				jQueryD_1_4_2(event.currentTarget).children(".selected").attr("class", 'selected moveoff enableselect');
				jQueryD_1_4_2(event.currentTarget).children(".selected").unbind('click').bind('click', function(event) {
			     	
					event.stopPropagation();
					//jQueryD_1_4_2( this ).off( event );
                				
                });
				
			}
			
	
			jQueryD_1_4_2(".extImag").remove();
			jQueryD_1_4_2(".tooltiptext_custom").remove();
			jQueryD_1_4_2(".tooltiptext_custom_copy").remove();
            jQueryD_1_4_2('.image_custom').remove();
            jQueryD_1_4_2(".link_img").remove();
            jQueryD_1_4_2('.tooltiptext').hide();
            jQueryD_1_4_2('.tooltiptext2').hide();
            jQueryD_1_4_2('.tooltiptext3').hide();
            jQueryD_1_4_2('.tooltiptext4').hide();
            jQueryD_1_4_2('.tooltiptext5').hide();
            jQueryD_1_4_2('.hide_external_link').hide();

            if(jQueryD_1_4_2(".tooltiptext_custom").length == 0) {
                jQueryD_1_4_2(event.currentTarget).append('<div class="tooltiptext_custom"><div class="tooltiptext_custom_go linkstyle"><a href="" target="_blank" >الذهاب الى الرابط</a></div><br><div class="tooltiptext_custom_copy linkstyle">نسخ الرابط</div></div>');
                jQueryD_1_4_2(event.currentTarget).children(".tooltiptext_custom").children(".tooltiptext_custom_go").children('a').attr("href", jQueryD_1_4_2(event.currentTarget).children('.link_org2').attr('href'));
                
				
				jQueryD_1_4_2(".tooltiptext_custom").click(function(event) {
                 
				jQueryD_1_4_2(".selected").unbind( "click" );
				jQueryD_1_4_2(".selected").attr("class", 'selected enableselect');
				 event.stopPropagation();
                jQueryD_1_4_2(".tooltiptext_custom").remove();
                stop = false;				
	             });

				jQueryD_1_4_2(".tooltiptext_custom_go > a").click(function(event) {
                    event.stopPropagation();
					//link_img_show = true;
					
					if(wkchrom){
				    //event.stopPropagation();
					jQueryD_1_4_2(this).attr("target","_heexternal");
					var res = jQueryD_1_4_2(this).attr("href");
					res = res.replace("heexternal://", "");
					jQueryD_1_4_2(this).attr("href","heexternal://"+res).removeAttr('target');	
			        }
					
                });
				
				jQueryD_1_4_2(".tooltiptext_custom_copy").click(function(event) {
                    event.stopPropagation();
	
					var c = event.currentTarget.parentNode.parentNode.childNodes;
					
                    for(i = 0; i < c.length; i++) {
                    //alert(c[i].className);
					 if(c[i].className!=null){

			   if(c[i].className.indexOf("selected moveoff")!=-1) {

                 select_all_and_copy(c[i]);
			//jQueryD_1_4_2(c[i]).selectText();

                }
				
			   }
				
                    }
	
                });
				
            }

            jQueryD_1_4_2("#wrapper").scrollTop(jQueryD_1_4_2(this).position().top + jQueryD_1_4_2("#wrapper").scrollTop());


        });

		
		
		
       
        jQueryD_1_4_2(".imglink").click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            
			if (typeof disable_model !== 'undefined'){link_disable = false;link_disable = false;}
			else{
			   if(window.location != window.parent.location) {
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			   }else{
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}}	
			}
			
			//alert(link_disable);
			
			link_img_show = false;
			
			jQueryD_1_4_2(".tooltiptext_custom").remove();
			jQueryD_1_4_2(".tooltiptext_custom_copy").remove();
            jQueryD_1_4_2('.image_custom').remove();
            jQueryD_1_4_2(".link_img").remove();
            jQueryD_1_4_2('.tooltiptext').hide();
            jQueryD_1_4_2('.tooltiptext2').hide();
            jQueryD_1_4_2('.tooltiptext3').hide();
            jQueryD_1_4_2('.tooltiptext4').hide();
            jQueryD_1_4_2('.tooltiptext5').hide();
            jQueryD_1_4_2('.hide_external_link').hide();
            jQueryD_1_4_2(event.currentTarget).parent().children('.hide_external_link').show();
            jQueryD_1_4_2(event.currentTarget).children('.hide_param').selectText();

            if(jQueryD_1_4_2(".link_img").length == 0) {
                for(var i = 0; i < arrEdited.length; i++) {

                    if(jQueryD_1_4_2(event.currentTarget).attr('id') == arrEdited[i].id) {
                        jQueryD_1_4_2(event.currentTarget).parent().append('<span class="link_img"><a target="_blank" href=""><img style="text-align: center; overflow-wrap: break-word; -ms-word-break: break-all; word-break: break-word; word-break: break-all; word-wrap:break-word; direction: rtl;outline: none;border-radius: 6px;color: #ffffff;background-color: #2b7b91;padding: 10px; margin: 5px;" class="cool" src="" height="200" width="200" alt=""></a><br></span>');
                        jQueryD_1_4_2(event.currentTarget).parent().children(".link_img").children('a').attr("href", arrEdited[i].href);
                        jQueryD_1_4_2(event.currentTarget).parent().children(".link_img").children('a').children('img').attr("src", arrEdited[i].href)
						.click(function(event) {
                          
							/*if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			                if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}*/
							
                        });

                    }
                }

            }


            if(jQueryD_1_4_2(".image_custom").length == 0) {
                jQueryD_1_4_2(event.currentTarget).parent().append('<span class="image_custom"><a href="" target="_blank" style="text-align: center; overflow-wrap: break-word; -ms-word-break: break-all; word-break: break-word; word-break: break-all; word-wrap:break-word; direction: rtl;outline: none;border-radius: 6px;color: #ffffff;background-color: #2b7b91;padding: 5px 5px;">رابط الصورة في الموقع</a><br></span>');
                jQueryD_1_4_2(event.currentTarget).parent().children('.image_custom').children('a').attr("href", jQueryD_1_4_2(event.currentTarget).children('.hide_param').attr('href'))
                .click(function(event) {
                    //event.stopPropagation();
			if (typeof disable_model !== 'undefined'){link_disable = false;link_disable = false;}
			else{
			   if(window.location != window.parent.location) {
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			   }else{
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}}	
			}
              });
            }


            if(jQueryD_1_4_2.browser.msie && parseInt(jQueryD_1_4_2.browser.version, 10) === 8) {
                //alert('IE8'); 
                jQueryD_1_4_2("#wrapper").scrollTop(jQueryD_1_4_2(this).position().top + jQueryD_1_4_2("#wrapper").scrollTop() - 20);
            } else {
                //alert('Non IE8');
                jQueryD_1_4_2("#wrapper").scrollTop(jQueryD_1_4_2(this).position().top + jQueryD_1_4_2("#wrapper").scrollTop());
            }

        
		
		});
        jQueryD_1_4_2(".bbcode_img").click(function(event) {
            if (typeof disable_model !== 'undefined'){link_disable = false;link_disable = false;}
			else{
			   if(window.location != window.parent.location) {
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			   }else{
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}}	
			}
			jQueryD_1_4_2(event.currentTarget).selectText();
        });
        jQueryD_1_4_2("a.select_txt").click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (typeof disable_model !== 'undefined'){link_disable = false;link_disable = false;}
			else{
			   if(window.location != window.parent.location) {
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			   }else{
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}}	
			}
			jQueryD_1_4_2('.tooltiptext').hide();
            jQueryD_1_4_2('.tooltiptext2').hide();
            jQueryD_1_4_2('.tooltiptext3').hide();
            jQueryD_1_4_2('.tooltiptext4').hide();
            jQueryD_1_4_2('.tooltiptext5').hide();
            //jQueryD_1_4_2(event.currentTarget).parent().parent().parent().children('.posttext').selectText();
            var c = event.currentTarget.parentNode.parentNode.parentNode.childNodes;
            var i;
            for(i = 0; i < c.length; i++) {

               
               if(c[i].className!=null){
	
    
			   if(c[i].className.indexOf("posttext")!=-1) {

                 select_all_and_copy(c[i]);
			//jQueryD_1_4_2(c[i]).selectText();

                }
				
			   }

            }
			

        });
        jQueryD_1_4_2("a.threadinfo").click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (typeof disable_model !== 'undefined'){link_disable = false;link_disable = false;}
			else{
			   if(window.location != window.parent.location) {
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			   }else{
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}}	
			}
			jQueryD_1_4_2(".tooltiptext_custom").remove();
			jQueryD_1_4_2(".tooltiptext_custom_copy").remove();
            jQueryD_1_4_2('.image_custom').remove();
            jQueryD_1_4_2(".link_img").remove();
            jQueryD_1_4_2('.tooltiptext').hide();
            jQueryD_1_4_2('.tooltiptext2').hide();
            jQueryD_1_4_2('.tooltiptext3').hide();
            jQueryD_1_4_2('.tooltiptext4').hide();
            jQueryD_1_4_2('.tooltiptext5').hide();
            jQueryD_1_4_2('.hide_external_link').hide();
            jQueryD_1_4_2(event.currentTarget).parent().children('.tooltiptext3').show().selectText();
        });
        jQueryD_1_4_2("a.threadinfo2").click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (typeof disable_model !== 'undefined'){link_disable = false;link_disable = false;}
			else{
			   if(window.location != window.parent.location) {
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			   }else{
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}}	
			}
			jQueryD_1_4_2(".tooltiptext_custom").remove();
			jQueryD_1_4_2(".tooltiptext_custom_copy").remove();
            jQueryD_1_4_2('.image_custom').remove();
            jQueryD_1_4_2(".link_img").remove();
            jQueryD_1_4_2('.tooltiptext').hide();
            jQueryD_1_4_2('.tooltiptext2').hide();
            jQueryD_1_4_2('.tooltiptext3').hide();
            jQueryD_1_4_2('.tooltiptext4').hide();
            jQueryD_1_4_2('.tooltiptext5').hide();
            jQueryD_1_4_2('.hide_external_link').hide();
            jQueryD_1_4_2(event.currentTarget).parent().children('.tooltiptext4').show().selectText();
        });
        jQueryD_1_4_2("a.postinfo").click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (typeof disable_model !== 'undefined'){link_disable = false;link_disable = false;}
			else{
			   if(window.location != window.parent.location) {
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			   }else{
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}}	
			}
			jQueryD_1_4_2(".tooltiptext_custom").remove();
			jQueryD_1_4_2(".tooltiptext_custom_copy").remove();
            jQueryD_1_4_2('.image_custom').remove();
            jQueryD_1_4_2(".link_img").remove();
            jQueryD_1_4_2('.tooltiptext').hide();
            jQueryD_1_4_2('.tooltiptext2').hide();
            jQueryD_1_4_2('.tooltiptext3').hide();
            jQueryD_1_4_2('.tooltiptext4').hide();
            jQueryD_1_4_2('.tooltiptext5').hide();
            jQueryD_1_4_2('.hide_external_link').hide();
            jQueryD_1_4_2(event.currentTarget).parent().children('.tooltiptext2').show().selectText();
        });
        
		jQueryD_1_4_2(".txt_resize").removeAttr("unselectable");
		jQueryD_1_4_2(".txt_resize").click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (typeof disable_model !== 'undefined'){link_disable = false;link_disable = false;}
			else{
			   if(window.location != window.parent.location) {
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			   }else{
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}}	
			}
			jQueryD_1_4_2('.tooltiptext').hide();
            jQueryD_1_4_2('.tooltiptext2').hide();
            jQueryD_1_4_2('.tooltiptext3').hide();
            jQueryD_1_4_2('.tooltiptext4').hide();
            jQueryD_1_4_2('.tooltiptext5').hide();
            jQueryD_1_4_2('.hide_external_link').hide();
			jQueryD_1_4_2(event.currentTarget).focus();
            jQueryD_1_4_2(event.currentTarget).parent().children('.tooltiptext5').show();
        });


        // reset 
        jQueryD_1_4_2(".resetMe").click(function(event) {
           
		   if (typeof disable_model !== 'undefined'){link_disable = false;link_disable = false;}
			else{
			   if(window.location != window.parent.location) {
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			   }else{
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}}	
			}
			//var size = 25;
			fontSize = null;
            
			
			if(fontSize2 == null){
						var gg = jQueryD_1_4_2('.posttext,li').css('font-size');
						
						if(gg.indexOf("px") !== -1){
							
						fontSize2 = ((parseFloat(jQueryD_1_4_2('.posttext,li').css('font-size'))/parseFloat(jQueryD_1_4_2('.post,.pagebody').css('font-size')))*100);

						}
						else{
						fontSize2 = parseFloat(jQueryD_1_4_2('.posttext,li').css('font-size'));
						
						}	
			}
			
			
			
			
			
			jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size', fontSize2+"%");
            /*document.documentElement.style.display = 'none';
            document.documentElement.offsetHeight; // no need to store this anywhere, the reference is enough
            document.documentElement.style.display = '';*/
        });

        // Increase Font Size 
        jQueryD_1_4_2(".increase").click(function(event) {
          
		 if (typeof disable_model !== 'undefined'){link_disable = false;link_disable = false;}
			else{
			   if(window.location != window.parent.location) {
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			   }else{
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}}	
			} 
		  
		  
		 if(posttopid == jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().children('.posttop').attr('id')){
				
		}
		else{
			    
				fontSize = null;
				posttopid = null;
				
		}
		 
		 if(posttopid == null){
		    posttopid = jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().children('.posttop').attr('id');
		    //alert("lol");
		 }
     
		if(fontSize == null){
					    //fontSize = null;
						//alert("getnewzise");
						var gg = jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size');
						//alert(gg);
						if(gg.indexOf("px") !== -1){
							
						fontSize = ((parseFloat(jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size'))/parseFloat(jQueryD_1_4_2('.post').css('font-size')))*100);

						}
						else{
						fontSize = parseFloat(jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size'));
						
						}
						
						//alert(posttopid);
						
		}
		
		
		if(fontSize2 == null){
						var gg = jQueryD_1_4_2('.posttext,li').css('font-size');
						
						if(gg.indexOf("px") !== -1){
							
						fontSize2 = ((parseFloat(jQueryD_1_4_2('.posttext,li').css('font-size'))/parseFloat(jQueryD_1_4_2('.post,.pagebody').css('font-size')))*100);

						}
						else{
						fontSize2 = parseFloat(jQueryD_1_4_2('.posttext,li').css('font-size'));
						
						}	
		}
		
		
		
			
			//var currentSize = jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size');
            //var currentSize = parseFloat(currentSize) + 10;
           
			
			
			fontSize = fontSize+6;

			jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size', fontSize+"%");
            /*document.documentElement.style.display = 'none';
            document.documentElement.offsetHeight; // no need to store this anywhere, the reference is enough
            document.documentElement.style.display = '';*/
            return false;
        });

        // Decrease Font Size 
        jQueryD_1_4_2(".decrease").click(function(event) {
            if (typeof disable_model !== 'undefined'){link_disable = false;link_disable = false;}
			else{
			   if(window.location != window.parent.location) {
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			   }else{
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}}	
			}
			//var currentFontSize = jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size');
            var currentSize = jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size');
            var currentSize = parseFloat(currentSize) - 3;
            
		if(posttopid == jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().children('.posttop').attr('id')){
				
		}
		else{
			    
				fontSize = null;
				posttopid = null;
				
		}
		
		 if(posttopid == null){
		    posttopid = jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().children('.posttop').attr('id');
		    //alert("lol");
		 }
     
		if(fontSize == null){
					    //fontSize = null;
						//alert("getnewzise");
						var gg = jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size');
						//alert(gg);
						if(gg.indexOf("px") !== -1){
							
						fontSize = ((parseFloat(jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size'))/parseFloat(jQueryD_1_4_2('.post').css('font-size')))*100);

						}
						else{
						fontSize = parseFloat(jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size'));
						
						}
						
						//alert(posttopid);
						
		}
		
		
		if(fontSize2 == null){
						var gg = jQueryD_1_4_2('.posttext,li').css('font-size');
						
						if(gg.indexOf("px") !== -1){
							
						fontSize2 = ((parseFloat(jQueryD_1_4_2('.posttext,li').css('font-size'))/parseFloat(jQueryD_1_4_2('.post,.pagebody').css('font-size')))*100);

						}
						else{
						fontSize2 = parseFloat(jQueryD_1_4_2('.posttext,li').css('font-size'));
						
						}	
		}
		
		
		
			
			
			fontSize = fontSize-6;
			
			if(currentSize != -1){
			jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size', fontSize+"%");
			}
            
			/*document.documentElement.style.display = 'none';
            document.documentElement.offsetHeight; // no need to store this anywhere, the reference is enough
            document.documentElement.style.display = '';*/
			
			return false;
            
        });

	    /*jQueryD_1_4_2(".btn_print").click(function(event){
		
			jQueryD_1_4_2(event.currentTarget).parent().parent().parent().children('.posttext').printMe();
			
		});
		*/
		

        jQueryD_1_4_2(".tooltiptext").click(function(event) {
            event.stopPropagation();
        });
        jQueryD_1_4_2(".tooltiptext2").click(function(event) {
            event.stopPropagation();
        });
        jQueryD_1_4_2(".tooltiptext3").click(function(event) {
            event.stopPropagation();
        });
        jQueryD_1_4_2(".tooltiptext4").click(function(event) {
            event.stopPropagation();
        });
        jQueryD_1_4_2(".tooltiptext5").click(function(event) {
            event.stopPropagation();
        });



        jQueryD_1_4_2(window).hashchange(function() {
            var section = location.hash ? location.hash : null;
            if(section != null) {
                //var activePage = jQueryD_1_4_2.mobile.activePage;
            
				jQueryD_1_4_2('.posttop').removeAttr('style');
                if(section.indexOf("post") !== -1) {
                    //jQueryD_1_4_2.mobile.defaultHomeScroll = activePage.find(section).offset().top;
                    section= section.replace(/(#post(.*?))(#([^"]*)|$)/mg, "$1");
					
					if(jQueryD_1_4_2(section).position()){
					
					jQueryD_1_4_2("#wrapper").animate({ scrollTop: jQueryD_1_4_2(section).position().top + jQueryD_1_4_2("#wrapper").scrollTop() }, 0);
					jQueryD_1_4_2(section).css("background-color", "#d5dc91");
					}
                }
                if(section.indexOf("td_threadtitle_") !== -1) {
                    //jQueryD_1_4_2.mobile.defaultHomeScroll = activePage.find(section).offset().top;
                    section= section.replace(/(#td_threadtitle_(.*?))(\?([^"]*)|$)/mg, "$1");
					if(jQueryD_1_4_2(section).position()){
					jQueryD_1_4_2("#wrapper").animate({ scrollTop: jQueryD_1_4_2(section).position().top + jQueryD_1_4_2("#wrapper").scrollTop() }, 0);
					jQueryD_1_4_2(section).css("background-color", "#d5dc91");
					}
                }
            }
        });
        jQueryD_1_4_2(window).hashchange();
    
	
	

	    
		
		
		
	
	}); //end 	
    
	
    

	
	
	jQueryD_1_4_2.fn.selectText = function() {
        var doc = document,
            element = this[0],
            range, selection;
        if(doc.body.createTextRange) {
            range = document.body.createTextRange();
            range.moveToElementText(element);
            range.select();
        } else if(window.getSelection) {
            selection = window.getSelection();
            range = document.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    };

	

			

}



}