jQuery.noConflict();
function reloadAndJump(anchor){
if(location.hash!=""){
location.href=location.hash;
}
//alert('fade');
location.href=location.href.split(/\?|#/)[0] + '#' + anchor;

jQuery(".red").removeClass("red");
jQuery(".butt a").addClass("on");
jQuery("#"+anchor).addClass("red");
show = false;
remove();
//location.reload(true);
return false;

}


function addB(){

jQuery(".butt a").addClass("off");
jQuery(".autoR a").addClass("off");
}

jQuery(document).ready(function() {});
{

function select_something()
{
jQuery(location.hash).addClass("select")
jQuery(".butt a").addClass("off");
}


function blur()
{

jQuery("#con").css({textBlur: 10});

}



function aaaa()
{

jQuery( "#textsize2 a").textresizer({
				target: "#con",
				type: "fontSize",
				sizes:  [  "1em", "2em", "2.5em", "3em","3.5em", "4em"],
				selectedIndex: 0
			});
			

jQuery( "#notfound a" ).textresizer();			

}
}

function SelectText(element) {
    var doc = document
	, text = doc.getElementById(element)
        , range, selection
    ;    
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();        
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}
/*
document.onclick = function(e) {    
    if (e.target.className === 'click') {
        SelectText('selectme');
    }
};
*/
