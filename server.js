const express = require("express")
const http = require("http")
const socket = require("socket.io")

const app = express()
const server = http.createServer(app)
const io = socket(server)

app.use(express.static("."))

let users = {}

io.on("connection",(socket)=>{

socket.on("register",(id)=>{

users[id] = socket.id

})

socket.on("call",(data)=>{

let target = users[data.to]

if(target){

io.to(target).emit("incomingCall",{

from:data.from

})

}

})

socket.on("disconnect",()=>{

for(let id in users){

if(users[id] === socket.id){

delete users[id]

}

}

})

})

server.listen(3000,()=>{

console.log("Server running on port 3000")

})
