var args = arguments[0] || {};
var counter = 0;
var sound = Ti.Media.createSound({              
	url:"/audio/sound.wav",
	preload: true
	//looping:true 
});
	//sound.play();
var redOffColor="#992E2E";
var redOnColor="#DD0000";
var blueOffColor="#2B4978";
var blueOnColor="#0000DD";
var colorAnswer=0;
function randomXtoY(minVal, maxVal) {
	var randVal = minVal+(Math.random()*(maxVal-minVal));
	return Math.round(randVal);
}

setTimeout(StartUp,1000);
var soundCount=0;
var currentColor=0;
var disabledButtons=true;

// Det er så hvis de trykker før sekvensen er færdig, så kan vi stoppe alle timeouts
var timeouts=[];

function Reset() {
	// resetter timeouts of sletter alle instancer i arrayet
	for(var i=0; i<timeouts.length; i++) {
		clearTimeout(timeouts[i]);
	}
	timeouts=[];
	
	// Stopper alt lyd hvis der skulle være noget igang
	sound.stop();
	
	// "Deaktiverer/Dæmper" begge knapper så de kan blive sat på ny
	DimRed();
	DimBlue();
	
	// Resetter counter variablerne
	soundCount=0;
	currentColor=0;
	
}

function StartUp() {
	Reset();
	
	disabledButtons=false;
	
	// Generere et nyt svar
	colorAnswer=randomXtoY(0,1);
	
	// Venter 500ms så vi er sikre på alt er resettet og folk har fået et pusterum
	setTimeout(function() {
		PlaySequence();
	},500);
}

function PlaySequence() {
	soundCount=0;
	if(currentColor==0) {
		// Sætter den røde knap til og "lyse" op
		LightUpRed();
		
		// hvis svaret er den her knap så afspiller vi en lyd 
		// ellers så venter vi 1,5 sekund og "dæmper" lyset
		if(currentColor==colorAnswer) {
			StartSound();
		}
		else {
			timeouts.push(
				setTimeout(function() {
					currentColor++;
					DimRed();
					PlaySequence();
				},1500)
			);
		}
	}
	else if(currentColor==1) {
		// Sætter den blå knap til og "lyse" op
		LightUpBlue();
		
		// hvis svaret er den her knap så afspiller vi en lyd 
		// ellers så venter vi 1,5 sekund og "dæmper" lyset
		if(currentColor==colorAnswer) {
			StartSound();
		}
		else {
			timeouts.push(
				setTimeout(function() {
					DimBlue();
				},1500)
			);
		}
	}
}

function LightUpRed() {
	var now = new Date();
	Ti.API.info("Light up Red: \t\t"+ now.getTime());
	
	$.topBtn.backgroundColor=redOnColor;
}

function DimRed() {
	var now = new Date();
	Ti.API.info("Dim Red: \t\t\t"+ now.getTime());
	
	$.topBtn.backgroundColor=redOffColor;
}

function LightUpBlue() {
	var now = new Date();
	Ti.API.info("Light up Blue: \t\t"+ now.getTime());
	
	$.buttomBtn.backgroundColor=blueOnColor;
}

function DimBlue() {
	var now = new Date();
	Ti.API.info("Dim Blue: \t\t\t"+ now.getTime());
	
	$.buttomBtn.backgroundColor=blueOffColor;
}

function StartSound() {
	var now = new Date();
	Ti.API.info("Start Sound: \t\t"+ now.getTime());
	
	// Sætter lyden til og spille
	sound.play();
	
	// forøger antallet af lyde der er blevet spillet
	soundCount++;
	
	// Stopper lyden om 300ms
	timeouts.push(
		setTimeout(StopSound,300)
	);
}

function StopSound() {
	var now = new Date();
	Ti.API.info("Stop Sound: \t\t\t"+ now.getTime());
	
	// Stopper lyden
	sound.stop();
	
	// hvis lyden ikke er blevet spillet 3 gange, så start lyden igen
	// ellers dæmp lyset på den knap der er aktiv
	// hvis knappen er rød, så sæt nuværende knap til og være blå
	// og start sekvensen igen
	if(soundCount<3) {
		timeouts.push(
			setTimeout(StartSound,200)
		);
	}
	else {
		if(currentColor==0) {
			currentColor++;
			DimRed();
			PlaySequence();
		}
		else {
			DimBlue();
		}
	}
}

function pressRedbutton(){
	Ti.API.info("current test number: \t\t"+(counter+1));
	
	if(!disabledButtons) {
		counter++;
		if(counter == 9|| counter >= 10) {
			testDone(); 
		}
		else {
			setTimeout(StartUp,1);
		}
	}
}
function pressBluebutton(){
	Ti.API.info("current test number: \t\t"+(counter+1));
	
	if(!disabledButtons) {
		counter++;
		if(counter == 9 || counter >= 10) {
			testDone(); 
		}
		else {
			setTimeout(StartUp,1);
		}
	}
} 

function testDone(){
	Reset();
	var w = Alloy.createController('testresult').getView();
    w.open(); 
 }

//$.topBtn.backgroundColor = "#DD0000";
//$.buttomBtn.backgroundColor = "#0000DD";