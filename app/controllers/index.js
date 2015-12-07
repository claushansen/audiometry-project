function doTest1() {
	
	/*
	 * If we have userid in properties fire test1
	 * else open login
	 */
	if(Ti.App.Properties.getString('userid')){
		var test1win = Alloy.createController('test_1_info');
	}else{
		var loginwin = Alloy.createController('login');
	}
	
    //alert('testing');
}
/*function doTest1() {  
    var w = Alloy.createController('test_1_info').getView();
    w.open();    
}
*/

function getHistoryList(e){
	 var HistoryList = Alloy.createController('history');
}

function getHelp(e){
	 var helpview = Alloy.createController('help');
}
function doLogout(e){
	Ti.App.Properties.removeProperty('userid');
	
}

$.index.open();
