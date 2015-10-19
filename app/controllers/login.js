var args = arguments[0] || {};

	
$.login.open();

$.loginbox.btn_login.addEventListener('click', function(e) {
	var url = 'http://www.pm-solution.dk/audiometry-project/data.php';
	var payload = {
		command: 'patientLogin',
		cpr: $.loginbox.tf_username.value,
		password: $.loginbox.tf_password.value
	};
	
	//alert('logging in');
	var xhr = Ti.Network.createHTTPClient({
		onload: function(){
			//do something on load
			//parsing responstext
			var json = JSON.parse(this.responseText);
			//get user array
			var userdata = json[0];
			// saving userdata in App.Properties
			Ti.App.Properties.setString('userid',userdata[0]) ;
			Ti.App.Properties.setString('user_first_name',userdata[1]) ;
			Ti.App.Properties.setString('user_last_name',userdata[2]) ;
			//open testinfo page
			var test1win = Alloy.createController('test_1_info');
			//closing login			
			$.login.close();
			//alert('success \n userid: '+ userdata[0] +'\n firstname: '+userdata[1]+'\n lastname: '+userdata[2]);
			
		},
		onerror: function(e){
			//do something if error
			alert('Kan ikke logge ind\n'+e.error);
		}
	});
		
	//opens the connection
	xhr.open('POST',url);
	
	//sending request with our connection
	xhr.send(payload);

	
	
	
});

$.loginbox.btn_cancel.addEventListener('click', function(e) {
	//alert('Cancelling');
	$.login.close();
});