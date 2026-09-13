const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const streams = {

S1: "https://players.akamai.com/players/hlsjs?streamUrl=https://dishmt.slivcdn.com/hls/live/2011745/SonyMaxSD/master.m3u8?hdnea=exp=1789353717~acl=*~id=15567844849341243007~hmac=c7216c1f90823e010c1fa8d69b61361a9c1a731231ef275db159553a426c9c85",
S2: "https://players.akamai.com/players/hlsjs?streamUrl=https://dishmt.slivcdn.com/hls/live/2020434/TEN2HD/hdntl=exp=1787553014~acl=%2f*~id=08df7061-305d-455a-8753-ff53553a4fd4~data=hdntl~hmac=62c37a450b5abb20490a7dfa5751c8300390ec3a2449253be2e95f5d3ce5f29d/master_3500.m3u8",
S3: "https://players.akamai.com/players/hlsjs?streamUrl=https://dishmt.slivcdn.com/hls/live/2020591/TEN3HD/hdntl=exp=1786874841~acl=%2f*~id=2f25697f-7690-409f-a164-7263b9b3997b~data=hdntl~hmac=de679dcd724b58252270deb95d9b3b86e0ca8d7c75b5d9b99d1780869be21a33/master_3500.m3u8",
S4: "https://players.akamai.com/players/hlsjs?streamUrl=https://dishmt.slivcdn.com/hls/live/2020589/ten4hd/hdntl=exp=1785744438~acl=%2f*~id=0ef6a40b-2643-4d97-9b32-b94abda1ba73~data=hdntl~hmac=746fb0336b935b0476a3e6198b88834716800e1ee11c9a9c4222f0addf17966d/master_3500.m3u8",
S5: "https://players.akamai.com/players/hlsjs?streamUrl=https://dishmt.slivcdn.com/hls/live/2020593/SONYSIXHD/hdntl=exp=1785744438~acl=%2f*~id=0ef6a40b-2643-4d97-9b32-b94abda1ba73~data=hdntl~hmac=746fb0336b935b0476a3e6198b88834716800e1ee11c9a9c4222f0addf17966d/master_3500.m3u8"

};

document.getElementById("playerFrame").src =
streams[id] || streams.S1;
