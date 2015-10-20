var args = arguments[0] || {};
var counter = 0;
var sound = Ti.Media.createSound({              
    	url:"/audio/sound.wav", 
    	preload: true,
    	//looping:true 
	});
	//sound.play();
function pressRedbutton(){
	counter++;
	Ti.API.info(counter);
	if(counter == 2)
	{
		testDone(); 
	}
}
function pressBluebutton(){
	counter++;
	Ti.API.info(counter);
	if(counter == 2)
	{
		testDone(); 
	}
} 

function testDone(){
	var w = Alloy.createController('testresult').getView();
    w.open(); 
 }
//$.topBtn.backgroundColor = "#DD0000";
//$.buttomBtn.backgroundColor = "#0000DD";