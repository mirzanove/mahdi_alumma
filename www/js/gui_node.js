if (typeof process !== "undefined" && typeof require !== "undefined") {


function isTextSelected(textbox) {
	
	
	var selectedText = null;
   var activeElement = document.activeElement;

   // all browsers (including IE9 and up), except IE before version 9 
   if(window.getSelection && activeElement && 
      (activeElement.tagName.toLowerCase() == "textarea" || (activeElement.tagName.toLowerCase() == "input" && activeElement.type.toLowerCase() == "text")) &&
      activeElement === textbox) 
   {
      var startIndex = textbox.selectionStart;
      var endIndex = textbox.selectionEnd;

      if(endIndex - startIndex > 0)
      {
          var text = textbox.value;
          selectedText = text.substring(textbox.selectionStart, textbox.selectionEnd);
      }
   }
   else if (document.selection && document.selection.type == "Text" &&  document.selection.createRange) // All Internet Explorer
   {       
       var range = document.selection.createRange();
       selectedText = range.text;
   }    

    return selectedText;
	
	
}




	
function selectText(containerid) {
    if (document.selection) { // IE
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select();
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
}
	
	function disp() {
  var text = document.getElementById("text");
  var t = text.value.substr(text.selectionStart, text.selectionEnd - text.selectionStart);
  alert(t);
}
	
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
                                    label: 'فتح الرابط في المتصفح'
                                    , click: function (e) {
                                        
										//alert(target.href);
										gui.Shell.openExternal(target.href);
										//gui.Shell.openItem(target.href);
                                        
                                    }
                                }));
                                menu.append(new gui.MenuItem({
                                    label: 'نسخ عنوان الرابط'
                                    , click: function (e) {
                                        copyToClipboard(target.href)
                                    }
                                }));
								
								
                                showcntx = true;

                            }
							else{
								
								 	if (isEditable()==false) {

                              menu.append(new gui.MenuItem({
                                        label: 'تحديث الصفحة'
                                        , click: function (e) {
                                           location.reload();
											
                                        }
                                    }));
						
							
						if (history.length > 1) {
						
						menu.append(new gui.MenuItem({
                                        label: 'إلى الأمام'
                                        , click: function (e) {
                                          window.history.forward();
											
                                        }
                                    }));

						menu.append(new gui.MenuItem({
                                        label: 'الى الخلف'
                                        , click: function (e) {
                                           window.history.back()
											
                                        }
                                    }));
									
									
									
					 showcntx = true;
						
						
					}	
							
					}
							}

                            if (window.getSelection() != "") {

                                menu.append(new gui.MenuItem({
                                    label: "نسخ"
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

                               // console.log(target.getAttribute("href"));

                                if ((target.getAttribute("href") != "") && (target.getAttribute("href") != null)) {

                                    menu.append(new gui.MenuItem({
                                        label: 'فتح الرابط في المتصفح'
                                        , click: function (e) {
                                            //gui.Shell.openExternal(target.getAttribute("href"));
											gui.Shell.openItem(decodeURIComponent(target.getAttribute("href")));
                                        }
                                    }));
                                    menu.append(new gui.MenuItem({
                                        label: 'نسخ عنوان الرابط'
                                        , click: function (e) {
                                            copyToClipboard(target.getAttribute("href"))
                                        }
                                    }));
								
									
                                    showcntx = true;

                                }
								


							if (isEditable() == undefined) {

                              menu.append(new gui.MenuItem({
                                        label: 'تحديث الصفحة'
                                        , click: function (e) {
                                           location.reload();
											
                                        }
                                    }));
						
							
						if (history.length > 1) {
						
						menu.append(new gui.MenuItem({
                                        label: 'إلى الأمام'
                                        , click: function (e) {
                                          window.history.forward();
											
                                        }
                                    }));

						menu.append(new gui.MenuItem({
                                        label: 'الى الخلف'
                                        , click: function (e) {
                                           window.history.back()
											
                                        }
                                    }));
									
									
									
					 showcntx = true;
						
						
					}	
							
					}
								
								
								
var input_target;
var input_target2;
var input_target3;
if(target.className.includes("search-bar")){
	
	 input_target = target.childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[3].childNodes[1].value;
     input_target2 = target.childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[3].childNodes[1];

	
	 }
else if(target.className.includes("ui-input-search")){

input_target = target.childNodes[0].value;
input_target2 = target.childNodes[0];
//alert(input_target);
}
else{
	
	input_target3 = window.getSelection();
	//alert(input_target3);
}

							/*if (document.selection != "") {
                                    menu.append(new gui.MenuItem({
                                        label: "نسخ النص"
                                        , click: function () {
                                            document.execCommand("copy");
                                        }
                                    }));

                                    if (isEditable() == true) {
                                        menu.append(new gui.MenuItem({
                                            label: "قص النص"
                                            , click: function () {
                                                document.execCommand("cut");
                                            }
                                        }));
                                    }
									
									

                                    showcntx = true;
                                }
								*/
								if(input_target3){
									
									
                                    if(input_target3!=""){
									
									      menu.append(new gui.MenuItem({
                                        label: "نسخ"
                                        , click: function () {
                                            document.execCommand("copy");
                                        }
                                       }));
									
								    }
							
                                    showcntx = true;
								
								}

								
								
                                    if (isEditable() == true) {
										

									 if(isTextSelected(input_target2)){
								
									    menu.append(new gui.MenuItem({
                                        label: "نسخ"
                                        , click: function () {
                                            document.execCommand("copy");
                                        }
                                       }));
									
                                        menu.append(new gui.MenuItem({
                                            label: "قص"
                                            , click: function () {
                                                document.execCommand("cut");
                                            }
                                        }));
									   
									   //input_target  = null;
									   
									   }
                                    }
									
								
								
                                if (isEditable() == true) {

                                    if (text != "") {

                                        menu.append(new gui.MenuItem({
                                            label: "لصق"
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
                    if (isEditable() == false) {

                              menu.append(new gui.MenuItem({
                                        label: 'تحديث الصفحة'
                                        , click: function (e) {
                                           location.reload();
											
                                        }
                                    }));
						
							
						if (history.length > 1) {
						
						menu.append(new gui.MenuItem({
                                        label: 'إلى الأمام'
                                        , click: function (e) {
                                          window.history.forward();
											
                                        }
                                    }));

						menu.append(new gui.MenuItem({
                                        label: 'الى الخلف'
                                        , click: function (e) {
                                           window.history.back()
											
                                        }
                                    }));
									
									
									
					 showcntx = true;
						
						
					}	
							
					}
					
				

				   }



                    if (showcntx == true) {
						//consol
                        menu.popup(e.clientX, e.clientY);
                    }

                }, false);

}