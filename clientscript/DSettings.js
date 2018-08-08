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




///////////////////////////////////////////////////////////////////////////
if(_isMobile() == mobiletrue) {
  
} ////////////////////////////////////////////////////////////////
else {





jQueryD_1_4_2(document).ready(function() {


function makeUnselectable(node) {
   // alert(node.nodeType);
	if (node.nodeType == 1) {
        node.setAttribute("unselectable", "on");
		/*node.setAttribute("unselectable", "yes");
		node.setAttribute("onselectstart", "return false;");*/
    }
    var child = node.firstChild;
    while (child) {
        makeUnselectable(child);
        child = child.nextSibling;
    }
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


 
function disable_select_text(xx){
var x= document.getElementsByClassName(xx); 
for(var i=0; i<x.length; i++) {
			makeUnselectable(x[i]);
}
}

disable_select_text('up');
disable_select_text('tooltip5');
disable_select_text('footer');


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
				
                    else if (classname == 'link_pic2'||classname =='extImag_go2'||classname =='linkstyle2 outsidelink') {
                      
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
                   
				   c = c.replace("?", "");
                   
        
		
		var loc ="";
		strr =  document.location.href;	   
		
		if (strr.match(/[^"]*\&rhsearch\=(.*?)(&([^"]*)|$)/mg) ) {
			loc+= strr.replace(/[^"]*\&rhsearch\=(.*?)(&([^"]*)|$)/mg, "&rhsearch=$1");
		}
		if (strr.match(/[^"]*\&rhhlterm\=(.*?)(&([^"]*)|$)/mg) ) {
			loc+= strr.replace(/[^"]*\&rhhlterm\=(.*?)(&([^"]*)|$)/mg, "&rhhlterm=$1");
		}
		if (strr.match(/[^"]*\&checkbox\=(.*?)(&([^"]*)|$)/mg) ) {
			loc+= strr.replace(/[^"]*\&checkbox\=(.*?)(&([^"]*)|$)/mg, "&checkbox=$1");
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
								
						        window.parent.postMessage(["loading","run"], "*");
								location.href = link;
								setTimeout(function(){ location.reload();  }, 300);
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
                    else if (classname == 'link_pic2'||classname =='extImag_go2'||classname =='linkstyle2 outsidelink') {
                        
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
					 
					 if(classname !='linkstyle2 outsidelink'){
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
       
		jQueryD_1_4_2('.posttext').css("font-size", "25px");	
		


		



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
		  matches = event.target.matches ? event.target.matches('.dropbtn') : event.target.msMatchesSelector('.dropbtn');
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
			   jQueryD_1_4_2(".selected").attr("class", 'selected');
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
				jQueryD_1_4_2(".selected").attr("class", 'selected');
				jQueryD_1_4_2(event.currentTarget).children(".selected").attr("class", 'selected moveoff');
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
							  
							   if(cc[ii].className == "selected moveoff") {
								   //var ccc = cc[ii].childNodes;
								   //alert(cc[ii].className);
								   select_all_and_copy(cc[ii]);
								
								   
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
					
					if(c[i].className == "selected") {
					   select_all_and_copy(c[i]);
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
				jQueryD_1_4_2(".selected").attr("class", 'selected');
				jQueryD_1_4_2(event.currentTarget).children(".selected").attr("class", 'selected moveoff');
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
				jQueryD_1_4_2(".selected").attr("class", 'selected');
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
					if(c[i].className == "selected moveoff") {
                           
							select_all_and_copy(c[i]);

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

                if(c[i].className == "posttext padd2") {

                    select_all_and_copy(c[i]);
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
			var size = 25;
            jQueryD_1_4_2(event.currentTarget).parent().parent().parent().parent().parent().children('.posttext').css('font-size', size);
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
                //var activePage = jQueryD_1_4_2.mobile.activePage;
                  
				
				
				jQueryD_1_4_2('.posttop').removeAttr('style');
                if(section.indexOf("post") !== -1) {
                    //jQueryD_1_4_2.mobile.defaultHomeScroll = activePage.find(section).offset().top;
                    section= section.replace(/(#post(.*?))(#([^"]*)|$)/mg, "$1");
					jQueryD_1_4_2("#wrapper").animate({ scrollTop: jQueryD_1_4_2(section).position().top + jQueryD_1_4_2("#wrapper").scrollTop() }, 0);
					
					jQueryD_1_4_2(section).css("background-color", "#d5dc91");
                }
                if(section.indexOf("td_threadtitle_") !== -1) {
                    //jQueryD_1_4_2.mobile.defaultHomeScroll = activePage.find(section).offset().top;
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

	
	


var linkk = window.location.href
var index = linkk.indexOf("index.php/");
  
                if(index != -1) {
                var  link2 = linkk.substring(index, linkk.length);
	           //alert(link2)
               }
               else{
	           var  link2 = "http://localhost/vb_423/archive/clientscript/index.php.htm"; 
               }

			  if (typeof simplePostMessage !== 'undefined') {
                     simplePostMessage(["get_page_location_href",link2],"*",parent.parent);
              } 
			

}



}