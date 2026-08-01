const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const streams = {

S1: "https://players.akamai.com/players/hlsjs?streamUrl=https://dishmt.slivcdn.com/hls/live/2011747/TEN1HD/hdntl=exp=1785658035~acl=%2f*~id=f97165a8-5ced-453e-8883-77ff41708e0b~data=hdntl~hmac=67d88dee8a77ef64bfe92c38eea6226771fb8478a377f7e9056ffc1651eeaffa/master_3500.m3u8",
S2: "https://players.akamai.com/players/hlsjs?streamUrl=https://dishmt.slivcdn.com/hls/live/2020434/TEN2HD/hdntl=exp=1785658035~acl=%2f*~id=f97165a8-5ced-453e-8883-77ff41708e0b~data=hdntl~hmac=67d88dee8a77ef64bfe92c38eea6226771fb8478a377f7e9056ffc1651eeaffa/master_3500.m3u8",
S3: "https://players.akamai.com/players/hlsjs?streamUrl=https://dishmt.slivcdn.com/hls/live/2020591/TEN3HD/hdntl=exp=1785658035~acl=%2f*~id=f97165a8-5ced-453e-8883-77ff41708e0b~data=hdntl~hmac=67d88dee8a77ef64bfe92c38eea6226771fb8478a377f7e9056ffc1651eeaffa/master_3500.m3u8",
S4: "https://players.akamai.com/players/hlsjs?streamUrl=https://dishmt.slivcdn.com/hls/live/2020589/ten4hd/hdntl=exp=1785658035~acl=%2f*~id=f97165a8-5ced-453e-8883-77ff41708e0b~data=hdntl~hmac=67d88dee8a77ef64bfe92c38eea6226771fb8478a377f7e9056ffc1651eeaffa/master_3500.m3u8",
S5: "https://players.akamai.com/players/hlsjs?streamUrl=https://dishmt.slivcdn.com/hls/live/2020593/SONYSIXHD/hdntl=exp=1785658035~acl=%2f*~id=f97165a8-5ced-453e-8883-77ff41708e0b~data=hdntl~hmac=67d88dee8a77ef64bfe92c38eea6226771fb8478a377f7e9056ffc1651eeaffa/master_3500.m3u8"

};

document.getElementById("playerFrame").src =
streams[id] || streams.S1;
