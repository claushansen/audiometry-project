var args = arguments[0] || {};
var num = 1; 
var test1;
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
	Ti.API.info(num);
	if(num>0 && soundOn)
    	setTimeout(DecreaseVolume,200);
}

function StopTestOne(){
	test1= num;
	Ti.API.info("StopTestOne()");
	sound.stop();
	soundOn=false;
	//alert(test1);
}