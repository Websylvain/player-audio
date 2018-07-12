const express = require('express'), routes = express.Router();
const Player = require('player');

// create player instance
var player = new Player('./assets/tracks/bbking-eric-clapton-thetrill.mp3');


routes.get('/list', function(req, res){
  res.status(200).send(player.list);
})

routes.get('/play', function(req, res){
  io.emit('play');
  player.play();
  res.status(200).send("PLAY");
})

routes.get('/pause', function(req, res){
  player.pause();
  io.emit('pause');
  res.status(200).send("PAUSE");
})

routes.get('/stop', function(req, res){
  player.stop();
  res.status(200).send("STOP");
})

routes.get('/next', function(req, res){
  player.next();
  res.status(200).send("NEXT");
})

routes.post('/add', function(req, res){
  io.emit('trackAdded', "./assets/tracks/"+ req.body.filename);
  player.add("./assets/tracks/"+ req.body.filename);
  res.status(200).send("ADD");
})

// ---------> EVENTS <---------//
player.on('playend', (tracks)=>{
  console.log('FINISH >' + tracks._name)
})
.on('playing', (tracks)=>{
  console.log('LET\'S GO >' + tracks._name)
})
.on('error', function(err){

})

// -------> END EVENTS <-------//
module.exports = routes;
