const express = require('express');
const path  = require('path');
const app  = express();


//Static file
const publicPath = path.join(__dirname + '../public');
app.use(express.static(publicPath))

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('App listening on port 3000!');
});