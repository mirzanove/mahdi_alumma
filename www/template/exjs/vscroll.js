//var changed;
var git =true;




(function (window, document) {

    'use strict';

    var _slice = Array.prototype.slice;
    var _frag = document.createDocumentFragment(); // Reusable documentFragment

    // Element.closest() Polyfill
    if (window.Element && !Element.prototype.closest) {

        Element.prototype.closest = function (s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i,
                el = this;
            do {
                i = matches.length;
                while (--i >= 0 && matches.item(i) !== el) {};
            } while ((i < 0) && (el = el.parentElement));
            return el;
        };

    };

    function removeArrayOfElements(arr) {

        var l = arr.length;
        while (l--) arr[l].parentNode.removeChild(arr[l]);

    };

    // Get frag of elements from, to
    function getFrag(data, startIndex, endIndex, that) {
      if(that.itemsWrapper.childNodes[0]){
	   startIndex =startIndex;
       endIndex =endIndex;
	  }
	  	
		var dataArray = data.slice(startIndex, endIndex);
       
		var i = 0;
        var len = dataArray.length;

        for (; i < len; i++) {
          
            var item = that.createItem(dataArray[i], i, startIndex, endIndex);

            if (((i + 1) % that.columns) === 0) item.setAttribute('data-last-column', 'true');

            _frag.appendChild(item);

		}
		
		
        return _frag;

    };

    // Get scrollTop and clientHeight of any element or window
    function getUnits(element) {

        var result = {};

        if (element === window) {
            result.scrollTop = element.pageYOffset !== undefined ? element.pageYOffset : (document.documentElement.scrollTop || document.body.scrollTop || 0);
            result.clientHeight = element.innerHeight;
        } else {
			
            result.scrollTop = element.scrollTop;
            result.clientHeight = element.clientHeight;
			
        };

        return result;

    };

var ff= true;
var dd= false;
var tt =true;
var ssg =0;
var aa =0;

var dd = true;
var dde;


var isChrome;	
	
    function VScroll(options) {

        var that = this;
		
ff= true;
dd= false;
tt =true;
ssg =0;
aa =0;

        isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);		
        that.container = typeof options.container === 'object' ? options.container : document.querySelector(options.container); // Required
        that.scrollParent = options.scrollParent ? (typeof options.scrollParent === 'object' ? options.scrollParent : that.container.closest(options.scrollParent)) : window;
        that.data = options.data; // Required
        that.itemHeight = options.itemHeight;
        that.itemWidth = options.itemWidth; // Calacute columns using itemWidth
        that.createItem = options.createItem; // Required
        that.buffer = options.buffer || 0;
        that.columns = options.columns || 1;
        that.smartBuffer = options.smartBuffer !== undefined ? options.smartBuffer : true; // Bind buffer and columns;
        that.responsive = options.responsive; // Recalcaute columns using itemWidth on window resize
        that.offsetBefore = options.offsetBefore || 0;
        that.offsetAfter = options.offsetAfter || 0;
        that.scrollOffset = options.scrollOffset || that.container.offsetTop;
	    //that.scrollOffset=  that.container.offsetTop;
        that.optionsWrapper = options.wrapper; // To set up wrapper later.
        that.optionsItemsWrapper = options.itemsWrapper; // To set up wrapper later.
        
        that.lastStartIndex = 0;
        that.lastEndIndex = 0;
        that.wrapper = that.itemsWrapper = that._lastStartIndex = that._lastEndIndex = null; // Will be set in refresh()    

        // the update function is optimized and it's ultra fast.
        // Calling an empty function () {} is only 4 times faster than update();
        that._scrollEvent = function () {
			//if(stop==false){
			
				that.update();
			
			//}
           
        };

        that._resizeEvent = function () {
            that.refresh();
        };

		//alert(that.scrollParent);
		
        that.scrollParent.addEventListener('scroll', that._scrollEvent, false);

        if (that.responsive) window.addEventListener('resize', that._resizeEvent, false);

        // Initialize
        that.refresh();

        return that;

    };

    VScroll.prototype = {

        update: function () {

            var that = this;
            
			
			
          var units = getUnits(that.scrollParent);
           
          if(getbooleanindexopage()==3) {

		 
		 if($(window).innerWidth() >= em(81)){
			 
			 that.scrollOffset= (that.container.offsetTop);
			 
		  }else{
			that.scrollOffset=  (that.container.offsetTop+getAbsoluteHeight(document.getElementById("floatholder")));  
		  }
		 
          //that.scrollOffset= 230;
		  ///console.log(that.container);
          }
            // Here we calcaute the indexes (start, end)
            var _startIndex = Math.floor((units.scrollTop - that.offsetBefore - that.scrollOffset) / that.itemHeight) * 1;
           
            //alert(units.clientHeight);
	
			if (navigator.userAgent.indexOf("Firefox") > 0) {
                units.clientHeight = (units.clientHeight+that.itemHeight*2);
            }
			else{
				
		      
				if(isChrome==true){
					
				if(_isMobile() == true){
				
					units.clientHeight = (units.clientHeight+(that.itemHeight*2));
					
				}else{
					units.clientHeight = (units.clientHeight+(that.itemHeight*2));
				}
					
				}else{
					units.clientHeight = (units.clientHeight+(that.itemHeight*2));
				}
				
		
				
			}
			
			
			var _endIndex = Math.ceil((units.clientHeight) / that.itemHeight) * that.columns;

            var startIndex = Math.max(_startIndex - that.buffer, 0);
            var endIndex = Math.min(startIndex + _endIndex + (that.buffer * 2), that.data.length); // We must multiply the buffer to make it perfect

            // We mark when data is changed
            var changed;

            var len;
           
		  
		    
	     
			//alert(units.clientHeight);
			
            // When it comes to endIndex, we append and remove what we calcaute
            if (ff&&(endIndex > that.lastEndIndex)) {

                
				
				that.itemsWrapper.appendChild(getFrag(that.data, that.lastEndIndex, endIndex, that));
                that.lastEndIndex = endIndex;
				
				aa = endIndex - startIndex;
				
				//console.log(aa);
				

            } else if ((that.lastEndIndex > endIndex)) {
                
                var nodes = that.itemsWrapper.childNodes;
                
                len = nodes.length;
              
                removeArrayOfElements(_slice.call(nodes, (endIndex - that.lastEndIndex)));
                
				
				
			    that.lastEndIndex = endIndex;

            };
			
			
            // When it comes to startIndex, and here's the smart trick here, we append and remove what we calcaute and taking columns into account.
           
		  if(that.itemsWrapper.childNodes[0]){
			 //console.log(getAbsoluteHeight(that.itemsWrapper.childNodes[0]));
			    	 
                
             if(tt&&that.scrollParent.scrollTop > (that.itemsWrapper.childNodes[0].offsetTop+getAbsoluteHeight(that.itemsWrapper.childNodes[0]))){
			  //console.log(that.itemsWrapper.childNodes[0]);
			  
			  //that.itemsWrapper.childNodes[0].style.minHeight =that.itemHeight+'px';
			 if(that.scrollParent.scrollTop > 10+(that.itemsWrapper.childNodes[0].offsetTop+getAbsoluteHeight(that.itemsWrapper.childNodes[0]))){ 
			
                  
			 
			      //console.log( curr_index);
					
					
					that.itemsWrapper.appendChild(getFrag(that.data, that.lastEndIndex, endIndex, that));
                    that.lastEndIndex = endIndex;
                    
				   //removeArrayOfElements(_slice.call(that.itemsWrapper.childNodes, 0, (((startIndex) - that.lastStartIndex))));

					
					
					if((endIndex ==that.data.length))
					{
					tt= false;

					if(aa>(endIndex - startIndex)){
						
						
						
						
			if (navigator.userAgent.indexOf("Firefox") > 0) {
                removeArrayOfElements(_slice.call(that.itemsWrapper.childNodes, 0, (((startIndex-2) - that.lastStartIndex))));
                startIndex =(startIndex-2);		
            }
			else{
			
		
		        if(isChrome ==true){
				if(_isMobile() == true){
				
					removeArrayOfElements(_slice.call(that.itemsWrapper.childNodes, 0, (((startIndex-2) - that.lastStartIndex))));
                    startIndex =(startIndex-2);					
				}
                else{
                    removeArrayOfElements(_slice.call(that.itemsWrapper.childNodes, 0, (((startIndex-2) - that.lastStartIndex))));
                    startIndex =(startIndex-2);	
                }	
				}
				else{
					removeArrayOfElements(_slice.call(that.itemsWrapper.childNodes, 0, (((startIndex-2) - that.lastStartIndex))));
					startIndex =(startIndex-2);	
				}
		
		
				
			}	
						
			
                
				
					
					
					//console.log((endIndex - startIndex)+"dddddddddd");
			
					}
					else{
						
					removeArrayOfElements(_slice.call(that.itemsWrapper.childNodes, 0, (((startIndex) - that.lastStartIndex))));	

					}
					
					
					}
					else{
					removeArrayOfElements(_slice.call(that.itemsWrapper.childNodes, 0, (((startIndex) - that.lastStartIndex))));	
					//console.log(endIndex - startIndex);
					//startIndex =(startIndex-1);
		
					}
				   
                     changed = true;	
				

					
				

             
			 }
		   
		   
		   
		   if(document.getElementById(current_select)){
	                 document.getElementById(current_select).className = "wSearchResultTitle curr";
					 }
					 
		     
		      
		   
		   
		   }
 
		 }		  
          
         
		   if (ff&&(startIndex > that.lastStartIndex)) {

                if ((startIndex - that.lastStartIndex) >= that.columns) {

                    removeArrayOfElements(_slice.call(that.itemsWrapper.childNodes, 0, startIndex - that.lastStartIndex));
                    changed = true;

                };
				

            } else if ((that.lastStartIndex > startIndex)) {
              
                if ((that.lastStartIndex - startIndex) >= that.columns) {
                    
                    if (that.lastStartIndex - startIndex >= len) {
                        that.lastStartIndex = startIndex + len;
                    }
                  
				   
				   
				   
                    that.itemsWrapper.insertBefore(getFrag(that.data, (startIndex), (that.lastStartIndex), that), that.itemsWrapper.firstChild);
                    tt= true;
					changed = true;
					if(document.getElementById(current_select)){
	                 document.getElementById(current_select).className = "wSearchResultTitle curr";
					 }
					 
					
		          

                };

            };

			ff=false;
			
			 
			
            // When startIndex changed, update paddingTop
            if (changed) {


			  if(git == true){
				
					 curr_index = (startIndex);

				  
			  }
	
				that.lastStartIndex = startIndex;
				
			    git =true;	

		that.wrapper.style.paddingTop = ((startIndex * that.itemHeight / that.columns) + that.offsetBefore) + 'px';

				
				

            };

           
         

           //curr_index = (startIndex);

		   return that;

        },

        _setHeight: function () {
            
			
			
			
            var that = this;

            // If odd do this to perfect the height for columns
            var _dataLength = that.data.length;
            var calcHeight = _dataLength * that.itemHeight;
            while (_dataLength % that.columns) {

                calcHeight += that.itemHeight;
                _dataLength++;

            };

            that.container.style.minHeight  = ((calcHeight / that.columns) + that.offsetBefore + that.offsetAfter) + 'px';
            
            return that;

        },

        refresh: function (fast) {

		
		
            var that = this;
            ff= true;
dd= false;
tt =true;
ssg =0;
aa =0;
            if (fast) return that._setHeight().update();

            if (that.itemWidth) that.columns = Math.floor(that.container.clientWidth / that.itemWidth);

            if (that.smartBuffer) that.buffer = that.columns;

            that._setHeight();

            // Wrapper
            if (that.optionsWrapper) {

                that.wrapper = typeof that.optionsWrapper === 'object' ? that.optionsWrapper : that.container.querySelector(that.optionsWrapper);

            } else {

                if (!that.optionsItemsWrapper) removeArrayOfElements(that.container.childNodes);

                that.wrapper = document.createElement('div');
                that.wrapper.className = 'vscroll-wrapper';
				 that.wrapper.id = 'vscroll-wrapper';
                that.container.appendChild(that.wrapper);


            };

            if (that.optionsItemsWrapper) {
                that.itemsWrapper = typeof that.optionsItemsWrapper === 'object' ? that.optionsItemsWrapper : that.container.querySelector(that.optionsItemsWrapper);
            } else {
                that.itemsWrapper = that.wrapper;
            };

            that.wrapper.setAttribute('data-columns', that.columns);
            removeArrayOfElements(that.itemsWrapper.childNodes);
            if (that.offsetBefore) that.wrapper.style.paddingTop = that.offsetBefore + 'px';

            // Cache
            that.lastStartIndex = 0;
            that.lastEndIndex = 0;

            that.update();

        },

        destroy: function () {

            var that = this;
            
            if (that.destroyed) return true;

            // Empty container if we set it up, don't damage user selected elements.
            // Just reset to zero.
            if (!that.optionsWrapper && !that.optionsItemsWrapper) {

                removeArrayOfElements(that.container.childNodes);

            } else {

                that.wrapper.style.paddingTop = null;
                that.wrapper.removeAttribute('data-columns');
                removeArrayOfElements(that.itemsWrapper.childNodes);

            };

            that.scrollParent.removeEventListener('scroll', that._scrollEvent, false);
            window.removeEventListener('resize', that._resizeEvent, false);
            
            that.container.style.minHeight = null;
            
            // Clear
            // Note: We do this to perfect everything for checks and all.
            for (var key in that) delete that[key];
            
            return that.destroyed = true;

        }
			,scrollto: function (hh) {
      
         var that = this;
		 var jj;
if(that.container){	
if(current_select){
	
jj =  ((((current_select)*(that.itemHeight*1))/that.columns)+that.offsetBefore +that.container.offsetTop);		
}else{
	
jj =  ((((hh)*(that.itemHeight*1))/that.columns)+that.offsetBefore +that.container.offsetTop);	

}
}
          
 
if(that.scrollParent){
	
that.scrollParent.scrollTop = (jj);	
	
}


if(document.getElementById(current_select)){

	document.getElementById(current_select).className = "wSearchResultTitle curr";


}
 //if(document.getElementById("searchresults").className != "rh-hide")
 document.getElementsByClassName("loading2")[0].style.display = 'none';	
//alert();

}
		
		

    };


    // Expose
    window.VScroll = VScroll;


})(window, document);