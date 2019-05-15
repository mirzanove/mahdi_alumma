if (typeof process !== "undefined" && typeof require !== "undefined") {
	
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
                                    label: "نسخ النص"
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
if(target.className.includes("search-bar")){
	
	 input_target = target.childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[3].childNodes[1].value;
}
else if(target.className.includes("ui-input-search")){

input_target = target.childNodes[0].value

	
}
else{
	input_target = window.getSelection();
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
								if(input_target){
								if(input_target!= ""){
									
									
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
								}

                                if (isEditable() == true) {

                                    if (text != "") {

                                        menu.append(new gui.MenuItem({
                                            label: "لصق النص"
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