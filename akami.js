const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const streams = {

S1: "https://players.akamai.com/players/hlsjs?streamUrl=https://dishmt.slivcdn.com/hls/live/2011747/TEN1HD/hdntl=exp=1785744438~acl=%2f*~id=0ef6a40b-2643-4d97-9b32-b94abda1ba73~data=hdntl~hmac=746fb0336b935b0476a3e6198b88834716800e1ee11c9a9c4222f0addf17966d/master_3500.m3u8",
S2: "https://players.akamai.com/players/hlsjs?streamUrl=https://dishmt.slivcdn.com/hls/live/2020434/TEN2HD/hdntl=exp=1786874841~acl=%2f*~id=2f25697f-7690-409f-a164-7263b9b3997b~data=hdntl~hmac=de679dcd724b58252270deb95d9b3b86e0ca8d7c75b5d9b99d1780869be21a33/master_3500.m3u8",
S3: "https://players.akamai.com/players/hlsjs?streamUrl=https://dishmt.slivcdn.com/hls/live/2020591/TEN3HD/hdntl=exp=1785744438~acl=%2f*~id=0ef6a40b-2643-4d97-9b32-b94abda1ba73~data=hdntl~hmac=746fb0336b935b0476a3e6198b88834716800e1ee11c9a9c4222f0addf17966d/master_3500.m3u8",
S4: "https://players.akamai.com/players/hlsjs?streamUrl=https://dishmt.slivcdn.com/hls/live/2020589/ten4hd/hdntl=exp=1785744438~acl=%2f*~id=0ef6a40b-2643-4d97-9b32-b94abda1ba73~data=hdntl~hmac=746fb0336b935b0476a3e6198b88834716800e1ee11c9a9c4222f0addf17966d/master_3500.m3u8",
S5: "https://players.akamai.com/players/hlsjs?streamUrl=https://dishmt.slivcdn.com/hls/live/2020593/SONYSIXHD/hdntl=exp=1785744438~acl=%2f*~id=0ef6a40b-2643-4d97-9b32-b94abda1ba73~data=hdntl~hmac=746fb0336b935b0476a3e6198b88834716800e1ee11c9a9c4222f0addf17966d/master_3500.m3u8"

};

document.getElementById("playerFrame").src =
streams[id] || streams.S1;
