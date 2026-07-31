const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const streams = {

S1: "https://players.akamai.com/players/hlsjs?streamUrl=https://dishmt.slivcdn.com/hls/live/2011747/TEN1HD/hdntl=exp=1785571630~acl=%2f*~id=3b35b572-ee31-4da1-a600-2421b52fdfca~data=hdntl~hmac=96762f7d4fe17b7551c0faaa9fefa4a1d03c000ab7a1138c53ac3d299d59c238/master_3500.m3u8",
S2: "https://players.akamai.com/players/hlsjs?streamUrl=https://dishmt.slivcdn.com/hls/live/2020434/TEN2HD/hdntl=exp=1785571630~acl=%2f*~id=3b35b572-ee31-4da1-a600-2421b52fdfca~data=hdntl~hmac=96762f7d4fe17b7551c0faaa9fefa4a1d03c000ab7a1138c53ac3d299d59c238/master_3500.m3u8",
S3: "https://players.akamai.com/players/hlsjs?streamUrl=https://dishmt.slivcdn.com/hls/live/2020591/TEN3HD/hdntl=exp=1785571630~acl=%2f*~id=3b35b572-ee31-4da1-a600-2421b52fdfca~data=hdntl~hmac=96762f7d4fe17b7551c0faaa9fefa4a1d03c000ab7a1138c53ac3d299d59c238/master_3500.m3u8",
S4: "https://players.akamai.com/players/hlsjs?streamUrl=https://dishmt.slivcdn.com/hls/live/2020589/ten4hd/hdntl=exp=1785571630~acl=%2f*~id=3b35b572-ee31-4da1-a600-2421b52fdfca~data=hdntl~hmac=96762f7d4fe17b7551c0faaa9fefa4a1d03c000ab7a1138c53ac3d299d59c238/master_3500.m3u8",
S5: "https://players.akamai.com/players/hlsjs?streamUrl=https://dishmt.slivcdn.com/hls/live/2020593/SONYSIXHD/hdntl=exp=1785571630~acl=%2f*~id=3b35b572-ee31-4da1-a600-2421b52fdfca~data=hdntl~hmac=96762f7d4fe17b7551c0faaa9fefa4a1d03c000ab7a1138c53ac3d299d59c238/master_3500.m3u8"

};

document.getElementById("playerFrame").src =
streams[id] || streams.S1;
