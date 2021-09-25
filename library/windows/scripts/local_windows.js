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
	Frame_Supported = false;
	setDefaultICPMenuColor("#0099FF", "white", "#003399");
	setToolbarBGColor("white");
	setICPBanner("/windows/images/bnrWinfam.gif","/windows/default.asp","Microsoft Windows Family Home");

	//Home
	addICPMenu("HomeMenu", "Windows Home Pages", "","");
	addICPSubMenu("HomeMenu","Windows Home","/windows/default.asp");
	addICPSubMenu("HomeMenu","Windows 98","/windows98/default.asp");
	addICPSubMenu("HomeMenu","Windows NT Workstation 4.0","/ntworkstation/default.asp");
	addICPSubMenu("HomeMenu","Windows NT Server 4.0","/ntserver/default.asp");
	addICPSubMenu("HomeMenu","Windows 95","/windows95/default.asp");
	addICPSubMenu("HomeMenu","Windows 2000","/windows2000/default.asp");
	addICPSubMenu("HomeMenu","Windows Technologies","/windows/technologies/default.asp");
	
	//Beta Programs
	//addICPMenu("BetaMenu", "Windows 2000 Beta", "","/windows2000/Beta/");
	//addICPMenu("", "", "","");

	setICPSubMenuWidth ("HomeMenu", "absolute", 200);
	
}


}
