var args = arguments[0] || {};

function playFullVideo() {  

	var videoPlayer2 = Titanium.Media.createVideoPlayer({
	    url:"/videos/videodemo.mp4",
	    backgroundColor: '#000',
	    fullscreen : true,
	    autoplay : true,
	    scalingMode: Titanium.Media.VIDEO_SCALING_ASPECT_FIT,
	    mediaControlMode: Titanium.Media.VIDEO_CONTROL_NONE        
	});
	
	videoPlayer2.addEventListener('complete', function(e){
			videoPlayer2.hide();
	        videoPlayer2.release();
	        videoPlayer2 = null;
	});
	
	videoPlayer2.addEventListener('click', function(e){
	        videoPlayer2.hide();
	        videoPlayer2.release();
	        videoPlayer2 = null;
	});
	
}

function backToMainMenu() {
	var frontpage = Alloy.createController('index');
	$.help.close();
}
