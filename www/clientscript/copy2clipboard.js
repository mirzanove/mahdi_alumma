

function tooltip(el, message)
{
	var element =  document.getElementById('copy_tooltip');
    var tooltip;
	
	if(el ==null){
		
	var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	//var x = parseInt(el.getBoundingClientRect().left) + scrollLeft + 400;
	//var y = parseInt(el.getBoundingClientRect().top) + scrollTop + 100;
	
	
	
	//alert(element);
	if (typeof(element) == 'undefined' || element == null)
	//if (!document.getElementById("copy_tooltip"))
	{  
		
		tooltip = document.createElement('div');
		tooltip.id = "copy_tooltip";
		tooltip.style.display = "block";
		//tooltip.style.position = "fixed";
		//tooltip.style.position = "absolute"; 
		//tooltip.style.border = "1px solid black";
		//tooltip.style.background = "#dbdb00";
		//tooltip.style.opacity = 1;
		//tooltip.style.width = "100px";
		//tooltip.style.height = "auto";
		//tooltip.style.marginLeft = "-50px";
		//tooltip.style.marginTop = "-50px";
		//tooltip.style.textAlign= "center";
	    //tooltip.style.padding= "4px";
		//tooltip.style.zIndex = "9"; 
		
	
		
		
     document.body.appendChild(tooltip);
		
	
	}
	/**else{
		 tooltip = element;
	}*/
	
	
	
	/*if (/(MSIE\ [0-7]\.\d+)/.test(navigator.userAgent)) {

	tooltip.style.marginRight = "50px";

    }else{	

	tooltip.style.marginLeft = "-50px";
		
	}*/
	tooltip.innerHTML = message;
	}
	else{
	
	document.getElementById('copy_tooltip').outerHTML = ""; delete document.getElementById('copy_tooltip'); printin_prosses = false;
	
	}
		
}


function paste(el) 
{
   	if (window.clipboardData) { 
	   	// IE
    	el.value = window.clipboardData.getData('Text');
    	el.innerHTML = window.clipboardData.getData('Text');
    }
    else if (window.getSelection && document.createRange) {
        // non-IE
        if (el.tagName.match(/textarea|input/i) && el.value.length < 1)
        	el.value = " "; // iOS needs element not to be empty to select it and pop up 'paste' button
        else if (el.innerHTML.length < 1)
        	el.innerHTML = "&nbsp;"; // iOS needs element not to be empty to select it and pop up 'paste' button
        var editable = el.contentEditable; // Record contentEditable status of element
        var readOnly = el.readOnly; // Record readOnly status of element
       	el.contentEditable = true; // iOS will only select text on non-form elements if contentEditable = true;
       	el.readOnly = false; // iOS will not select in a read only form element
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range); 
        if (el.nodeName == "TEXTAREA" || el.nodeName == "INPUT") 
        	el.select(); // Firefox will only select a form element with select()
        if (el.setSelectionRange && navigator.userAgent.match(/ipad|ipod|iphone/i))
        	el.setSelectionRange(0, 999999); // iOS only selects "form" elements with SelectionRange
        if (document.queryCommandSupported("paste")) 
       	{  
			var successful = document.execCommand('Paste');  
		    if (successful) tooltip(el, "Pasted.");
		    else 
			{
				if (navigator.userAgent.match(/android/i) && navigator.userAgent.match(/chrome/i))
				{
					tooltip(el, "Click blue tab then click Paste");
				
						if (el.tagName.match(/textarea|input/i))
						{
			        		el.value = " "; el.focus();
			        		el.setSelectionRange(0, 0); 
			        	}
			        	else 
			        		el.innerHTML = "";
		
				}
				else	
					tooltip(el, "Press CTRL-V to paste");
			}   
		} 
		else 
		{  
		    if (!navigator.userAgent.match(/ipad|ipod|iphone|android|silk/i))
				tooltip(el, "Press CTRL-V to paste"); 
		} 
		el.contentEditable = editable; // Restore previous contentEditable status
        el.readOnly = readOnly; // Restore previous readOnly status
    }
}

function select_all_and_copy(el) 
{   
    if(_isMobile() == mobiletrue) {
		
		jQueryM_v1_4_5('em').contents().unwrap();
		
	}
	else{
		
		jQueryD_1_4_2('em').contents().unwrap();
	}
	
     if(printin_prosses == false){
			printin_prosses = true;

      //alert(el.className);
    // Copy textarea, pre, div, etc.
	if (document.body.createTextRange) {
        // IE 
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.select();
        textRange.execCommand("Copy");   
		
		if(el.className == "selected moveoff"||el.className == "selected") {
		 tooltip(null, "تم نسخ الرابط في الذاكرة  يمكنك الان لصقها");
		 
	setTimeout(function() { 
	tooltip("cool", null);
	}, 3000);
		}
        else{
         tooltip(null, "تم نسخ المشاركة في الذاكرة  يمكنك الان لصقها");
		 
		 setTimeout(function() { 
	tooltip("cool", null);
	}, 3000);
		}		
    }
	else if (window.getSelection && document.createRange) {
        // non-IE
        var editable = el.contentEditable; // Record contentEditable status of element
        var readOnly = el.readOnly; // Record readOnly status of element
       	el.contentEditable = true; // iOS will only select text on non-form elements if contentEditable = true;
       	el.readOnly = false; // iOS will not select in a read only form element
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range); // Does not work for Firefox if a textarea or input
        if (el.nodeName == "TEXTAREA" || el.nodeName == "INPUT") 
        	el.select(); // Firefox will only select a form element with select()
        if (el.setSelectionRange && navigator.userAgent.match(/ipad|ipod|iphone/i))
        	el.setSelectionRange(0, 999999); // iOS only selects "form" elements with SelectionRange
        el.contentEditable = editable; // Restore previous contentEditable status
        el.readOnly = readOnly; // Restore previous readOnly status 
	    if (document.queryCommandSupported("copy"))
	    {
			var successful = document.execCommand('copy');  
		    if (successful){
				
            
				if(el.className == "selected enableselect" || el.className == "selected moveoff enableselect"||el.className == "selected") {
		          tooltip(null, "تم نسخ الرابط في الذاكرة  يمكنك الان لصقها");
				  setTimeout(function() { 
	tooltip("cool", null);
	}, 3000);
		        }
                else{
                  tooltip(null, "تم نسخ المشاركة في الذاكرة  يمكنك الان لصقها");
				  
				  setTimeout(function() { 
	              tooltip("cool", null);
	}, 3000);
		        }
			}
		    else tooltip(el, "Press CTRL+C to copy");
		}
		else
		{
			if (!navigator.userAgent.match(/ipad|ipod|iphone|android|silk/i))
				tooltip(el, "Press CTRL+C to copy");	
		}
    }

	
}	
	
} // end function select_all_and_copy(el) 

function make_copy_button(el)
{
	//var copy_btn = document.createElement('button');
	//copy_btn.type = "button";
	var copy_btn = document.createElement('span');
	copy_btn.style.border = "1px solid black";
	copy_btn.style.padding = "5px";
	copy_btn.style.cursor = "pointer";
	copy_btn.style.display = "inline-block";
	copy_btn.style.background = "lightgrey";
	
	el.parentNode.insertBefore(copy_btn, el.nextSibling);
	copy_btn.onclick = function() { select_all_and_copy(el); };
	
	//if (document.queryCommandSupported("copy") || parseInt(navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)[2]) >= 42)
	// Above caused: TypeError: 'null' is not an object (evaluating 'navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)[2]') in Safari
	if (document.queryCommandSupported("copy"))
	{
		// Desktop: Copy works with IE 4+, Chrome 42+, Firefox 41+, Opera 29+
		// Mobile: Copy works with Chrome for Android 42+, Firefox Mobile 41+	
		//copy_btn.value = "Copy to Clipboard";
		copy_btn.innerHTML = "Copy to Clipboard";
	}	
	else
	{
		// Select only for Safari and older Chrome, Firefox and Opera
		/* Mobile:
				Android Browser: Selects all and pops up "Copy" button
				iOS Safari: Selects all and pops up "Copy" button
				iOS Chrome: Form elements: Selects all and pops up "Copy" button 
		*/
		//copy_btn.value = "Select All";
		copy_btn.innerHTML = "Select All";
				
	}
}
/* Note: document.queryCommandSupported("copy") should return "true" on browsers that support copy
	but there was a bug in Chrome versions 42 to 47 that makes it return "false".  So in those
	versions of Chrome feature detection does not work!
	See https://code.google.com/p/chromium/issues/detail?id=476508
*/