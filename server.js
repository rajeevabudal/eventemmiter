const express = require("express");
const EventEmitter = require("events");


const emitter = new EventEmitter();
const app = express();


emitter.on("event", (data)=>{
    console.log("emitter = ", data)
})
app.get("/", (req, res)=>{
    res.send("Hello from node js")
    emitter.emit("event", "Hello world");
})

app.listen(8000);