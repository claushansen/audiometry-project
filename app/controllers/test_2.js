var args = arguments[0] || {};
var counter = 0;
var sound = Ti.Media.createSound({              
    	url:"/audio/sound.wav", 
    	preload: true
    	//looping:true 
	});
	//sound.play();
var soundRepeats=0;
var colorAnswer=0;
var currentColor=0;
var redOffColor="#992E2E";
var redOnColor="#DD0000";
var blueOffColor="#2B4978";
var blueOnColor="#0000DD";
function randomXtoY(minVal, maxVal) {
	var randVal = minVal+(Math.random()*(maxVal-minVal));
	return Math.round(randVal);
}
function StartLightUp(){
	currentColor=0;
	soundRepeats=0;
	colorAnswer=randomXtoY(0,1);
    LightUp();
}
function LightUp(){
	/** /
	HideButtonColors();
	
	if(soundRepeats<3) {
		if(currentColor==0)
			LightRedButton();
		else
			LightBlueButton();
	}
	else {
		if(currentColor==0) {
			soundRepeats=0;
			currentColor=1;
			setTimeout(LightUp,1200);
		}
		else
			HideButtonColors();
	}
	soundRepeats++;
	/**/
	HideButtonColors();
	if(currentColor==0)
		LightRedButton();
	else
		LightBlueButton();
	soundRepeats++;
	if(colorAnswer==currentColor)
		StartSound();
	if(colorAnswer==currentColor)
		setTimeout(StopSound,400);
	if(soundRepeats<3) {
		setTimeout(HideButtonColors,400);
		setTimeout(LightUp,1200);
	}
	else {
		if(currentColor==0) {
			soundRepeats=0;
			currentColor=1;
			setTimeout(LightUp,1200);
		}
		else
			HideButtonColors();
	}
	/**/
}
function HideButtonColors() {
	$.buttomBtn.backgroundColor=blueOffColor;
	$.topBtn.backgroundColor=redOffColor;
}
function LightRedButton() {
//	sound.play();
	Ti.API.info("Display Red");
	$.topBtn.backgroundColor=redOnColor;
//	setTimeout(StopSound,400);
}
function LightBlueButton() {
	Ti.API.info("Display Blue");
	$.buttomBtn.backgroundColor=blueOnColor;
}
function StartSound(){
	sound.play();
} 
function StopSound(){
	sound.stop();
	HideButtonColors();
//	LightUp();
}
setTimeout(StartLightUp,3000);
function pressRedbutton(){
	counter++;
	Ti.API.info(counter);
	if(counter == 2|| counter >= 3)
	{
		testDone(); 
	}
}
function pressBluebutton(){
	counter++;
	Ti.API.info(counter);
	if(counter == 2 || counter >= 3)
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