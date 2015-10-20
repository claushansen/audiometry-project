var args = arguments[0] || {};
var num = 1; 
var counter = 0;
var width = 0;
var soundOn=false;
var sound = Ti.Media.createSound({              
    	url:"/audio/sound.wav", 
    	preload: true,
    	//looping:true 
	});
	
function StartTestOne(){
	sound.volume = 1.0;
	num = 1;
	sound.play();
	
    if(!soundOn) {
    	setTimeout(DecreaseVolume,200);
	soundOn=true;
    }
}

function DecreaseVolume() { 
	num-=0.025;	
	//sound.play();
	sound.volume = num;
	if(num>0 && soundOn)
    	setTimeout(DecreaseVolume,200);
}

function StopTestOne(){
	counter++;
	test1= num;
	width += 20;
	$.CustomProgressBar.width = width;
	sound.stop();
	soundOn=false;
	Ti.API.info(counter);
	if(counter == 3 || counter >= 3)
	{
		testDone(); 
	}
}
function testDone(){
    var w = Alloy.createController('test_2_info').getView();
    w.open(); 
 }

