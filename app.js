const express = require('express')
const app = express()
const morgan = require('morgan');
const port = process.env.PORT || 3000;

const io = require('socket.io')(app.listen(port));
global.io = io;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// SOCKET
io.sockets.on('connection', function (socket) {
    console.log('Un client est connecté !');
});


var player = require('./routes/player.js');
var tracks = require('./routes/tracks.js');
app.use('/player', player);
app.use('/tracks', tracks);

app.use(morgan('tiny'));
