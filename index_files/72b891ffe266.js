var show = false;
var read = false;
jQuery.noConflict();


function select()
{

jQuery('#con a[href*=#]').click(
function(){var elemId='#'+jQuery(this).attr('href').split('#')[1];highlight(elemId);});

function highlight(elemId)
{
show = true;
jQuery(".red").removeClass("red");
jQuery(elemId).addClass("red"); 
jQuery(elemId).children().addClass("red"); 
jQuery(".butt a").addClass("on");
}
if(document.location.hash){highlight(document.location.hash);}

}


function remove(){
if(show ==true)
{ 
  show = false;
  jQuery(".red").removeClass("red");
  jQuery(".butt a").addClass("off");
  jQuery(".butt a").removeClass("on");
}
else
{ show = true;
  jQuery(".butt a").addClass("on");
  jQuery(".butt a").removeClass("off");
  jQuery(document.location.hash).addClass("red");
}

}



function Scroll(){
if(read == false)
{ 
  pageScroll();
  read = true;
}
else
{ read = false;
  jQuery(".autoR a").addClass("off");
  jQuery(".autoR a").removeClass("on");
  clearTimeout(scrolldelay);
}

}

function pageScroll(){
  jQuery(".autoR a").addClass("on");
  jQuery(".autoR a").removeClass("off");
  window.scrollBy(0,1); // horizontal and vertical scroll increments
  scrolldelay = setTimeout('pageScroll()',20); // scrolls every 100 milliseconds
  }






