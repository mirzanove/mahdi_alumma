var posttopid;

function enable_select_text(xx)
{
	var x = jQueryD_1_4_2(xx);
	for (var i = 0; i < x.length; i++)
	{
		makeselectable(x[i])
	}
}

function disable_select_text(xx)
{
	var x = jQueryD_1_4_2(xx);
	
	for (var i = 0; i < x.length; i++)
	{  
		makeunselectable(x[i])
	}
}



function get_current_url(url)
{
	
	
	var linkk = window.location.href
	var linkk;
	if (url)
	{
		linkk = url
	}
	var index = linkk.indexOf("index.php/");
	var help = linkk.indexOf("/help.html");
	if (index != -1)
	{
		var link2 = linkk.substring(index, linkk.length)
	}
	else
	{
		if (help != -1)
		{
			var link2 = "help.html"
		}
		else
		{
			var link2 = "index.php.htm"
		}
	}
	if (typeof simplePostMessage !== 'undefined')
	{}
	return link2
}
var strpass;
var passtext;
if (_isMobile() == mobiletrue)
{}
else
{
	function childboxes(MainElement, ChildElement)
	{
		var loc_target = "";
		var str = document.location.href;
		var dd;
		var gg;
		var extra = window.location.pathname + window.location.search;
		var regex = new RegExp("[&\\?]" + MainElement + '=' + ChildElement, 'g');
		if (str.match(/(#td_threadtitle_(.*?))/mg))
		{
			dd = str.replace(/(.*?)((\#)td_threadtitle_(.*?))(#([^"]*)|$)/mg, "$2")
		}
		if (str.match(/(#post(.*?))/mg))
		{
			dd = str.replace(/(.*?)((\#)post(.*?))(#([^"]*)|$)/mg, "$2")
		}
		extra = extra.replace(regex, "");
		extra = extra + (extra.indexOf("?") > -1 ? "&" : "?&") + MainElement + '=' + ChildElement;
		window.history.pushState(null, null, extra);
		if (dd)
		{
			location.hash = dd
		}
	}

	function insertParam(key, value)
	{
		key = encodeURI(key);
		value = encodeURI(value);
		var kvp = document.location.search.substr(1).split('&');
		var i = kvp.length;
		var x;
		while (i--)
		{
			x = kvp[i].split('=');
			if (x[0] == key)
			{
				x[1] = value;
				kvp[i] = x.join('=');
				break
			}
		}
		if (i < 0)
		{
			kvp[kvp.length] = [key, value].join('=')
		}
		document.location.search = kvp.join('&')
	}


	function changeUrl(key, value)
	{
		var str = document.location.href;
		var dd;
		if (str.match(/(#td_threadtitle_(.*?))/mg))
		{
			dd = str.replace(/(.*?)((\#)td_threadtitle_(.*?))(#([^"]*)|$)/mg, "$2")
		}
		if (str.match(/(#post(.*?))/mg))
		{
			dd = str.replace(/(.*?)((\#)post(.*?))(#([^"]*)|$)/mg, "$2")
		}
		var searchUrl = location.search;
		if (searchUrl.indexOf("?") == "-1")
		{
			var urlValue = '?' + key + '=' + value;
			history.pushState(
			{
				state: 1,
				rand: Math.random()
			}, '', urlValue);
			if (dd)
			{
				location.hash = dd
			}
		}
		else
		{
			if (searchUrl.indexOf(key) == "-1")
			{
				var urlValue = searchUrl + '&' + key + '=' + value
			}
			else
			{
				oldValue = getParameterByName(key);
				if (searchUrl.indexOf("?" + key + "=") != "-1")
				{
					urlValue = searchUrl.replace('?' + key + '=' + oldValue, '?' + key + '=' + value)
				}
				else
				{
					urlValue = searchUrl.replace('&' + key + '=' + oldValue, '&' + key + '=' + value)
				}
			}
			history.pushState(
			{
				state: 1,
				rand: Math.random()
			}, '', urlValue);
			if (dd)
			{
				location.hash = dd
			}
		}
	}

	function setCookie(cname, cvalue, exdays)
	{
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
	}

	function getCookie(cname)
	{
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for (var i = 0; i < ca.length; i++)
		{
			var c = ca[i];
			while (c.charAt(0) == ' ')
			{
				c = c.substring(1)
			}
			if (c.indexOf(name) == 0)
			{
				return c.substring(name.length, c.length)
			}
		}
		return ""
	}

	function font_options(index,selector,strUser){
		
		    var h1 = document.getElementById('wrapper')
			h1.style.fontFamily = strUser;
		

					if(index == 0){
					h1 = document.getElementById('wrapper');
					
					if(localStorage.getItem("currsize")){
						
						if((180+parseFloat(localStorage.getItem("currsize")))<0){
						 
						 h1.style.fontSize = "1%";
						
						}
						else{
							
						h1.style.fontSize = (180+parseFloat(localStorage.getItem("currsize")))+"%";
						}
					
					}
					else{
					  h1.style.fontSize = "180%";	
					}
					
					localStorage.setItem("defaltsize", "180"); 

					}
					
					if(index == 1){
				
					h1 = document.getElementById('wrapper');
				
					if(localStorage.getItem("currsize")){
						
					    if((140+parseFloat(localStorage.getItem("currsize")))<0){
						 
						 h1.style.fontSize = "1%";
						
						}
						else{
						h1.style.fontSize = (140+parseFloat(localStorage.getItem("currsize")))+"%";
	
						}
					
					}
					else{
					  h1.style.fontSize = "140%";	
					}
					
					localStorage.setItem("defaltsize", "140");
					
					}
					
					if(index == 2){
					h1 = document.getElementById('wrapper');
					if(localStorage.getItem("currsize")){
						
						if((115+parseFloat(localStorage.getItem("currsize")))<0){
						 
						 h1.style.fontSize = "1%";
						
						}
						else{
						h1.style.fontSize = (115+parseFloat(localStorage.getItem("currsize")))+"%";
						}
					
					
					}
					else{
					  h1.style.fontSize = "100%";	
					}
					localStorage.setItem("defaltsize", "100");
				
					}
					
					if(index == 3){
					h1 = document.getElementById('wrapper');
					if(localStorage.getItem("currsize")){
						
						if((190+parseFloat(localStorage.getItem("currsize")))<0){
						 
						 h1.style.fontSize = "1%";
						
						}
						else{
						h1.style.fontSize = (190+parseFloat(localStorage.getItem("currsize")))+"%";
						}
					
					}
					else{
					  h1.style.fontSize = "190%";	
					}
					localStorage.setItem("defaltsize", "190");
				
					}
					
					if(index == 4){
					h1 = document.getElementById('wrapper');
					if(localStorage.getItem("currsize")){
						
						if((140+parseFloat(localStorage.getItem("currsize")))<0){
						 
						 h1.style.fontSize = "1%";
						
						}
						else{
						h1.style.fontSize = (140+parseFloat(localStorage.getItem("currsize")))+"%";
						}
					
					}
					else{
					  h1.style.fontSize = "140%";	
					}
					localStorage.setItem("defaltsize", "140");
				
					}
		
		fontSize =null;
		
		setTimeout(function ()
								{
									jQueryD_1_4_2(window).hashchange();
								}, 400)
		
		
		
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
				
				
				jQueryD_1_4_2('.posttext').removeAttr("style")
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
					jQueryD_1_4_2('.posttext').removeAttr("style")
				}
			}
		}
		
	
	
	
	
	}

	function autolog(event, hh, pass)
	{
		if (typeof encryptedMsg != 'undefined')
		{
			if (event == undefined)
			{}
			else
			{
				event.preventDefault()
			}
			var passphrase;
			if (document.getElementById('staticrypt-password'))
			{
				if (hh == !1)
				{
					passphrase = pass
				}
				else
				{
					passphrase = document.getElementById('staticrypt-password').value
				}
			}
			var encryptedHMAC = encryptedMsg.substring(0, 64);
			var encryptedHTML = encryptedMsg.substring(64);
			var decryptedHMAC = CryptoJS.HmacSHA256(encryptedHTML, CryptoJS.SHA256(passphrase).toString()).toString();
			if (decryptedHMAC !== encryptedHMAC)
			{
				alert('كلمة السر غير صحيحة');
				return
			}
			else
			{
				var plainHTML = CryptoJS.AES.decrypt(encryptedHTML, passphrase).toString(CryptoJS.enc.Utf8);
				strpass = passphrase.hexEncode();
				passtext = "#&pass=" + strpass;
				if (hh == !0)
				{
					if (window.location == window.parent.location)
					{
						changeUrl("&pass", strpass)
					}
					else
					{
						window.parent.postMessage(["put_pass_in_adbr", strpass], "*")
					}
				}
				if (hh == !0)
				{
					if (document.getElementById("pass"))
					{
						if (document.getElementById("pass").checked)
						{
							if (lsTest() === !0)
							{
								localStorage.setItem('passebook', strpass)
							}
							else
							{
								setCookie("passebook", strpass, 1000)
							}
						}
						else
						{
							if (lsTest() === !0)
							{
								localStorage.setItem('passebook', "")
							}
							else
							{
								setCookie("passebook", "", 1000)
							}
						}
						if (document.getElementById("pass2"))
						{
							if (document.getElementById("pass2").checked)
							{
								if (lsTest() === !0)
								{
									localStorage.setItem('autolog', !0)
								}
								else
								{
									setCookie("autolog", !0, 1000)
								}
							}
							else
							{
								if (lsTest() === !0)
								{
									localStorage.setItem('autolog', !1)
								}
								else
								{
									setCookie("autolog", !1, 1000)
								}
							}
						}
					}
				}
				jQueryD_1_4_2(".staticrypt-page").hide();
				if (fontstylelist == !0)
				{
					jQueryD_1_4_2("#content").html("<div style =\"background-color:#b54b3d;color:white;font-Weight:bold;font-size:100%;text-align:center;padding:4px;\">صـــــفــحــة مشـــــفـــــرة<br><input type=\"checkbox\" id=\"pass3\"> الدخول التلقائي للبيانات المشفرة.. </input></div>" + plainHTML + "<div class=\"selecth1FontFamily\" >تغيير نوع الخط<br><select  id=\"selecth1FontFamily\" name=\"selectFontFamily\" onchange=\"updateh1family(true);\"><option>Lateef</option><option>Amiri</option><option>Droid Arabic Naskh</option><option>Scheherazade</option><option>Arial</option></select><div>")
				}
				else
				{
					jQueryD_1_4_2("#content").html("<div style =\"background-color:#b54b3d;color:white;font-Weight:bold;font-size:100%;text-align:center;padding:4px;\">صـــــفــحــة مشـــــفـــــرة<br><input type=\"checkbox\" id=\"pass3\"> الدخول التلقائي للبيانات المشفرة.. </input></div>" + plainHTML)
				}
				disable_select_text('#navbar');
				disable_select_text('.tooltip4');
				disable_select_text('.posttop');
				disable_select_text('.selecth1FontFamily');
				disable_select_text('.footer');
				disable_select_text('.pagenumbers');
				
				
				if (lsTest() === !0)
				{
					var checked2 = localStorage.getItem('autolog');
					if (checked2 == "true")
					{
						document.getElementById("pass3").checked = !0
					}
					else
					{
						document.getElementById("pass3").checked = !1
					}
				}
				else
				{
					var checked2 = getCookie('autolog');
					if (checked2 == "true")
					{
						document.getElementById("pass3").checked = !0
					}
					else
					{
						document.getElementById("pass3").checked = !1
					}
				}
				jQueryD_1_4_2('#pass3').change(function ()
				{
					if (this.checked)
					{
						if (lsTest() === !0)
						{
							localStorage.setItem('autolog', !0)
						}
						else
						{
							setCookie("autolog", !0, 1000)
						}
					}
					else
					{
						if (lsTest() === !0)
						{
							localStorage.setItem('autolog', !1)
						}
						else
						{
							setCookie("autolog", !1, 1000)
						}
					}
				})
			}
		}
		if (hh == !0)
		{
			if (typeof applyHighlight == 'function')
			{
				window.parent.postMessage(["check_highlight_state", "check_highlight_state"], "*")
			}
		}
		return !1
	}
	jQueryD_1_4_2(document).ready(function ()
	{
		
		jQueryD_1_4_2(window).hashchange(function ()
			{
				
			
				var section = location.hash ? location.hash : null;
				if (section != null)
				{
					jQueryD_1_4_2('.posttop').removeClass( "sectionH" );
					if (section.indexOf("post") !== -1)
					{
						section = section.replace(/(#post(.*?))(#([^"]*)|$)/mg, "$1");
						if (jQueryD_1_4_2(section).position())
						{
							if (window.location == window.parent.location)
							{
								/*jQueryD_1_4_2("body,html").animate(
								{
									scrollTop: jQueryD_1_4_2(section).position().top
								}, 0);*/
								
								//setTimeout(function(){ jQueryD_1_4_2(section)[0].scrollIntoView();}, 300);

							
								jQueryD_1_4_2('#loading').hide()
							}
							else
							{
								/*jQueryD_1_4_2("#wrapper").animate(
								{
									scrollTop: jQueryD_1_4_2(section).position().top + jQueryD_1_4_2("#wrapper").scrollTop()
								}, 0);*/
								
								//setTimeout(function(){ jQueryD_1_4_2(section)[0].scrollIntoView();}, 100);

								setTimeout(function ()
								{
									window.parent.postMessage(["loading", "stop"], "*")
								}, 100)
							}
						jQueryD_1_4_2(section).addClass( "sectionH" );
						setTimeout(function(){ jQueryD_1_4_2(section)[0].scrollIntoView();}, 4);
						
						
						
					
						
						}
					}
					if (section.indexOf("td_threadtitle_") !== -1)
					{
						section = section.replace(/(#td_threadtitle_(.*?))(\?([^"]*)|$)/mg, "$1");
						if (jQueryD_1_4_2(section).position())
						{
							jQueryD_1_4_2(section).addClass( "sectionH" );
							
							
							
							setTimeout(function(){ jQueryD_1_4_2(section)[0].scrollIntoView();}, 200);

							
							/*if (window.location == window.parent.location)
							{
								jQueryD_1_4_2("body,html").animate(
								{
									scrollTop: jQueryD_1_4_2(section).position().top
								}, 0)
							}
							else
							{
								jQueryD_1_4_2("#wrapper").animate(
								{
									scrollTop: jQueryD_1_4_2(section).position().top + jQueryD_1_4_2("#wrapper").scrollTop()
								}, 0)
							}*/
							
						}
					}
				}
			});
		
		
		if (window.location == window.parent.location)
		{}
		else
		{
			jQueryD_1_4_2("html,body").css("height", "100%")
		}
		if (typeof encryptedMsg != 'undefined')
		{
			jQueryD_1_4_2("#content").html('<div class="staticrypt-page" dir = "rtl"><div class="staticrypt-form" ><div class="staticrypt-instructions"><p class="staticrypt-title">**موضوع محمي**</p><hr><span>الرجاء مسح كاش المتصفح والمفضلة بعدالإنتهاء من الموسوعة في حال كان جهاز الذي تستخدمه غير شخصي ودخلت الى البيانات المشفرة<span><hr></div><input style= "" autocomplete="on" id="staticrypt-password" type="password" name="password" placeholder="كلمة السر"/><br><input type="checkbox" id="pass"> حفظ كلمة السر.. </input><br><input type="checkbox" id="pass2"> الدخول التلقائي للبيانات المشفرة.. </input><br><button autocomplete="on" type=\'submit\' id ="subment" class="staticrypt-decrypt-button">فك التشفير</button></div></div>');
			if (lsTest() === !0)
			{
				var checked = localStorage.getItem('passebook');
				if (checked)
				{
					document.getElementById("pass").checked = !0;
					if (document.getElementById('staticrypt-password'))
					{
						document.getElementById('staticrypt-password').value = checked.hexDecode()
					}
				}
				else
				{
					document.getElementById("pass").checked = !1
				}
				var checked2 = localStorage.getItem('autolog');
				if (checked2 == "true")
				{
					document.getElementById("pass2").checked = !0
				}
				else
				{
					document.getElementById("pass2").checked = !1
				}
			}
			else
			{
				var checked = getCookie('passebook');
				if (checked != "")
				{
					document.getElementById("pass").checked = !0;
					if (document.getElementById('staticrypt-password'))
					{
						document.getElementById('staticrypt-password').value = checked.hexDecode()
					}
				}
				else
				{
					document.getElementById("pass").checked = !1
				}
				var checked2 = getCookie('autolog');
				if (checked2 == "true")
				{
					document.getElementById("pass2").checked = !0
				}
				else
				{
					document.getElementById("pass2").checked = !1
				}
			}
		}
		jQueryD_1_4_2("#subment").click(function (event)
		{
			event.preventDefault();
			autolog(event, !0, document.getElementById('staticrypt-password').value);
			return !1
		});
		jQueryD_1_4_2("#staticrypt-password").keypress(function (event)
		{
			if (event.which == 13)
			{
				event.preventDefault();
				autolog(event, !0, document.getElementById('staticrypt-password').value);
				return !1
			}
		});
		if (fontstylelist == !0)
		{
			jQueryD_1_4_2("#content").append('<div class="selecth1FontFamily" >تغيير نوع الخط<br><select  id="selecth1FontFamily" name="selectFontFamily" onchange="updateh1family(true);"><option>Lateef</option><option>Amiri</option><option>Droid Arabic Naskh</option><option>Scheherazade</option><option>Arial</option></select><div>')
		}
		if (window.location == window.parent.location)
		{
			var c = window.location.href;
			if (c.match(/[^"]*(\#|\?|\&|\#\&)pass\=(.*?)((&|#)([^"]*)|$)/mg))
			{
				var ff = c.replace(/[^"]*(\?|\&|\#\&)pass\=(.*?)((&|#)([^"]*)|$)/mg, "$2")
				if (document.getElementById('staticrypt-password'))
				{
					if (document.getElementById("pass"))
					{
						if (document.getElementById("pass").checked)
						{
							document.getElementById('staticrypt-password').value = ff.hexDecode()
						}
					}
				}
				if (document.getElementById("pass2"))
				{
					if (document.getElementById("pass2").checked)
					{
						autolog(null, !1, ff.hexDecode())
					}
				}
			}
		}
		else
		{
			window.parent.postMessage(["get_pass", "get_pass"], "*")
		}
		if (!document.getElementsByClassName)
		{
			document.getElementsByClassName = function (search)
			{
				var d = document,
					elements, pattern, i, results = [];
				if (d.querySelectorAll)
				{
					return d.querySelectorAll("." + search)
				}
				if (d.evaluate)
				{
					pattern = ".//*[contains(concat(' ', @class, ' '), ' " + search + " ')]";
					elements = d.evaluate(pattern, d, null, 0, null);
					while ((i = elements.iterateNext()))
					{
						results.push(i)
					}
				}
				else
				{
					elements = d.getElementsByTagName("*");
					pattern = new RegExp("(^|\\s)" + search + "(\\s|$)");
					for (i = 0; i < elements.length; i++)
					{
						if (pattern.test(elements[i].className))
						{
							results.push(elements[i])
						}
					}
				}
				return results
			}
		}
		disable_select_text('#navbar');
		disable_select_text('.tooltip4');
		disable_select_text('.posttop');
		disable_select_text('.selecth1FontFamily');
		disable_select_text('.footer');
		disable_select_text('.pagenumbers');
		
		jQueryD_1_4_2("a").live("click", function (event)
		{
			var classname = jQueryD_1_4_2(this).attr('class');
			var link = this.href;
			var pur_link = link.split('?')[0];
			pur_link = pur_link.split('#')[0];
			var hash = this.href.split("#")[1];
			var puer_url = document.location.protocol + "//" + document.location.hostname + document.location.pathname;
			var paramters = "";
			if (window.location != window.parent.location)
			{
				if (typeof link_disable !== 'undefined')
				{
					if (link_disable == !0)
					{
						return !1
					}
				}
			}
			else
			{
				if (typeof link_disable !== 'undefined')
				{
					if (link_disable == !0)
					{
						event.preventDefault();
						event.stopPropagation();
						return !1
					}
				}
			}
			if (location.hostname === this.hostname || !this.hostname.length)
			{
				var x = this.href;
				var c = window.location.href;
				if (checkURL(link))
				{
					if (classname == 'alpom2 link_off')
					{
						event.preventDefault();
						event.stopPropagation();
						return !1
					}
					else if (classname == 'link_pic2' || classname == 'extImag_go2' || classname == 'linkstyle2 outsidelink')
					{
						event.stopPropagation()
					}
					else
					{
						if (typeof disable_model !== 'undefined')
						{
							link_disable = !1;
							link_disable = !1
						}
						else
						{
							event.preventDefault();
							link_disable = !0;
							model_visible = !0;
							if (window.location != window.parent.location)
							{
								window.parent.postMessage(["modal_display", "show"], "*");
								window.parent.postMessage(["image_url", link], "*")
							}
							else
							{
								jQueryD_1_4_2(".modal").show();
								jQueryD_1_4_2("#wrapper,body,html").css(
								{
									'overflow': 'hidden'
								});
								jQueryD_1_4_2("#img01").attr("src", link);
								jQueryD_1_4_2("#img01").removeAttr('style');
								jQueryD_1_4_2("#img01").removeAttr('height')
							}
						}
					}
				}
				else if (checkURL(x) == !1)
				{
					if (getParameterByName("rhsearch", window.location))
					{
						paramters += "&rhsearch=" + getParameterByName("rhsearch", window.location)
					}
					if (getParameterByName("rhhlterm", window.location))
					{
						paramters += "&rhhlterm=" + getParameterByName("rhhlterm", window.location)
					}
					if (getParameterByName("rhsyns", window.location))
					{
						paramters += "&rhsyns=" + getParameterByName("rhsyns", window.location)
					}
					if (getParameterByName("checkbox", window.location))
					{
						paramters += "&checkbox=" + getParameterByName("checkbox", window.location)
					}
					if (getParameterByName("pass", window.location))
					{
						paramters += "&pass=" + getParameterByName("pass", window.location)
					}
					if (paramters != '')
					{
						paramters = '?' + paramters
					}
					if (hash)
					{
						hash = '#' + hash
					}
					else
					{
						hash = ''
					}
					if (window.location == window.parent.location)
					{
					
						if (jQueryD_1_4_2(this).attr('class') == "up post_hash")
						{
							if (window.location.hash != hash)
							{
								jQueryD_1_4_2('#loading').show()
							}
						}
						else
						{
							
							if(hash){
							if (window.location.hash != hash)
							{   
		
								jQueryD_1_4_2('#loading').show()
							}
							}
							else{
								
                             jQueryD_1_4_2('#loading').show()
							}
							
							
						}
						location.href = pur_link + paramters + hash;
						return !1
					}
				}
			}
			else
			{
				if (checkURL(link))
				{
					if (classname == 'alpom2 link_off')
					{
						event.preventDefault();
						event.stopPropagation();
						return !1
					}
					else if (classname == 'link_pic2' || classname == 'extImag_go2' || classname == 'linkstyle2 outsidelink')
					{
						event.stopPropagation();
						if (wkchrom)
						{
							event.stopPropagation();
							jQueryD_1_4_2(this).attr("target", "_heexternal");
							var res = jQueryD_1_4_2(this).attr("href");
							res = res.replace("heexternal://", "");
							jQueryD_1_4_2(this).attr("href", "heexternal://" + res).removeAttr('target')
						}
					}
					else
					{
						if (classname != 'linkstyle2 outsidelink enableselect')
						{
							if (classname != "alpom2_go")
							{
								event.preventDefault();
								link_disable = !0;
								model_visible = !0;
								if (window.location != window.parent.location)
								{
									window.parent.postMessage(["modal_display", "show"], "*");
									window.parent.postMessage(["image_url", link], "*")
								}
								else
								{
									jQueryD_1_4_2(".modal").show();
									jQueryD_1_4_2("#wrapper,body,html").css(
									{
										'overflow': 'hidden'
									});
									jQueryD_1_4_2("#img01").attr("src", link);
									jQueryD_1_4_2("#img01").removeAttr('style');
									jQueryD_1_4_2("#img01").removeAttr('height')
								}
							}
						}
					}
				}
				else
				{
					if (wkchrom)
					{
						event.stopPropagation();
						jQueryD_1_4_2(this).attr("target", "_heexternal");
						var res = jQueryD_1_4_2(this).attr("href");
						res = res.replace("heexternal://", "");
						jQueryD_1_4_2(this).attr("href", "heexternal://" + res).removeAttr('target')
					}
				}
			}
		})
	
	
	
	
	});
	if (window.location == window.parent.location)
	{
		loaddsett()
	}

	jQueryD_1_4_2.fn.hasScrollBar = function ()
	{
			return this.get(0).scrollHeight > this.height()
	}
	
	
	function loaddsett()
	{
		
		jQueryD_1_4_2(window).resize(function ()
		{
			//resize(jQueryD_1_4_2("html"))
		});
		jQueryD_1_4_2(document).ready(function ()
		{

		
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
			
			//jQueryD_1_4_2("body").addClass( "deck bespoke-parent" );
			
			jQueryD_1_4_2('.posttext').removeAttr("style");
			if (fontstylelist == !0)
			{
				updateh1family(!1)
				
				
			}
			jQueryD_1_4_2('.up2 >img').removeAttr("style");
			var arrEdited = [];
			jQueryD_1_4_2('.imglink').each(function (i)
			{
				jQueryD_1_4_2(this).attr('id', 'id_' + (i + 1));
				arrEdited.push(
				{
					id: jQueryD_1_4_2(this).attr('id'),
					href: jQueryD_1_4_2(this).parent().children('.hide_external_link').children('a').attr('href')
				})
			});
			jQueryD_1_4_2('.tooltiptext').remove();
			jQueryD_1_4_2('.pagebody').children(".page-break").last().remove();
			jQueryD_1_4_2('.btn_print').click(function (event)
			{
				event.preventDefault();
				event.stopPropagation();
				if (printin_prosses == !1)
				{
					printin_prosses = !0;
				   var c = jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent();
				   
				  // jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().parent().css('color','red');

					var postID = jQueryD_1_4_2(event.currentTarget).parent().parent().attr("id");
					tooltip(null, "الرجاء الانتظار يتم عرض الطباعة")
					setTimeout(function ()
					{
						if (typeof process !== "undefined" && typeof require !== "undefined")
						{
							console.log(c);
							printPage(c)
						}
						else
						{
							print(c)
						}
						setTimeout(function ()
						{
							printin_prosses = !1
						}, 300)
					}, 3000)
				}
			});
			var link_img_show = !0;
			jQueryD_1_4_2(document).click(function (event)
			{
				if (event.which == 0 || event.which == 1)
				{
					event.stopPropagation();
					window.parent.postMessage(["hide_drop", "hide_drop"], "*");
					matches = jQueryD_1_4_2(event.target).is(".dropbtn")
					if (!matches)
					{
						jQueryD_1_4_2('#myDropdown').removeClass("show")
					}
					if (link_disable == !1)
					{
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
						jQueryD_1_4_2(".moveoff").unbind("click");
						jQueryD_1_4_2(".selected").attr("class", 'selected enableselect')
					}
				}
				link_img_show = !1;
				stop = !1
			});
			jQueryD_1_4_2(".close").click(function (event)
			{
				jQueryD_1_4_2(".modal").hide();
				jQueryD_1_4_2("html,body").css(
				{
					'overflow-y': 'auto'
				});
				setTimeout(function ()
				{
					link_img_show = !0;
					link_disable = !1;
					model_visible = !1
				}, 1000)
			});
			jQueryD_1_4_2(".link_pic").click(function (event)
			{
				imag_loading = !0;
				stop = !0;
				event.preventDefault();
				event.stopPropagation();
				link_img_show = !1;
				jQueryD_1_4_2(".extImag").remove();
				jQueryD_1_4_2(".tooltiptext_custom").remove();
				if (!jQueryD_1_4_2(event.currentTarget).children(".selected").hasClass("moveoff"))
				{
					jQueryD_1_4_2(".selected").unbind("click");
					jQueryD_1_4_2(".selected").attr("class", 'selected enableselect');
					jQueryD_1_4_2(event.currentTarget).children(".selected").attr("class", 'selected moveoff enableselect');
					jQueryD_1_4_2(event.currentTarget).children(".selected").unbind('click').bind('click', function (event)
					{
						event.stopPropagation()
					})
				}
				jQueryD_1_4_2(event.currentTarget).parent().append('<div class="extImag"><div class="extImag2"><a target="_blank" href=""><img class="img2" src="" height="200" width="200" alt=""></a></div><br><div class="extImag_go linkstyle"><a href="" target="_blank" >الذهاب الى الرابط</a></div><br><div class="extImag_copy linkstyle">نسخ الرابط</div></div>');
				jQueryD_1_4_2(event.currentTarget).parent().children(".extImag").children('.extImag2').children('a').attr("href", jQueryD_1_4_2(event.currentTarget).children(".NOTselected").children('a').attr('href'));
				var img = new Image();
				jQueryD_1_4_2(event.currentTarget).parent().children(".extImag").children('.extImag2').children('a').children('img').attr("src", '../../clientscript/images/loading.gif');
				jQueryD_1_4_2(event.currentTarget).parent().children(".extImag").children('.extImag2').children('a').attr("class", 'alpom2 link_off');
				img.onload = function ()
				{
					jQueryD_1_4_2(event.currentTarget).parent().children(".extImag").children('.extImag2').children('a').children('img').attr("src", img.src);
					jQueryD_1_4_2(event.currentTarget).parent().children(".extImag").children('.extImag2').children('a').removeAttr('class')
				}
				img.onerror = img.onabort = function ()
				{
					jQueryD_1_4_2(event.currentTarget).parent().children(".extImag").children('.extImag2').children('a').children('img').attr("src", '../../clientscript/images/linklost.jpg');
					jQueryD_1_4_2(event.currentTarget).parent().children(".extImag").children('.extImag2').children('a').attr("class", 'alpom2 link_off')
				}
				img.src = jQueryD_1_4_2(event.currentTarget).children(".NOTselected").children('a').attr('href');
				jQueryD_1_4_2(event.currentTarget).parent().children(".extImag").children('.extImag_go').children('a').attr("href", jQueryD_1_4_2(event.currentTarget).children(".NOTselected").children('a').attr('href'));
				jQueryD_1_4_2(".extImag_go > a").click(function (event)
				{
					event.stopPropagation();
					if (wkchrom)
					{
						event.stopPropagation();
						jQueryD_1_4_2(this).attr("target", "_heexternal");
						var res = jQueryD_1_4_2(this).attr("href");
						res = res.replace("heexternal://", "");
						jQueryD_1_4_2(this).attr("href", "heexternal://" + res).removeAttr('target')
					}
				});
				jQueryD_1_4_2(".extImag_copy").click(function (event)
				{
					
				
					
					
					event.stopPropagation();
					var c = event.currentTarget.parentNode.parentNode.childNodes;
					var i;
					for (i = 0; i < c.length; i++)
					{
						if (c[i].className == "link_pic")
						{
							var cc = c[i].childNodes;
							for (var ii = 0; ii < cc.length; ii++)
							{
								if (c[i].className != null)
								{
									if (cc[ii].className != null)
									{
										if (cc[ii].className.indexOf("selected moveoff") != -1)
										{
											select_all_and_copy(cc[ii])
										}
									}
								}
							}
						}
					}
				});
				if (window.location == window.parent.location)
				{
					jQueryD_1_4_2("body,html").scrollTop(jQueryD_1_4_2(this).position().top)
				}
				else
				{
					jQueryD_1_4_2("#wrapper").scrollTop(jQueryD_1_4_2(this).position().top + jQueryD_1_4_2("#wrapper").scrollTop())
				}
			});
			jQueryD_1_4_2(".alpom2_go").click(function (event)
			{
				event.stopPropagation();
				if (wkchrom)
				{
					jQueryD_1_4_2(this).attr("target", "_heexternal");
					var res = jQueryD_1_4_2(this).attr("href");
					res = res.replace("heexternal://", "");
					jQueryD_1_4_2(this).attr("href", "heexternal://" + res).removeAttr('target')
				}
			});
			jQueryD_1_4_2(".alpom2_copy").click(function (event)
			{

				event.stopPropagation();
				var c = event.currentTarget.parentNode.childNodes;
				var i;
				for (i = 0; i < c.length; i++)
				{
					if (c[i].className != null)
					{
						if (c[i].className.indexOf("selected") != -1)
						{
							select_all_and_copy(c[i])
						}
					}
				}
			});
			jQueryD_1_4_2(".link_org").click(function (event)
			{
				stop = !0;
				event.preventDefault();
				event.stopPropagation();
				if (typeof disable_model !== 'undefined')
				{
					link_disable = !1;
					link_disable = !1
				}
				else
				{
					if (window.location != window.parent.location)
					{
						if (typeof link_disable !== 'undefined')
						{
							if (link_disable == !0)
							{
								return !1
							}
						}
					}
					else
					{
						if (typeof link_disable !== 'undefined')
						{
							if (link_disable == !0)
							{
								return !1
							}
						}
					}
				}
				link_img_show = !1;
				if (!jQueryD_1_4_2(event.currentTarget).children(".selected").hasClass("moveoff"))
				{
					jQueryD_1_4_2(".selected").unbind("click");
					jQueryD_1_4_2(".selected").attr("class", 'selected enableselect');
					jQueryD_1_4_2(event.currentTarget).children(".selected").attr("class", 'selected moveoff enableselect');
					jQueryD_1_4_2(event.currentTarget).children(".selected").unbind('click').bind('click', function (event)
					{
						event.stopPropagation()
					})
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
				if (jQueryD_1_4_2(".tooltiptext_custom").length == 0)
				{
					jQueryD_1_4_2(event.currentTarget).append('<div class="tooltiptext_custom"><div class="tooltiptext_custom_go linkstyle"><a href="" target="_blank" >الذهاب الى الرابط</a></div><br><div class="tooltiptext_custom_copy linkstyle">نسخ الرابط</div></div>');
					jQueryD_1_4_2(event.currentTarget).children(".tooltiptext_custom").children(".tooltiptext_custom_go").children('a').attr("href", jQueryD_1_4_2(event.currentTarget).children('.link_org2').attr('href'));
					jQueryD_1_4_2(".tooltiptext_custom").click(function (event)
					{
						jQueryD_1_4_2(".selected").unbind("click");
						jQueryD_1_4_2(".selected").attr("class", 'selected enableselect');
						event.stopPropagation();
						jQueryD_1_4_2(".tooltiptext_custom").remove();
						stop = !1
					});
					jQueryD_1_4_2(".tooltiptext_custom_go > a").click(function (event)
					{
						event.stopPropagation();
						if (wkchrom)
						{
							jQueryD_1_4_2(this).attr("target", "_heexternal");
							var res = jQueryD_1_4_2(this).attr("href");
							res = res.replace("heexternal://", "");
							jQueryD_1_4_2(this).attr("href", "heexternal://" + res).removeAttr('target')
						}
					});
					jQueryD_1_4_2(".tooltiptext_custom_copy").click(function (event)
					{
						event.stopPropagation();
						var c = event.currentTarget.parentNode.parentNode.childNodes;
						for (i = 0; i < c.length; i++)
						{
							if (c[i].className != null)
							{
								if (c[i].className.indexOf("selected moveoff") != -1)
								{
									select_all_and_copy(c[i])
								}
							}
						}
					})
				}
				if (window.location == window.parent.location)
				{
					jQueryD_1_4_2("body,html").scrollTop(jQueryD_1_4_2(this).position().top)
				}
				else
				{
					jQueryD_1_4_2("#wrapper").scrollTop(jQueryD_1_4_2(this).position().top + jQueryD_1_4_2("#wrapper").scrollTop())
				}
			});
			jQueryD_1_4_2(".imglink").click(function (event)
			{
				event.preventDefault();
				event.stopPropagation();
				if (typeof disable_model !== 'undefined')
				{
					link_disable = !1;
					link_disable = !1
				}
				else
				{
					if (window.location != window.parent.location)
					{
						if (typeof link_disable !== 'undefined')
						{
							if (link_disable == !0)
							{
								return !1
							}
						}
					}
					else
					{
						if (typeof link_disable !== 'undefined')
						{
							if (link_disable == !0)
							{
								return !1
							}
						}
					}
				}
				link_img_show = !1;
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
				if (jQueryD_1_4_2(".link_img").length == 0)
				{
					for (var i = 0; i < arrEdited.length; i++)
					{
						if (jQueryD_1_4_2(event.currentTarget).attr('id') == arrEdited[i].id)
						{
							jQueryD_1_4_2(event.currentTarget).parent().append('<span class="link_img"><a target="_blank" href=""><img style="text-align: center; overflow-wrap: break-word; -ms-word-break: break-all; word-break: break-word; word-break: break-all; word-wrap:break-word; direction: rtl;outline: none;border-radius: 6px;color: #ffffff;background-color: #2b7b91;padding: 10px; margin: 5px;" class="cool" src="" height="200" width="200" alt=""></a><br></span>');
							jQueryD_1_4_2(event.currentTarget).parent().children(".link_img").children('a').attr("href", arrEdited[i].href);
							jQueryD_1_4_2(event.currentTarget).parent().children(".link_img").children('a').children('img').attr("src", arrEdited[i].href).click(function (event) {})
						}
					}
				}
				if (jQueryD_1_4_2(".image_custom").length == 0)
				{
					jQueryD_1_4_2(event.currentTarget).parent().append('<span class="image_custom"><a href="" target="_blank" style="text-align: center; overflow-wrap: break-word; -ms-word-break: break-all; word-break: break-word; word-break: break-all; word-wrap:break-word; direction: rtl;outline: none;border-radius: 6px;color: #ffffff;background-color: #2b7b91;padding: 5px 5px;">رابط الصورة في الموقع</a><br></span>');
					jQueryD_1_4_2(event.currentTarget).parent().children('.image_custom').children('a').attr("href", jQueryD_1_4_2(event.currentTarget).children('.hide_param').attr('href')).click(function (event)
					{
						if (typeof disable_model !== 'undefined')
						{
							link_disable = !1;
							link_disable = !1
						}
						else
						{
							if (window.location != window.parent.location)
							{
								if (typeof link_disable !== 'undefined')
								{
									if (link_disable == !0)
									{
										return !1
									}
								}
							}
							else
							{
								if (typeof link_disable !== 'undefined')
								{
									if (link_disable == !0)
									{
										return !1
									}
								}
							}
						}
					})
				}
				if (jQueryD_1_4_2.browser.msie && parseInt(jQueryD_1_4_2.browser.version, 10) === 8)
				{
					jQueryD_1_4_2("#wrapper").scrollTop(jQueryD_1_4_2(this).position().top + jQueryD_1_4_2("#wrapper").scrollTop() - 20)
				}
				else
				{
					jQueryD_1_4_2("#wrapper").scrollTop(jQueryD_1_4_2(this).position().top + jQueryD_1_4_2("#wrapper").scrollTop())
				}
			});
			jQueryD_1_4_2(".bbcode_img").click(function (event)
			{
				if (typeof disable_model !== 'undefined')
				{
					link_disable = !1;
					link_disable = !1
				}
				else
				{
					if (window.location != window.parent.location)
					{
						if (typeof link_disable !== 'undefined')
						{
							if (link_disable == !0)
							{
								return !1
							}
						}
					}
					else
					{
						if (typeof link_disable !== 'undefined')
						{
							if (link_disable == !0)
							{
								return !1
							}
						}
					}
				}
				jQueryD_1_4_2(event.currentTarget).selectText()
			});
			jQueryD_1_4_2(".select_txt").click(function (event)
			{
				
				event.preventDefault();
				event.stopPropagation();
				if (typeof disable_model !== 'undefined')
				{
					link_disable = !1;
					link_disable = !1
				}
				else
				{
					if (window.location != window.parent.location)
					{
						if (typeof link_disable !== 'undefined')
						{
							if (link_disable == !0)
							{
								return !1
							}
						}
					}
					else
					{
						if (typeof link_disable !== 'undefined')
						{
							if (link_disable == !0)
							{
								return !1
							}
						}
					}
				}
				jQueryD_1_4_2('.tooltiptext').hide();
				jQueryD_1_4_2('.tooltiptext2').hide();
				jQueryD_1_4_2('.tooltiptext3').hide();
				jQueryD_1_4_2('.tooltiptext4').hide();
				jQueryD_1_4_2('.tooltiptext5').hide();
				var c = event.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes;
			
				var i;
				for (i = 0; i < c.length; i++)
				{
					//alert(c[i].className);
					
					if (c[i].className != null)
					{
						if (c[i].className.indexOf("posttext") != -1)
						{
							select_all_and_copy(c[i])
						}
					}
				}
			});
			jQueryD_1_4_2("a.threadinfo").click(function (event)
			{
				event.preventDefault();
				event.stopPropagation();
				if (typeof disable_model !== 'undefined')
				{
					link_disable = !1;
					link_disable = !1
				}
				else
				{
					if (window.location != window.parent.location)
					{
						if (typeof link_disable !== 'undefined')
						{
							if (link_disable == !0)
							{
								return !1
							}
						}
					}
					else
					{
						if (typeof link_disable !== 'undefined')
						{
							if (link_disable == !0)
							{
								return !1
							}
						}
					}
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
				jQueryD_1_4_2(event.currentTarget).parent().children('.tooltiptext3').show().selectText()
			});
			jQueryD_1_4_2("a.threadinfo2").click(function (event)
			{
				event.preventDefault();
				event.stopPropagation();
				if (typeof disable_model !== 'undefined')
				{
					link_disable = !1;
					link_disable = !1
				}
				else
				{
					if (window.location != window.parent.location)
					{
						if (typeof link_disable !== 'undefined')
						{
							if (link_disable == !0)
							{
								return !1
							}
						}
					}
					else
					{
						if (typeof link_disable !== 'undefined')
						{
							if (link_disable == !0)
							{
								return !1
							}
						}
					}
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
				jQueryD_1_4_2(event.currentTarget).parent().children('.tooltiptext4').show().selectText()
			});
			jQueryD_1_4_2("a.postinfo").click(function (event)
			{
				event.preventDefault();
				event.stopPropagation();
				if (typeof disable_model !== 'undefined')
				{
					link_disable = !1;
					link_disable = !1
				}
				else
				{
					if (window.location != window.parent.location)
					{
						if (typeof link_disable !== 'undefined')
						{
							if (link_disable == !0)
							{
								return !1
							}
						}
					}
					else
					{
						if (typeof link_disable !== 'undefined')
						{
							if (link_disable == !0)
							{
								return !1
							}
						}
					}
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
				jQueryD_1_4_2(event.currentTarget).parent().children('.tooltiptext2').show().selectText()
			});
			jQueryD_1_4_2(".txt_resize").removeAttr("style");
			jQueryD_1_4_2(".txt_resize").click(function (event)
			{
				event.preventDefault();
				event.stopPropagation();
				if (typeof disable_model !== 'undefined')
				{
					link_disable = !1;
					link_disable = !1
				}
				else
				{
					if (window.location != window.parent.location)
					{
						if (typeof link_disable !== 'undefined')
						{
							if (link_disable == !0)
							{
								return !1
							}
						}
					}
					else
					{
						if (typeof link_disable !== 'undefined')
						{
							if (link_disable == !0)
							{
								return !1
							}
						}
					}
				}
				jQueryD_1_4_2('.tooltiptext').hide();
				jQueryD_1_4_2('.tooltiptext2').hide();
				jQueryD_1_4_2('.tooltiptext3').hide();
				jQueryD_1_4_2('.tooltiptext4').hide();
				jQueryD_1_4_2('.tooltiptext5').hide();
				jQueryD_1_4_2('.hide_external_link').hide();
				jQueryD_1_4_2(event.currentTarget).focus();
				jQueryD_1_4_2(event.currentTarget).parent().children('.tooltiptext5').show()
			});
			jQueryD_1_4_2(".resetMe").click(function (event)
			{
				if (typeof disable_model !== 'undefined')
				{
					link_disable = !1;
					link_disable = !1
				}
				else
				{
					if (window.location != window.parent.location)
					{
						if (typeof link_disable !== 'undefined')
						{
							if (link_disable == !0)
							{
								return !1
							}
						}
					}
					else
					{
						if (typeof link_disable !== 'undefined')
						{
							if (link_disable == !0)
							{
								return !1
							}
						}
					}
				}
				fontSize = null;
				if (fontSize2 == null)
				{
					var gg = jQueryD_1_4_2('#wrapper').css('font-size');
					if (gg.indexOf("px") !== -1)
					{
						fontSize2 = ((parseFloat(jQueryD_1_4_2('#wrapper').css('font-size')) / parseFloat(jQueryD_1_4_2('.post,.pagebody').css('font-size'))) * 100)
					}
					else
					{
						fontSize2 = parseFloat(jQueryD_1_4_2('#wrapper').css('font-size'))
					}
				}
				
				
				jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().parent().parent().children('.posttext').removeAttr("style")
				
				
			});
			jQueryD_1_4_2(".increase").click(function (event)
			{
				if (typeof disable_model !== 'undefined')
				{
					link_disable = !1;
					link_disable = !1
				}
				else
				{
					if (window.location != window.parent.location)
					{
						if (typeof link_disable !== 'undefined')
						{
							if (link_disable == !0)
							{
								return !1
							}
						}
					}
					else
					{
						if (typeof link_disable !== 'undefined')
						{
							if (link_disable == !0)
							{
								return !1
							}
						}
					}
				}
				if (posttopid == jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().children('.posttop').attr('id'))
				{
					
					
				}
				else
				{
					fontSize = null;
					posttopid = null
				}
				if (posttopid == null)
				{
					
					posttopid = jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().children('.posttop').attr('id')
				}
				
					
					
					var gg = jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().parent().parent().children('.posttext').css('font-size');
										

					//console.log(jQueryD_1_4_2(event.currentTarget).parent().parent().parent());
					if (gg.indexOf("px") !== -1)
					{
						fontSize = ((parseFloat(jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().parent().parent().children('.posttext').css('font-size')) / parseFloat(jQueryD_1_4_2('.post').css('font-size'))) * 100)
					}
					else
					{
						fontSize = parseFloat(jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().parent().parent().children('.posttext').css('font-size'))
					}
				
				if (fontSize2 == null)
				{
					var gg = jQueryD_1_4_2('.posttext,li').css('font-size');
					if (gg.indexOf("px") !== -1)
					{
						fontSize2 = ((parseFloat(jQueryD_1_4_2('.posttext,li').css('font-size')) / parseFloat(jQueryD_1_4_2('.post,.pagebody').css('font-size'))) * 100)
					}
					else
					{
						fontSize2 = parseFloat(jQueryD_1_4_2('.posttext,li').css('font-size'))
					}
				}
				

				
				fontSize = fontSize + 6;
				
				
				jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().parent().parent().children('.posttext').css('font-size', fontSize + "%");
				return !1
			});
			jQueryD_1_4_2(".decrease").click(function (event)
			{
				if (typeof disable_model !== 'undefined')
				{
					link_disable = !1;
					link_disable = !1
				}
				else
				{
					if (window.location != window.parent.location)
					{
						if (typeof link_disable !== 'undefined')
						{
							if (link_disable == !0)
							{
								return !1
							}
						}
					}
					else
					{
						if (typeof link_disable !== 'undefined')
						{
							if (link_disable == !0)
							{
								return !1
							}
						}
					}
				}
				var currentSize = jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().parent().parent().children('.posttext').css('font-size');
				var currentSize = parseFloat(currentSize) - 3;
				if (posttopid == jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().children('.posttop').attr('id'))
				{}
				else
				{
					fontSize = null;
					posttopid = null
				}
				if (posttopid == null)
				{
					posttopid = jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().children('.posttop').attr('id')
				}
				
					var gg = jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().parent().parent().children('.posttext').css('font-size');
					if (gg.indexOf("px") !== -1)
					{
						fontSize = ((parseFloat(jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().parent().parent().children('.posttext').css('font-size')) / parseFloat(jQueryD_1_4_2('.post').css('font-size'))) * 100)
					}
					else
					{
						fontSize = parseFloat(jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().parent().parent().children('.posttext').css('font-size'))
					}
				
				if (fontSize2 == null)
				{
					var gg = jQueryD_1_4_2('.posttext,li').css('font-size');
					if (gg.indexOf("px") !== -1)
					{
						fontSize2 = ((parseFloat(jQueryD_1_4_2('.posttext,li').css('font-size')) / parseFloat(jQueryD_1_4_2('.post,.pagebody').css('font-size'))) * 100)
					}
					else
					{
						fontSize2 = parseFloat(jQueryD_1_4_2('.posttext,li').css('font-size'))
					}
				}
				fontSize = fontSize - 6;
				if (currentSize != -1)
				{
					jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().parent().parent().children('.posttext').css('font-size', fontSize + "%")
				}
				return !1
			});
			
			
			
			
			jQueryD_1_4_2(".tooltiptext").click(function (event)
			{
				event.stopPropagation()
			});
			jQueryD_1_4_2(".tooltiptext2").click(function (event)
			{
				event.stopPropagation()
			});
			jQueryD_1_4_2(".tooltiptext3").click(function (event)
			{
				event.stopPropagation()
			});
			jQueryD_1_4_2(".tooltiptext4").click(function (event)
			{
				event.stopPropagation()
			});
			jQueryD_1_4_2(".tooltiptext5").click(function (event)
			{
				event.stopPropagation()
			});
			
		
         //jQueryD_1_4_2(window).hashchange();
		
		
		
		jQueryD_1_4_2(".thread_title a").click(function (event)
			{
				//event.preventDefault();
				//event.stopPropagation();
				if(jQueryD_1_4_2( ".sectionH")){
					
	                jQueryD_1_4_2('.sectionH').removeClass( "sectionH" );
					//jQueryD_1_4_2('.padd').removeClass( "sectionH" );
				}
				
				
				if (window.location == window.parent.location)
				{
					
								jQueryD_1_4_2('#loading').show()
						
				}
				else{
					
					window.parent.postMessage(["loading", "start"], "*");
					
					
					setTimeout(function () {
                           location.reload();
				 }, 150);
					
				}
				
				
				
			});
		
		
		
	
		
		
	if (typeof process !== "undefined" && typeof require !== "undefined")
	{
		
	
    if (window.location != window.parent.location)
	{
		
window.parent.postMessage(["saveCurrrURL", null], "*");
	
	}
	else
	{

	   localStorage.setItem("currURL", window.location);
	
	}
	}
	
		
		
		});
		jQueryD_1_4_2.fn.selectText = function ()
		{
			var doc = document,
				element = this[0],
				range, selection;
			if (doc.body.createTextRange)
			{
				range = document.body.createTextRange();
				range.moveToElementText(element);
				range.select()
			}
			else if (window.getSelection)
			{
				selection = window.getSelection();
				range = document.createRange();
				range.selectNodeContents(element);
				selection.removeAllRanges();
				selection.addRange(range)
			}
		}
	}
}