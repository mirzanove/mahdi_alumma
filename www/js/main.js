var isIE = /*@cc_on!@*/false || !!document.documentMode, // Internet Explorer 6-11
    isEdge = !isIE && !!window.StyleMedia; // Edge 20+
 
// Check if Internet Explorer 6-11 OR Edge 20+





if(document.getElementById('bookit')){

// listen for form submit
document.getElementById('bookit').addEventListener('click', saveBookmark);	
	
}




function saveBookmark(e){
	
	// get form values
	var websiteName = document.getElementById('websiteName').value;
	var websiteUrl = document.getElementById('websiteUrl').value;	
    
	
	websiteUrl = get_current_url(websiteUrl);
	var stop = false;
	
	if(!validateForm(websiteName, websiteUrl)){
		return false;
	}

	var bookmark = {
		name: websiteName,
		url: websiteUrl
	}

	// console.log(bookmark);

	/*
	// local Storage Test
	localStorage.setItem('test', 'hello world');
	console.log(localStorage.getItem('test'));
	localStorage.removeItem('test');
	console.log(localStorage.getItem('test'));
	*/

	// test if bookmarks is null
	
	//!localStorage&&(l=location, p=l.pathname.replace(/(^..)(:)/,"$1$$"), (l.href=l.protocol+"//127.0.0.1"+p));
	if(localStorage.getItem('bookmarks') === null){
		// init array
		var bookmarks = [];

		// add to array
		bookmarks.push(bookmark);

		// set to localStorage
		
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
		 if(document.getElementsByClassName("toc")[0]){
	 
	     document.getElementsByClassName("toc")[0].setAttribute("style", "background-image: url(template/Charcoal_Grey/booked.png);");
	
         }
	  if(document.getElementsByClassName("toc_footer")[0]){
	  $(".toc_footer").removeClass('ui-icon-star').addClass("star_yellow");
	  }
	  
	   if(document.getElementsByClassName("bar_index")[0]){ 
	 $('#booknormal').attr("src","template/Theme3_Black/index_buttonbar_booked.png");
	 $('.bar_index').css("background-image", "url(template/Theme3_Black/index_buttonbar_booked.png)");
}
	  

	
		
		stop = false;
	} else {
		// Get bookmarks from localStorage
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

		// Add bookmark to array
		
	// Loop throught bookmarks
	for(var i = 0; i < bookmarks.length; i++){
		if(bookmarks[i].url == websiteUrl){
			// remove from array
			alert("لايمكن حفظ الرابط موجود مسبقا في المفضلة");
			stop = true;
			break;
		}
		
	}	
	
if(stop ==  false){
//!localStorage&&(l=location, p=l.pathname.replace(/(^..)(:)/,"$1$$"), (l.href=l.protocol+"//127.0.0.1"+p));	
bookmarks.push(bookmark);
localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
 
 if(document.getElementsByClassName("toc")[0]){
	 
	document.getElementsByClassName("toc")[0].setAttribute("style", "background-image: url(template/Charcoal_Grey/booked.png);");
	
 }
 if(document.getElementsByClassName("toc_footer")[0]){
	  $(".toc_footer").removeClass('ui-icon-star').addClass("star_yellow");
 }
	
 if(document.getElementsByClassName("bar_index")[0]){ 
	 $('#booknormal').attr("src","template/Theme3_Black/index_buttonbar_booked.png");
	 $('.bar_index').css("background-image", "url(template/Theme3_Black/index_buttonbar_booked.png)");
}	
	
 
 
}	
	
		
		
	}

	// Clear Form
	//document.getElementById('bookmarksForm').reset();

	// Re-fetch bookmarks
	
	
	fetchBookmarks(websiteUrl);

	// prevent form from submitting
	e.preventDefault();
}

// Delete bookmark
function deleteBookmark(url){
	// console.log(url);
    var websiteUrl = document.getElementById('websiteUrl').value;	
	
	websiteUrl = get_current_url(websiteUrl);
	
	
	// Get bookmarks from LocalStorage
	
	
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	// Loop throught bookmarks
	for(var i = 0; i < bookmarks.length; i++){
		if(bookmarks[i].url == url){
			// remove from array
			bookmarks.splice(i, 1);
		}
	}

	
	//!localStorage&&(l=location, p=l.pathname.replace(/(^..)(:)/,"$1$$"), (l.href=l.protocol+"//127.0.0.1"+p));
	// Re-set back to LocalStorage
	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

	// Re-fetch bookmarks
	
	
	fetchBookmarks(websiteUrl);
}

// fetch bookmarks
function fetchBookmarks(lol){



//!localStorage&&(l=location, p=l.pathname.replace(/(^..)(:)/,"$1$$"), (l.href=l.protocol+"//127.0.0.1"+p));
var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	
if(bookmarks != null){
if(bookmarks.length == "0"){
	 
	  if(document.getElementsByClassName("toc")[0]){
	 //document.getElementsByClassName("toc")[0].removeAttribute("style");
	  }
	  if(document.getElementsByClassName("toc_footer")[0]){
	  $(".toc_footer").removeClass('star_yellow').addClass("ui-icon-star");
	  }
	  
	  if(document.getElementsByClassName("bar_index")[0]){ 
	 $('.bar_index').removeAttr( "style" );
	  $('#booknormal').attr("src","template/Theme3_Black/index_buttonbar.png");
	  }
	
}
}	
	
	// console.log(bookmarks);

	// Get output id
	var bookmarksResults = document.getElementById('bookmarksResults');

	// build output
	bookmarksResults.innerHTML = '';
    if(bookmarks != null){
	for(var i = 0; i < bookmarks.length; i++){
		var name = bookmarks[i].name;
		var url = bookmarks[i].url;

		
		if(url == lol || lol==""){
			bookmarksResults.innerHTML += '<div class="curr2 well">'+
										'<span  class= "title" style = ""><img src=\"template/Charcoal_Grey/booked.png\"> ' + name +"</span>"+
										'<BR><span  style = "display:none;" class= "url" style = "word-break: break-all;">'+url+'</span>'+
										' <a style= "text-decoration: none!important;"onclick="go_topic()" class="nolink ui-link btn btn-info" href="./'+url+'">الذهاب الى الرابط</a>' + 
										' <a style= "text-decoration: none!important;" onclick="unbook(this); deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">ازالة</a>'+
										''+ 
										'</div><hr>';
			
			
		}else{
			
			bookmarksResults.innerHTML += '<div class="well">'+
										'<span  class= "title" style = "">' + name +"</span>"+
										'<BR><span  style = "display:none;" class= "url" style = "word-break: break-all;">'+url+'</span>'+
										'<a style= "text-decoration: none!important;" onclick="go_topic()" class="nolink ui-link btn btn-info" href="./'+url+'">الذهاب الى الرابط</a>' + 
										' <a style= "text-decoration: none!important;"onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">ازالة</a>'+
										''+ 
										'</div><hr>';
		}
		
	
     
	
	}
	
	
	setTimeout(function() { 
			var elements = document.getElementsByClassName('curr2')[0];
			 if(elements){
			   
               if(getbooleanindexopage()!=3){
				   
				   elements.scrollIntoView(!1);
			  }else{
			  
			
			      if(document.getElementById('tocold')){
					  
					  if(document.getElementById('tocold').getAttribute('hidden') == null){
					      
						  elements.scrollIntoView(!1);
					  }
					  
					  
				  }
 
			  }
			  
			  
			  
			 }
      }, 0);
	
	
	
	
	}

	
}

// Validate Form
function validateForm(websiteName, websiteUrl){

	if(!websiteName || !websiteUrl){
		alert('ارجو ملىء الخانات المطلوبة');
		return false;		
	}

	var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
	var regex = new RegExp(expression);

	if(!websiteUrl.match(regex)){
		alert('ارجو ادخال رابط صحيح');
		return false;
	}

	return true;
}


// Validate Form
function unbook(gg){

	 if(document.getElementsByClassName("toc")[0]){
	 document.getElementsByClassName("toc")[0].removeAttribute("style");
	  }
	  if(document.getElementsByClassName("toc_footer")[0]){
	  $(".toc_footer").removeClass('star_yellow').addClass("ui-icon-star");
	  }
	  
	  if(document.getElementsByClassName("bar_index")[0]){ 
	 $('.bar_index').removeAttr( "style" );
	  $('#booknormal').attr("src","template/Theme3_Black/index_buttonbar.png");
	  }
	
}

