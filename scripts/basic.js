console.log(adapter.browserDetails.browser);

const constraints = {
    'video': true,
    'audio': false
}

async function handleOpenCamera(event) {
    handleStream(await navigator.mediaDevices.getUserMedia(constraints));
    event.target.disabled = true;
}

function handleStream(stream) {
    const video = document.querySelector('video');
    console.log("Handling stream")
    if ("srcObject" in video) {
        video.srcObject = stream;
    } else {
        // Avoid using this in new browsers, as it is going away.
        video.src = URL.createObjectURL(stream);
    }
    window.stream = stream;
}

document.addEventListener("DOMContentLoaded", () => {
    const openCameraBtn = document.querySelector('#openCameraBtn');
    openCameraBtn.addEventListener('click', e => handleOpenCamera(e));
})