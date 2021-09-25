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

var ToolBar_Supported = ToolBar_Supported ;
if (ToolBar_Supported != null && ToolBar_Supported == true)
{
	//To Turn on/off Frame support, set Frame_Supported = true/false.
	Frame_Supported = false;

	// Customize default ICP menu color - bgColor, fontColor, mouseoverColor
	setDefaultICPMenuColor("#6699CC", "white", "red");

	// Customize toolbar background color
	setToolbarBGColor("white");

	// display ICP Banner
	setICPBanner("/library/toolbar/images/banner.gif","/isapi/gomscom.asp?target=/","microsoft.com Home") ;
	
	//***** Add ICP menus *****
	//Home
	addICPMenu("HomeMenu", "Home", "","/isapi/gomscom.asp?target=/");
	addICPSubMenu("HomeMenu","microsoft.com Home","/isapi/gomscom.asp?target=/");
	
	//Events & Training
	addICPMenu("EventsMenu", "Events/Training", "","https://web.archive.org/web/20000301164121/http://events.microsoft.com/isapi/events/default.asp");
	addICPSubMenu("EventsMenu","Events","https://web.archive.org/web/20000301164121/http://events.microsoft.com/isapi/events/default.asp");
	addICPSubMenu("EventsMenu","Microsoft Press ","https://web.archive.org/web/20000301164121/http://mspress.microsoft.com/");
	addICPSubMenu("EventsMenu","Online Seminars","/isapi/gomscom.asp?target=/seminar/1033/");
	addICPSubMenu("EventsMenu","Training & Certification","/isapi/gomscom.asp?target=/train_cert/");
 

	//Subscribe
	addICPMenu("SubscribeMenu", "Subscribe", "","/isapi/goregwiz.asp?target=/regsys/pic.asp?sec=0");
	addICPSubMenu("SubscribeMenu","Newsletters","/isapi/goregwiz.asp?target=/regsys/pic.asp?sec=0");
	addICPSubMenu("SubscribeMenu","Free E-Mail Account","https://web.archive.org/web/20000301164121/http://www.hotmail.com/");
	addICPSubMenu("SubscribeMenu","Messenger Service","https://web.archive.org/web/20000301164121/http://messenger.msn.com/");
	addICPSubMenu("SubscribeMenu","Manage Your Profile","/isapi/goregwiz.asp?target=/regsys/pic.asp");
	addICPSubMenu("SubscribeMenu","Privacy, Security &amp; Safety","/isapi/gomscom.asp?target=/info/privacy_security.htm");
	
	//About Microsoft
	addICPMenu("MicrosoftMenu", "About Microsoft", "","/isapi/gomscom.asp?target=/mscorp/");
	addICPSubMenu("MicrosoftMenu","Inside Our Site","/isapi/gomscom.asp?target=/backstage/");
	addICPSubMenu("MicrosoftMenu","Company Overview","/isapi/gomscom.asp?target=/mscorp/");
	addICPSubMenu("MicrosoftMenu","Jobs","/isapi/gomscom.asp?target=/jobs/");
	addICPSubMenu("MicrosoftMenu","Piracy","/isapi/gomscom.asp?target=/piracy/");
	addICPSubMenu("MicrosoftMenu","Press News","/isapi/gomscom.asp?target=/presspass/");
	addICPSubMenu("MicrosoftMenu","Investor Relations","/isapi/gomscom.asp?target=/msft/");

	//International
	addICPMenu("InternationalMenu", "US/Worldwide", "","/isapi/gomscom.asp?target=/worldwide/");
	addICPSubMenu("InternationalMenu","Int'l Web Sites & Offices","/isapi/gomscom.asp?target=/worldwide/");
	addICPSubMenu("InternationalMenu","US Web Sites & Offices","/isapi/gomscom.asp?target=/usa/");
	addICPSubMenu("InternationalMenu","MSN Worldwide","https://web.archive.org/web/20000301164121/http://www.msn.com/wwcon/intl_map.asp");

	//Downloads
	addICPMenu("DownloadMenu", "Downloads", "","/isapi/gomscom.asp?target=/downloads/");
	addICPSubMenu("DownloadMenu","Download Center","/isapi/gomscom.asp?target=/downloads/");
	addICPSubMenu("DownloadMenu","Office Update","https://web.archive.org/web/20000301164121/http://officeupdate.microsoft.com/");
	addICPSubMenu("DownloadMenu","Windows Update","https://web.archive.org/web/20000301164121/http://windowsupdate.microsoft.com/");

	//MSN.COM
	addICPMenu("MSNMenu", "MSN.com", "","https://web.archive.org/web/20000301164121/http://msn.com/");
	addICPSubMenu("MSNMenu","Entertainment","https://web.archive.org/web/20000301164121/http://go.msn.com/ZZS/0/D.asp");
	addICPSubMenu("MSNMenu","Free E-mail","https://web.archive.org/web/20000301164121/http://go.msn.com/ZZS/0/E.asp");
	addICPSubMenu("MSNMenu","Free Games","https://web.archive.org/web/20000301164121/http://go.msn.com/ZZS/0/B.asp");
	addICPSubMenu("MSNMenu","Free Home Pages","https://web.archive.org/web/20000301164121/http://go.msn.com/ZZS/0/2.asp");
	addICPSubMenu("MSNMenu","Greeting Cards","https://web.archive.org/web/20000301164121/http://go.msn.com/ZZS/0/C.asp");
	addICPSubMenu("MSNMenu","Headlines","https://web.archive.org/web/20000301164121/http://go.msn.com/zzs/0/7.asp");
	addICPSubMenu("MSNMenu","Internet Access","https://web.archive.org/web/20000301164121/http://go.msn.com/ZZS/0/6.asp");
	addICPSubMenu("MSNMenu","Money","https://web.archive.org/web/20000301164121/http://go.msn.com/zzs/0/8.asp");
	addICPSubMenu("MSNMenu","People & Chat","https://web.archive.org/web/20000301164121/http://go.msn.com/ZZS/0/F.asp");
	addICPSubMenu("MSNMenu","Shopping","https://web.archive.org/web/20000301164121/http://go.msn.com/ZZS/0/9.asp");
	addICPSubMenu("MSNMenu","Today on MSN","https://web.archive.org/web/20000301164121/http://go.msn.com/ZZS/0/G.asp");
	addICPSubMenu("MSNMenu","More...","https://web.archive.org/web/20000301164121/http://go.msn.com/ZZS/0/H.asp");
}


}
/*
     FILE ARCHIVED ON 16:41:21 Mar 01, 2000 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:56:57 Sep 25, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 72.278
  exclusion.robots: 0.14
  exclusion.robots.policy: 0.13
  RedisCDXSource: 1.589
  esindex: 0.009
  LoadShardBlock: 48.411 (3)
  PetaboxLoader3.datanode: 65.82 (4)
  CDXLines.iter: 16.773 (3)
  load_resource: 105.166
  PetaboxLoader3.resolve: 30.465
*/