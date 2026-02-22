
const allowedDomain = "cxfootball.pages.dev";
if (window.top !== window.self || window.location.hostname !== allowedDomain) {
    window.top.location.href = "https://telegram.me/livecrichdofficial";
}

// ✅ Telegram prompt
if (confirm("Join Our Telegram Channel @cricxfootball")) {
    window.location.href = "https://telegram.me/cricxfootball";
}

// ✅ Streams list
const streams = {
    CN: "https://soco.livecdnem.com/ajax/chanel/type/5/link/channel78/off-tvc",
    WWE2: "https://www.sawlivenow.com/embed/ch85_SD/",
    WWE3: "https://modistreams.org/embed/royal-rumble-2026",
    m4: "https://aboutgame.cx/idea/?id=ufc",
    m5: "https://streamtp4.com/global1.php?stream=disney12",
    m6: "https://streamtp4.com/global1.php?stream=disney13",
    m7: "https://kleanembed.online/embed/1af0bc4894d29c7622de33f9ade9765a",
    m8: "https://stream196tp.com/global1.php?stream=tnt_1_gb",
    m9: "https://la12hd.com/vivo/canales.php?stream=espnplus2",
    m10: "http://lchd.pages.dev/skytest?dtv=https://mi9hodru2lnlspaswl8regarijequchiy.happy-ending.site/6c589385fb89fa5d0a87055dff33c06d.m3u8",
};

// ✅ Get stream ID from URL
function getStreamId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// ✅ Load stream into iframe
function loadStream() {
    const streamId = getStreamId();
    const iframe = document.getElementById('contentFrame');

    if (streamId && streams[streamId]) {
        iframe.src = streams[streamId];
    } else {
        // Redirect if invalid or missing ID
        window.location.href = "https://telegram.me/cricxfootball";
    }
}

// ✅ Auto landscape on fullscreen
function enableAutoRotateOnFullscreen() {
    document.addEventListener("fullscreenchange", async () => {
        if (document.fullscreenElement) {
            try {
                await screen.orientation.lock("landscape");
            } catch (err) {
                console.warn("Orientation lock failed:", err);
            }
        } else {
            try {
                await screen.orientation.unlock?.();
            } catch (err) {
                console.warn("Orientation unlock failed:", err);
            }
        }
    });
}

// ✅ Init
loadStream();
enableAutoRotateOnFullscreen();
