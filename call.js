const pc = new RTCPeerConnection({

iceServers:[
{urls:"stun:stun.l.google.com:19302"}
]

})

let seconds = 0

function startTimer(){

setInterval(()=>{

seconds++

let min = Math.floor(seconds/60)
let sec = seconds % 60

if(sec < 10) sec = "0"+sec
if(min < 10) min = "0"+min

document.getElementById("timer").innerText = min+":"+sec

},1000)

}

async function startCall(){

const stream = await navigator.mediaDevices.getUserMedia({audio:true})

stream.getTracks().forEach(track=>{

pc.addTrack(track,stream)

})

startTimer()

}

startCall()

function endCall(){

pc.close()

window.location="dashboard.html"

}
