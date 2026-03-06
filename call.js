const socket = io("https://darkcall.onrender.com");

let myID = localStorage.getItem("userid");

// Register user with server
socket.emit("register", myID);

// Listen for incoming calls
socket.on("incomingCall", (data) => {
    alert("Incoming call from " + data.from);
});
