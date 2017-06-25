var myScroll;

function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png|JPG|PNG|GIF|JPEG)$/) != null);
}

function printDiv(divID) {
	var divElements = document.getElementById(divID).innerHTML;
	var oldPage = document.documentElement.innerHTML;
	document.body.innerHTML = "<html><head><title></title></head><body>" + divElements + "</body>";
	window.print();
	//document.documentElement.innerHTML = oldPage;
	//jQueryM_v1_4_5("html").html(oldPage) 
	location.reload();
}

function getPageHeight(D) {
	var setsize = Math.max(Math.max(D.body.scrollHeight, D.documentElement.scrollHeight), Math.max(D.body.offsetHeight, D.documentElement.offsetHeight), Math.max(D.body.clientHeight, D.documentElement.clientHeight));
	window.parent.postMessage(["setsize", setsize], "*");
	return setsize;
}

function resize(elm) {
	var height = elm.position().top + elm.offset().top + elm.outerHeight(true);
	window.parent.postMessage(["setsize", height], "*");
}




///////////////////////////////////////////////////////////////////////////
if (_isMobile() == mobiletrue) {
	/*jQueryM_v1_4_5(document).on( "pagecontainershow", function(){
	  
	});*/
	jQueryM_v1_4_5(window).on("resize orientationchange", function(event) {
		resize(jQueryM_v1_4_5("html"));
		//getPageHeight(document)
	});
	jQueryM_v1_4_5(window).load(function() {
		resize(jQueryM_v1_4_5("html"));
		//getPageHeight(document)		
	});
	

	
var imglink_check = false;
	
	
jQueryM_v1_4_5(document).ready(function() {
	//alert("mobile");

	
jQueryM_v1_4_5("#wrapper").scroll( function() {
  if(jQueryM_v1_4_5(this).scrollTop() + jQueryM_v1_4_5(this).innerHeight() >= jQueryM_v1_4_5(this)[0].scrollHeight) {
          
		 window.parent.postMessage(["loading", "stop"], "*");
        }
		
	
	var pos = jQueryM_v1_4_5(this).scrollTop();
    if (pos == 0) {
   
		 window.parent.postMessage(["loading", "stop"], "*");
    }
		
});	
		
   if(isInIFrame==true){
			
	    if (navigator.userAgent.match(detect_userAgent)) {

		myScroll = new iScroll('wrapper', {});
		
		}
	}	
			
		
		jQueryM_v1_4_5(document).on('vclick', function(event) {
			
			if (event.which == 0 || event.which == 1) { //right click
				// event.stopPropagation();
				//myScroll.disable();
				if (imglink_check == false) {
					jQueryM_v1_4_5('.tooltiptext').hide();
					jQueryM_v1_4_5('.tooltiptext2').hide();
					jQueryM_v1_4_5('.tooltiptext3').hide();
					jQueryM_v1_4_5('.tooltiptext4').hide();
					jQueryM_v1_4_5('.hide_external_link').hide();
					jQueryM_v1_4_5('.hide_local_link').hide();
					resize(jQueryM_v1_4_5("html"));
					
					
				 }
				
				
				 
				if ((navigator.userAgent.match(detect_userAgent))&&(isInIFrame==true)) {
				myScroll.refresh();
				}
			}
			imglink_check = false;
		});
		jQueryM_v1_4_5(".link_org").on('vclick', function(event) {
			
			imglink_check = true;
			event.preventDefault();
			//event.stopPropagation();
			//myScroll.disable();
			jQueryM_v1_4_5('.tooltiptext').hide();
			jQueryM_v1_4_5('.tooltiptext2').hide();
			jQueryM_v1_4_5('.tooltiptext3').hide();
			jQueryM_v1_4_5('.tooltiptext4').hide();
			jQueryM_v1_4_5('.hide_external_link').hide();
			jQueryM_v1_4_5(event.currentTarget).parent().children('.tooltiptext').show();
			jQueryM_v1_4_5(event.currentTarget).children('.selected').selectText();
			resize(jQueryM_v1_4_5("html"));
			if ((navigator.userAgent.match(detect_userAgent))&&(isInIFrame==true)){
			myScroll.scrollToElement(this,0);
			myScroll.refresh();
			}
			else{
				   jQueryM_v1_4_5("#wrapper").scrollTop(jQueryM_v1_4_5(this).position().top + jQueryM_v1_4_5("#wrapper").scrollTop());
			        window.parent.postMessage(["scrollTop", jQueryM_v1_4_5(this).offset().top], "*");
			}
		});
		jQueryM_v1_4_5(".imglink").on('vclick', function(event) {
			event.preventDefault();
			//event.stopPropagation();
			imglink_check = true;
			jQueryM_v1_4_5('.tooltiptext').hide();
			jQueryM_v1_4_5('.tooltiptext2').hide();
			jQueryM_v1_4_5('.tooltiptext3').hide();
			jQueryM_v1_4_5('.tooltiptext4').hide();
			jQueryM_v1_4_5('.hide_external_link').hide();
			jQueryM_v1_4_5(event.currentTarget).parent().children('.hide_external_link').show();
			jQueryM_v1_4_5(event.currentTarget).children('.hide_param').selectText();
			resize(jQueryM_v1_4_5("html"));
			if ((navigator.userAgent.match(detect_userAgent))&&(isInIFrame==true)){
			myScroll.scrollToElement(this,0);
			myScroll.refresh();
			}
			else{
				    jQueryM_v1_4_5("#wrapper").scrollTop(jQueryM_v1_4_5(this).position().top + jQueryM_v1_4_5("#wrapper").scrollTop());
			        
					window.parent.postMessage(["scrollTop", jQueryM_v1_4_5(this).offset().top], "*");
			}
			
		});
		
	   jQueryM_v1_4_5("a").on('vclick', function(event) {

			 var classname= jQueryM_v1_4_5(event.currentTarget).parent().attr('class');
			 //alert(classname);
			 var link = this.href;
			
			 if((classname != "date")&&(classname != "link_org")&&(classname != "imglink")&&(classname != "hide_external_link")&&(classname != "tooltiptext")&&(classname != "alpom")&&(classname != "pda tooltip4")&&(classname != "pda tooltip4 org")&&(classname != "largefont tooltip3")&&(classname != "largefont tooltip2")&&(classname != "username")&&(classname != "bbcode_link")){
			 
			 //alert(link);
			     if((link.indexOf("file://") == 0)||(link.indexOf("http://localhost") == 0)||(link.indexOf("https://mirzanove.github.io/") == 0)) {
                        //alert(link.indexOf("file://"));
						//alert("cool");
                         location.href = link;
                         return false;
			     }
			 			 
			 	
			 }
             else if(classname == "pda tooltip4"){
				location.href = link;
                return false;
             }
             else if(classname == "username"){
				location.href = link;
                return false;
             }
            else if((link.indexOf("file://") == 0)||(link.indexOf("http://localhost/") == 0)||(link.indexOf("https://mirzanove.github.io/") == 0)){
				 
			 if(checkURL(link) == true){
				  if(classname == "imglink"){
					 //alert(link);
					 event.preventDefault(); 
					  
				  }
				  else{
					 event.preventDefault();
					
					 
					 if (window.getSelection) {
                     if (window.getSelection().empty) {  // Chrome
                           window.getSelection().empty();
                     } else if (window.getSelection().removeAllRanges) {  // Firefox
                           window.getSelection().removeAllRanges();
                     }
                     } else if (document.selection) {  // IE?
                     document.selection.empty();
                     } 
				    
					 if(window.location != window.parent.location){
						 window.parent.postMessage(["modal_display", "show"], "*");
						 window.parent.postMessage(["image_url", link], "*");
					 }
					 else{
					 jQueryM_v1_4_5(".modal").show(); 
                     jQueryM_v1_4_5("#wrapper,body,html").css({'overflow' : 'hidden'});	
					 jQueryM_v1_4_5("#img01").attr("src",link); 
					 }				 
				  }
			 }	
					
			 }			 
        });
		
	
		
		jQueryM_v1_4_5(".close").on('vclick', function(event) {
			   setTimeout(function() {jQueryM_v1_4_5(".modal").hide();
			  jQueryM_v1_4_5("#wrapper").css({'overflow-y' : 'auto'});}, 350);
		})
		
		jQueryM_v1_4_5(".bbcode_img").on('vclick', function(event) {
			jQueryM_v1_4_5(event.currentTarget).selectText();
		});
		jQueryM_v1_4_5("a.select_txt").on('vclick', function(event) {
			event.preventDefault();
			event.stopPropagation();
			jQueryM_v1_4_5('.tooltiptext').hide();
			jQueryM_v1_4_5('.tooltiptext2').hide();
			jQueryM_v1_4_5('.tooltiptext3').hide();
			jQueryM_v1_4_5('.tooltiptext4').hide();
			//jQueryM_v1_4_5(event.currentTarget).parent().parent().parent().children('.posttext').selectText();
			
			var c = event.currentTarget.parentNode.parentNode.parentNode.childNodes;
            var i;
            for (i = 0; i < c.length; i++) {
       
		    if (c[i].className == "posttext padd2") {
		  
		       select_all_and_copy(c[i]);
		    }
		    }
			
			
		});
		jQueryM_v1_4_5("a.threadinfo").on('vclick', function(event) {
			event.preventDefault();
			event.stopPropagation();
			jQueryM_v1_4_5('.tooltiptext').hide();
			jQueryM_v1_4_5('.tooltiptext2').hide();
			jQueryM_v1_4_5('.tooltiptext3').hide();
			jQueryM_v1_4_5('.tooltiptext4').hide();
			jQueryM_v1_4_5('.hide_external_link').hide();
			jQueryM_v1_4_5(event.currentTarget).parent().children('.tooltiptext3').show().selectText();
		});
		jQueryM_v1_4_5("a.threadinfo2").on('vclick', function(event) {
			event.preventDefault();
			event.stopPropagation();
			jQueryM_v1_4_5('.tooltiptext').hide();
			jQueryM_v1_4_5('.tooltiptext2').hide();
			jQueryM_v1_4_5('.tooltiptext3').hide();
			jQueryM_v1_4_5('.tooltiptext4').hide();
			jQueryM_v1_4_5('.hide_external_link').hide();
			jQueryM_v1_4_5(event.currentTarget).parent().children('.tooltiptext4').show().selectText();
		});
		jQueryM_v1_4_5("a.postinfo").on('vclick', function(event) {
			event.preventDefault();
			event.stopPropagation();
			jQueryM_v1_4_5('.tooltiptext').hide();
			jQueryM_v1_4_5('.tooltiptext2').hide();
			jQueryM_v1_4_5('.tooltiptext3').hide();
			jQueryM_v1_4_5('.tooltiptext4').hide();
			jQueryM_v1_4_5('.hide_external_link').hide();
			jQueryM_v1_4_5(event.currentTarget).parent().children('.tooltiptext2').show().selectText();
		});
		jQueryM_v1_4_5('.post_hash').on('vclick', function(event) {
			/*jQueryM_v1_4_5('.posttop').removeAttr('style');
			//jQueryM_v1_4_5(document).scrollTop( jQueryM_v1_4_5(this).offset().top );
			jQueryM_v1_4_5(this).parent().parent().css("background-color", "#d5dc91");
			jQueryM_v1_4_5(this).parent().parent().addClass("anch_selected");
			/*window.parent.postMessage(["scrollTop", jQueryM_v1_4_5(this)
                        .offset()
                        .top
                    ], "*");*/
			//myScroll.scrollToElement(this, 0);
			//myScroll.refresh();
		});
		
		jQueryM_v1_4_5(".font-button").on("vclick", function() {
			
				var size = parseInt(jQueryM_v1_4_5(this).parent().parent().parent().children('.posttext').css("font-size"));
				if (jQueryM_v1_4_5(this).hasClass("plus")) {
					size = size + 2;
					resize(jQueryM_v1_4_5("html"));
				} else if (jQueryM_v1_4_5(this).hasClass("zoom_def")) {
					size = 20;
					resize(jQueryM_v1_4_5("html"));
				} else {
					size = size - 2;
					if (size <= 10) {
						size = 10;
					}
					resize(jQueryM_v1_4_5("html"));
				}
				jQueryM_v1_4_5(this).parent().parent().parent().children('.posttext').css("font-size", size);
                    if ((navigator.userAgent.match(detect_userAgent))&&(isInIFrame==true)) {
					myScroll.refresh();	
					}					
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
		jQueryM_v1_4_5(".hide_external_link").on('vclick', function(event) {
			//event.stopPropagation();
			imglink_check = true;
		});
		//alert("mobile");
		jQueryM_v1_4_5(window).hashchange();
	}); //end
	jQueryM_v1_4_5(window).hashchange(function() {
		
	if((navigator.userAgent.match(detect_userAgent))&&(isInIFrame==true)) {
		
		var target = location.hash ? location.hash : null;
		window.location.hash = "";
		//window.history.pushState("string", "Title", target);
		
		jQueryM_v1_4_5('#wrapper').scrollTop(0);
		if (target.indexOf("post") !== -1) {
			//alert(target);
			jQueryM_v1_4_5('.posttop').removeAttr('style');
			jQueryM_v1_4_5(target).addClass("anch_selected");
			jQueryM_v1_4_5(target).css("background-color", "#d5dc91");
			myScroll.scrollToElement(target, 0);
			myScroll.refresh();
		}
		if (target.indexOf("td_threadtitle_") !== -1) {
                    
            jQueryM_v1_4_5(target).css("background-color", "#d5dc91");
			myScroll.scrollToElement(target, 0);
			myScroll.refresh();
         }
	}else{
		
		var section = location.hash ? location.hash : null;
		if (section != null) {
			//var activePage = jQueryM_v1_4_5.mobile.activePage;
			jQueryM_v1_4_5('.posttop').removeAttr('style');
			if (section.indexOf("post") !== -1) {
				//jQueryM_v1_4_5.mobile.defaultHomeScroll = activePage.find(section).offset().top;
				jQueryM_v1_4_5(section).css("background-color", "#d5dc91");
			}
			if (section.indexOf("td_threadtitle_") !== -1) {
				//jQueryM_v1_4_5.mobile.defaultHomeScroll = activePage.find(section).offset().top;
				jQueryM_v1_4_5(section).css("background-color", "#d5dc91");
			}
		}
	}
	window.parent.postMessage(["loading", "stop"], "*");	
	});
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
} ////////////////////////////////////////////////////////////////
else {
	jQueryD_1_4_2(document).ready(function() {
		//alert("deskstop");
		
		  //var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
//span.onclick = function() { 
    //modal.style.display = "none";
//}
		
		jQueryD_1_4_2(window).resize(function() {
			resize(jQueryD_1_4_2("html"));
			//getPageHeight(document)
		});
		jQueryD_1_4_2(window).load(function() {
			resize(jQueryD_1_4_2("html"));
			//getPageHeight(document)		
		});
		
		jQueryD_1_4_2("a").click(function(event) {

			 var classname= jQueryD_1_4_2(event.currentTarget).parent().attr('class');
			 //alert(classname);
			 var link = this.href;
			
			 if((classname != "date")&&(classname != "link_org")&&(classname != "imglink")&&(classname != "hide_external_link")&&(classname != "tooltiptext")&&(classname != "alpom")&&(classname != "pda tooltip4")&&(classname != "pda tooltip4 org")&&(classname != "largefont tooltip3")&&(classname != "largefont tooltip2")&&(classname != "username")&&(classname != "bbcode_link")){
			 
			 //alert(link);
			     if((link.indexOf("file://") == 0)||(link.indexOf("http://localhost/") == 0)||(link.indexOf("https://mirzanove.github.io/") == 0)) {
                        //alert(link.indexOf("file://"));
						//alert("cool");
                         location.href = link;
                         return false;
			     }
			 			 
			 	
			 }
             else if(classname == "pda tooltip4"){
				location.href = link;
                return false;
             }
             else if(classname == "username"){
				location.href = link;
                return false;
				
             }
            else if((link.indexOf("file://") == 0)||(link.indexOf("http://localhost/") == 0)||(link.indexOf("https://mirzanove.github.io/") == 0)){
				 
			 if(checkURL(link) == true){
				  if(classname == "imglink"){
					 
					 event.preventDefault(); 
					  
				  }
				  else{
					 
					 
					 event.preventDefault();
					 ////alert(link);
					 if(window.location != window.parent.location){
						 window.parent.postMessage(["modal_display", "show"], "*");
						 window.parent.postMessage(["image_url", link], "*");
					 }
					 else{
					 jQueryD_1_4_2(".modal").show(); 
                     jQueryD_1_4_2("#wrapper,body,html").css({'overflow' : 'hidden'});	
					 jQueryD_1_4_2("#img01").attr("src",link); 
					 }
					 					 
				  }
			 }	
					
			 }			 
        });
		
	
		
		jQueryD_1_4_2(".close").click(function(event) {
			  setTimeout(function() {jQueryD_1_4_2(".modal").hide();
			  jQueryD_1_4_2("#wrapper").css({'overflow-y' : 'auto'});}, 350);
		});
		
		
		jQueryD_1_4_2(document).click(function(event) {
			if (event.which == 0 || event.which == 1) { //right click
				event.stopPropagation();
				jQueryD_1_4_2('.tooltiptext').hide();
				jQueryD_1_4_2('.tooltiptext2').hide();
				jQueryD_1_4_2('.tooltiptext3').hide();
				jQueryD_1_4_2('.tooltiptext4').hide();
				jQueryD_1_4_2('.hide_external_link').hide();
				jQueryD_1_4_2('.hide_local_link').hide();
				resize(jQueryD_1_4_2("html"));
			}
		});
		jQueryD_1_4_2(".link_org").click(function(event) {
			event.preventDefault();
			event.stopPropagation();
			jQueryD_1_4_2('.tooltiptext').hide();
			jQueryD_1_4_2('.tooltiptext2').hide();
			jQueryD_1_4_2('.tooltiptext3').hide();
			jQueryD_1_4_2('.tooltiptext4').hide();
			jQueryD_1_4_2('.hide_external_link').hide();
			jQueryD_1_4_2(event.currentTarget).parent().children('.tooltiptext').show();
			jQueryD_1_4_2(event.currentTarget).children('.selected').selectText();
			resize(jQueryD_1_4_2("html"));
			
			jQueryD_1_4_2("#wrapper").scrollTop(jQueryD_1_4_2(this).position().top + jQueryD_1_4_2("#wrapper").scrollTop());
			
			window.parent.postMessage(["scrollTop", jQueryD_1_4_2(this).offset().top], "*");
		});
		jQueryD_1_4_2(".imglink").click(function(event) {
			event.preventDefault();
			event.stopPropagation();
			jQueryD_1_4_2('.tooltiptext').hide();
			jQueryD_1_4_2('.tooltiptext2').hide();
			jQueryD_1_4_2('.tooltiptext3').hide();
			jQueryD_1_4_2('.tooltiptext4').hide();
			jQueryD_1_4_2('.hide_external_link').hide();
			jQueryD_1_4_2(event.currentTarget).parent().children('.hide_external_link').show();
			jQueryD_1_4_2(event.currentTarget).children('.hide_param').selectText();
			resize(jQueryD_1_4_2("html"));
			
			jQueryD_1_4_2("#wrapper").scrollTop(jQueryD_1_4_2(this).position().top + jQueryD_1_4_2("#wrapper").scrollTop());
			
			window.parent.postMessage(["scrollTop", jQueryD_1_4_2(this).offset().top], "*");
		});
		jQueryD_1_4_2(".bbcode_img").click(function(event) {
			jQueryD_1_4_2(event.currentTarget).selectText();
		});
		jQueryD_1_4_2("a.select_txt").click(function(event) {
			event.preventDefault();
			event.stopPropagation();
			jQueryD_1_4_2('.tooltiptext').hide();
			jQueryD_1_4_2('.tooltiptext2').hide();
			jQueryD_1_4_2('.tooltiptext3').hide();
			jQueryD_1_4_2('.tooltiptext4').hide();
			//jQueryD_1_4_2(event.currentTarget).parent().parent().parent().children('.posttext').selectText();
			var c = event.currentTarget.parentNode.parentNode.parentNode.childNodes;
            var i;
            for (i = 0; i < c.length; i++) {
       
		    if (c[i].className == "posttext padd2") {
		  
		       select_all_and_copy(c[i]);
		    }
			

			
		
    }
			
			
		});
		jQueryD_1_4_2("a.threadinfo").click(function(event) {
			event.preventDefault();
			event.stopPropagation();
			jQueryD_1_4_2('.tooltiptext').hide();
			jQueryD_1_4_2('.tooltiptext2').hide();
			jQueryD_1_4_2('.tooltiptext3').hide();
			jQueryD_1_4_2('.tooltiptext4').hide();
			jQueryD_1_4_2('.hide_external_link').hide();
			jQueryD_1_4_2(event.currentTarget).parent().children('.tooltiptext3').show().selectText();
		});
		jQueryD_1_4_2("a.threadinfo2").click(function(event) {
			event.preventDefault();
			event.stopPropagation();
			jQueryD_1_4_2('.tooltiptext').hide();
			jQueryD_1_4_2('.tooltiptext2').hide();
			jQueryD_1_4_2('.tooltiptext3').hide();
			jQueryD_1_4_2('.tooltiptext4').hide();
			jQueryD_1_4_2('.hide_external_link').hide();
			jQueryD_1_4_2(event.currentTarget).parent().children('.tooltiptext4').show().selectText();
		});
		jQueryD_1_4_2("a.postinfo").click(function(event) {
			event.preventDefault();
			event.stopPropagation();
			jQueryD_1_4_2('.tooltiptext').hide();
			jQueryD_1_4_2('.tooltiptext2').hide();
			jQueryD_1_4_2('.tooltiptext3').hide();
			jQueryD_1_4_2('.tooltiptext4').hide();
			jQueryD_1_4_2('.hide_external_link').hide();
			jQueryD_1_4_2(event.currentTarget).parent().children('.tooltiptext2').show().selectText();
		});
		
	    jQueryD_1_4_2(".font-button").click(function(event) {
				
				var size = parseInt(jQueryD_1_4_2(event.currentTarget).parent().parent().parent().children('.posttext').css("font-size"));
				
				if (jQueryD_1_4_2(event.currentTarget).hasClass("plus")) {
					size = size + 2;
					resize(jQueryD_1_4_2("html"));
				} else if (jQueryD_1_4_2(event.currentTarget).hasClass("zoom_def")) {
					size = 20;
					resize(jQueryD_1_4_2("html"));
				} else {
					size = size - 2;
					if (size <= 10) {
						size = 10;
					}
					
				}
				jQueryD_1_4_2(event.currentTarget).parent().parent().parent().children('.posttext').css("font-size", size);
				
		});
		
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
		jQueryD_1_4_2(".hide_external_link").click(function(event) {
			event.stopPropagation();
		});
		jQueryD_1_4_2(window).hashchange(function() {
			var section = location.hash ? location.hash : null;
			if (section != null) {
				//var activePage = jQueryM_v1_4_5.mobile.activePage;
				jQueryD_1_4_2('.posttop').removeAttr('style');
				if (section.indexOf("post") !== -1) {
					//jQueryM_v1_4_5.mobile.defaultHomeScroll = activePage.find(section).offset().top;
					jQueryD_1_4_2(section).css("background-color", "#d5dc91");
				}
				if (section.indexOf("td_threadtitle_") !== -1) {
					//jQueryM_v1_4_5.mobile.defaultHomeScroll = activePage.find(section).offset().top;
					jQueryD_1_4_2(section).css("background-color", "#d5dc91");
				}
			}
		});
		jQueryD_1_4_2(window).hashchange();
	
	
	
	//window.parent.postMessage(["loading", "stop"], "*");
	
	}); //end 	
	jQueryD_1_4_2.fn.selectText = function() {
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
