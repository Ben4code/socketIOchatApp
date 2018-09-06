const express = require('express');
const path  = require('path');
const http = require('http');
const socketIO = require('socket.io');



//Static file
const publicPath = path.join(__dirname, '../public');
const PORT = process.env.PORT || 3000;
const app  = express();
let server = http.createServer(app);


app.use(express.static(publicPath));
server.listen(PORT, () => {
    console.log('App listening on port 3000!');
});