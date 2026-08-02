// streams.js
const streamMap = {
  "PSL": {
    url: "https://pslurdu.bigbaat.app/out/v1/0ef369b90c7b4025b76621e46ee5fb70/index.m3u8",
    poster: "#"
  },
  "S": {
    url: "https%3A%2F%2Fstream.mux.com%2FKoxxjUGynnOrRH0054JSB702dX8pn4yAHUm6t02AowArnk.m3u8%3Ftoken%3DeyJhbGciOiJSUzI1NiJ9.eyJraWQiOiJGMDFHc2doUkVIM0RjZEowMGdZaDRKUHg3cW9SM2pDVENGaGR6YUtrT2lNdGMiLCJzdWIiOiJLb3h4alVHeW5uT3JSSDAwNTRKU0I3MDJkWDhwbjR5QUhVbTZ0MDJBb3dBcm5rIiwiYXVkIjoidiIsImV4cCI6MTc4NDI4NjY0OH0.N9f2_VL8MTL7Lce4gcxRp4kTo-rC3YrAOSnNqMObTZzxC06Mbu5Z9GMz8VXCrMtHUMtchGkVGlBvcqOBz9BJC8d92393aCrerLsh_iMwYq1T9qtmo9sk2e1QuWOHwMx_THcmaVWie1LJuNx1wftxjob8q0SJtuXl6MviY95wt8hvacirKL-z9i7AbsL_4nwrC4M-ewDKOw0I9X7H8m2eK91O1YFlidpZSZqFgLcfe82yH2Ey2fYL-lIJgf5LbFq2jtAIElAP5Uu4arbuO7JF2cx9yr5SkaCixHUZI7p6Nwu122CS2jnVwxQJ8G9LcO6Aozl8cx-TxmbKF11OfbPOQA&autoplay=1&controls=auto&theme=default&buffer=30&quality=1&speed=1&pip=1&fullscreen=1&no_download=1&width=responsive&aspect=16%3A9",
    poster: ""
  },
  "PSL2": {
    url: "https://psl.bigbaat.app/out/v1/f342445c31dd475bbf30c7304dbad14f/index.m3u8",
    poster: ""
  },
  "S2": {
    url: "https://amg01269-amg01269c1-sportstribal-emea-5204.playouts.now.amagi.tv/playlist/amg01269-willowtvfast-willowplus-sportstribalemea/playlist.m3u8",
    poster: "#"
  },
  "S3": {
    url: "https://oklive6-8.vkuser.net/cmaf/16975412333141/sig/86v9pvqQulE/expires/1785063321450/srcIp/66.78.59.15/urls/178.237.23.63/clientType/36/srcAg/CHROME_ANDROID/mid/15267412330325/get/hls_15267412330325.YQNfrjzxRZI.m3u8",
    poster: ""
  },
  "E": {
    url: "https://in-mc-flive.fancode.com/mumbai/4248197_english_hls_f9620bce7b28629_1ta-di_h264/1080p.m3u8?hdntl=Expires=1785748323~_GO=Generated~acl=/mumbai/4248197_english_hls_f9620bce7b28629_1ta-di_h264/*~Signature=Aej9sTUWxS8QjKEn0_KSbT9o8e3rwKBcOseD9Q5M3lk0kqIAsmqwyknXlVhWF7km0P4tm5CWE5wB_MfA9ujESamCXUYD",
    poster: ""
  },
  "LPL": {
    url: "https://in-mc-flive.fancode.com/mumbai/4246729_english_hls_5446b7db6477233_1ta-di_h264/1080p.m3u8?hdntl=Expires=1785677404~_GO=Generated~acl=/mumbai/4246729_english_hls_5446b7db6477233_1ta-di_h264/*~Signature=Aej9sTVht4Qv41GgWbSrnYBH4ZnpVgiRv_9Hw0ZuP1R2w49q8UTTX3rrbodmYdtAjTpO_vgV54Kaj1xRjF556pKNEMoN",
    poster: ""
  },
  "C": {
    url: "https://dai-partner.fancode.com/primary/140518_english_hls_9481b78c2323004_1ta-di_h264/index.m3u8",
    poster: ""
  },
  "F2": {
    url: "https://hugh.cdn.rumble.cloud/live/t34ch9px/slot-155/r0gr-9joe/chunklist.m3u8",
    poster: ""
  },
  "U8": {
    url: "https://hugh.cdn.rumble.cloud/live/v0xi25uh/slot-85/m8uy-e0k3_1080p/chunklist_DVR.m3u8",
    poster: ""
  },
  "MMA": {
    url: "https://tsn.newpersonalities.workers.dev/",
    poster: ""
  },
  "MMA2": {
    url: "https://ab2262fdd9c5.eu-central-1.playback.live-video.net/api/video/v1/eu-central-1.061051251131.channel.ucjk4S9HM0jD.m3u8",
    poster: ""
  },
  "S": {
    url: ".N9f2_VL8MTL7Lce4gcxRp4kTo----TxmbKF11OfbPOQA&autoplay=1&controls=auto&theme=default&buffer=30&quality=1&speed=1&pip=1&fullscreen=1&no_download=1&width=responsive&aspect=16:9",
    poster: ""
  },
  "U5": {
    url: "rda2lIOMpzK9DlSwKzXK6o2TC45fLlTFYdQwySsTP3efVWKfsuHlYXolCAxxg15URqOE5B&uid=YZ128Qk7yQvbLqXhSrt1Msl25aNuAldI&sid=XdbbfqKeCgqAfwc3K2tcDx4FaLZlzmyI&pid=YpZkPe8xrIefIbd2spJu6CNDmV5ahFkG&ref=tvgo.americatv.com.pe&ext_pb=0&es=pe-p5-p-e-cl1-clrp.cdn.mdstrm.com&ote=1783021451469&ot=fz8hNvpBKoD_fuOl5YrtEw&proto=https&pz=us",
    poster: ""
  },
  "U4": {
    url: "https://dfr80qz435crc.cloudfront.net/MNOP/Amagi/Caze/Caze_TV_BR/Caze_TV.m3u8",
    poster: ""
  },
  "U6": {
    url: "https://foxdtc-video.akamaized.net/ZXhwPTE3ODQ1NjQxODc7YWNsPS8qO3dzaWQ9ZThkZWM0NWJhZDNjN2Y3ODNlYWMxNjYxNDk2NjQyOTVfZm94ZHRjX2FuZHJvaWR0dl9lbi1VUztobWFjPW41QjV5bE90dDdFVkhTei9aVEU4QmlxcjFxWmNmTEJWN1VXK3BLSkhsMWs9/live/uhd-1-b-uw2/index.m3u8",
    poster: ""
  },
  "S4": {
    url: "https://bpl24middleeast.akamaized.net/hls/live/2109311/j15klM//master.m3u8",
    poster: ""
  },
  "U": {
    url: "https://amg00716-globo-amg00716c1-tcl-br-9495.playouts.now.amagi.tv/playlist.m3u8",
    poster: ""
  },
  "U3": {
    url: "https://live05.meung.app/live/41943555.m3u8",
    poster: ""
  },
  "U1": {
    url: "https://fastly.live.brightcove.com/6374054671112/eu-west-1/6058004203001/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3N0IjoiYXplMnp5LmVncmVzcy55ODN1ZWIiLCJhY2NvdW50X2lkIjoiNjA1ODAwNDIwMzAwMSIsImVobiI6ImZhc3RseS5saXZlLmJyaWdodGNvdmUuY29tIiwiaXNzIjoiYmxpdmUtcGxheWJhY2stc291cmNlLWFwaSIsInN1YiI6InBhdGhtYXB0b2tlbiIsImF1ZCI6WyI2MDU4MDA0MjAzMDAxIl0sImp0aSI6IjYzNzQwNTQ2NzExMTIifQ.3FmuTna3DAmY7xlhK5fk6LMrosrtrR5VsU2QOgYO5y4/playlist-hls.m3u8",
    poster: ""
  },
  "U2": {
    url: "https://live-n10.videostech.cloud/match/calcuttacustomsclub_vs_mohunbagansupergiant/HLS/master.m3u8",
    poster: "#"
  },
  "S1": {
    url: "https://viss.vilevodules.uk/fancode.m3u8",
    poster: ""
  },
};
