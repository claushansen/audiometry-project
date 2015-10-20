var args = arguments[0] || {};

$.help.open();



function onVideoOpen()
{
	
	var vidWin = Titanium.UI.createWindow({
    title : 'Video View Demo',
    backgroundColor : '#000',
    opacity : '0.5'

 });
 
 	var wrapperView = Titanium.UI.createView({
 	backgroundColor : '#000',
    opacity : '0.5'
 	});
   	
    var videoPlayer = Titanium.Media.createVideoPlayer({
    top : '25%',
    autoplay : true,
    backgroundColor : '#fff',
    width : 300,
    height : 169,
    mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,
    scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT
    

	});

	var closeButton = Ti.UI.createButton({
        title : "Exit Video",
        top : "0dp",
        height : "40dp",
        left : "10dp",
        right : "10dp"
    });

    closeButton.addEventListener('click', function() {
        videoPlayer.hide();
        videoPlayer.release();
        videoPlayer = null;
    });
    
    videoPlayer.add(closeButton);
    
videoPlayer.url = '/videos/SampleVideo_1080x720_1mb.mp4';
vidWin.add(videoPlayer);
vidWin.open();
    

	
};
        		