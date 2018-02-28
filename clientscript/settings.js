var link_disable2 = false;
var fontSize;
var printin_prosses = false;

var IE = (function() { 
    if (document.documentMode) {
        return document.documentMode;
    } else {
        for (var i = 7; i > 0; i--) {
            var div = document.createElement("div");

            div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";

            if (div.getElementsByTagName("span").length) {
                return i;
            }
        }
    }

    return undefined;
})();


window.onload = function(){
	
if(IE=="6"&&IE=="7"){	

resize(window);

}
setTimeout(function() {
	document.getElementById("loading").style.display = 'none';
	}, 0);

};

function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png|JPG|PNG|GIF|JPEG)$/) != null);
}

var walk_the_DOM = function walk(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        walk(node, func);
        node = node.nextSibling;
    }
};

function clearHighlighting()
{
alert("clearing hightlighting...");

if (!document.body || typeof(document.body.innerHTML) == "undefined") {
    if (warnOnFailure) {
      alert("Sorry, for some reason the text of this page is unavailable. Searching will not work.");
    }
    return false;
  }

var re = new RegExp('<'+'FONT'+'[^><]*>|<.'+'FONT'+'[^><]*>','g')
var bodyText = document.body.innerHTML;

bodyText = bodyText.replace(re, '');
document.body.innerHTML = bodyText;
return true;

}

function printDiv(divID) {
	return false;
}
function printDiv2(divID) {

      if(_isMobile() == mobiletrue) {
		 jQueryM_v1_4_5("#frame1").remove(); 
		 jQueryM_v1_4_5('font').removeAttr("size");
	  }
	  else{
		 jQueryD_1_4_2("#frame1").remove(); 
		 jQueryD_1_4_2('font').removeAttr("size");
	  }
	  
	  //var contents = document.getElementById(divID).innerHTML;
	    var contents = divID;
		//alert();
		//var contents = jQueryD_1_4_2('#'+divID).parent().html();
		var wrapper = document.createElement('div');
	    wrapper.innerHTML = contents;
       
		
	   walk_the_DOM(wrapper, function(el) {
        
		//el.removeAttribute('style');
		
		if(el.tagName =="FONT"){
		 //el.style.fontSize = jQueryD_1_4_2('.posttext').css('font-size'); 
		 //alert(el.tagName);
	    }
		
		if(el.className == "hide_param"|| el.className =="imglink2 padd"){
		 el.removeAttribute('style');
	    }
		if(el.className == "image_custom")
		{
			el.childNodes[0].removeAttribute('style');

		}
        });
		
       // alert(wrapper.innerHTML.replace("size\=+0",""));


		var frame1 = document.createElement('iframe');
            frame1.name = "frame1";
			frame1.id = "frame1";
            frame1.style.position = "absolute";
            frame1.style.top = "-9999px";
            document.body.appendChild(frame1);
            var frameDoc;
           
		   var iframe = document.getElementById("frame1")
		   if (IE <=7) {
                  // for IE 5.5, 6 and 7:
            frameDoc = iframe.contentWindow;
			//alert();	 
		   }
		   else{
		   
		    frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;

		   }

		   frameDoc.document.open();
           frameDoc.document.write('<html dir = "rtl"><head>');
		    
		   if(_isMobile() == mobiletrue) {
			frameDoc.document.write( "<style>font{font-size:"+jQueryM_v1_4_5('.posttext').css('font-size')+"}.new_qts,.qts_link{color: #000000;text-align: center;background-color: #F5F5DC;padding: 5px;border: solid 1px #000000;}body{background-color :white;}.img_center{color :black;}.page-break{page-break-after: always;}.thread_title,hr,#copyright,.org, .posttop,.tooltip2,.bbcode,.tooltip3,#pagenumbers,.pda,#navbar{display:none;}.bbcode_container{border-left: 1px solid silver;border-right: 2px solid silver;border-bottom: 2px solid silver;border-top: 1px solid silver;}</style>" );
	       }
	       else{
		   frameDoc.document.write( "<style>font{font-size:"+jQueryD_1_4_2('.posttext').css('font-size')+"}.new_qts,.qts_link{color: #000000;text-align: center;background-color: #F5F5DC;padding: 5px;border: solid 1px #000000;}body{background-color :white;}.img_center{color :black;}.page-break{page-break-after: always;}.thread_title,hr,#copyright,.org, .posttop,.tooltip2,.bbcode,.tooltip3,#pagenumbers,.pda,#navbar{display:none;}.bbcode_container{border-left: 1px solid silver;border-right: 2px solid silver;border-bottom: 2px solid silver;border-top: 1px solid silver;}</style>" );
	       }
			frameDoc.document.write('</head><body>');
            frameDoc.document.write(wrapper.innerHTML);
            frameDoc.document.write('</body></html>');
            frameDoc.document.close();
            
			printin_prosses = false;
			setTimeout(function () {
                
				window.frames["frame1"].focus();
                window.frames["frame1"].print();
				
                document.body.removeChild(frame1);
				
				//jQueryM_v1_4_5('body').trigger('resize');
				//jQueryM_v1_4_5('.posttop').css("background-color", "#d5dc91");
                //jQueryM_v1_4_5("#wrapper").animate({ scrollTop:500 }, 0);
            }, 200);
            return false;

}


function getPageHeight(D) {
    var setsize = Math.max(Math.max(D.body.scrollHeight, D.documentElement.scrollHeight), Math.max(D.body.offsetHeight, D.documentElement.offsetHeight), Math.max(D.body.clientHeight, D.documentElement.clientHeight));
    window.parent.postMessage(["setsize", setsize], "*");
    return setsize;

}

function resize(elm) {
    //var height = elm.position().top + elm.offset().top + elm.outerHeight(true);
    //window.parent.postMessage(["setsize", height], "*");
    document.documentElement.style.display = 'none';
    document.documentElement.offsetHeight; // no need to store this anywhere, the reference is enough
    document.documentElement.style.display = '';
}

///////////////////////////////////////////////////////////////////////////
if(_isMobile() == mobiletrue) {
    /*jQueryM_v1_4_5(document).on( "pagecontainershow", function(){
      
    });*/
    
	 jQueryM_v1_4_5.fn.hasScrollBar = function() {
        return this.get(0).scrollHeight > this.height();
     }
	
	jQueryM_v1_4_5(window).on("resize orientationchange", function(event) {
        resize(jQueryM_v1_4_5("html"));
        //getPageHeight(document)
    });
    /*jQueryM_v1_4_5(window).load(function() {
        resize(jQueryM_v1_4_5("html"));
        //getPageHeight(document)
        jQueryM_v1_4_5('.loading').hide();
    });*/



    var imglink_check = false;


    jQueryM_v1_4_5(document).ready(function() {
        //alert("mobile");
        
		
		
		
		
		
		jQueryM_v1_4_5('.loading').show();
        /*if (navigator.userAgent.match(detect_userAgent)) {
        	
        jQueryM_v1_4_5("#wrapper,html,body").css("-webkit-transform", "translate3d(0,0,0)");
        	
        }*/
		
		
		

        var arrEdited = [];
        jQueryM_v1_4_5('.imglink').each(function(i) {
            jQueryM_v1_4_5(this).attr('id', 'id_' + (i + 1));

            arrEdited.push({
                id: jQueryM_v1_4_5(this).attr('id'),
                href: jQueryM_v1_4_5(this).parent().children('.hide_external_link').children('a').attr('href')

            });
        });

        jQueryM_v1_4_5("#wrapper").scroll(function() {
            if(jQueryM_v1_4_5(this).scrollTop() + jQueryM_v1_4_5(this).innerHeight() >= jQueryM_v1_4_5(this)[0].scrollHeight) {

                window.parent.postMessage(["loading", "stop"], "*");
            }


            var pos = jQueryM_v1_4_5(this).scrollTop();
            if(pos == 0) {

                window.parent.postMessage(["loading", "stop"], "*");
            }

        });

        /*if(isInIFrame==true){
			
	    if (navigator.userAgent.match(detect_userAgent)) {

		myScroll = new iScroll('wrapper', {});
		
		}
	}*/

     
        jQueryM_v1_4_5(document).on('vclick', function(event) {

            if(event.which == 0 || event.which == 1) { //right click
             
            window.parent.postMessage(["hide_drop", "hide_drop"], "*");
			 if(window.location != window.parent.location) {
                if(link_disable == false){
                 if(imglink_check == false) {
                    link_disable2 = false;
                    jQueryM_v1_4_5(".tooltiptext_custom").remove();
                    jQueryM_v1_4_5('.image_custom').remove();
                    jQueryM_v1_4_5(".link_img").remove();
                    jQueryM_v1_4_5('.tooltiptext').hide();
                    jQueryM_v1_4_5('.tooltiptext2').hide();
                    jQueryM_v1_4_5('.tooltiptext3').hide();
                    jQueryM_v1_4_5('.tooltiptext4').hide();
                    jQueryM_v1_4_5('.tooltiptext5').hide();
                    jQueryM_v1_4_5('.hide_external_link').hide();
                    jQueryM_v1_4_5('.hide_local_link').hide();

                }
               }
             } else {
			   if(link_disable2 == false){
                if(imglink_check == false) {

                    jQueryM_v1_4_5(".tooltiptext_custom").remove();
                    jQueryM_v1_4_5('.image_custom').remove();
                    jQueryM_v1_4_5(".link_img").remove();
                    jQueryM_v1_4_5('.tooltiptext').hide();
                    jQueryM_v1_4_5('.tooltiptext2').hide();
                    jQueryM_v1_4_5('.tooltiptext3').hide();
                    jQueryM_v1_4_5('.tooltiptext4').hide();
                    jQueryM_v1_4_5('.tooltiptext5').hide();
                    jQueryM_v1_4_5('.hide_external_link').hide();
                    jQueryM_v1_4_5('.hide_local_link').hide();

                }
               }
            }



			 
            }
            imglink_check = false;
        });
        jQueryM_v1_4_5('.tooltiptext').remove();
        jQueryM_v1_4_5(".link_org").on('vclick', function(event) {
            if(window.location != window.parent.location) {
			if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			}else{
			if (typeof link_disable2 !== 'undefined') {if(link_disable2 == true){return false;}}}
            imglink_check = true;
            event.preventDefault();
            //event.stopPropagation();
            jQueryM_v1_4_5(".tooltiptext_custom").remove();
            jQueryM_v1_4_5('.image_custom').remove();
            jQueryM_v1_4_5(".link_img").remove();
            jQueryM_v1_4_5('.tooltiptext').hide();
            jQueryM_v1_4_5('.tooltiptext2').hide();
            jQueryM_v1_4_5('.tooltiptext3').hide();
            jQueryM_v1_4_5('.tooltiptext4').hide();
            jQueryM_v1_4_5('.tooltiptext5').hide();
            jQueryM_v1_4_5('.hide_external_link').hide();

            jQueryM_v1_4_5(event.currentTarget).parent().children('.tooltiptext').show();
            jQueryM_v1_4_5(event.currentTarget).children('.selected').selectText();
            if(jQueryM_v1_4_5(".tooltiptext_custom").length == 0) {
                jQueryM_v1_4_5(event.currentTarget).parent().parent().append('<span class="tooltiptext_custom"><br><a style="display: inline; overflow-wrap: break-word; -ms-word-break: break-all; word-break: break-word; word-break: break-all; word-wrap:break-word;" href="" target="_blank" class="padd linkstyle">الذهاب الى الرابط</a><br><br></span>');
                jQueryM_v1_4_5(event.currentTarget).parent().parent().children(".tooltiptext_custom").children('a').attr("href", jQueryM_v1_4_5(event.currentTarget).children('.selected').attr('href'))
                .on('vclick', function(event) {
                     //event.stopPropagation();
					 imglink_check = true;
					  //alert('kk');
					 if(window.location != window.parent.location) {
			         if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			         }else{if (typeof link_disable2 !== 'undefined') {if(link_disable2 == true){return false;}}}
                });
					
            }
           // jQueryM_v1_4_5("#wrapper").scrollTop(jQueryM_v1_4_5(this).position().top + jQueryM_v1_4_5("#wrapper").scrollTop());
		   
		   jQueryM_v1_4_5("#wrapper").animate({ scrollTop: jQueryM_v1_4_5(this).position().top + jQueryM_v1_4_5("#wrapper").scrollTop() }, 50);



        });
 
		jQueryM_v1_4_5('.btn_print').on('vclick', function(event) {
		 event.preventDefault();
         event.stopPropagation();
		if(printin_prosses == false){
			printin_prosses = true;
		    var c = jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().children('.posttext');
            //var c = event.currentTarget.parentNode.parentNode.parentNode.childNodes;
			 
           // setTimeout(function() {printDiv2(c);}, 3000);
		  tooltip(null, "الرجاء الانتظار يتم عرض الطباعة")
		  
		  setTimeout(function () {
			 jQueryM_v1_4_5.print(c);
			 setTimeout(function () {
				 
				 //location.href='https://bayan-noon.com/index.php/forum2/t-1361.html#post3424';
				 jQueryM_v1_4_5('html').hide().show(500).trigger('resize');
				 jQueryM_v1_4_5('.header_topic').hide().show(500).trigger('resize');
				 
				 }, 300);
			  }, 3000);
		  //
		 
		}
			
		});
		
		jQueryM_v1_4_5('.hide_external_link').remove();
        jQueryM_v1_4_5(".imglink").on('vclick', function(event) {
            event.preventDefault();
            //event.stopPropagation();
            imglink_check = true;
            
			jQueryM_v1_4_5(".tooltiptext_custom").remove();
            jQueryM_v1_4_5('.image_custom').remove();
            jQueryM_v1_4_5(".link_img").remove();
            jQueryM_v1_4_5('.tooltiptext').hide();
            jQueryM_v1_4_5('.tooltiptext2').hide();
            jQueryM_v1_4_5('.tooltiptext3').hide();
            jQueryM_v1_4_5('.tooltiptext4').hide();
            jQueryM_v1_4_5('.tooltiptext5').hide();
            jQueryM_v1_4_5('.hide_external_link').hide();
            jQueryM_v1_4_5(event.currentTarget).parent().children('.hide_external_link').show();
            jQueryM_v1_4_5(event.currentTarget).children('.hide_param').selectText();

            if(jQueryM_v1_4_5(".link_img").length == 0) {
                for(var i = 0; i < arrEdited.length; i++) {

                    if(jQueryM_v1_4_5(event.currentTarget).attr('id') == arrEdited[i].id) {
                        //alert(arrEdited[i].href);
                        jQueryM_v1_4_5(event.currentTarget).parent().append('<span class="link_img"><a class="link_img2" target="_blank" href=""><img style="text-align: center; overflow-wrap: break-word; -ms-word-break: break-all; word-break: break-word; word-break: break-all; word-wrap:break-word; direction: rtl;outline: none;border-radius: 6px;color: #ffffff;background-color: #2b7b91;padding: 10px; margin: 5px;" class="cool" src="" height="200" width="200" alt=""></a><br></span>');
                        jQueryM_v1_4_5(event.currentTarget).parent().children(".link_img").children('a').attr("href", arrEdited[i].href);
                        jQueryM_v1_4_5(event.currentTarget).parent().children(".link_img").children('a').children('img').attr("src", arrEdited[i].href);
						jQueryM_v1_4_5(".link_img2").click(function(event) {
                          
							//event.stopPropagation();
							
                        });
                    }
                }
            }


            if(jQueryM_v1_4_5(".image_custom").length == 0) {
                jQueryM_v1_4_5(event.currentTarget).parent().append('<span class="image_custom"><a class="image_custom" href="" target="_blank" style="text-align: center; overflow-wrap: break-word; -ms-word-break: break-all; word-break: break-word; word-break: break-all; word-wrap:break-word; direction: rtl;outline: none;border-radius: 6px;color: #ffffff;background-color: #2b7b91;padding: 5px 5px;">رابط الصورة في الموقع</a><br></span>');
                jQueryM_v1_4_5(event.currentTarget).parent().children('.image_custom').children('a').attr("href", jQueryM_v1_4_5(event.currentTarget).children('.hide_param').attr('href'))
                .on('vclick', function(event) {
                     event.stopPropagation();
					if(window.location != window.parent.location) {
			         if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			         }else{if (typeof link_disable2 !== 'undefined') {if(link_disable2 == true){return false;}}} 
                });
				
            }
			
           // jQueryM_v1_4_5("#wrapper").scrollTop(jQueryM_v1_4_5(this).position().top + jQueryM_v1_4_5("#wrapper").scrollTop());
		   
		   jQueryM_v1_4_5("#wrapper").animate({ scrollTop: jQueryM_v1_4_5(this).position().top + jQueryM_v1_4_5("#wrapper").scrollTop() }, 50);


        });

		
		
		jQueryM_v1_4_5(".close").on('vclick', function(event) {
            imglink_check = true;
			jQueryM_v1_4_5(".modal").hide();
			  jQueryM_v1_4_5("#wrapper").css({'overflow-y' : 'auto'});
			  setTimeout(function() {
				  link_disable2 = false;
			  }, 1000);
        })
		

		
        jQueryM_v1_4_5("#wrapper").on('vclick','a', function(event) {
            link_img_show = true;
			
			if(window.location != window.parent.location) {
			if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			}else{
			if (typeof link_disable2 !== 'undefined') {if(link_disable2 == true){return false;}}}

			var classname = jQueryM_v1_4_5(this).attr('class');
            var link = this.href;
            //alert(classname);
            
			 if(classname == "up post_hash") {

					//event.preventDefault();
					//jQueryM_v1_4_5("#wrapper").animate({ scrollTop: jQueryM_v1_4_5(this).position().top + jQueryM_v1_4_5("#wrapper").scrollTop() }, 50);
                    //jQueryM_v1_4_5(this).css("background-color", "#d5dc91");
                    //return false;
				}
			
			
			if( location.hostname === this.hostname || !this.hostname.length ) {
                
			
					 
			    var x = this.href;
                var c = window.location.href;

				
				
				
				
                if(checkURL(x) == false) {
                    
					
					
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
                   
				   c = c.replace("?", "");
				   
				   //alert(c+x);
				   
				   
				   
		var loc ="";
		strr =  document.location.href;	   
		
		if (strr.match(/[^"]*\&rhsearch\=(.*?)(&([^"]*)|$)/mg) ) {
			loc+= strr.replace(/[^"]*\&rhsearch\=(.*?)(&([^"]*)|$)/mg, "&rhsearch=$1");
		}
		if (strr.match(/[^"]*\&rhhlterm\=(.*?)(&([^"]*)|$)/mg) ) {
			loc+= strr.replace(/[^"]*\&rhhlterm\=(.*?)(&([^"]*)|$)/mg, "&rhhlterm=$1");
		}
		if (loc.match(/(#post(.*?))/mg) ) {
			loc= loc.replace(/(#post[^"]*)/mg, "");
					 
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
						jQueryM_v1_4_5('.loading').show();
                         
						 location.href = link+loc+h;
				         return false; 
					   
						}
						else{
						
                   			 //alert(c+x);
                             return false;							 
						
						}
	
                   }
				   else{

				   //alert(link+'mmmmm'+loc+'mmmm'+h);
				   
				   location.href = link+loc+h;
				   return false; 
				   
  
				   }
				   
		           //location.href = link+loc+h;
				   //return false;
					
                }
               
				
				if(checkURL(link)) {
					/*for chromiem book remove next */
					link_disable2 = true;
					imglink_check = true;
					event.preventDefault();
					if(window.location != window.parent.location) {
                        window.parent.postMessage(["modal_display", "show"], "*");
                        window.parent.postMessage(["image_url", link], "*");
                    } else {
						jQueryM_v1_4_5(".modal").show();
                        jQueryM_v1_4_5("#wrapper,body,html").css({
                            'overflow': 'hidden'
                        });
                        jQueryM_v1_4_5("#img01").attr("src", link);
                    }
                }
					 
            }
		    else{
                /*for chromiem book add next */
				//var res = link.replace("heexternal://", "");
				//jQueryD_1_4_2(this).attr("href","heexternal://"+res).removeAttr('target');
				 //alert("ext");
            }
			
        });



        

        jQueryM_v1_4_5(".bbcode_img").on('vclick', function(event) {
            
			if(window.location != window.parent.location) {
			if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			}else{
			if (typeof link_disable2 !== 'undefined') {if(link_disable2 == true){return false;}}}
			jQueryM_v1_4_5(event.currentTarget).selectText();
        });
        jQueryM_v1_4_5("a.select_txt").on('vclick', function(event) {
            event.preventDefault();
            event.stopPropagation();
            
			if(window.location != window.parent.location) {
			if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			}else{
			if (typeof link_disable2 !== 'undefined') {if(link_disable2 == true){return false;}}}
			
			jQueryM_v1_4_5('.tooltiptext').hide();
            jQueryM_v1_4_5('.tooltiptext2').hide();
            jQueryM_v1_4_5('.tooltiptext3').hide();
            jQueryM_v1_4_5('.tooltiptext4').hide();
            jQueryM_v1_4_5('.tooltiptext5').hide();
            //jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().children('.posttext').selectText();

            var c = event.currentTarget.parentNode.parentNode.parentNode.childNodes;
            var i;
            for(i = 0; i < c.length; i++) {

                if(c[i].className == "posttext padd2") {

                    select_all_and_copy(c[i]);
                }
            }


        });
        jQueryM_v1_4_5("a.threadinfo").on('vclick', function(event) {
            event.preventDefault();
            event.stopPropagation();
            
			if(window.location != window.parent.location) {
			if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			}else{
			if (typeof link_disable2 !== 'undefined') {if(link_disable2 == true){return false;}}}
			
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
        jQueryM_v1_4_5("a.threadinfo2").on('vclick', function(event) {
            event.preventDefault();
            event.stopPropagation();
            
			if(window.location != window.parent.location) {
			if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			}else{
			if (typeof link_disable2 !== 'undefined') {if(link_disable2 == true){return false;}}}
			
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
        jQueryM_v1_4_5("a.postinfo").on('vclick', function(event) {
            event.preventDefault();
            event.stopPropagation();
            
			if(window.location != window.parent.location) {
			if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			}else{
			if (typeof link_disable2 !== 'undefined') {if(link_disable2 == true){return false;}}}
			
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

        jQueryM_v1_4_5(".txt_resize").on('vclick', function(event) {
            event.preventDefault();
            event.stopPropagation();
            
			if(window.location != window.parent.location) {
			if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			}else{
			if (typeof link_disable2 !== 'undefined') {if(link_disable2 == true){return false;}}}
			
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
                fontsize: 20

            });
        });
		
		
		
        // reset 
        jQueryM_v1_4_5(".resetMe").on('vclick', function(event) {
            
			if(window.location != window.parent.location) {
			if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			}else{
			if (typeof link_disable2 !== 'undefined') {if(link_disable2 == true){return false;}}}
			fontSize = null
			var size = 20;

			var c = event.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes;

            for(var i = 0; i < c.length; i++) {
                //alert(c[i].className);
                if(c[i].className == "posttext padd2") {
                 
				
				for(var d = 0; d < arrEdited2.length; d++) {
                 
				    
				 
                    if(c[i].getAttribute("id")== arrEdited2[d].id) {
						//alert(arrEdited2[d].id);
						
						 var el = c[i];
				         var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    
				        if(fontSize == null){
                        fontSize = size;
				        }
				        //fontSize = fontSize +1;
				        el.style.fontSize = (fontSize) + 'px';
						arrEdited2[d].fontsize= fontSize;
                        break;
				    }
						
						
					}
			   }
				
                  
			   
            }
			
			
            /*jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size', size);*/
            if (navigator.userAgent.match(/(chrome)/i)) {
	        document.documentElement.style.display = 'none';
            document.documentElement.offsetHeight; 
            document.documentElement.style.display = '';
	        }
        });


        // Increase Font Size 
        jQueryM_v1_4_5(".increase").on('vclick', function(event) {
           
			
			/*var currentSize = jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size');
            var currentSize = parseFloat(currentSize) + 3;
            
			jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size', currentSize);*/
			
			var c = event.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes;

            for(var i = 0; i < c.length; i++) {
                //alert(c[i].className);
                if(c[i].className == "posttext padd2") {
                 
				
				for(var d = 0; d < arrEdited2.length; d++) {
                 
				    
				 
                    if(c[i].getAttribute("id")== arrEdited2[d].id) {
						//alert(arrEdited2[d].id);
						
						 var el = c[i];
				         var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    
				        if(fontSize == null){
                        fontSize = arrEdited2[d].fontsize;
				        }
				        fontSize = fontSize +2;
				        el.style.fontSize = (fontSize) + 'px';
						arrEdited2[d].fontsize= fontSize;
                        break;
				    }
						
						
					}
			   }
				
                  
			   
            }
			
			
			if (navigator.userAgent.match(/(chrome)/i)) {
	        document.documentElement.style.display = 'none';
            document.documentElement.offsetHeight; 
            document.documentElement.style.display = '';
	        }
            return false;
        });


        // Decrease Font Size 
        jQueryM_v1_4_5(".decrease").on('vclick', function(event) {
            
			if(window.location != window.parent.location) {
			if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			}else{
			if (typeof link_disable2 !== 'undefined') {if(link_disable2 == true){return false;}}}
			
			var c = event.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes;
            
			var i;
            for(i = 0; i < c.length; i++) {
                //alert(c[i].className);
                if(c[i].className == "posttext padd2") {

                  
			    	for(var d = 0; d < arrEdited2.length; d++) {
                 
				    
				 
                    if(c[i].getAttribute("id")== arrEdited2[d].id) {
						//alert(arrEdited2[d].id);
						
						 var el = c[i];
				         var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    
				        if(fontSize == null){
                        fontSize = arrEdited2[d].fontsize;
				        }
				        fontSize = fontSize -2;
				        el.style.fontSize = (fontSize) + 'px';
						arrEdited2[d].fontsize= fontSize;
                        break;
				    }
						
						
					}
				}
            }
            
			
			if (navigator.userAgent.match(/(chrome)/i)) {
	        document.documentElement.style.display = 'none';
            document.documentElement.offsetHeight; 
            document.documentElement.style.display = '';
	        }
			return false;
            
        });

        jQueryM_v1_4_5(".tooltiptext").on('vclick', function(event) {
            //event.stopPropagation();
            imglink_check = true;
        });
        jQueryM_v1_4_5(".tooltiptext2").on('vclick', function(event) {
            event.stopPropagation();
        });
        jQueryM_v1_4_5(".tooltiptext3").on('vclick', function(event) {
            event.stopPropagation();
        });
        jQueryM_v1_4_5(".tooltiptext4").on('vclick', function(event) {
            event.stopPropagation();
        });
        jQueryM_v1_4_5(".tooltiptext5").on('vclick', function(event) {
            event.stopPropagation();
        });
        jQueryM_v1_4_5(".hide_external_link").on('vclick', function(event) {
            //event.stopPropagation();
            imglink_check = true;
        });
        //alert("mobile");
        jQueryM_v1_4_5(window).hashchange();
    }); //end
    jQueryM_v1_4_5(window).hashchange(function() {

	
	    //alert(location.hash);
        if((navigator.userAgent.match(detect_userAgent)) && (isInIFrame == true)) {

            var target = location.hash ? location.hash : null;
            window.location.hash = "";
            //window.history.pushState("string", "Title", target);

            jQueryM_v1_4_5('#wrapper').scrollTop(0);
            if(target.indexOf("post") !== -1) {
                //alert(target);
                jQueryM_v1_4_5('.posttop').removeAttr('style');
                jQueryM_v1_4_5(target).addClass("anch_selected");
                jQueryM_v1_4_5(target).css("background-color", "#d5dc91");
                myScroll.scrollToElement(target, 0);
                myScroll.refresh();
            }
            if(target.indexOf("td_threadtitle_") !== -1) {

                jQueryM_v1_4_5(target).css("background-color", "#d5dc91");
                myScroll.scrollToElement(target, 0);
                myScroll.refresh();
            }
        } else {
            
            var section = location.hash ? location.hash : null;
            if(section != null) {
                //var activePage = jQueryM_v1_4_5.mobile.activePage;
              
				
				jQueryM_v1_4_5('.posttop').removeAttr('style');
                if(section.indexOf("post") !== -1) {
                    section= section.replace(/(#post(.*?))(#([^"]*)|$)/mg, "$1");
					if (!jQueryM_v1_4_5("#wrapper").is(':animated')) {
					//alert(section);
					//go_fuck();
					jQueryM_v1_4_5("#wrapper").animate({ scrollTop: jQueryM_v1_4_5(section).position().top + jQueryM_v1_4_5("#wrapper").scrollTop() }, 0);
					jQueryM_v1_4_5(section).css("background-color", "#d5dc91");
					}
                }
                if(section.indexOf("td_threadtitle_") !== -1) {
                    //jQueryM_v1_4_5.mobile.defaultHomeScroll = activePage.find(section).offset().top;
					section= section.replace(/(#td_threadtitle_(.*?))(\?([^"]*)|$)/mg, "$1");
					jQueryM_v1_4_5("#wrapper").animate({ scrollTop: jQueryM_v1_4_5(section).position().top + jQueryM_v1_4_5("#wrapper").scrollTop() }, 0);
                    jQueryM_v1_4_5(section).css("background-color", "#d5dc91");
                }
            }
			//window.location.hash = "";
        }

    });
    jQueryM_v1_4_5.fn.selectText = function() {
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
} ////////////////////////////////////////////////////////////////
else {
 
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
        jQueryD_1_4_2('.loading').show();

	

        var arrEdited = [];
        jQueryD_1_4_2('.imglink').each(function(i) {
            jQueryD_1_4_2(this).attr('id', 'id_' + (i + 1));

            arrEdited.push({
                id: jQueryD_1_4_2(this).attr('id'),
                href: jQueryD_1_4_2(this).parent().children('.hide_external_link').children('a').attr('href')

            });
        });

        jQueryD_1_4_2('.tooltiptext').remove();
        jQueryD_1_4_2('.hide_external_link').remove();
        jQueryD_1_4_2('.pagebody').children(".page-break").last().remove();

        jQueryD_1_4_2("a").live("click", function(event) {
            link_img_show = true;
          
			
			if(window.location != window.parent.location) {
			if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			}else{
			if (typeof link_disable2 !== 'undefined') {if(link_disable2 == true){return false;}}}
			
			var classname = jQueryD_1_4_2(this).attr('class');
            var link = this.href;
			
			
			if( location.hostname === this.hostname || !this.hostname.length ) {
             //alert("curr");
			 
			  var x = this.href;
                var c = window.location.href;
              
            //alert(classname);
			/*if((!checkURL(link)) && (classname !="btn_print up")){
               var index = link.indexOf("index.php/");
  
                if(index != -1) {
                var  link2 = link.substring(index, link.length);
	           //alert(link2)
               }
               else{
	           var  link2 = "index.php.htm"; 
               }
			    simplePostMessage(["get_page_location_href",link2],"*",parent.parent);
			}*/

				
                if(checkURL(x) == false) {
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
                   
				   c = c.replace("?", "");
                   
        
		
		var loc ="";
		strr =  document.location.href;	   
		
		if (strr.match(/[^"]*\&rhsearch\=(.*?)(&([^"]*)|$)/mg) ) {
			loc+= strr.replace(/[^"]*\&rhsearch\=(.*?)(&([^"]*)|$)/mg, "&rhsearch=$1");
		}
		if (strr.match(/[^"]*\&rhhlterm\=(.*?)(&([^"]*)|$)/mg) ) {
			loc+= strr.replace(/[^"]*\&rhhlterm\=(.*?)(&([^"]*)|$)/mg, "&rhhlterm=$1");
		}
		if (loc.match(/(#post(.*?))/mg) ) {
			loc= loc.replace(/(#post[^"]*)/mg, "");
					 
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
						jQueryD_1_4_2('.loading').show();
                        //alert(c+x);
						location.href = link+loc+h;
			            return false;
						
                        }
						}
						else{
						
                   			 //alert(c+x);
                             return false;							 
						
						}
                    }else{
						
						 location.href = link+loc+h;
			             return false;
					}
                }
               if(checkURL(link)) {
					/*for chromiem book remove next */
					//link_disable2 = true;
				
				    if(typeof enable_heexternal == 'function') {
				
				       if (enable_heexternal() == true) {
					   jQueryD_1_4_2(this).attr("target","_heopenit");
                       }
				    }
				    else{
					
					 if (typeof disable_model !== 'undefined'){link_disable = false;link_disable2 = false;}
			         else{
			         event.preventDefault();
				     link_disable2 = true;
				         if(window.location != window.parent.location) {
                        window.parent.postMessage(["modal_display", "show"], "*");
                        window.parent.postMessage(["image_url", link], "*");
                        } else {
						jQueryD_1_4_2(".modal").show();
                        jQueryD_1_4_2("#wrapper,body,html").css({
                            'overflow': 'hidden'
                        });
                        jQueryD_1_4_2("#img01").attr("src", link);
                        }
				     }
					
					
				    }
                }
			 
           
			
			} else {
               if(typeof enable_heexternal == 'function') {
				
				if (enable_heexternal() == true) {
				//for buitin webkit
				//var res = link.replace("_heexternal://", "");
				//jQueryD_1_4_2(this).attr("href","_heexternal://"+res).removeAttr('target');
				
				//for tradent ie
				//alert();
				jQueryD_1_4_2(this).attr("target","_heexternal");

				}
				else{
				//alert();
				}
			   }
            }

        
		 // return false;
		});

	
	     jQueryD_1_4_2('.btn_print').click( function(event) {
			event.preventDefault();
            event.stopPropagation();
			 var c =   jQueryD_1_4_2(event.currentTarget).parent().parent().parent().children('.posttext').html();
             //var c = event.currentTarget.parentNode.parentNode.parentNode.childNodes;
	
			if(printin_prosses == false){
			printin_prosses = true;
			tooltip(null, "الرجاء الانتظار يتم عرض الطباعة"); 
            jQueryD_1_4_2.print();
			//setTimeout(function() {printDiv2(c);}, 3000);
            }			
		
			
		});
	

        var link_img_show = true;
        jQueryD_1_4_2(document).click(function(event) {
            if(event.which == 0 || event.which == 1) { //right click
                event.stopPropagation();
  	            window.parent.postMessage(["hide_drop", "hide_drop"], "*");
			if(window.location != window.parent.location) {
               //alert(link_disable);

			   
			   if(link_disable == false){

                if(link_img_show == false){
			    jQueryD_1_4_2('.image_custom').remove();
				jQueryD_1_4_2(".link_img").remove();
				jQueryD_1_4_2(".tooltiptext_custom").remove();
				}
                jQueryD_1_4_2('.tooltiptext').hide();
                jQueryD_1_4_2('.tooltiptext2').hide();
                jQueryD_1_4_2('.tooltiptext3').hide();
                jQueryD_1_4_2('.tooltiptext4').hide();
                jQueryD_1_4_2('.tooltiptext5').hide();
                jQueryD_1_4_2('.hide_external_link').hide();
                jQueryD_1_4_2('.hide_local_link').hide();
                //alert();
              }
             } else {
			  if(link_disable2 == false){
                //alert(link_disable2);
                if(link_img_show == false){
			    jQueryD_1_4_2('.image_custom').remove();
				jQueryD_1_4_2(".link_img").remove();
				jQueryD_1_4_2(".tooltiptext_custom").remove();
				}
                jQueryD_1_4_2('.tooltiptext').hide();
                jQueryD_1_4_2('.tooltiptext2').hide();
                jQueryD_1_4_2('.tooltiptext3').hide();
                jQueryD_1_4_2('.tooltiptext4').hide();
                jQueryD_1_4_2('.tooltiptext5').hide();
                jQueryD_1_4_2('.hide_external_link').hide();
                jQueryD_1_4_2('.hide_local_link').hide();

              }
            }
			

			}
   
		link_img_show = false;
		});

        
		
		jQueryD_1_4_2(".close").click(function(event) {
			
			//alert(link_disable2);
			jQueryD_1_4_2(".modal").hide();
            jQueryD_1_4_2("#wrapper").css({
                    'overflow-y': 'auto'
            });
			setTimeout(function() {
				link_img_show = true;
				link_disable2 = false;
            }, 1000);
        });
		
		
		
		
		
		jQueryD_1_4_2(".link_org").click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            
			if (typeof disable_model !== 'undefined'){link_disable = false;link_disable2 = false;}
			else{
			   if(window.location != window.parent.location) {
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			   }else{
			   if (typeof link_disable2 !== 'undefined') {if(link_disable2 == true){return false;}}}	
			}
			link_img_show = false;
			
			jQueryD_1_4_2(".tooltiptext_custom").remove();
            jQueryD_1_4_2('.image_custom').remove();
            jQueryD_1_4_2(".link_img").remove();
            jQueryD_1_4_2('.tooltiptext').hide();
            jQueryD_1_4_2('.tooltiptext2').hide();
            jQueryD_1_4_2('.tooltiptext3').hide();
            jQueryD_1_4_2('.tooltiptext4').hide();
            jQueryD_1_4_2('.tooltiptext5').hide();
            jQueryD_1_4_2('.hide_external_link').hide();
            jQueryD_1_4_2(event.currentTarget).parent().children('.tooltiptext').show();
            jQueryD_1_4_2(event.currentTarget).children('.selected').selectText();
            if(jQueryD_1_4_2(".tooltiptext_custom").length == 0) {
                jQueryD_1_4_2(event.currentTarget).parent().parent().append('<span class="tooltiptext_custom"><br><a style="display: inline; overflow-wrap: break-word; -ms-word-break: break-all; word-break: break-word; word-break: break-all; word-wrap:break-word;" href="" target="_blank" class="padd linkstyle">الذهاب الى الرابط</a><br><br></span>');
                jQueryD_1_4_2(event.currentTarget).parent().parent().children(".tooltiptext_custom").children('a').attr("href", jQueryD_1_4_2(event.currentTarget).children('.selected').attr('href'));
                jQueryD_1_4_2(".tooltiptext_custom").click(function(event) {
                    //event.stopPropagation();
					link_img_show = true;
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

       
        jQueryD_1_4_2(".imglink").click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            
			if (typeof disable_model !== 'undefined'){link_disable = false;link_disable2 = false;}
			else{
			   if(window.location != window.parent.location) {
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			   }else{
			   if (typeof link_disable2 !== 'undefined') {if(link_disable2 == true){return false;}}}	
			}
			
			//alert(link_disable);
			
			link_img_show = false;
			
			jQueryD_1_4_2(".tooltiptext_custom").remove();
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
			                if (typeof link_disable2 !== 'undefined') {if(link_disable2 == true){return false;}}*/
							
                        });

                    }
                }

            }


            if(jQueryD_1_4_2(".image_custom").length == 0) {
                jQueryD_1_4_2(event.currentTarget).parent().append('<span class="image_custom"><a href="" target="_blank" style="text-align: center; overflow-wrap: break-word; -ms-word-break: break-all; word-break: break-word; word-break: break-all; word-wrap:break-word; direction: rtl;outline: none;border-radius: 6px;color: #ffffff;background-color: #2b7b91;padding: 5px 5px;">رابط الصورة في الموقع</a><br></span>');
                jQueryD_1_4_2(event.currentTarget).parent().children('.image_custom').children('a').attr("href", jQueryD_1_4_2(event.currentTarget).children('.hide_param').attr('href'))
                .click(function(event) {
                    //event.stopPropagation();
			if (typeof disable_model !== 'undefined'){link_disable = false;link_disable2 = false;}
			else{
			   if(window.location != window.parent.location) {
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			   }else{
			   if (typeof link_disable2 !== 'undefined') {if(link_disable2 == true){return false;}}}	
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
            if (typeof disable_model !== 'undefined'){link_disable = false;link_disable2 = false;}
			else{
			   if(window.location != window.parent.location) {
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			   }else{
			   if (typeof link_disable2 !== 'undefined') {if(link_disable2 == true){return false;}}}	
			}
			jQueryD_1_4_2(event.currentTarget).selectText();
        });
        jQueryD_1_4_2("a.select_txt").click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (typeof disable_model !== 'undefined'){link_disable = false;link_disable2 = false;}
			else{
			   if(window.location != window.parent.location) {
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			   }else{
			   if (typeof link_disable2 !== 'undefined') {if(link_disable2 == true){return false;}}}	
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

                if(c[i].className == "posttext padd2") {

                    select_all_and_copy(c[i]);
                }

            }

        });
        jQueryD_1_4_2("a.threadinfo").click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (typeof disable_model !== 'undefined'){link_disable = false;link_disable2 = false;}
			else{
			   if(window.location != window.parent.location) {
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			   }else{
			   if (typeof link_disable2 !== 'undefined') {if(link_disable2 == true){return false;}}}	
			}
			jQueryD_1_4_2(".tooltiptext_custom").remove();
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
            if (typeof disable_model !== 'undefined'){link_disable = false;link_disable2 = false;}
			else{
			   if(window.location != window.parent.location) {
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			   }else{
			   if (typeof link_disable2 !== 'undefined') {if(link_disable2 == true){return false;}}}	
			}
			jQueryD_1_4_2(".tooltiptext_custom").remove();
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
            if (typeof disable_model !== 'undefined'){link_disable = false;link_disable2 = false;}
			else{
			   if(window.location != window.parent.location) {
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			   }else{
			   if (typeof link_disable2 !== 'undefined') {if(link_disable2 == true){return false;}}}	
			}
			jQueryD_1_4_2(".tooltiptext_custom").remove();
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
            if (typeof disable_model !== 'undefined'){link_disable = false;link_disable2 = false;}
			else{
			   if(window.location != window.parent.location) {
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			   }else{
			   if (typeof link_disable2 !== 'undefined') {if(link_disable2 == true){return false;}}}	
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
            if (typeof disable_model !== 'undefined'){link_disable = false;link_disable2 = false;}
			else{
			   if(window.location != window.parent.location) {
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			   }else{
			   if (typeof link_disable2 !== 'undefined') {if(link_disable2 == true){return false;}}}	
			}
			var size = 20;
            jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size', size);
            /*document.documentElement.style.display = 'none';
            document.documentElement.offsetHeight; // no need to store this anywhere, the reference is enough
            document.documentElement.style.display = '';*/
        });

        // Increase Font Size 
        jQueryD_1_4_2(".increase").click(function(event) {
            if (typeof disable_model !== 'undefined'){link_disable = false;link_disable2 = false;}
			else{
			   if(window.location != window.parent.location) {
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			   }else{
			   if (typeof link_disable2 !== 'undefined') {if(link_disable2 == true){return false;}}}	
			}
			var currentSize = jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size');
            var currentSize = parseFloat(currentSize) + 3;
            jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size', currentSize);
            /*document.documentElement.style.display = 'none';
            document.documentElement.offsetHeight; // no need to store this anywhere, the reference is enough
            document.documentElement.style.display = '';*/
            return false;
        });

        // Decrease Font Size 
        jQueryD_1_4_2(".decrease").click(function(event) {
            if (typeof disable_model !== 'undefined'){link_disable = false;link_disable2 = false;}
			else{
			   if(window.location != window.parent.location) {
			   if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			   }else{
			   if (typeof link_disable2 !== 'undefined') {if(link_disable2 == true){return false;}}}	
			}
			//var currentFontSize = jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size');
            var currentSize = jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size');
            var currentSize = parseFloat(currentSize) - 3;
            
			if(currentSize != -1){
			jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size', currentSize);
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
                //var activePage = jQueryM_v1_4_5.mobile.activePage;
                  
				
				
				jQueryD_1_4_2('.posttop').removeAttr('style');
                if(section.indexOf("post") !== -1) {
                    //jQueryM_v1_4_5.mobile.defaultHomeScroll = activePage.find(section).offset().top;
                    section= section.replace(/(#post(.*?))(#([^"]*)|$)/mg, "$1");
					jQueryD_1_4_2("#wrapper").animate({ scrollTop: jQueryD_1_4_2(section).position().top + jQueryD_1_4_2("#wrapper").scrollTop() }, 0);
					
					jQueryD_1_4_2(section).css("background-color", "#d5dc91");
                }
                if(section.indexOf("td_threadtitle_") !== -1) {
                    //jQueryM_v1_4_5.mobile.defaultHomeScroll = activePage.find(section).offset().top;
                    section= section.replace(/(#td_threadtitle_(.*?))(\?([^"]*)|$)/mg, "$1");
					jQueryD_1_4_2("#wrapper").animate({ scrollTop: jQueryD_1_4_2(section).position().top + jQueryD_1_4_2("#wrapper").scrollTop() }, 0);
					jQueryD_1_4_2(section).css("background-color", "#d5dc91");
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

	
jQueryD_1_4_2.fn.printMe = function(options){

     


	// Setup options
	var settings = jQueryD_1_4_2.extend({
		// These are the defaults options.
		path: "",
		title: ""
	}, options );


		// Store the object
		var $this = jQueryD_1_4_2(this);

		// Validates that the element has content to print
		if ($this.size() > 1){
			$this.eq( 0 ).print();
			return;
		} else if (!$this.size()){
			return;
		}
		 
		// Create a random name for the iframe.
		var iframeName = ("printer-" + (new Date()).getTime());
		 
		// Create an iFrame
		if(jQueryD_1_4_2('iframe').length > 0){
			jQueryD_1_4_2('iframe').remove();
			//alert();
		}
		
		
		var iFrame = jQueryD_1_4_2( "<iframe name='" + iframeName + "'>" );
		 
		// Hide the iframe and add it to the body
		iFrame
			.css( "width", "1px" )
			.css( "height", "1px" )
			.css( "position", "absolute" )
		    .css( "left", "-9999px" )
			.appendTo( jQueryD_1_4_2( "body:first" ) );
        
		var objIframe = window.frames[ iframeName ];
		var objPrint = objIframe.document;

		// Write the HTML for the document. In $this, we will
		// write out the HTML of the current element.
		objPrint.open();
		objPrint.write( "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">" );
		objPrint.write( "<html dir ='rtl'>" );
		objPrint.write( "<head>" );
		objPrint.write( "<meta charset='utf-8'>" );
        objPrint.write( "<style>body{background-color :white;}.img_center{color :black;}.page-break{page-break-before: always;}.thread_title,hr,#copyright,.org, .posttop,.tooltip2,.bbcode,.tooltip3,#pagenumbers,.pda,#navbar{display:none;}.bbcode_container{border-left: 1px solid silver;border-right: 2px solid silver;border-bottom: 2px solid silver;border-top: 1px solid silver;}</style>" );
		
		// Loads the external css file when not is empty
        if (settings.path != "")
			objPrint.write( "<link href='" + settings.path + "' rel='stylesheet'>" );
		
		
		objPrint.write( "<link href='../../print.css' rel='stylesheet' media='print' type='text/css'>" );
		
		objPrint.write( "<title>" );
		objPrint.write( document.title );
		objPrint.write( "</title>" );
		objPrint.write( "</head>" );
		objPrint.write( "<body><center>" );
			
		// Add a header when the title not is empty
		if (settings.title != "")
			objPrint.write( "<h1>" + settings.title + "<\/h1>" );

		
		//$this.find(".hide_param").removeAttr("style");
		var iframcontent = $this.html();

		
		objPrint.write(iframcontent);
		objPrint.write( "</center><\/body>" );
		objPrint.write( "<\/html>" );
		
		
		objPrint.close();
		 
		// Print the document.
		objIframe.focus();
		objIframe.print();
		 
		// The iframe is destroyed in a minute and a half, I think it is enough time to press the print button
		setTimeout(
			function(){
				iFrame.remove();
			},(60 * 1000)
		);

}	


var linkk = window.location.href
var index = linkk.indexOf("index.php/");
  
                if(index != -1) {
                var  link2 = linkk.substring(index, linkk.length);
	           //alert(link2)
               }
               else{
	           var  link2 = "index.php.htm"; 
               }

			  if (typeof simplePostMessage !== 'undefined') {
                     simplePostMessage(["get_page_location_href",link2],"*",parent.parent);
              } 
			

}