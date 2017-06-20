
var gTopicElemId = "";
var gsPPath="";
var gaPaths=new Array();
var gaAvenues=new Array();
var gaSearchTerms = new Array();
var gaSearchTermType = new Array();
var gbPhraseTerm = false ;
var gChildPathInMain="";

var goFrame=null;
var gsStartPage="";
var gsRelCurPagePath="";
var gsSearchFormHref="";
var gnTopicOnly=-1;
var gnOutmostTopic=-1;
var gsFtsBreakChars="\t\r\n\"\\ .,!@#$%^&*()~'`:;<>?/{}[]|+-=\x85\x92\x93\x94\x95\x96\x97\x99\xA9\xAE\xB7";
var gsQuote='\x22'; 
var gsBkgndColor="";
var gsTextColor="";
var BTN_TEXT=1;
var BTN_IMG=2;

var goSync=null;

var goShow=null;
var goHide=null;

var goPrev=null;
var goNext=null;
var gnForm=0;
var goShowNav=null;
var goHideNav=null;

var goWebSearch=null;

var gsBtnStyle="";
var gaButtons=new Array();
var gaTypes=new Array();
var whtopic_foldUnload=null;
var gbWhTopic=false;
var gbCheckSync=false;
var gbSyncEnabled=false;
var gaBreadcrumbsTrail = new Array();
var gnYPos = -1;
var gbBadUriError = false;

var	EST_TERM		= 1;
var	EST_PHRASE		= 2;
var	EST_STEM		= 3;

//Code for breadcrumb variable check for bookmark
(function() {
	gbBreadCrumb 	= 0;
	var strDocumentUrl = document.location.hash;
	var n = strDocumentUrl.toLowerCase().indexOf("bc-");
	if(n != -1)
	{
		document.location.hash = strDocumentUrl.substring(0, n);
		var bc = strDocumentUrl.substring(n+3);
		gbBreadCrumb = bc;
	}
})();

// Initialize
rh.util.addEventListener(document, 'DOMContentLoaded', verifyEnvironment);

function verifyEnvironment() {
	if (window.self === window.top) {
		// Loaded without a parent.
		addRhLoadCompleteEvent(rh._.redirectToLayout);
	}
	else {
		addRhLoadCompleteEvent(initializeTopic);
	}
	loadScreens(SCR_NONE, gCommonRootRelPath);
}

function initializeTopic() {
	publishTopicData();
	rh.model.subscribe(rh.consts('KEY_TOPIC_ORIGIN'), function() {
		setTimeout(applyHighlight, 50);
	});
	loadParentDataForSyncing(gCommonRootRelPath, SCR_PARENT_TOCSYNC);
}

function publishTopicData()
{
	// Active topic URL
	rh.model.publish(rh.consts('KEY_TOPIC_URL'), decodeURI(document.location.href));
	
	// Active topic title
	rh.model.publish(rh.consts('KEY_TOPIC_TITLE'), document.title);
	
	// Active topic's browse sequence map
	var brsPrevNodes = document.querySelectorAll('meta[name=brsprev]');
	var brsNextNodes = document.querySelectorAll('meta[name=brsnext]');
	var brsPrevLinks = new Array();
	var brsNextLinks = new Array();
	var hostFolder = _isHTTPUrl(document.location.href) ? document.location.protocol + '//' + gHost +  gHostPath : gHostPath;
	
	if (brsPrevNodes != undefined)
	{
		for (i = 0; i < brsPrevNodes.length; i++)
			brsPrevLinks[brsPrevLinks.length] = rh.util.traverseByPath(document.location.href, gCommonRootRelPath) + brsPrevNodes[i].getAttribute('value');
	}
	if (brsNextNodes != undefined)
	{
		for (i = 0; i < brsNextNodes.length; i++)
			brsNextLinks[brsNextLinks.length] = rh.util.traverseByPath(document.location.href, gCommonRootRelPath) + brsNextNodes[i].getAttribute('value');
	}
	
	rh.model.publish(rh.consts('KEY_TOPIC_BRSMAP'), { p: brsPrevLinks, n: brsNextLinks });
}

function syncToc(tocChildPrefixStr, tocChildOrder)
{
	rh.model.publish(rh.consts('KEY_TOPIC_ID'), {topicID: gTopicId, childPrefix: gTocChildPrefixStr, childOrder: gTocChildOrder});
}

/////////highlight Search Routines /////////
function ClosedRange( a_nStart, a_nEnd )
{
	this.nStart = a_nStart;
	this.nEnd = a_nEnd;
}

////////generic functions //////////

var g_RunesWordBreaks=gsFtsBreakChars;
var g_RunesWhiteSpaces="\x20\x09\x0D\x0A\xA0";

function _isWordBreak( a_ch )
{
	return ( g_RunesWordBreaks.indexOf( a_ch ) >= 0 );
}

function _isWhiteSpace( a_ch )
{
	return ( g_RunesWhiteSpaces.indexOf( a_ch ) >= 0 );
}

function _getLengthOfWordBreak( a_str, a_nFrom )
{
	var i = a_nFrom, nLen = a_str.length;
	while ( i < nLen && _isWordBreak( a_str.charAt( i ) ) )
		++i;
	return i - a_nFrom;
}

function _getLengthOfWord( a_str, a_nFrom )
{
	var i = a_nFrom, nLen = a_str.length;
	while ( i < nLen &&	!_isWordBreak( a_str.charAt( i ) ) )
		++i;
	return i - a_nFrom;
}

function _getWord( a_str, a_nFrom )
{
	var nLen = _getLengthOfWord( a_str, a_nFrom );
	return a_str.substr( a_nFrom, nLen );
}

function _getPositionInc( a_str, a_nFrom )
{
	var i = a_nFrom, nLen = a_str.length, nInc = 1;
	while ( i < nLen && _isWordBreak( a_str.charAt( i ) ) )
	{
		if ( !_isWhiteSpace( a_str.charAt( i ) ) )
			nInc++;

		i++;
	}
	return nInc;
}

function _getNormalizedWord( a_strWord )
{
	var strLower = a_strWord.toLowerCase();
	
	return strLower;
}

function DolWord( a_strWord, a_nPosition, a_nCharLocation )
{
	this.strWord = a_strWord;
	this.nPosition = a_nPosition;
	this.nCharLocation = a_nCharLocation;
}

function dolSegment( a_strSrc )
{
	var nLen = a_strSrc.length;
	var nCur = 0;
	var nPosition = 1;
	var strWord = "";
	var aRslt = new Array();

	nCur += _getLengthOfWordBreak( a_strSrc, nCur );
	while ( nCur < nLen )
	{
		strWord = _getNormalizedWord( _getWord( a_strSrc, nCur ) );
		aRslt[aRslt.length] = new DolWord( strWord, nPosition, nCur );
		
		nCur += strWord.length;
		nPosition += _getPositionInc( a_strSrc, nCur );
		nCur += _getLengthOfWordBreak( a_strSrc, nCur );
	}
	return aRslt;
}

/////////// Dom Text node ///////////////
var s_strHlStart=null;
var s_strHlEnd =null;

function DomTextNode( a_Node, a_nFrom )
{
	this.node = a_Node;
	this.nFrom = a_nFrom;
	
	this.aClosedRanges = new Array();

	this.getClosedRanges = function( a_aRanges, a_nStart )
	{
		var nTo = this.nFrom + a_Node.data.length;			
		for ( var i = a_nStart; i < a_aRanges.length; i++ )
		{
			if ( a_aRanges[i].nStart <= nTo &&
				 a_aRanges[i].nEnd >= this.nFrom )
			{
				this.aClosedRanges[this.aClosedRanges.length] = new ClosedRange( a_aRanges[i].nStart > this.nFrom ? a_aRanges[i].nStart : this.nFrom,
																				 a_aRanges[i].nEnd < nTo ? a_aRanges[i].nEnd : nTo );
			}
			if ( a_aRanges[i].nEnd > nTo )
			{
				return i;
			}
		}
		return i;
	}

	this.doHighlight = function( a_aRanges, a_nStart )
	{
		s_strHlStart = "<font style='color:" + gsTextColor + "; background-color:" + gsBkgndColor + "'>";
		s_strHlEnd = "</font>";

		if ( a_nStart >= a_aRanges.length )
			return a_nStart;

		var nEnd = this.getClosedRanges( a_aRanges, a_nStart );
		if ( this.aClosedRanges.length == 0 )
			return nEnd;
		
		// Check if node.parentNode is a valid parent for a span tag.
		if (!isValidParentForSpan(this.node.parentNode))
			return nEnd;
			
		var strText = this.node.data;
		//replace newline, carriage return, tab characters with space
		strText = strText.replace(/[\n\r\t]/g," "); 
		
		var strHTML = "";
		var nLastStart = 0;
		for ( var i = 0; i < this.aClosedRanges.length; i++ )
		{
			strHTML += _textToHtml_nonbsp(strText.substring( nLastStart, this.aClosedRanges[i].nStart - this.nFrom ));
			strHTML += s_strHlStart;
			strHTML += _textToHtml_nonbsp(strText.substring( this.aClosedRanges[i].nStart - this.nFrom,
										  this.aClosedRanges[i].nEnd - this.nFrom ));
			strHTML += s_strHlEnd;

			nLastStart = this.aClosedRanges[i].nEnd - this.nFrom;
		}
		strHTML += _textToHtml_nonbsp(strText.substr( nLastStart ));
		
		var spanElement = document.createElement( "span" );
		spanElement.innerHTML = strHTML;
		if (gbIE)
		{
		    //for IE, when assigning string to innerHTML, leading whitespaces are dropped
		    if ((strHTML.length >0)&&(strHTML.charAt(0) == " "))
		        spanElement.innerHTML = "&nbsp;" + spanElement.innerHTML ;       
		}   
		
		this.node.parentNode.replaceChild( spanElement, this.node );
		if(gnYPos == -1)
		{
			var elemObj = spanElement;
			var curtop = 0;
    			if (elemObj.offsetParent)
    			{
        			while (elemObj.offsetParent)
        			{
            				curtop += elemObj.offsetTop
            				elemObj = elemObj.offsetParent;
        			}
    			}
    			else if (elemObj.y)
        			curtop += elemObj.y;
			
			gnYPos = curtop;
		}
		showHighlightedElement(spanElement);
		return nEnd;
	};
}

function showHighlightedElement(highlightElement) {
	//display a dropdown/expand text if highlighted element is inside it
	var parent = highlightElement.parentNode;
	while( (typeof parent != 'undefined') && parent != null )
	{
		var tagname = parent.tagName.toLowerCase();
		if( tagname == 'body')
			break;
		if( (tagname == "div" && parent.className == "droptext") ||
			(tagname == "span" && parent.className == "expandtext"))
		{
			if(parent.style.display == "none")
				parent.style.display = "";
		}
		parent = parent.parentNode;
	}
}

function DomTexts()
{
	this.strText = "";
	this.aNodes = new Array();
	this.aRanges = new Array();

	this.addElementNode = function( a_Node )
	{
		if ( a_Node == null || a_Node.childNodes == null )
			return;

		var nLen = a_Node.childNodes.length;
		for ( var i = 0; i < nLen; i++ )
		{
			var node = a_Node.childNodes.item( i );
			if ( node != null )
			{
				if ( node.nodeType == 3 )
				{
					this.addTextNode( node );
				}
				else if ( node.nodeType == 1 )
				{
					this.addElementNode( node );
				}
			}
		}
	}

	this.addTextNode = function( a_Node )
	{
		if ( a_Node == null )
			return;

		var strInnerText = a_Node.data;
		
		//replace newline, carriage return, tab characters with space
		strInnerText = strInnerText.replace(/[\n\r\t]/g," "); 
		if ( strInnerText.length != 0 )
		{
			var nFrom = this.strText.length;
			this.strText += strInnerText;
			this.aNodes[this.aNodes.length] = new DomTextNode( a_Node, nFrom );
		}
	}

	this.isWordMatch = function( a_strHlWord, a_strTextWord )
	{
		return a_strTextWord.indexOf(a_strHlWord.toLowerCase()) != -1;
	}
					 
	this.makeHighlightRanges = function()
	{
		if(typeof(gaSearchTerms[0]) == "undefined")
			return;

		var str = gaSearchTerms.reduce(function(result, value, index) {
			var term = escapeRegExp(value.toLowerCase());
			if (!(gsSubstrSrch || rh.util.hasNonAsciiChar(term))) {
				term = '\\b' + term + '\\b';
			}
			result += (result != '' ? '|' : '') + term;
			return result;
		}, '');

		
		//var regexp = new RegExp(str, "i");

		var regex = /(\|)/g;
		if (regex.test(str)) {
		 var regexp =  XRegExp('(^|[\\s\\p{P}\\p{S}])('+createAccentRegexp(str)+')(?=[\\s\\p{P}\\p{S}]|$)', "i");
        }
		else{
		var regexp =  XRegExp(createAccentRegexp(str).split(' ').join('[\\n\\r\\s\\p{P}\\p{S}\\p{Mn}\\u0640]+'), "i");
		}
		
		
		
		var aWords ;
		if (!gbPhraseTerm)
			aWords = dolSegment( this.strText );
		else
		{
			aWords = new Array();
			aWords[0] = new DolWord( this.strText, 1, 0 );
		}
		
		for ( var i = 0; i < aWords.length; i++ )
		{
			var n = new Object;
			n.index = 0;
			var prevLen = 0;
			var tmpStr1 = aWords[i].strWord.toLowerCase();

			while(n != null && n.index > -1)
			{
				n = regexp.exec(tmpStr1);

				if (n != null &&  n.index > -1 )
				{
					var strWord = n[0];
					this.aRanges[this.aRanges.length] = new ClosedRange( aWords[i].nCharLocation + prevLen + n.index,
								aWords[i].nCharLocation + prevLen + n.index + strWord.length);
					prevLen = prevLen + n.index + strWord.length;
					tmpStr1 = tmpStr1.substring(n.index + strWord.length, tmpStr1.length);
				}
			}
		}
	}
	
	this.highlightNodes = function()
	{
		var nFrom = 0;
		for ( var i = 0; i < this.aNodes.length; i++ )
			nFrom = this.aNodes[i].doHighlight( this.aRanges, nFrom );
	}

	this.jump2FirstHighlightedWord = function()
	{
		if (gnYPos > 51){
			window.scrollTo(0, gnYPos-50);
			window.parent.postMessage(["scrollTop", gnYPos-50], "*");
			
			if (_isMobile() == mobiletrue) {
		     
			     if ((navigator.userAgent.match(detect_userAgent))&&(isInIFrame==true)) {
			
			         myScroll.scrollTo(0, -(gnYPos-50));
		             myScroll.refresh();
		         }
		         else{
			         jQueryM_v1_4_5("#wrapper").scrollTop(gnYPos-50);
		         }
	
	        }
	        else{
			jQueryD_1_4_2("#wrapper").scrollTop(gnYPos-50);
	        }
			
			
		}
	}
}

function processSuspendNodes( a_aNodes )
{
	if ( a_aNodes.length == 0 )
		return false;

	var dt = new DomTexts();

	//build dom texts...
	for ( var i = 0; i < a_aNodes.length; i++ )
	{
		var node = a_aNodes[i];
		if ( node.nodeType == 1 )
		{
			dt.addElementNode( node );
		}
		else if ( node.nodeType == 3 )
		{
			dt.addTextNode( node );
		}
	}
	
	dt.makeHighlightRanges();
	dt.highlightNodes();
	dt.jump2FirstHighlightedWord();
}

var s_strRecursiveTags = "sub sup img applet object br iframe embed noembed param area input " +
						 "select textarea button option hr frame noframes marquee label p dl " +
						 "div center noscript blockquote form isindex table fieldset address layer " +
						 "dt dd caption thead tfoot tbody tr th td legend h1 h2 h3 h4 h5 h6 " +
						 "ul ol dir menu li pre xmp listing plaintext ins del";

var s_strSpanInvalidParents = "applet object iframe embed table thead tfoot tbody tr ul ol script";

function doesTagRecursiveProcess( a_Node )
{
	if ( a_Node == null )
		return false;

	var strTagName = a_Node.tagName.toLowerCase();
	var rg = "\\b" + strTagName + "\\b";
	var ss = s_strRecursiveTags.match( rg );
	return ss != null;
}

function isValidParentForSpan(a_Node)
{
	if (a_Node == null)
		return false;
	
	var strTagName = a_Node.tagName.toLowerCase();
	var rg = "\\b" + strTagName + "\\b";
	var ss = s_strSpanInvalidParents.match(rg);
	
	return ss == null;
}

function doHighLightDomElement( a_aSuspendedNodes, a_Node )
{
	var childNodes = a_Node.childNodes;
	
	if ( childNodes == null || childNodes.length == 0 )
		return;

	var nLen = childNodes.length;
	for ( var i = 0; i < nLen; i++ )
	{
		var node = childNodes.item( i );
		if ( node == null )
			continue;

		if ( node.nodeType == 1 )
		{	//element
			if ( doesTagRecursiveProcess( node ) )
			{
				if ( a_aSuspendedNodes.length > 0 )
				{
					processSuspendNodes( a_aSuspendedNodes );
					a_aSuspendedNodes.length = 0;
				}
			}
			doHighLightDomElement( a_aSuspendedNodes, node );
		}
		else if ( node.nodeType == 3 )
		{	//text
			a_aSuspendedNodes[a_aSuspendedNodes.length] = node;
		}
	}
}

function highlightDocument()
{
	if ( !document.body || document.body == null )
		return;
		
	var aSuspendedNodes = new Array();
	var topicNode = document.getElementById(gTopicElemId);
	if(!topicNode)
		topicNode = document.body;
	doHighLightDomElement( aSuspendedNodes, topicNode );
	processSuspendNodes( aSuspendedNodes );
}

/////// start routine /////////
function applyHighlight()
{
	readSetting(RHHIGHLIGHT, callbackHighlightSettingRead);
}
function callbackHighlightSettingRead(bHighlight)
{
	if(bHighlight == TRUESTR)
		readSetting(RHHIGHLIGHTTEXTCOLOR, callbackHighlightTxtColorRead);
}
function callbackHighlightTxtColorRead(txtColor)
{
	gsTextColor = txtColor;
	readSetting(RHHIGHLIGHTBGCOLOR, callbackHighlightBgColorRead);
}
function callbackHighlightBgColorRead(bgColor)
{
	gsBkgndColor = bgColor;
	StartHighLightSearch();
}
function StartHighLightSearch()
{
	var strTerms = GetHighlightTextFromURL();
	var arrSyns = GetSynonymsFromURL();
	
	findSearchTerms(strTerms, false);
	// Repeat for all synonyms
	for (var i = 0; i < arrSyns.length; i++)
		if (trim(arrSyns[i]) != "")
			findSearchTerms(trim(arrSyns[i]), false);

	highlightDocument();
}

//////// common with FTS routines to identify stop word etc. ////////////

function findSearchTerms(searchTerms, bSkip)
{
	if(searchTerms != "")
	{
		var sInput=searchTerms;
		var bPhrase = false ;
		var sCW="";
		var nS=-1;
		var nSep=-1;
		for(var nChar=0;nChar<gsFtsBreakChars.length;nChar++){
			var nFound=sInput.indexOf(gsFtsBreakChars.charAt(nChar));
			if((nFound!=-1)&&((nS==-1)||(nFound<nS))){
				nS=nFound;
				nSep=nChar;
			}
		}
		
		if(nS==-1){
			sCW=sInput;
			sInput="";
		}
		else
		{
			if (isQuote(gsFtsBreakChars.charAt(nSep)))
			{
				if (nS == 0)
				{
					//it could be a phrase
					sInput = sInput.substring(nS+1) ;
					var phrLen = getLengthOfPhrase(sInput ) ;
					if (phrLen <= 0 )
					{
						//invalid expression
						return ;
					}
					else
					{					
						//phrase begins here
						bPhrase = true ; 
						//get the phrase							
						sCW=sInput.substring(0,phrLen);					
						sInput=sInput.substring(phrLen + 1);						
					}
				}
				else
				{
					//get the token preceeding phrase
					sCW=sInput.substring(0,nS);
					
					//keep the starting quote for next parse so next parse would know it's a phrase
					sInput=sInput.substring(nS);
				}				
			}
			else
			{
				sCW=sInput.substring(0,nS);
				sInput=sInput.substring(nS+1);
			}
		}

		searchTerms=sInput;
		
		var bAdd = true;
		if((sCW=="or")||(sCW=="|")||(sCW=="OR"))
		{
			bSkip = false;
			bAdd = false;
		}
		else if((sCW=="and")||(sCW=="&")||(sCW=="AND"))
		{
			bSkip = false;
			bAdd = false;
		}
		else if((sCW=="not")||(sCW=="~")||(sCW=="NOT"))
		{
			bSkip = true;
			bAdd = false;
		}

		if(bAdd && !bSkip && sCW!="" && sCW!=" " && !IsStopWord(sCW,gaFtsStop)){
			gaSearchTerms[gaSearchTerms.length] = sCW;
			if (bPhrase)
			{
				gaSearchTermType[gaSearchTermType.length] = EST_PHRASE ;
				gbPhraseTerm = true ;
			}
			else
			{
				gaSearchTermType[gaSearchTermType.length] = EST_TERM ;
			}
			
			if (!bPhrase)
			{
				var stemWord = GetStem(sCW);
				if(stemWord != sCW)
				{
					gaFtsStem.forEach(function(value) {
						if (stemWord + value != sCW) {
							gaSearchTerms[gaSearchTerms.length] = stemWord + value;
							gaSearchTermType[gaSearchTermType.length] = EST_STEM;
						}
					});
				}
			}
		}
		findSearchTerms(searchTerms, bSkip);
	}
	
}


function getLengthOfPhrase( a_str )
{
	var i = 0 ;
	var nLen = a_str.length;
	while ( i < nLen )
	{
		if ( isQuote( a_str.charAt( i ) ) )
			return i ;
		++i;
	}
	return -1;
}

function GetStem(szWord)
{
	if(gaFtsStem==null||gaFtsStem.length==0)return szWord;
	if(IsNonAscii(szWord))             return szWord;
	var aStems=gaFtsStem;

	var nStemPos=0;
	var csStem="";
	for(var iStem=0;iStem<aStems.length;iStem++){

		if(aStems[iStem].length>=szWord.length-1)	continue;
		nStemPos=szWord.lastIndexOf(aStems[iStem]);
		if(nStemPos>0){
			var cssub=szWord.substring(nStemPos);
			if(cssub==aStems[iStem]){
				csStem=szWord;
				if(szWord.charAt(nStemPos-2)==szWord.charAt(nStemPos-1)){
					csStem=csStem.substring(0,nStemPos-1);
				}else{
					csStem=csStem.substring(0,nStemPos);
				}
				return csStem;
			}
		}
	}
	return szWord;
}

function IsStopWord(sCW,aFtsStopArray)
{
	var nStopArrayLen=aFtsStopArray.length;
	var nB=0;
	var nE=nStopArrayLen-1;
	var nM=0;
	var bFound=false;
	var sStopWord="";
	while(nB<=nE){
		nM=(nB+nE);
		nM>>=1;
		sStopWord=aFtsStopArray[nM];
		if(compare(sCW,sStopWord)>0){
			nB=(nB==nM)?nM+1:nM;
		}else{
			if(compare(sCW,sStopWord)<0){
				nE=(nE==nM)?nM-1:nM;
			}else{
				bFound=true;
				break;
			}
		}
	}
	return bFound;
}

/////// end highlight search rountines /////////////

function setButtonFont(sType,sFontName,sFontSize,sFontColor,sFontStyle,sFontWeight,sFontDecoration)
{
	var vFont=new whFont(sFontName,sFontSize,sFontColor,sFontStyle,sFontWeight,sFontDecoration);
	gsBtnStyle+=".whtbtn"+sType+"{"+getFontStyle(vFont)+"}";
}

function writeBtnStyle()
{
	if(gaButtons.length>0)
	{
		if(gsBtnStyle.length>0)
		{
			var sStyle="<style type='text/css'>";
			sStyle+=gsBtnStyle+"</style>";
			document.write(sStyle);
		}
	}
}

function button(sText,nWidth,nHeight)
{
	this.sText=sText;
	this.nWidth=nWidth;
	this.nHeight=nHeight;
	
	this.aImgs=new Array();
	var i=0;
	while(button.arguments.length>i+3)
	{
		this.aImgs[i]=button.arguments[3+i];
		i++;
	}
}


//recursively finds the parent project StartPage path if exists 
//also computes the child toc path in the parent toc recursively until 
//main proj

function getPPStartPagePath(sPath)
{
	if(sPath.length != 0)
	{
		var sXmlFolderPath = _getPath(sPath);
		if(sXmlFolderPath.indexOf("/mergedProjects/") == -1 &&
			sXmlFolderPath.indexOf("\\mergedProjects\\") == -1)
			return sPath;
		
		var sdocPath = _getFullPath(sXmlFolderPath, "MasterData.xml");
		try
		{
			if(gbIE5) //Internet Explorer
			{
				xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
				xmlDoc.async=false;
  				xmlDoc.load(sdocPath);
			}
			else if(gbNav6) //Firefox, Mozilla, Opera etc.
			{
				var req=new XMLHttpRequest();
 		        req.open("GET", sdocPath, false);   
	            req.send(null); 
	            xmlDoc = req.responseXML;
			}
			else if(gbSafari3) //Safari
			{ 
				if(window.XMLHttpRequest)
					xmlhttp = new XMLHttpRequest();
				if(xmlhttp)
				{
					xmlhttp.onreadystatechange=processReqChange;
					xmlhttp.open("GET", sdocPath, false);
					xmlhttp.send("");
				}
			}
		}
		catch(e){
			gbBadUriError=true;
			return sPath;
		}

		if(xmlDoc == null) return sPath;			
		var root = xmlDoc.documentElement;
		if(root == null) return sPath;
		var masterProj = null;
		try
		{
			masterProj = xmlDoc.getElementsByTagName("syncinfo");	
			var childTocPosInParent = null;
			if(masterProj)
			{
				var startpage = xmlDoc.getElementsByTagName("startpage");	
				masterStartPageName = startpage[0].getAttribute("name");
				masterStartPageRelPath = startpage[0].getAttribute("url");
				var tocpos = xmlDoc.getElementsByTagName("tocpos");
				childTocPosInParent = tocpos[0].getAttribute("path");
						
			}
		}
		catch(e){return sPath;}
		if(childTocPosInParent)
		{
			childTocPosInParent = childTocPosInParent.replace(/\\n/g, "\n");
			gChildPathInMain = childTocPosInParent +  gChildPathInMain;
		}
		sXmlFolderPath = _getFullPath(sXmlFolderPath, masterStartPageRelPath+masterStartPageName);
		sXmlFolderPath = getPPStartPagePath(sXmlFolderPath);
		return sXmlFolderPath;
	}
}

//project info
function setRelStartPage(sPath)
{
	if(gsPPath.length==0)
	{
		gsPPath=_getFullPath(_getPath(document.location.href),_getPath(sPath));
		gsStartPage=_getFullPath(_getPath(document.location.href),sPath);
		try{
			gsStartPage = getPPStartPagePath(gsStartPage);
		}
		catch(e)
		{
			alert("Error reading masterData.xml");
		}
		gsRelCurPagePath=_getRelativeFileName(gsStartPage,document.location.href);
		for(var i=0; i< gaPaths.length; i++)
			gaPaths[i] = gChildPathInMain + gaPaths[i];
	}
}

function getImage(oImage,sType)
{
	var sImg="";
	if(oImage&&oImage.aImgs&&(oImage.aImgs.length>0))
	{
		sImg+="<img alt=\""+sType+"\" src=\""+oImage.aImgs[0]+"\"";
		if(oImage.nWidth>0)
			sImg+=" width="+oImage.nWidth;
		if(oImage.nHeight>0)
			sImg+=" height="+oImage.nHeight;
		sImg+=" border=0>";
	}
	return sImg;
}

function addTocInfo(sTocPath)
{
	gaPaths[gaPaths.length]=sTocPath;
}


var flex_nextLocation;
var flex_previousLocation;

function addAvenueInfo(sName,sPrev,sNext)
{
	gaAvenues[gaAvenues.length]=new avenueInfo(sName,sPrev,sNext);
	flex_previousLocation = sPrev;
	flex_nextLocation = sNext;
}

function addButton(sType,nStyle,sText,sHref,sOnClick,sOnMouseOver,sOnLoad,nWidth,nHeight,sImg1,sImg2,sImg3)
{
	var sButton="";
	var nBtn=gaButtons.length;
	if(sType=="prev")
	{
		if(canGo(false))
		{
			var sTitle="Previous Topic";
			goPrev=new button(sText,nWidth,nHeight,sImg1,sImg2,sImg3);
			sButton="<a title=\""+sTitle+"\" class=\"whtbtnprev\" href=\"javascript:void(0);\" onclick=\"goAvenue(false);return false;\">";
			if(nStyle==BTN_TEXT)
				sButton+=goPrev.sText;
			else
				sButton+=getImage(goPrev,sTitle);
			sButton+="</a>";
		}
	}
	else if(sType=="next")
	{
		if(canGo(true))
		{
			var sTitle="Next Topic";
			goNext=new button(sText,nWidth,nHeight,sImg1,sImg2,sImg3);
			sButton="<a title=\""+sTitle+"\" class=\"whtbtnnext\" href=\"javascript:void(0);\" onclick=\"goAvenue(true);return false;\">";
			if(nStyle==BTN_TEXT)
				sButton+=goNext.sText;
			else
				sButton+=getImage(goNext,sTitle);
			sButton+="</a>";
		}
	}
	else if(sType=="show")
	{
		if(isTopicOnly()&&(!gbOpera6||gbOpera7))
		{
			var sTitle="Show Navigation Component";
			goShow=new button(sText,nWidth,nHeight,sImg1,sImg2,sImg3);
			sButton="<a title=\""+sTitle+"\" class=\"whtbtnshow\" href=\"javascript:void(0);\" onclick=\"show();return false;\">";
			if(nStyle==BTN_TEXT)
				sButton+=goShow.sText;
			else
				sButton+=getImage(goShow,sTitle);
			sButton+="</a>";
		}
	}
	else if(sType=="hide")
	{
		if(!isTopicOnly()&&!gbOpera6)
		{
			var sTitle="Hide Navigation Component";
			goHide=new button(sText,nWidth,nHeight,sImg1,sImg2,sImg3);
			sButton="<a title=\""+sTitle+"\" class=\"whtbtnhide\" href=\"javascript:void(0);\" onclick=\"hide();return false;\">";
			if(nStyle==BTN_TEXT)
				sButton+=goHide.sText;
			else
				sButton+=getImage(goHide,sTitle);
			sButton+="</a>";
		}
	}
	else if(sType=="shownav")
	{
		if(isShowHideEnable())
		{
			var sTitle="Show Navigation Component";
			goShowNav=new button(sText,nWidth,nHeight,sImg1,sImg2,sImg3);
			sButton="<a title=\""+sTitle+"\" class=\"whtbtnshownav\" href=\"javascript:void(0);\" onclick=\"showHidePane(true);return false;\">";
			if(nStyle==BTN_TEXT)
				sButton+=goShowNav.sText;
			else
				sButton+=getImage(goShowNav,sTitle);
			sButton+="</a>";
		}
	}
	else if(sType=="hidenav")
	{
		if(isShowHideEnable())
		{
			var sTitle="Hide Navigation Component";
			goHideNav=new button(sText,nWidth,nHeight,sImg1,sImg2,sImg3);
			sButton="<a title=\""+sTitle+"\" class=\"whtbtnhidenav\" href=\"javascript:void(0);\" onclick=\"showHidePane(false);return false;\">";
			if(nStyle==BTN_TEXT)
				sButton+=goHideNav.sText;
			else
				sButton+=getImage(goHideNav,sTitle);
			sButton+="</a>";
		}
	}
	else if(sType=="synctoc")
	{
		if(gaPaths.length>0)
		{
			var sTitle="Sync TOC";
			goSync=new button(sText,nWidth,nHeight,sImg1,sImg2,sImg3);
			sButton="<a title=\""+sTitle+"\" class=\"whtbtnsynctoc\" href=\"javascript:void(0);\" onclick=\"syncWithShow();return false;\">";
			if(nStyle==BTN_TEXT)
				sButton+=goSync.sText;
			else
				sButton+=getImage(goSync,sTitle);
			sButton+="</a>";
		}
	}
	else if(sType=="websearch")
	{
		if(gsSearchFormHref.length>0)
		{
			var sTitle="WebSearch";
			goWebSearch=new button(sText,nWidth,nHeight,sImg1,sImg2,sImg3);
			sButton="<a title=\""+sTitle+"\" class=\"whtbtnwebsearch\" href=\""+gsSearchFormHref+"\">";
			if(nStyle==BTN_TEXT)
				sButton+=goWebSearch.sText;
			else
				sButton+=getImage(goWebSearch,sTitle);
			sButton+="</a>";
		}
	}
	else if(sType=="searchform")
	{
		gaButtons[nBtn]="NeedSearchForm";
		gaTypes[nBtn]=sType;
	}
	if(sButton.length!=0)
	{
		if(nStyle==BTN_TEXT)
			sButton+="&nbsp;";
		gaButtons[nBtn]="<td>"+sButton+"</td>";
		gaTypes[nBtn]=sType;
	}
}

function isSyncEnabled()
{
	if(!gbCheckSync)
	{
		var oMsg=new whMessage(WH_MSG_ISSYNCSSUPPORT,this,1,null);
		if(SendMessage(oMsg))
		{
			gbSyncEnabled=oMsg.oParam;
		}
		gbCheckSync=true;
	}
	return gbSyncEnabled;
}

function isInPopup()
{
	return (window.name.indexOf("BSSCPopup")!=-1);
}

function getIntopicBar(sAlign)
{
	var sHTML="";
	if(gaButtons.length>0)
	{
		sHTML+="<div align="+sAlign+">";

		sHTML+="<table cellpadding=\"2\" cellspacing=\"0\" border=\"0\"><tr>";
		for(var i=0;i<gaButtons.length;i++)
		{
			if(gaTypes[i]!="synctoc"||isSyncEnabled())
			{
				if(gaButtons[i]=="NeedSearchForm")
					sHTML+=getSearchFormHTML();
				else
					sHTML+=gaButtons[i];
			}
		}
		sHTML+="</tr></table>";

		sHTML+="</div>";
	}
	return sHTML;
}


function writeIntopicBar(nAligns)
{
	if(isInPopup()) return;
	if(gaButtons.length>0)
	{
		var sHTML="";
		if(nAligns!=0)
		{
			sHTML+="<table width=100%><tr>"
			if(nAligns&1)
				sHTML+="<td width=33%>"+getIntopicBar("left")+"</td>";
			if(nAligns&2)
				sHTML+="<td width=34%>"+getIntopicBar("center")+"</td>";
			if(nAligns&4)
				sHTML+="<td width=33%>"+getIntopicBar("right")+"</td>";
			sHTML+="</tr></table>";
			document.write(sHTML);
		}
	}
}

function sendAveInfoOut()
{
	if(!isInPopup())
		setTimeout("sendAveInfo();",100);
}

function sendAveInfo()
{
	var oMsg=new whMessage(WH_MSG_AVENUEINFO,this,1,gaAvenues);
	SendMessage(oMsg);
}


function onNext()
{
	var oMsg=new whMessage(WH_MSG_NEXT,this,1,null);
	SendMessage(oMsg);
}

function onPrev()
{
	var oMsg=new whMessage(WH_MSG_PREV,this,1,null);
	SendMessage(oMsg);
}

function createSyncInfo()
{
	var oParam=new Object();
	var sPath = null;
	if(gsStartPage.length != 0)
		sPath = _getPath(gsStartPage);
	else if(gsPPath.length==0)
		sPath =_getPath(document.location.href);
	else 
		sPath = gsPPath;
	oParam.sPPath=sPath;
	oParam.sTPath=document.location.href;
	oParam.aPaths=gaPaths;
	return oParam;
}

function syncWithShow()
{
	if(isTopicOnly())
		show();
	else
	{
		sync();
		showTocPane();
	}
}

function showTocPane()
{
	var oMsg=new whMessage(WH_MSG_SHOWTOC,this,1,null);
	SendMessage(oMsg);
}

function sendSyncInfo()
{
	if(!isInPopup())
	{
		var oParam=null;
		if(gaPaths.length>0)
		{
			oParam=createSyncInfo();
		}
		var oMsg=new whMessage(WH_MSG_SYNCINFO,this,1,oParam);
		SendMessage(oMsg);
	}
}

function sendInvalidSyncInfo()
{
	if(!isInPopup())
	{
		var oMsg=new whMessage(WH_MSG_SYNCINFO,this,1,null);
		SendMessage(oMsg);
	}
}

function enableWebSearch(bEnable)
{
	if(!isInPopup())
	{
		var oMsg=new whMessage(WH_MSG_ENABLEWEBSEARCH,this,1,bEnable);
		SendMessage(oMsg);
	}
}

function autoSync(nSync)
{
	if(nSync==0) return;
	if(isInPopup()) return;
	if(isOutMostTopic())
		sync();
}

function isOutMostTopic()
{
	if(gnOutmostTopic==-1)
	{
		var oMessage=new whMessage(WH_MSG_ISINFRAMESET,this,1,null);
		if(SendMessage(oMessage))
			gnOutmostTopic=0;
		else
			gnOutmostTopic=1;
	}
	return (gnOutmostTopic==1);
}

function sync()
{
	if(gaPaths.length>0)
	{
		var oParam=createSyncInfo();
		var oMessage=new whMessage(WH_MSG_SYNCTOC,this,1,oParam);
		SendMessage(oMessage);
	}
}


function avenueInfo(sName,sPrev,sNext)
{
	this.sName=sName;
	this.sPrev=sPrev;
	this.sNext=sNext;
}

function getCurrentAvenue()
{
	var oParam=new Object();
	oParam.sAvenue=null;
	var oMessage=new whMessage(WH_MSG_GETCURRENTAVENUE,this,1,oParam);
	SendMessage(oMessage);
	return oParam.sAvenue;
}

function unRegisterListener()
{
	if(gbAIRSSL)
		return;
	sendInvalidSyncInfo();
	enableWebSearch(false);
	if(whtopic_foldUnload)
		whtopic_foldUnload();
}

function onSendMessage(oMsg)
{
	var nMsgId=oMsg.nMessageId;
	if(nMsgId==WH_MSG_GETAVIAVENUES)
	{
		oMsg.oParam.aAvenues=gaAvenues;
		return false;
	}
	else if(nMsgId==WH_MSG_GETTOCPATHS)
	{
		if(isOutMostTopic())
		{
			oMsg.oParam.oTocInfo=createSyncInfo();
			return false;		
		}
		else
			return true;
	}
	else if(nMsgId==WH_MSG_NEXT)
	{
		goAvenue(true);
	}
	else if(nMsgId==WH_MSG_PREV)
	{
		goAvenue(false);
	}
	else if(nMsgId==WH_MSG_WEBSEARCH)
	{
		websearch();
	}
	return true;
}

function goAvenue(bNext)
{
	var sTopic=null;
	var sAvenue=getCurrentAvenue();
	var nAvenue=-1;
	if(sAvenue!=null&&sAvenue!="")
	{
		for(var i=0;i<gaAvenues.length;i++)
		{
			if(gaAvenues[i].sName==sAvenue)
			{
				nAvenue=i;
				break;
			}
		}
		if(nAvenue!=-1)
		{
			if(bNext)
				sTopic=gaAvenues[nAvenue].sNext;
			else
				sTopic=gaAvenues[nAvenue].sPrev;
		}
	}
	else
	{
		for(var i=0;i<gaAvenues.length;i++)
		{
			if(gaAvenues[i].sNext!=null&&gaAvenues[i].sNext.length>0&&bNext)
			{
				sTopic=gaAvenues[i].sNext;
				break;
			}
			else if(gaAvenues[i].sPrev!=null&&gaAvenues[i].sPrev.length>0&&!bNext)
			{
				sTopic=gaAvenues[i].sPrev;
				break;
			}
		}
	}
	
	if(sTopic!=null&&sTopic!="")
	{
		if(gsPPath!=null&&gsPPath!="")
		{
			sFullTopicPath=_getFullPath(gsPPath,sTopic);
			document.location=sFullTopicPath;
		}
	}
}

function canGo(bNext)
{
	for(var i=0;i<gaAvenues.length;i++)
	{
		if((gaAvenues[i].sNext!=null&&gaAvenues[i].sNext.length>0&&bNext)||
			(gaAvenues[i].sPrev!=null&&gaAvenues[i].sPrev.length>0&&!bNext))
			return true;
	}
	return false;
}

function show()
{
	if(gbBadUriError)
	{
		var strMainPage = document.location.href;
		var indx = strMainPage.toLowerCase().indexOf("/mergedprojects/");
		if(indx != -1)
			window.location = strMainPage.substring(0, indx+1) + "whcsh_home.htm#topicurl=" + strMainPage.substring(indx+1);
		else if(gsStartPage!="")
				window.location=gsStartPage+"#"+gsRelCurPagePath;
	}
	else if(gsStartPage!="")
			window.location=gsStartPage+"#"+gsRelCurPagePath;
}

function hide()
{
	if(goFrame!=null)
	{
		goFrame.location=window.location;
	}
}

function isTopicOnly()
{
	if(gnTopicOnly==-1)
	{
		var oParam=new Object();
		oParam.oFrame=null;
		var oMsg=new whMessage(WH_MSG_GETSTARTFRAME,this,1,oParam);
		if(SendMessage(oMsg))
		{
			goFrame=oParam.oFrame;
			gnTopicOnly=0;
		}
		else
			gnTopicOnly=1;
	}
	if(gnTopicOnly==1)
		return true;
	else
		return false;
}

function websearch()
{
	if(gbNav4)
	{
		if(document.ehelpform)
			document.ehelpform.submit();
	}
	else
	{
		if(window.ehelpform)
			window.ehelpform.submit();
	}
}

function addSearchFormHref(sHref)
{
	gsSearchFormHref=sHref;
	enableWebSearch(true);
}

function searchB(nForm)
{
	var sValue=eval("document.searchForm"+nForm+".searchString.value");
	var oMsg=new whMessage(WH_MSG_SEARCHTHIS,this,1,sValue);
	SendMessage(oMsg);
}


function getSearchFormHTML()
{
	var sHTML="";
	gnForm++;
	var sFormName="searchForm"+gnForm;
	var sButton="<form name=\""+sFormName+"\" method=\"POST\" action=\"javascript:searchB("+gnForm+")\">"
	sButton+="<input type=\"text\" name=\"searchString\" value=\"- Full Text search -\" size=\"20\"/>";
	if("dummy"=="text")
	{
		sButton+="<a class=\"searchbtn\" href=\"javascript:void(0);\" onclick=\""+sFormName+".submit();return false;\">dummy</a>";
	}
	else if("dummy"=="image")
	{
		sButton+="<a class=\"searchbtn\" href=\"javascript:void(0);\" onclick=\""+sFormName+".submit();return false;\">"
		sButton+="<img src=\"dummy\" border=0></a>";
	}
	sButton+="</form>";
	sHTML="<td align=\"center\">"+sButton+"</td>";
	return sHTML;
}




function showHidePane(bShow)
{
	var oMsg=null;
	if(bShow)
		oMsg=new whMessage(WH_MSG_SHOWPANE,this,1,null);
	else
		oMsg=new whMessage(WH_MSG_HIDEPANE,this,1,null);
	SendMessage(oMsg);
}

function isShowHideEnable()
{
	if(gbIE4)
		return true;
	else
		return false;
}


function PickupDialog_Invoke()
{
	if(!gbIE4||gbMac||gbAIRSSL)
	{
		if(typeof(_PopupMenu_Invoke)=="function")
			return _PopupMenu_Invoke(PickupDialog_Invoke.arguments);
	}
	else
	{
		if(PickupDialog_Invoke.arguments.length>2)
		{
			var sPickup="dummy";
			var sPickupPath=gsPPath+sPickup;
			if(gbIE4)
			{
				var sFrame=PickupDialog_Invoke.arguments[1];
				var aTopics=new Array();
				for(var i=2;i<PickupDialog_Invoke.arguments.length;i+=2)
				{
					var j=aTopics.length;
					aTopics[j]=new Object();
					aTopics[j].m_sName=PickupDialog_Invoke.arguments[i];
					aTopics[j].m_sURL=PickupDialog_Invoke.arguments[i+1];
				}

				if(aTopics.length>1)
				{
					var nWidth=300;
					var nHeight=180;
					var	nScreenWidth=screen.width;
					var	nScreenHeight=screen.height;
					var nLeft=(nScreenWidth-nWidth)/2;
					var nTop=(nScreenHeight-nHeight)/2;
					if(gbIE4)
					{
						var vRet=window.showModalDialog(sPickupPath,aTopics,"dialogHeight:"+nHeight+"px;dialogWidth:"+nWidth+"px;resizable:yes;status:no;scroll:no;help:no;center:yes;");
						if(vRet)
						{
							var sURL=vRet.m_url;
							if(sFrame)
								window.open(sURL,sFrame);
							else
								window.open(sURL,"_self");
						}
					}
				}
				else if(aTopics.length==1)
				{
					var sURL=aTopics[0].m_sURL
					if(sFrame)
						window.open(sURL,sFrame);
					else
						window.open(sURL,"_self");
				}
			}
		}
	}
}

function isQuote( a_ch )
{
	return ( a_ch == gsQuote );
} 

function escapeRegExp(str)
{
	var specials = new RegExp("[.*+?|()\\^\\$\\[\\]{}\\\\]", "g"); // .*+?|()^$[]{}\
	return str.replace(specials, "\\$&");
}

///////////////////////////jomart/////////////////////////////////

function createAccentRegexp(characters) {
		//alert(characters);
		// Replaces all accented characters.
		var deaccentedString = deaccent(characters);
		// Escapes all regexp meta characters.
		var cleanString = deaccentedString;
		//alert(cleanString);
		var accentReplacer = function(character) {
			//alert(character);
			var h = charToAccentedCharClassMap[character] || character;
			//alert(h);
			//return h;
			return h + '([\u0640\u200C]\\p{Mn}+|[\u0640\u200C])*';
			//return h + '([\u200C]\\p{Mn}+|[\u200C])*';
			//return h + '([\u0640]\\p{Mn}+|[\u0640])*';
		};
		
		// Matches anything *but* a whitespace and replaces it.
		
		var regexp = cleanString.replace(/\S/g, accentReplacer);
		//alert(regexp);
		return regexp;
		//return XRegExp(regexp, "g");
}

	/*******************
	 * Returns a string in which each accented and lower-case character from the
	 * input is replaced with the respective upper-case base character in the A-Z
	 * range (e.g. ä->A, è->E, å->A, ë->E). Hence, the return value for
	 * "séléction" is "SELECTION".
	 *******************/
function deaccent(accentedString) {
		var result = accentedString;
		for(var key in charToAccentedCharClassMap) {
			//alert(key);
			result = result.replace(XRegExp(charToAccentedCharClassMap[key], "g"), key);
		
		}
		//alert(result);
		return result;
}

var charToAccentedCharClassMap = {

//number
"0":'(0|\u0660)',
"1":'(1|\u0661)',
"2":'(2|\u0662)',
"3":'(3|\u0663)',
"4":'(4|\u0664)',
"5":'(5|\u0665)',
"6":'(6|\u0666)',
"7":'(7|\u0667)',
"8":'(8|\u0668)',
"9":'(9|\u0669)',
//arabic
"\u0671":'([\u0627\u0625\u0622\u0623\u0671]\\p{Mn}+|[\u0627\u0625\u0622\u0623\u0671])',
"\u0623":'([\u0627\u0625\u0622\u0623\u0671]\\p{Mn}+|[\u0627\u0625\u0622\u0623\u0671])',
"\u0627":'([\u0627\u0625\u0622\u0623\u0671]\\p{Mn}+|[\u0627\u0625\u0622\u0623\u0671])',
"\u0625":'([\u0627\u0625\u0622\u0623\u0671]\\p{Mn}+|[\u0627\u0625\u0622\u0623\u0671])',
"\u0622":'([\u0627\u0625\u0622\u0623\u0671]\\p{Mn}+|[\u0627\u0625\u0622\u0623\u0671])',
"\u06D6":'(\u06D6\\p{Mn}+|\u06D6)',
"\u0628":'(\u0628\\p{Mn}+|\u0628)',
"\u062A":'(\u062A\\p{Mn}+|\u062A)',
"\u062B":'(\u062B\\p{Mn}+|\u062B)',
"\u062C":'(\u062C\\p{Mn}+|\u062C)',
"\u062D":'(\u062D\\p{Mn}+|\u062D)',
"\u062E":'(\u062E\\p{Mn}+|\u062E)', 
"\u062F":'(\u062F\\p{Mn}+|\u062F)',
"\u0630":'(\u0630\\p{Mn}+|\u0630)',
"\u0631":'(\u0631\\p{Mn}+|\u0631)',
"\u0632":'(\u0632\\p{Mn}+|\u0632)',
"\u0633":'(\u0633\\p{Mn}+|\u0633)',
"\u0634":'(\u0634\\p{Mn}+|\u0634)',
"\u0635":'(\u0635\\p{Mn}+|\u0635)',
"\u0636":'(\u0636\\p{Mn}+|\u0636)',
"\u0637":'(\u0637\\p{Mn}+|\u0637)',
"\u0638":'(\u0638\\p{Mn}+|\u0638)',
"\u0639":'(\u0639\\p{Mn}+|\u0639)',
"\u063A":'(\u063A\\p{Mn}+|\u063A)',
"\u0641":'(\u0641\\p{Mn}+|\u0641)',
"\u0642":'(\u0642\\p{Mn}+|\u0642)',
"\u0643":'(\u0643\\p{Mn}+|\u0643)',
"\u0644":'(\u0644\\p{Mn}+|\u0644)',
"\u0645":'(\u0645\\p{Mn}+|\u0645)',
"\u0646":'(\u0646\\p{Mn}+|\u0646)',
"\u0647":'([\u0629\u0647]\\p{Mn}+|[\u0629\u0647])',
"\u064A":'(\u064A\\p{Mn}+|\u064A)',
"\u0649":'([\u0649\u0626]\\p{Mn}+|[\u0649\u0626])',
"\u0626":'([\u0626\u0649]\\p{Mn}+|[\u0626\u0649])',
"\u0621":'(\u0621\\p{Mn}+|\u0621)',
"\u0629":'([\u0629\u0647]\\p{Mn}+|[\u0629\u0647])',
"\u0648":'([\u0624\u0648]\\p{Mn}+|[\u0624\u0648])',
"\u0624":'([\u0624\u0648]\\p{Mn}+|[\u0624\u0648])',
"\u0640":'([\u0640]\\p{Mn}+|[\u0640])',	


'A':'[Aa\xaa\xc0\xc5\xe0\xe5\u0100\u0105\u01cd\u01ce\u0200\u0203\u0226\u0227\u1d2c\u1d43\u1e00\u1e01\u1e9a\u1ea0\u1ea3\u2090\u2100\u2101\u213b\u249c\u24b6\u24d0\u3371\u3374\u3380\u3384\u3388\u3389\u33a9\u33af\u33c2\u33ca\u33df\u33ff\uff21\uff41]',
'B' : '[Bb\u1d2e\u1d47\u1e02-\u1e07\u212c\u249d\u24b7\u24d1\u3374\u3385-\u3387\u33c3\u33c8\u33d4\u33dd\uff22\uff42]',
'C' : '[Cc\xc7\xe7\u0106-\u010d\u1d9c\u2100\u2102\u2103\u2105\u2106\u212d\u216d\u217d\u249e\u24b8\u24d2\u3376\u3388\u3389\u339d\u33a0\u33a4\u33c4-\u33c7\uff23\uff43]',
'D' : '[Dd\u010e\u010f\u01c4-\u01c6\u01f1-\u01f3\u1d30\u1d48\u1e0a-\u1e13\u2145\u2146\u216e\u217e\u249f\u24b9\u24d3\u32cf\u3372\u3377-\u3379\u3397\u33ad-\u33af\u33c5\u33c8\uff24\uff44]',
'E' : '[Ee\xc8-\xcb\xe8-\xeb\u0112-\u011b\u0204-\u0207\u0228\u0229\u1d31\u1d49\u1e18-\u1e1b\u1eb8-\u1ebd\u2091\u2121\u212f\u2130\u2147\u24a0\u24ba\u24d4\u3250\u32cd\u32ce\uff25\uff45]',
'F' : '[Ff\u1da0\u1e1e\u1e1f\u2109\u2131\u213b\u24a1\u24bb\u24d5\u338a-\u338c\u3399\ufb00-\ufb04\uff26\uff46]',
'G' : '[Gg\u011c-\u0123\u01e6\u01e7\u01f4\u01f5\u1d33\u1d4d\u1e20\u1e21\u210a\u24a2\u24bc\u24d6\u32cc\u32cd\u3387\u338d-\u338f\u3393\u33ac\u33c6\u33c9\u33d2\u33ff\uff27\uff47]',
'H' : '[Hh\u0124\u0125\u021e\u021f\u02b0\u1d34\u1e22-\u1e2b\u1e96\u210b-\u210e\u24a3\u24bd\u24d7\u32cc\u3371\u3390-\u3394\u33ca\u33cb\u33d7\uff28\uff48]',
'I' : '[Ii\xcc-\xcf\xec-\xef\u0128-\u0130\u0132\u0133\u01cf\u01d0\u0208-\u020b\u1d35\u1d62\u1e2c\u1e2d\u1ec8-\u1ecb\u2071\u2110\u2111\u2139\u2148\u2160-\u2163\u2165-\u2168\u216a\u216b\u2170-\u2173\u2175-\u2178\u217a\u217b\u24a4\u24be\u24d8\u337a\u33cc\u33d5\ufb01\ufb03\uff29\uff49]',
'J' : '[Jj\u0132-\u0135\u01c7-\u01cc\u01f0\u02b2\u1d36\u2149\u24a5\u24bf\u24d9\u2c7c\uff2a\uff4a]',
'K' : '[Kk\u0136\u0137\u01e8\u01e9\u1d37\u1d4f\u1e30-\u1e35\u212a\u24a6\u24c0\u24da\u3384\u3385\u3389\u338f\u3391\u3398\u339e\u33a2\u33a6\u33aa\u33b8\u33be\u33c0\u33c6\u33cd-\u33cf\uff2b\uff4b]',
'L' : '[Ll\u0139-\u0140\u01c7-\u01c9\u02e1\u1d38\u1e36\u1e37\u1e3a-\u1e3d\u2112\u2113\u2121\u216c\u217c\u24a7\u24c1\u24db\u32cf\u3388\u3389\u33d0-\u33d3\u33d5\u33d6\u33ff\ufb02\ufb04\uff2c\uff4c]',
'M' : '[Mm\u1d39\u1d50\u1e3e-\u1e43\u2120\u2122\u2133\u216f\u217f\u24a8\u24c2\u24dc\u3377-\u3379\u3383\u3386\u338e\u3392\u3396\u3399-\u33a8\u33ab\u33b3\u33b7\u33b9\u33bd\u33bf\u33c1\u33c2\u33ce\u33d0\u33d4-\u33d6\u33d8\u33d9\u33de\u33df\uff2d\uff4d]',
'N' : '[Nn\xd1\xf1\u0143-\u0149\u01ca-\u01cc\u01f8\u01f9\u1d3a\u1e44-\u1e4b\u207f\u2115\u2116\u24a9\u24c3\u24dd\u3381\u338b\u339a\u33b1\u33b5\u33bb\u33cc\u33d1\uff2e\uff4e]',
'O' : '[Oo\xba\xd2-\xd6\xf2-\xf6\u014c-\u0151\u01a0\u01a1\u01d1\u01d2\u01ea\u01eb\u020c-\u020f\u022e\u022f\u1d3c\u1d52\u1ecc-\u1ecf\u2092\u2105\u2116\u2134\u24aa\u24c4\u24de\u3375\u33c7\u33d2\u33d6\uff2f\uff4f]',
'P' : '[Pp\u1d3e\u1d56\u1e54-\u1e57\u2119\u24ab\u24c5\u24df\u3250\u3371\u3376\u3380\u338a\u33a9-\u33ac\u33b0\u33b4\u33ba\u33cb\u33d7-\u33da\uff30\uff50]',
'Q' : '[Qq\u211a\u24ac\u24c6\u24e0\u33c3\uff31\uff51]',
'R' : '[Rr\u0154-\u0159\u0210-\u0213\u02b3\u1d3f\u1d63\u1e58-\u1e5b\u1e5e\u1e5f\u20a8\u211b-\u211d\u24ad\u24c7\u24e1\u32cd\u3374\u33ad-\u33af\u33da\u33db\uff32\uff52]',
'S' : '[Ss\u015a-\u0161\u017f\u0218\u0219\u02e2\u1e60-\u1e63\u20a8\u2101\u2120\u24ae\u24c8\u24e2\u33a7\u33a8\u33ae-\u33b3\u33db\u33dc\ufb06\uff33\uff53]',
'T' : '[Tt\u0162-\u0165\u021a\u021b\u1d40\u1d57\u1e6a-\u1e71\u1e97\u2121\u2122\u24af\u24c9\u24e3\u3250\u32cf\u3394\u33cf\ufb05\ufb06\uff34\uff54]',
'U' : '[Uu\xd9-\xdc\xf9-\xfc\u0168-\u0173\u01af\u01b0\u01d3\u01d4\u0214-\u0217\u1d41\u1d58\u1d64\u1e72-\u1e77\u1ee4-\u1ee7\u2106\u24b0\u24ca\u24e4\u3373\u337a\uff35\uff55]',
'V' : '[Vv\u1d5b\u1d65\u1e7c-\u1e7f\u2163-\u2167\u2173-\u2177\u24b1\u24cb\u24e5\u2c7d\u32ce\u3375\u33b4-\u33b9\u33dc\u33de\uff36\uff56]',
'W' : '[Ww\u0174\u0175\u02b7\u1d42\u1e80-\u1e89\u1e98\u24b2\u24cc\u24e6\u33ba-\u33bf\u33dd\uff37\uff57]',
'X' : '[Xx\u02e3\u1e8a-\u1e8d\u2093\u213b\u2168-\u216b\u2178-\u217b\u24b3\u24cd\u24e7\u33d3\uff38\uff58]',
'Y' : '[Yy\xdd\xfd\xff\u0176-\u0178\u0232\u0233\u02b8\u1e8e\u1e8f\u1e99\u1ef2-\u1ef9\u24b4\u24ce\u24e8\u33c9\uff39\uff59]',
'Z' : '[Zz\u0179-\u017e\u01f1-\u01f3\u1dbb\u1e90-\u1e95\u2124\u2128\u24b5\u24cf\u24e9\u3390-\u3394\uff3a\uff5a]'
};



