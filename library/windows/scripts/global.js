var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");



var oLastBtn=0;

//window.onload = doOnload;

function doOnload(){
	if (document.readyState != "complete") return;
	//write in WinFamilyMenu on div id=WinFamilyMenu
	WinFamilyMenu.insertAdjacentHTML("AfterEnd", writeWinFamilyMenu());
	//event binders necessary for menu to work
	homegif.onmouseover = doMenu;
	window.document.onmouseover = hideMenu;
	if (location.href.indexOf("/windows/ie/download/windows.htm")!=-1) closeDiv();
	else if (location.href.indexOf("/windows/ie/download/128bit/detect_and_recommend.asp")!=-1) setActiveOption();
}


function RaiseButton(){
	window.event.cancelBubble=true;
	oBtn = window.event.srcElement;
	var bChosen = false;
	if(oLastBtn && oLastBtn != oBtn){
		HideButton();
	}
	if(oBtn.buttonType){
		if (oBtn.buttonType == "LeftNavChosen") {
		oBtn.className = "LeftNavUp";
		}
		else {
		oBtn.className = oBtn.buttonType + "Up"; 
		}
		oLastBtn=oBtn;
	}
	else
		oLastBtn = 0;
}


function DepressButton(){
	window.event.cancelBubble=true;
	oBtn = window.event.srcElement;
	if(oBtn.buttonType){
		oBtn.className = oBtn.buttonType + "Down"; 
		if (oBtn.className == "LeftNavChosenDown") {
		oBtn.className = "LeftNavDown";
		}
	}
}


function HideButton(){
	if (oLastBtn.buttonType == "LeftNavChosen") {
		oLastBtn.className = "LeftNavChosen";
	}
	else {
	oLastBtn.className = oLastBtn.buttonType + "Off";
	}
}

function MakeBGBlue(oRegion) {
	oRegion.style.backgroundColor="#99CCFF";	
	oRegion.style.cursor="hand";		
}

function MakeBGWhite(oRegion) {
	var oToEl = window.event.toElement;
	if ((oToEl && !oRegion.contains(oToEl))||!oToEl) {
	oRegion.style.backgroundColor="#FFFFFF";	
	}		
}

function ToolbarRed() {
	oSrcEl = window.event.srcElement;
	if (oSrcEl.tagName == "IMG") {
		oSrcEl.src = oSrcEl.src.substring(0,(oSrcEl.src.indexOf(".gif"))) + "-red.gif";
		window.event.cancelBubble = true;
	}
}
function ToolbarWhite() {
	oSrcEl = window.event.srcElement
	if (oSrcEl.tagName == "IMG") {
		oSrcEl.src = oSrcEl.src.substring(0,(oSrcEl.src.indexOf("-red.gif"))) + ".gif";
		window.event.cancelBubble = true;
	}
}

//*****************************************	 
//functions to support WinFamilyMenu
//*****************************************	 
function HideErrors(){
return true;
}

function doMenu() {
	if (document.readyState != "complete") return;

		window.event.cancelBubble = true;
		changeHome();
		MenuBorder.style.top = 85;
		MenuBorder.style.left = hometable.offsetLeft + 1;
		Win95.className = 'winFamilyMenuItem';
		Win98.className = 'winFamilyMenuItem';
		NTW.className = 'winFamilyMenuItem';
		NTS.className = 'winFamilyMenuItem';
		Tech.className = 'winFamilyMenuItem';
		MenuBorder.style.display = "block";
		FamilyMenu.style.display = "block";

}


function hideMenu(oItem){

	if (document.readyState != "complete") return;
	if (document.readyState == "complete") {
		var L_homegif_Address = '/windows/ie/images/hm-btn.gif';
		FamilyMenu.style.display = "none";
		MenuBorder.style.display = "none";
		homegif.src = L_homegif_Address;
		window.event.cancelBubble = true;
	}
}

function keepMenu(){
	if (document.readyState != "complete") return;
	window.event.cancelBubble = true;
}

function doHighlight(oItem){
	if (document.readyState != "complete") return;
	var thisItem = document.all(oItem);	
	thisItem.className = 'highlightItem';
	window.event.cancelBubble = true;
}

function doUnHighlight(oItem){
	if (document.readyState != "complete") return;
	var thisItem = document.all(oItem);	
	thisItem.className = 'winFamilyMenuItem';
	window.event.cancelBubble = true;
}

function cancelBubble(){
	window.event.cancelBubble = true;
}

function doDepress(oItem){
	if (document.readyState != "complete") return;
	var thisItem = document.all(oItem);	
	thisItem.className = 'depressItem';
	window.event.cancelBubble = true;
}

function changeHome(){
	if (document.readyState != "complete") return;
	var L_homegif_Address = '/windows/ie/images/hm-btn-dwn.gif';
	homegif.src = L_homegif_Address;
	window.event.cancelBubble = true;
}

function writeWinFamilyMenu(){
	var r;
	var L_WinFam_Address = '/windows/';
	var L_Win95_Address = '/windows95/';
	var L_Win98_Address = '/windows98/';
	var L_NTW_Address = '/ntworkstation/';
	var L_NTS_Address = '/ntserver/';
	var L_Win2000Server_Address = '/windows/server/';
	var L_Win2000Pro_Address = '/windows/professional/';
	var L_Tech_Address = '/windows/technologies/';
	var L_WinFam_Title = 'Windows Family Homepage';
	var L_Win95_Title = 'Windows 95 Homepage';
	var L_Win98_Title = 'Windows 98 Homepage';
	var L_NTW_Title = 'Windows NT Workstation Homepage';
	var L_NTS_Title = 'Windows NT Server Homepage';
	var L_Win2000Server_Title = 'Windows 2000 Server';
	var L_Win2000Pro_Title = 'Windows 2000 Professional';
	var L_Tech_Title = 'Windows Technologies Homepage';
	var L_WinFam_Text = 'Windows Home';
	var L_Win95_Text = 'Windows 95';
	var L_Win98_Text = 'Windows 98';
	var L_NTW_Text = 'Windows NT Workstation 4.0';
	var L_NTS_Text = 'Windows NT Server 4.0';
	var L_Win2000Server_Text = 'Windows 2000 Server';
	var L_Win2000Pro_Text = 'Windows 2000 Professional';
	var L_Tech_Text = 'Windows Technologies';
	
	r="<DIV ID='MenuBorder' onMouseover='keepMenu();' STYLE='width:194;height:120;padding-left:0;padding-top:5;padding-bottom:35;padding-right:0;display:none;position:absolute;'>";
	r+="<DIV ID='FamilyMenu' onMouseover='keepMenu();' STYLE='width:194;display:none;position:absolute;background-color:#0099ff;font-family:verdana'>";
	r+=writeFamilyMenuItem("WinFam", L_WinFam_Address, L_WinFam_Title, L_WinFam_Text, true);
	r+=writeFamilyMenuItem("Win98", L_Win98_Address, L_Win98_Title, L_Win98_Text, true);
	r+=writeFamilyMenuItem("NTW", L_NTW_Address, L_NTW_Title, L_NTW_Text, true);
	r+=writeFamilyMenuItem("NTS", L_NTS_Address, L_NTS_Title, L_NTS_Text, true);
	r+=writeFamilyMenuItem("Win95", L_Win95_Address, L_Win95_Title, L_Win95_Text, true);
	r+=writeFamilyMenuItem("Win2000Pro", L_Win2000Pro_Address, L_Win2000Pro_Title, L_Win2000Pro_Text, true);
	r+=writeFamilyMenuItem("Win2000Server", L_Win2000Server_Address, L_Win2000Server_Title, L_Win2000Server_Text, true);
	r+=writeFamilyMenuItem("Tech", L_Tech_Address, L_Tech_Title, L_Tech_Text, false);
	r+="</DIV></DIV>"
	return r;
}

function writeFamilyMenuItem(strID, strHREF, strTitle, strText, bDash){
	var r;
	var L_DashLine_Text = '/windows/ie/images/dash-line-blu.gif';

	r="<A title='" + strTitle + "' target=_top HREF='" + strHREF + "'>";
	r+="<DIV CLASS=winFamilyMenuItem ID=" + strID + " onmousedown='doDepress(\"" + strID + "\");' onmouseover='doHighlight(\"" + strID + "\");' onmouseout='doUnHighlight(\"" + strID + "\")'>";
	r+=strText+"</DIV></A>";

	if (bDash){
		r+="<img src=" + L_DashLine_Text + " align=center onmouseover='cancelBubble();'><br>";
	}
	return r;
}

//*****************************************	 
//End of functions to support WinFamilyMenu
//*****************************************	 

}