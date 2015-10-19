var args = arguments[0] || {};

	
$.login.open();

$.loginbox.btn_login.addEventListener('click', function(e) {
	//alert('logging in');
	Ti.App.Properties.setString('userid',123456789) ;
	$.login.close();
});

$.loginbox.btn_cancel.addEventListener('click', function(e) {
	//alert('Cancelling');
	$.login.close();
});