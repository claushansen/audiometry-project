var args = arguments[0] || {};

function openVideo() 
{
	var vidWin = Titanium.UI.createWindow({
    title : 'Video Guide',
    backgroundColor : 'rgba(0,0,0,0.5)',
    layout : 'vertical',
    fullscreen : true
 	});
 	
    var videoPlayer = Titanium.Media.createVideoPlayer({
    	url : '/videos/SampleVideo_1080x720_1mb.mp4',
	    backgroundColor : '#fff',
	    movieControlMode : Titanium.Media.VIDEO_CONTROL_DEFAULT,
	    scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT,
	    autoplay : true
	});

	var closeButton = Ti.UI.createButton({
        title : "Exit Video",
        top : "0dp",
        height : "40dp",
        left : "10dp",
        right : "10dp",
    });
    
    closeButton.addEventListener('click', function(){
    	vidWin.close();
    	videoPlayer.hide();
        videoPlayer.release();
        videoPlayer = null;
    });
    
    vidWin.add(videoPlayer);
    videoPlayer.add(closeButton);
    vidWin.open();
};
 

$.help.open();
        		