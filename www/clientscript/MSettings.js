


var posttopid;

function enable_select_text(xx){
var x= jQueryM_v1_4_5(xx);
for(var i=0; i<x.length; i++) {
			makeselectable(x[i]);
}
}

function disable_select_text(xx)
{
	var x = jQueryM_v1_4_5(xx);
	for (var i = 0; i < x.length; i++)
	{
		makeunselectable(x[i])
	}
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
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
if(_isMobile() != mobiletrue) {
  
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


function font_options(index,selector,strUser){
		
		    var h1 = document.getElementById('wrapper')
			h1.style.fontFamily = strUser;
		

					if(index == 0){
					h1 = document.getElementById('wrapper');
					
					if(localStorage.getItem("currsize")){
						
						h1.style.fontSize = (180+parseFloat(localStorage.getItem("currsize")))+"%";
					}
					else{
					  h1.style.fontSize = "180%";	
					}
					
					localStorage.setItem("defaltsize", "180"); 

					}
					
					if(index == 1){
				
					h1 = document.getElementById('wrapper');
				
					if(localStorage.getItem("currsize")){
						
						h1.style.fontSize = (140+parseFloat(localStorage.getItem("currsize")))+"%";
					}
					else{
					  h1.style.fontSize = "140%";	
					}
					
					localStorage.setItem("defaltsize", "140");
					
					}
					
					if(index == 2){
					h1 = document.getElementById('wrapper');
					if(localStorage.getItem("currsize")){
						
						h1.style.fontSize = (115+parseFloat(localStorage.getItem("currsize")))+"%";
					}
					else{
					  h1.style.fontSize = "115%";	
					}
					localStorage.setItem("defaltsize", "100");
				
					}
					
					if(index == 3){
					h1 = document.getElementById('wrapper');
					if(localStorage.getItem("currsize")){
						
						h1.style.fontSize = (190+parseFloat(localStorage.getItem("currsize")))+"%";
					}
					else{
					  h1.style.fontSize = "190%";	
					}
					localStorage.setItem("defaltsize", "190");
				
					}
					
					if(index == 4){
					h1 = document.getElementById('wrapper');
					if(localStorage.getItem("currsize")){
						
						h1.style.fontSize = (140+parseFloat(localStorage.getItem("currsize")))+"%";
						
					}
					else{
					  h1.style.fontSize = "140%";	
					}
					localStorage.setItem("defaltsize", "140");
				
					}
		
		
}




function updateh1family(savefont)
	{

		var selector, fonttype,index,strUser;
		
			
			
		if (savefont == !0)
		{

	        selector = document.getElementById('selecth1FontFamily');
			strUser = selector.options[selector.selectedIndex].value;
			index = selector.selectedIndex;
			selector.selectedIndex = index;
	
	
			if (lsTest() === !0)
			{
				
				localStorage.setItem('fonttype', selector.selectedIndex)
			}
			else
			{
				setCookie("fonttype", selector.selectedIndex, 1000)
			}
			
			font_options(index,selector,strUser);
			
		}
		else
		{
			if (lsTest() === !0)
			{
				
				
				index = localStorage.getItem('fonttype');
				if (index)
				{
					
					selector = document.getElementById('selecth1FontFamily');
			        selector.selectedIndex = index;
					strUser = selector.options[index].value;
					font_options(index,selector,strUser);
				
					
				}
				else{
					
					
			        selector = document.getElementById('selecth1FontFamily');
				    index = selector.selectedIndex;
					strUser = selector.options[index].value;
					font_options(index,selector,strUser);
					
			
				}
				
				
				jQueryM_v1_4_5('.posttext').removeAttr("style")
			}
			else
			{
				fonttype = getCookie("fonttype");
				if (fonttype || fonttype == null)
				{
					selector = document.getElementById('selecth1FontFamily');
					selector.selectedIndex = fonttype;
					strUser = selector.options[selector.selectedIndex].value;
					h1 = document.getElementById('wrapper')
					h1.style.fontFamily = strUser;
					jQueryM_v1_4_5('.posttext').removeAttr("style")
				}
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
	
	    jQueryM_v1_4_5( ".staticrypt-page" ).hide();
	
		if (fontstylelist == true) { 
         
		jQueryM_v1_4_5( "#content" )
                        .html("<div style =\"background-color:#b54b3d;color:white;font-Weight:bold;font-size:100%;text-align:center;padding:4px;\">صـــــفــحــة مشـــــفـــــرة<br><input type=\"checkbox\" id=\"pass3\"> الدخول التلقائي للبيانات المشفرة.. </input></div>" + plainHTML + "<div class=\"selecth1FontFamily\" >تغيير نوع الخط<br><select  id=\"selecth1FontFamily\" name=\"selectFontFamily\" onchange=\"updateh1family(true);\"><option>Lateef</option><option>Amiri</option><option>Droid Arabic Naskh</option><option>Scheherazade</option><option>Arial</option></select><div>");
        }
		else{
		jQueryM_v1_4_5( "#content" ).html("<div style =\"background-color:#b54b3d;color:white;font-Weight:bold;font-size:100%;text-align:center;padding:4px;\">صـــــفــحــة مشـــــفـــــرة<br><input type=\"checkbox\" id=\"pass3\"> الدخول التلقائي للبيانات المشفرة.. </input></div>"+plainHTML);
	
		}


disable_select_text('#navbar');
				disable_select_text('.tooltip4');
				disable_select_text('.posttop');
				disable_select_text('.selecth1FontFamily');
				disable_select_text('.footer');
		
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
		
		

    jQueryM_v1_4_5('#pass3').change(function() {
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





jQueryM_v1_4_5(document).ready(function() {




  if (window.location == window.parent.location) {} else {
	  
                jQueryM_v1_4_5("html,body")
                    .css("height", "100%");
  }






if (typeof encryptedMsg != 'undefined')
{
   
    jQueryM_v1_4_5("#content").html('<div class="staticrypt-page" dir = "rtl"><div class="staticrypt-form" ><div class="staticrypt-instructions"><p class="staticrypt-title">**موضوع محمي**</p><hr><span>الرجاء مسح كاش المتصفح والمفضلة بعدالإنتهاء من الموسوعة في حال كان جهاز الذي تستخدمه غير شخصي ودخلت الى البيانات المشفرة<span><hr></div><input style= "" autocomplete="on" id="staticrypt-password" type="password" name="password" placeholder="كلمة السر"/><br><input type="checkbox" id="pass"> حفظ كلمة السر.. </input><br><input type="checkbox" id="pass2"> الدخول التلقائي للبيانات المشفرة.. </input><br><button autocomplete="on" type=\'submit\' id ="subment" class="staticrypt-decrypt-button">فك التشفير</button></div></div>');

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



jQueryM_v1_4_5("#subment").click(function(event){

		event.preventDefault();
		autolog(event,true,document.getElementById('staticrypt-password').value);
		return false;
		
		
});


jQueryM_v1_4_5("#staticrypt-password").keypress(function(event) {
    if(event.which == 13) {
        event.preventDefault();
		autolog(event,true,document.getElementById('staticrypt-password').value);
		return false;
    }
});



if (fontstylelist == true) {

jQueryM_v1_4_5("#content")
                    .append('<div class="selecth1FontFamily" >تغيير نوع الخط<br><select  id="selecth1FontFamily" name="selectFontFamily" onchange="updateh1family(true);"><option>Lateef</option><option>Amiri</option><option>Droid Arabic Naskh</option><option>Scheherazade</option><option>Arial</option></select><div>');
}
//jQueryM_v1_4_5("#wrapper").append('<center><a target ="_blank" href="https://info.flagcounter.com/4Yvv"><img src="https://s11.flagcounter.com/count/4Yvv/bg_FFFFFF/txt_000000/border_CCCCCC/columns_3/maxflags_10/viewers_0/labels_1/pageviews_1/flags_0/percent_0/" alt="Free counters!" border="0"></a></td></center>');


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


//jQueryM_v1_4_5("#wrapper").append('<center><a target ="_blank" href="https://info.flagcounter.com/4Yvv"><img src="https://s11.flagcounter.com/count/4Yvv/bg_FFFFFF/txt_000000/border_CCCCCC/columns_3/maxflags_10/viewers_0/labels_1/pageviews_1/flags_0/percent_0/" alt="Free counters!" border="0"></a></td></center>');





disable_select_text('#navbar');
				disable_select_text('.tooltip4');
				disable_select_text('.posttop');
				disable_select_text('.selecth1FontFamily');
				disable_select_text('.footer');


jQueryM_v1_4_5(document).click(function() {
//clearSelection();
});
	 

jQueryM_v1_4_5(document).on('click', 'a', function(event) {

            var classname = jQueryM_v1_4_5(this).attr('class');
            var link = this.href;
			
			  var pur_link = link.split('?')[0];
					   pur_link = pur_link.split('#')[0];
					   var hash =  this.href.split("#")[1];
					   var puer_url = document.location.protocol +"//"+ document.location.hostname + document.location.pathname;
                       var paramters="";

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
					jQueryM_v1_4_5(this).attr("target","_heopenit");	
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
						jQueryM_v1_4_5(".modal").show();
                        jQueryM_v1_4_5("#wrapper,body,html").css({
                            'overflow': 'hidden'
                        });
                        jQueryM_v1_4_5("#img01").attr("src", link);
						jQueryM_v1_4_5("#img01").removeAttr('style');
						jQueryM_v1_4_5("#img01").removeAttr('height');
                        }
				     }
				
					//}
		
					}
                }
				else if(checkURL(x) == false) {

				
				
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
	   
	   
	   
       if(paramters != ''){
		  paramters = '?'+paramters;
	   }
	   
	   if(hash){
		  hash = '#'+hash;
	   }else{
		  hash = ''; 
	   }

                  if (window.location == window.parent.location) {
		  
		 if(jQueryM_v1_4_5(this).attr('class') == "up post_hash"){
								     if(window.location.hash!=hash){
								               jQueryM_v1_4_5('#loading').show(); 
								     }
								 
							     }
								 else{
									          jQueryM_v1_4_5('#loading').show();  
								 } 
		  
		  
		  
		  
		  
						location.href = pur_link+paramters+hash;
	                  
                       	return false;
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
					jQueryM_v1_4_5(this).attr("target","_heexternal");
					var res = jQueryM_v1_4_5(this).attr("href");
					res = res.replace("heexternal://", "");
					jQueryM_v1_4_5(this).attr("href","heexternal://"+res).removeAttr('target');	
			        }    


					
					/*if(wke){
					jQueryM_v1_4_5(this).attr("target","_heexternal");
					var res = jQueryM_v1_4_5(this).attr("href");
					res = res.replace("heexternal://", "");
					jQueryM_v1_4_5(this).attr("href","heexternal://"+res).removeAttr('target');	
					}
	
					if(iee){
                   					
					jQueryM_v1_4_5(this).attr("target","_heexternal");	
					}
					*/	
						
                        //return false;
                    }
					else{

					
					/*if(wke){
					jQueryM_v1_4_5(this).attr("target","_heexternal");
					var res = jQueryM_v1_4_5(this).attr("href");
					res = res.replace("heexternal://", "");
					jQueryM_v1_4_5(this).attr("href","heexternal://"+res).removeAttr('target');	
					}
	
					if(iee){
                   					
					jQueryM_v1_4_5(this).attr("target","_heexternal");	
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
						jQueryM_v1_4_5(".modal").show();
                        jQueryM_v1_4_5("#wrapper,body,html").css({
                            'overflow': 'hidden'
                        });
                        jQueryM_v1_4_5("#img01").attr("src", link);
						jQueryM_v1_4_5("#img01").removeAttr('style');
						jQueryM_v1_4_5("#img01").removeAttr('height');
                        }
				     
					 //}
					 }
					 }
					
					
						
					}   

                } else {

				  
				    
					if(wkchrom){
				    event.stopPropagation();
					jQueryM_v1_4_5(this).attr("target","_heexternal");
					var res = jQueryM_v1_4_5(this).attr("href");
					res = res.replace("heexternal://", "");
					jQueryM_v1_4_5(this).attr("href","heexternal://"+res).removeAttr('target');	
			        }
					
					
					/*if(wke){
					jQueryM_v1_4_5(this).attr("target","_heexternal");
					var res = jQueryM_v1_4_5(this).attr("href");
					res = res.replace("heexternal://", "");
					jQueryM_v1_4_5(this).attr("href","heexternal://"+res).removeAttr('target');	
					}

					if(iee){
					jQueryM_v1_4_5(this).attr("target","_heexternal");	
					} */
				
				
                }

            }

        });
});		

if(window.location == window.parent.location) {
	 loaddsett();
} 
		
 
function loaddsett(){     


jQueryM_v1_4_5(document).ready(function() {

   
 document.onkeydown = keydown;

function keydown(e) {
  var evtobj = window.event ? event : e
  if (evtobj.keyCode == 122){
	  
  evtobj.keyCode = 0;
  evtobj.returnValue = false;
    //alert("[JS] Ctrl + F11 pressed");
	
	
	if (window.location == window.parent.location)
	{
		toggfullScreen.call();
	}
	else{
		window.parent.postMessage(["gofull", null], "*");
	}
	
  }
}    
   
   

jQueryM_v1_4_5("#staticrypt-password").focus(function() {
jQueryM_v1_4_5("#header_topic").css({ top: '0px' });
});


jQueryM_v1_4_5('.posttext').removeAttr("style");
if (fontstylelist == true) { 
updateh1family(false);
}
else{
jQueryM_v1_4_5('.posttext > div,.posttext > span').css("line-height", "normal");
jQueryM_v1_4_5('#wrapper').css("font-size","140%");
jQueryM_v1_4_5('.posttext').css("font-size","120%");
jQueryM_v1_4_5('#wrapper').css("-webkit-text-size-adjust","80%");	
}



	 
	       /*jQueryM_v1_4_5("#wrapper").scroll(function() {
            
			
			
			if(jQueryM_v1_4_5(this).scrollTop() + jQueryM_v1_4_5(this).height() == jQueryM_v1_4_5(this)[0].scrollHeight) {
   
               
				
            }


            var pos = jQueryM_v1_4_5(this).scrollTop();
            if(pos == 0) {
               
                setTimeout(function () {
                window.parent.postMessage(["loading", "stop"], "*");
				 }, 150);
				
            }

           });*/
	   
	    //jQueryM_v1_4_5('.posttext').removeAttr("style"); 
	    jQueryM_v1_4_5('.up2 >img').removeAttr("style");
	   
	    
	   
	   
	        jQueryM_v1_4_5(document).on('click', function(event) {
         if(event.which == 0 || event.which == 1) { //right click
         event.stopPropagation();
  	     window.parent.postMessage(["hide_drop", "hide_drop"], "*");
		 
		 //var target = event ? event.target : window.event.srcElement;
          
		 matches = jQueryM_v1_4_5(event.target).is( ".dropbtn" )
		 
		 /*if (target.id != 'dropbtn') {
               
               jQueryM_v1_4_5('#myDropdown').removeClass("show");
         }*/
		 
		 if (!matches) {

                 jQueryM_v1_4_5('#myDropdown').removeClass("show");
         }
		 
		 
			
			if(link_disable == false){
			    jQueryM_v1_4_5('.image_custom').remove();
				jQueryM_v1_4_5(".link_img").remove();
				jQueryM_v1_4_5(".extImag").remove();
				jQueryM_v1_4_5(".tooltiptext_custom").remove();
				jQueryM_v1_4_5(".tooltiptext_custom_copy").remove();
                jQueryM_v1_4_5('.tooltiptext').hide();
                jQueryM_v1_4_5('.tooltiptext2').hide();
                jQueryM_v1_4_5('.tooltiptext3').hide();
                jQueryM_v1_4_5('.tooltiptext4').hide();
                jQueryM_v1_4_5('.tooltiptext5').hide();
                jQueryM_v1_4_5('.hide_external_link').hide();
                jQueryM_v1_4_5('.hide_local_link').hide();
				
              jQueryM_v1_4_5(".moveoff").unbind( "click" );
			  jQueryM_v1_4_5(".selected").attr("class", 'selected enableselect enableselect'); 
              }
             


		 }	  
		       link_img_show = false;
		       stop = false;

           });
	   
        
		
		jQueryM_v1_4_5('.btn_print').on('click', function(event) {
			 
		 event.preventDefault();
         event.stopPropagation();
		if(printin_prosses == false){
			printin_prosses = true;
		    var c = jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().children('.posttext');
            var postID = jQueryM_v1_4_5(event.currentTarget).parent().parent().attr("id");
			//var c = event.currentTarget.parentNode.parentNode.parentNode.childNodes;
		  tooltip(null, "الرجاء الانتظار يتم عرض الطباعة")
		  
		  setTimeout(function () {
			
			
			if (typeof process !== "undefined" && typeof require !== "undefined") {
				printPage(c); 
			}
			else{
									 
			    print(c); 
			
			}
			
			
			
			 setTimeout(function () {
          
				 printin_prosses = false;
				 }, 300);
			  }, 3000);
		  //
		 
		}
			
		});
		
		
		jQueryM_v1_4_5(".alpom2_go").on('click', function(event) {
			  //event.preventDefault();
			   event.stopPropagation();
			   if(wkchrom){
				    
					jQueryM_v1_4_5(this).attr("target","_heexternal");
					var res = jQueryM_v1_4_5(this).attr("href");
					res = res.replace("heexternal://", "");
					jQueryM_v1_4_5(this).attr("href","heexternal://"+res).removeAttr('target');	
			  }
           
	    });
		
		jQueryM_v1_4_5(".alpom2_copy").on('click', function(event) {
			  //event.preventDefault();
              event.stopPropagation();	
			  
			  	var c = event.currentTarget.parentNode.childNodes;
					var i;
                    for(i = 0; i < c.length; i++) {
                    //alert(c[i].className);
					
					
					 if(c[i].className!=null){
	
    
			   if(c[i].className.indexOf("selected")!=-1) {

                 select_all_and_copy(c[i]);
			//jQueryM_v1_4_5(c[i]).selectText();

                }
				
			   }
                    
                    }
 
         });
		
		
		
		
		jQueryM_v1_4_5(".link_org").click(function(event) {
            
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

			
			
			if(!jQueryM_v1_4_5(event.currentTarget).children(".selected").hasClass( "moveoff" )){
				jQueryM_v1_4_5(".selected").unbind( "click" );
				jQueryM_v1_4_5(".selected").attr("class", 'selected enableselect');
				jQueryM_v1_4_5(event.currentTarget).children(".selected").attr("class", 'selected moveoff enableselect');
				jQueryM_v1_4_5(event.currentTarget).children(".selected").unbind('click').bind('click', function(event) {
			     	
					event.stopPropagation();
					//jQueryM_v1_4_5( this ).off( event );
                				
                });
				
			}
			
	
			jQueryM_v1_4_5(".extImag").remove();
			jQueryM_v1_4_5(".tooltiptext_custom").remove();
			jQueryM_v1_4_5(".tooltiptext_custom_copy").remove();
            jQueryM_v1_4_5('.image_custom').remove();
            jQueryM_v1_4_5(".link_img").remove();
            jQueryM_v1_4_5('.tooltiptext').hide();
            jQueryM_v1_4_5('.tooltiptext2').hide();
            jQueryM_v1_4_5('.tooltiptext3').hide();
            jQueryM_v1_4_5('.tooltiptext4').hide();
            jQueryM_v1_4_5('.tooltiptext5').hide();
            jQueryM_v1_4_5('.hide_external_link').hide();

            if(jQueryM_v1_4_5(".tooltiptext_custom").length == 0) {
                jQueryM_v1_4_5(event.currentTarget).append('<div class="tooltiptext_custom"><div class="tooltiptext_custom_go linkstyle"><a href="" target="_blank" >الذهاب الى الرابط</a></div><br><div class="tooltiptext_custom_copy linkstyle">نسخ الرابط</div></div>');
                jQueryM_v1_4_5(event.currentTarget).children(".tooltiptext_custom").children(".tooltiptext_custom_go").children('a').attr("href", jQueryM_v1_4_5(event.currentTarget).children('.link_org2').attr('href'));
                
				
				jQueryM_v1_4_5(".tooltiptext_custom").click(function(event) {
                 
				jQueryM_v1_4_5(".selected").unbind( "click" );
				jQueryM_v1_4_5(".selected").attr("class", 'selected enableselect');
				 event.stopPropagation();
                jQueryM_v1_4_5(".tooltiptext_custom").remove();
                stop = false;				
	             });

				jQueryM_v1_4_5(".tooltiptext_custom_go > a").click(function(event) {
                    event.stopPropagation();
					//link_img_show = true;
					
					if(wkchrom){
				    //event.stopPropagation();
					jQueryM_v1_4_5(this).attr("target","_heexternal");
					var res = jQueryM_v1_4_5(this).attr("href");
					res = res.replace("heexternal://", "");
					jQueryM_v1_4_5(this).attr("href","heexternal://"+res).removeAttr('target');	
			        }
					
                });
				
				jQueryM_v1_4_5(".tooltiptext_custom_copy").click(function(event) {
                    event.stopPropagation();
	
					var c = event.currentTarget.parentNode.parentNode.childNodes;
					
                    for(i = 0; i < c.length; i++) {
                    //alert(c[i].className);
					
						 if(c[i].className!=null){
	
    
			   if(c[i].className.indexOf("selected moveoff")!=-1) {

                 select_all_and_copy(c[i]);
			//jQueryM_v1_4_5(c[i]).selectText();

                }
				
			   }
					
					
                    }
	
                });
				
            }

                        if (window.location == window.parent.location) {
                         
						 jQueryM_v1_4_5("html,body").animate({ scrollTop: jQueryM_v1_4_5(this).position().top }, 50);

                        } else {
                          jQueryM_v1_4_5("#wrapper").animate({ scrollTop: jQueryM_v1_4_5(this).position().top + jQueryM_v1_4_5("#wrapper").scrollTop() }, 50);


                        } 

        });
		
		
		
		
		
		
		jQueryM_v1_4_5(".link_pic").on('click', function(event) {

          jQueryM_v1_4_5(".moveoff").unbind("click");  
          event.preventDefault();
          event.stopPropagation(); 


            jQueryM_v1_4_5(".extImag").remove();
			jQueryM_v1_4_5(".tooltiptext_custom").remove();
			jQueryM_v1_4_5(".tooltiptext_custom_copy").remove();
            jQueryM_v1_4_5('.image_custom').remove();
            jQueryM_v1_4_5(".link_img").remove();
            jQueryM_v1_4_5('.tooltiptext').hide();
            jQueryM_v1_4_5('.tooltiptext2').hide();
            jQueryM_v1_4_5('.tooltiptext3').hide();
            jQueryM_v1_4_5('.tooltiptext4').hide();
            jQueryM_v1_4_5('.tooltiptext5').hide();
            jQueryM_v1_4_5('.hide_external_link').hide();


            //jQueryM_v1_4_5(event.currentTarget).children(".selected").attr("class", 'alpom2 link_off');

            if (!jQueryM_v1_4_5(event.currentTarget).children(".selected").hasClass("moveoff")) {
                jQueryM_v1_4_5(".selected").unbind("click");
                jQueryM_v1_4_5(".selected").attr("class", 'selected enableselect');
                jQueryM_v1_4_5(event.currentTarget).children(".selected").attr("class", 'selected moveoff enableselect');
				//jQueryM_v1_4_5(event.currentTarget).children('.selected').selectText();
                jQueryM_v1_4_5(event.currentTarget).children(".selected").unbind('click').bind('click', function(event) {

                    event.stopPropagation();
                    //jQueryM_v1_4_5( this ).off( event );

                });

            }


            jQueryM_v1_4_5(event.currentTarget).parent().append('<div class="extImag"><div class="extImag2"><a target="_blank" href=""><img class="img2" src="" height="200" width="200" alt=""></a></div><br><div class="extImag_go linkstyle"><a class="extImag_go2" href="" target="_blank" >الذهاب الى الرابط</a></div><br><div class="extImag_copy linkstyle">نسخ الرابط</div></div>');

            jQueryM_v1_4_5(event.currentTarget).parent().children(".extImag").children('.extImag2').children('a').attr("href", jQueryM_v1_4_5(event.currentTarget).children(".NOTselected").children('a').attr('href'));

            //jQueryM_v1_4_5(event.currentTarget).children(".NOTselected").children('a').selectText();


            var img = new Image();

            jQueryM_v1_4_5(event.currentTarget).parent().children(".extImag").children('.extImag2').children('a').children('img').attr("src", '../../clientscript/images/loading.gif');
            //$el.parent().attr("class", 'alpom2 link_off');
            jQueryM_v1_4_5(event.currentTarget).parent().children(".extImag").children('.extImag2').children('a').attr("class", 'alpom2 link_off');
            img.onload = function() {

                jQueryM_v1_4_5(event.currentTarget).parent().children(".extImag").children('.extImag2').children('a').children('img').attr("src", img.src);
                jQueryM_v1_4_5(event.currentTarget).parent().children(".extImag").children('.extImag2').children('a').removeAttr('class');
                //imag_loading = false;
                //alert("loaded successfully");
            }
            img.onerror = img.onabort = function() {
                jQueryM_v1_4_5(event.currentTarget).parent().children(".extImag").children('.extImag2').children('a').children('img').attr("src", '../../clientscript/images/linklost.jpg');
                jQueryM_v1_4_5(event.currentTarget).parent().children(".extImag").children('.extImag2').children('a').attr("class", 'alpom2 link_off');

                //alert("broken image");
            }
            // only set .src AFTER event handlers are in place
            img.src = jQueryM_v1_4_5(event.currentTarget).children(".NOTselected").children('a').attr('href');
            //alert(img.src);


            jQueryM_v1_4_5(event.currentTarget).parent().children(".extImag").children('.extImag_go').children('a').attr("href", jQueryM_v1_4_5(event.currentTarget).children(".NOTselected").children('a').attr('href'));
           
	
			
			jQueryM_v1_4_5(".extImag2 > a").click(function(event) {
			  //event.preventDefault();
              //event.stopPropagation();

              /*if(wke){
				    event.stopPropagation();
					jQueryM_v1_4_5(this).attr("target","_heexternal");
					var res = jQueryM_v1_4_5(this).attr("href");
					res = res.replace("heexternal://", "");
					jQueryM_v1_4_5(this).attr("href","heexternal://"+res).removeAttr('target');	
			  }

			  if(iee){
				    event.stopPropagation();
					jQueryM_v1_4_5(this).attr("target","_heexternal");	
			  }*/
 
			});
			
			jQueryM_v1_4_5(".extImag_go > a").click(function(event) {
			  //event.preventDefault();
              event.stopPropagation();

			  if(wkchrom){
				    event.stopPropagation();
					jQueryM_v1_4_5(this).attr("target","_heexternal");
					var res = jQueryM_v1_4_5(this).attr("href");
					res = res.replace("heexternal://", "");
					jQueryM_v1_4_5(this).attr("href","heexternal://"+res).removeAttr('target');	
			  }
			  
			  
			  /*if(wke){
				    event.stopPropagation();
					jQueryM_v1_4_5(this).attr("target","_heexternal");
					var res = jQueryM_v1_4_5(this).attr("href");
					res = res.replace("heexternal://", "");
					jQueryM_v1_4_5(this).attr("href","heexternal://"+res).removeAttr('target');	
			  }

			  if(iee){
				    event.stopPropagation();
					jQueryM_v1_4_5(this).attr("target","_heexternal");	
			  }*/
 
			});
			
			
			
		   
		    jQueryM_v1_4_5(document).on("click", ".extImag_copy", function(event) {
                
				event.stopPropagation();
                                var c = event.currentTarget.parentNode.parentNode.childNodes;
                                var i;
                                for (i = 0; i < c.length; i++) {


                                    if (c[i].className == "link_pic enableselect") {
                                        var cc = c[i].childNodes;
                                        for (var ii = 0; ii < cc.length; ii++) {

                                            if (c[i].className != null) {

                                                if (cc[ii].className != null) {


                                                    if (cc[ii].className.indexOf("selected moveoff enableselect") != -1) {


                                                        select_all_and_copy(cc[ii]);


                                                    }

                                                }



                                            }




                                        }
                                    }

                                }
				
            });
		   
		   

		   
		   
		   
		   
		   
		                if (window.location == window.parent.location) {
                         
						 jQueryM_v1_4_5("html,body").animate({ scrollTop: jQueryM_v1_4_5(this).position().top }, 50);

                        } else {
                          jQueryM_v1_4_5("#wrapper").animate({ scrollTop: jQueryM_v1_4_5(this).position().top + jQueryM_v1_4_5("#wrapper").scrollTop() }, 50);


                        } 
        });
	




        jQueryM_v1_4_5(".close").on('click', function(event) {


            jQueryM_v1_4_5(".modal").hide();
              jQueryM_v1_4_5("html,body")
                            .css({
                                'overflow-y': 'auto'
                            });
            setTimeout(function() {
                link_disable = false;
                model_visible = false;
            }, 1000);
        });
		
		
		
		
		
		
		
		
		
		   jQueryM_v1_4_5("a.select_txt").on('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (typeof disable_model !== 'undefined'){link_disable = false;link_disable = false;}
			else{
			   if(window.location != window.parent.location) {
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			   }else{
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}}	
			}
			
            var c = event.currentTarget.parentNode.parentNode.parentNode.childNodes;
            var i;
            for(i = 0; i < c.length; i++) {
		 if(c[i].className!=null){
	
    
			   if(c[i].className.indexOf("posttext")!=-1) {

                 select_all_and_copy(c[i]);
			//jQueryM_v1_4_5(c[i]).selectText();

                }
				
			   }

            }
			
			

          });
	
	
    
	
	
	jQueryM_v1_4_5("a.threadinfo").on('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            
			if(window.location != window.parent.location) {
			if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			}else{
			if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}}
			
			jQueryM_v1_4_5(".tooltiptext_custom").remove();
            jQueryM_v1_4_5('.image_custom').remove();
            jQueryM_v1_4_5(".link_img").remove();
            jQueryM_v1_4_5('.tooltiptext').hide();
            jQueryM_v1_4_5('.tooltiptext2').hide();
            jQueryM_v1_4_5('.tooltiptext3').hide();
            jQueryM_v1_4_5('.tooltiptext4').hide();
            jQueryM_v1_4_5('.tooltiptext5').hide();
            jQueryM_v1_4_5('.hide_external_link').hide();
            jQueryM_v1_4_5(event.currentTarget).parent().children('.tooltiptext3').show().selectText();
        });
        jQueryM_v1_4_5("a.threadinfo2").on('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            
			if(window.location != window.parent.location) {
			if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			}else{
			if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}}
			
			jQueryM_v1_4_5(".tooltiptext_custom").remove();
            jQueryM_v1_4_5('.image_custom').remove();
            jQueryM_v1_4_5(".link_img").remove();
            jQueryM_v1_4_5('.tooltiptext').hide();
            jQueryM_v1_4_5('.tooltiptext2').hide();
            jQueryM_v1_4_5('.tooltiptext3').hide();
            jQueryM_v1_4_5('.tooltiptext4').hide();
            jQueryM_v1_4_5('.tooltiptext5').hide();
            jQueryM_v1_4_5('.hide_external_link').hide();
            jQueryM_v1_4_5(event.currentTarget).parent().children('.tooltiptext4').show().selectText();
        });
        jQueryM_v1_4_5("a.postinfo").on('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            
			if(window.location != window.parent.location) {
			if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			}else{
			if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}}
			
			jQueryM_v1_4_5(".tooltiptext_custom").remove();
            jQueryM_v1_4_5('.image_custom').remove();
            jQueryM_v1_4_5(".link_img").remove();
            jQueryM_v1_4_5('.tooltiptext').hide();
            jQueryM_v1_4_5('.tooltiptext2').hide();
            jQueryM_v1_4_5('.tooltiptext3').hide();
            jQueryM_v1_4_5('.tooltiptext4').hide();
            jQueryM_v1_4_5('.tooltiptext5').hide();
            jQueryM_v1_4_5('.hide_external_link').hide();
            jQueryM_v1_4_5(event.currentTarget).parent().children('.tooltiptext2').show().selectText();
        });

        jQueryM_v1_4_5(".txt_resize").on('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            
			if(window.location != window.parent.location) {
			if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			}else{
			if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}}
			
			jQueryM_v1_4_5('.tooltiptext').hide();
            jQueryM_v1_4_5('.tooltiptext2').hide();
            jQueryM_v1_4_5('.tooltiptext3').hide();
            jQueryM_v1_4_5('.tooltiptext4').hide();
            jQueryM_v1_4_5('.tooltiptext5').hide();
            jQueryM_v1_4_5('.hide_external_link').hide();
            jQueryM_v1_4_5(event.currentTarget).parent().children('.tooltiptext5').show();
        });



        //jQueryM_v1_4_5('.posttext').css('font-size', 20+"px");
		var arrEdited2 = [];
        jQueryM_v1_4_5('.posttext').each(function(i) {
            //jQueryM_v1_4_5(this).attr('id', 'id_' + (i + 1));

            arrEdited2.push({
                id: jQueryM_v1_4_5(this).attr('id'),
                fontsize: 25

            });
        });
		

        // reset 
        // reset 
        jQueryM_v1_4_5(".resetMe").click(function(event) {
           
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
						var gg = jQueryM_v1_4_5('.posttext,li').css('font-size');
						
						if(gg.indexOf("px") !== -1){
							
						fontSize2 = ((parseFloat(jQueryM_v1_4_5('.posttext,li').css('font-size'))/parseFloat(jQueryM_v1_4_5('.post,.pagebody').css('font-size')))*100);

						}
						else{
						fontSize2 = parseFloat(jQueryM_v1_4_5('.posttext,li').css('font-size'));
						
						}	
			
                   }
			
			
			
				
		jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').removeAttr("style")
				
			
			
   
        });

        // Increase Font Size 
        jQueryM_v1_4_5(".increase").click(function(event) {
          
		 if (typeof disable_model !== 'undefined'){link_disable = false;link_disable = false;}
			else{
			   if(window.location != window.parent.location) {
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			   }else{
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}}	
			} 
		  
		  
		 if(posttopid == jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().parent().parent().children('.posttop').attr('id')){
				
		}
		else{
			    
				fontSize = null;
				posttopid = null;
				
		}
		 
		 if(posttopid == null){
		    posttopid = jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().parent().parent().children('.posttop').attr('id');
		    //alert("lol");
		 }
     
	
					    //fontSize = null;
						//alert("getnewzise");
						var gg = jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size');
						//alert(gg);
						if(gg.indexOf("px") !== -1){
							
						fontSize = ((parseFloat(jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size'))/parseFloat(jQueryM_v1_4_5('.post').css('font-size')))*100);

						}
						else{
						fontSize = parseFloat(jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size'));
						
						}
						
					
	
		
		if(fontSize2 == null){
					    //fontSize = null;
						//alert("getnewzise");
						var gg = jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size');
						//alert(gg);
						if(gg.indexOf("px") !== -1){
							
						fontSize2 = ((parseFloat(jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size'))/parseFloat(jQueryM_v1_4_5('.post').css('font-size')))*100);

						}
						else{
						fontSize2 = parseFloat(jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size'));
						
						}
						
						//alert(posttopid);
						
		}
		 
			
			//var currentSize = jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size');
            //var currentSize = parseFloat(currentSize) + 10;
           
			
			
			fontSize = fontSize+6;

			jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size', fontSize+"%");
            /*document.documentElement.style.display = 'none';
            document.documentElement.offsetHeight; // no need to store this anywhere, the reference is enough
            document.documentElement.style.display = '';*/
            return false;
        });

        // Decrease Font Size 
        jQueryM_v1_4_5(".decrease").click(function(event) {
            if (typeof disable_model !== 'undefined'){link_disable = false;link_disable = false;}
			else{
			   if(window.location != window.parent.location) {
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			   }else{
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}}	
			}
			//var currentFontSize = jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size');
            var currentSize = jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size');
            var currentSize = parseFloat(currentSize) - 3;
            
		if(posttopid == jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().parent().parent().children('.posttop').attr('id')){
				
		}
		else{
			    
				fontSize = null;
				posttopid = null;
				
		}
		
		 if(posttopid == null){
		    posttopid = jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().parent().parent().children('.posttop').attr('id');
		    //alert("lol");
		 }
     
		if(fontSize == null){
					    //fontSize = null;
						//alert("getnewzise");
						var gg = jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size');
						//alert(gg);
						if(gg.indexOf("px") !== -1){
							
						fontSize = ((parseFloat(jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size'))/parseFloat(jQueryM_v1_4_5('.post').css('font-size')))*100);

						}
						else{
						fontSize = parseFloat(jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size'));
						
						}
						
						//alert(posttopid);
						
		}
		
		
		if(fontSize2 == null){
					    //fontSize = null;
						//alert("getnewzise");
						var gg = jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size');
						//alert(gg);
						if(gg.indexOf("px") !== -1){
							
						fontSize2 = ((parseFloat(jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size'))/parseFloat(jQueryM_v1_4_5('.post').css('font-size')))*100);

						}
						else{
						fontSize2 = parseFloat(jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size'));
						
						}
						
						//alert(posttopid);
						
		}
			
			
			fontSize = fontSize-6;
			
			if(currentSize != -1){
			jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size', fontSize+"%");
			}
            
			/*document.documentElement.style.display = 'none';
            document.documentElement.offsetHeight; // no need to store this anywhere, the reference is enough
            document.documentElement.style.display = '';*/
			
			return false;
            
        });

        jQueryM_v1_4_5(".tooltiptext").on('click', function(event) {
            //event.stopPropagation();
            imglink_check = true;
        });
        jQueryM_v1_4_5(".tooltiptext2").on('click', function(event) {
            event.stopPropagation();
        });
        jQueryM_v1_4_5(".tooltiptext3").on('click', function(event) {
            event.stopPropagation();
        });
        jQueryM_v1_4_5(".tooltiptext4").on('click', function(event) {
            event.stopPropagation();
        });
        jQueryM_v1_4_5(".tooltiptext5").on('click', function(event) {
            event.stopPropagation();
        });
        jQueryM_v1_4_5(".hide_external_link").on('click', function(event) {
            //event.stopPropagation();
            imglink_check = true;
        });

         jQueryM_v1_4_5(window).hashchange(function() {
            var section = location.hash ? location.hash : null;
            if(section != null) {
                //var activePage = jQueryM_v1_4_5.mobile.activePage;
                  
				
				
				jQueryM_v1_4_5('.posttop').removeClass( "sectionH" );
                if(section.indexOf("post") !== -1) {
                   
                   if(jQueryM_v1_4_5(section).length){
				   //jQueryM_v1_4_5.mobile.defaultHomeScroll = activePage.find(section).offset().top;
                    section= section.replace(/(#post(.*?))(#([^"]*)|$)/mg, "$1");
					if(jQueryM_v1_4_5(section).position()){


                     if (window.location == window.parent.location) {

					jQueryM_v1_4_5("html,body").animate({ scrollTop: jQueryM_v1_4_5(section).position().top}, 0);

                    } else {
					jQueryM_v1_4_5("#wrapper").animate({ scrollTop: jQueryM_v1_4_5(section).position().top + jQueryM_v1_4_5("#wrapper").scrollTop() }, 0);
                          setTimeout(function(){  window.parent.postMessage(["loading","stop"], "*"); }, 100);
                    }


					jQueryM_v1_4_5(section).addClass( "sectionH" );
					}
				   }
                }
                if(section.indexOf("td_threadtitle_") !== -1) {
                   if(jQueryM_v1_4_5(section).length){
				   //jQueryM_v1_4_5.mobile.defaultHomeScroll = activePage.find(section).offset().top;
                    section= section.replace(/(#td_threadtitle_(.*?))(\?([^"]*)|$)/mg, "$1");
					if(jQueryM_v1_4_5(section).position()){
					
					
					if (window.location == window.parent.location) {

					jQueryM_v1_4_5("html,body").animate({ scrollTop: jQueryM_v1_4_5(section).position().top}, 0);

                    } else {
					jQueryM_v1_4_5("#wrapper").animate({ scrollTop: jQueryM_v1_4_5(section).position().top + jQueryM_v1_4_5("#wrapper").scrollTop() }, 0);

                    }
					
					
					
					
					
					jQueryM_v1_4_5(section).addClass( "sectionH" );
					}
				   }
                }
            }
        });
        jQueryM_v1_4_5(window).hashchange();
 

   
   
   }); //end
    	

	

	
jQueryM_v1_4_5.fn.selectText = function() {

		var doc = document,
            element = this[0],
            range, selection;
        if (doc.body.createTextRange) {
            range = document.body.createTextRange();
            range.moveToElementText(element);
            range.select();
        } else if (window.getSelection) {
            selection = window.getSelection();
            range = document.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    };	
	
	
	
}

}