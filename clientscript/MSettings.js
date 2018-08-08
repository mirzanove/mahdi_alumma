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
if (_isMobile() != mobiletrue) {

} ////////////////////////////////////////////////////////////////
else {
 
 jQueryM_v1_4_5(document).ready(function() {
	 
	 
	 jQueryM_v1_4_5(document).on('click', 'a', function(event) {

            var classname = jQueryM_v1_4_5(this).attr('class');
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
	                            jQueryM_v1_4_5('#loading').show();
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
	                            jQueryM_v1_4_5('#loading').show();
								if( classname !='whtbtnshow'){
								
								
								//location.reload(); 
								setTimeout(function(){ location.reload();  }, 100);
								}
								
                            }
                            else{
						        /*window.parent.postMessage(["loading","run"], "*");
								location.href = link;
								setTimeout(function(){ location.reload();  }, 300);*/
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
							
								jQueryM_v1_4_5("#wrapper").animate({ scrollTop: jQueryM_v1_4_5(hh).position().top + jQueryM_v1_4_5("#wrapper").scrollTop() }, 0);
					            jQueryM_v1_4_5(hh).css("background-color", "#d5dc91");	
                          
							   
														
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
						jQueryM_v1_4_5(".modal").show();
                        jQueryM_v1_4_5("#wrapper,body,html").css({
                            'overflow': 'hidden'
                        });
                        jQueryM_v1_4_5("#img01").attr("src", link);
						jQueryM_v1_4_5("#img01").removeAttr('style');
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


	   
	 
	       jQueryM_v1_4_5("#wrapper").scroll(function() {
            if(jQueryM_v1_4_5(this).scrollTop() + jQueryM_v1_4_5(this).innerHeight() >= jQueryM_v1_4_5(this)[0].scrollHeight) {
                
                window.parent.postMessage(["loading", "stop"], "*");
            }


            var pos = jQueryM_v1_4_5(this).scrollTop();
            if(pos == 0) {
               
                window.parent.postMessage(["loading", "stop"], "*");
				
            }

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
			 //jQueryM_v1_4_5.print(c);
			 printDiv2(c);
			 setTimeout(function () {
                //jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().children('.posttop').selectText();
				 location.reload(); 
				 
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
					
					if(c[i].className == "selected") {
					   select_all_and_copy(c[i]);
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
				jQueryM_v1_4_5(".selected").attr("class", 'selected');
				jQueryM_v1_4_5(event.currentTarget).children(".selected").attr("class", 'selected moveoff');
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
				jQueryM_v1_4_5(".selected").attr("class", 'selected');
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
					if(c[i].className == "selected moveoff") {
                           
							select_all_and_copy(c[i]);

                    }
                    }
	
                });
				
            }

            jQueryM_v1_4_5("#wrapper").scrollTop(jQueryM_v1_4_5(this).position().top + jQueryM_v1_4_5("#wrapper").scrollTop());


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
                jQueryM_v1_4_5(".selected").attr("class", 'selected');
                jQueryM_v1_4_5(event.currentTarget).children(".selected").attr("class", 'selected moveoff');
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
		   
		   

		   jQueryM_v1_4_5("#wrapper").animate({ scrollTop: jQueryM_v1_4_5(this).position().top + jQueryM_v1_4_5("#wrapper").scrollTop() }, 50);
        });
	

		
		
		jQueryM_v1_4_5(document).on('click', function(event) {
         if(event.which == 0 || event.which == 1) { //right click
         event.stopPropagation();
  	     window.parent.postMessage(["hide_drop", "hide_drop"], "*");
		 
		 var target = event ? event.target : window.event.srcElement;

		 if (target.id != 'dropbtn') {
               
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
			  jQueryM_v1_4_5(".selected").attr("class", 'selected'); 
              }
             


		 }	  
		       link_img_show = false;
		       stop = false;

           });




        jQueryM_v1_4_5(".close").on('click', function(event) {


            jQueryM_v1_4_5(".modal").hide();
            jQueryM_v1_4_5("#wrapper").css({
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

                if(c[i].className == "posttext padd2") {

                    select_all_and_copy(c[i]);
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
        jQueryM_v1_4_5(".resetMe").on('click', function(event) {
            
			 
		
			
			if(window.location != window.parent.location) {
			if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			}else{
			if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}}
			fontSize = null
			var size = 25;

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
            
			//jQueryM_v1_4_5('html,body,#wrapper,.thread_title').hide().show(0);  
			
			
			//if (navigator.userAgent.match(/(chrome)/i)) {
	        document.documentElement.style.display = 'none';
            document.documentElement.offsetHeight; 
            document.documentElement.style.display = '';
	        //}
        });


        // Increase Font Size 
        jQueryM_v1_4_5(".increase").on('click', function(event) {
           
			
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
				         var style = jQueryM_v1_4_5('.posttext').css("font-size");
                        //alert(style);
				        if(fontSize == null){
                        fontSize = arrEdited2[d].fontsize;
						//alert(fontSize);
				        }
				        fontSize = fontSize +2;
				        el.style.fontSize = (fontSize) + 'px';
						arrEdited2[d].fontsize= fontSize;
                        break;
				    }
						
						
					}
			   }
				
                  
			   
            }
			
			//jQueryM_v1_4_5('html,body,#wrapper').hide().show(0); 
			//if (navigator.userAgent.match(/(chrome)/i)) {
			document.documentElement.style.display = 'none';
            document.documentElement.offsetHeight; 
            document.documentElement.style.display = '';
	        //}
        });


        // Decrease Font Size 
        jQueryM_v1_4_5(".decrease").on('click', function(event) {
            
			if(window.location != window.parent.location) {
			if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}
			}else{
			if (typeof link_disable !== 'undefined') {if(link_disable == true){return false;}}}
			
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
                  
				
				
				jQueryM_v1_4_5('.posttop').removeAttr('style');
                if(section.indexOf("post") !== -1) {
                   
                   if(jQueryM_v1_4_5(section).length){
				   //jQueryM_v1_4_5.mobile.defaultHomeScroll = activePage.find(section).offset().top;
                    section= section.replace(/(#post(.*?))(#([^"]*)|$)/mg, "$1");
					jQueryM_v1_4_5("#wrapper").animate({ scrollTop: jQueryM_v1_4_5(section).position().top + jQueryM_v1_4_5("#wrapper").scrollTop() }, 0);
					jQueryM_v1_4_5(section).css("background-color", "#d5dc91");
				   }
                }
                if(section.indexOf("td_threadtitle_") !== -1) {
                   if(jQueryM_v1_4_5(section).length){
				   //jQueryM_v1_4_5.mobile.defaultHomeScroll = activePage.find(section).offset().top;
                    section= section.replace(/(#td_threadtitle_(.*?))(\?([^"]*)|$)/mg, "$1");
					jQueryM_v1_4_5("#wrapper").animate({ scrollTop: jQueryM_v1_4_5(section).position().top + jQueryM_v1_4_5("#wrapper").scrollTop() }, 0);
					jQueryM_v1_4_5(section).css("background-color", "#d5dc91");
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