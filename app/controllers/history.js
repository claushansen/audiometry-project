var args = arguments[0] || {};
$.history.open();
function viewResult(){
	alert('clicked');
 	var resultwin = Alloy.createController('history_item');
 }

