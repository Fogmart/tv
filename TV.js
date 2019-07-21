var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
var curVideo;
var Vol ;
function onYouTubeIframeAPIReady() {
// return
    player = new YT.Player('player', {
        height: '360',
        width: '680',
        origin: 'http://tv.loc',
        playerVars:{
            // 'autoplay': 1,
            'controls': 0,
            'disablekb': 1,
            'showinfo': 0,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

}

function onPlayerReady(event) {
    event.target.mute();
    Vol = false
    updState()
}

function onPlayerStateChange(event) {
    event.target.playVideo();
}



function getVideoByTime() {
    h = new Date();

    curMin = parseInt(h.getMinutes())
    curSec = parseInt(h.getSeconds())
    curTS = curMin * 60 +  curSec
    video = "-"
    secDif = 0
    program.forEach(function(el) {
            beg = el.beg.split(':')
            end = el.end.split(':')
            begTS = parseInt(beg[1]) * 60 + parseInt(beg[2])
            endTS = parseInt(end[1]) * 60 + parseInt(end[2])

            if ( (curTS >= begTS) && (curTS <= endTS) )
            {
                secDif = curTS - begTS
                video = el.video
                return
            }
        });
    return {
        'video':video,
        'secDif': secDif
    }

}

function updState() {
    arr  = getVideoByTime()
    if (arr.video != curVideo) setVideo(arr.video, arr.secDif)
    setTimeout(updState, 1000);

}

function setVideo(video, secDif) {
    curVideo = video
    // console.log(curVideo)
    player.loadVideoById(
        {'videoId': video,
            'startSeconds': secDif,
        });
    player.playVideo();

}

function togleVol() {
    if (Vol){
        player.mute()
    } else {
        player.unMute()
    }
    Vol = !Vol

}