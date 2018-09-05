const express = require('express');
const socket = require('socket.io');
const path = require('path');


const app = express();

//Middleware
app.use(express.static('public'))



const port = process.env.port || 3000;
const server  = app.listen(port, () => {
    console.log('App listening on port 3000!');
});


//Socket Setup
const io = socket(server); 

//Establich connection
io.on('connection', (socket)=>{
    console.log('connection made', socket.id);

    //Receive payload
    socket.on('chat', (data)=>{
        //Send back to all open sockets
        io.sockets.emit('chat', data);
    });

    //Broadcast messages
    socket.on('typing', data=>{
        socket.broadcast.emit('typing', data);
    })

})

