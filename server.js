const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express(); 

app.use(express.static(__dirname + '/public'));

const options = {
    key: fs.readFileSync('./cert/openvidukey.pem'),
    cert: fs.readFileSync('./cert/openviducert.pem')
};

https.createServer(options, app).listen(8880);