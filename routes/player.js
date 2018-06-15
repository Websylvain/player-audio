var express = require('express'), router = express.Router();
var Player = require('player');
// create player instance
var player = new Player('./assets/tracks/bbking-eric-clapton-thetrill.mp3');


router.get('/list', function(req, res){
  res.status(200).send(player.list);
})

router.get('/play', function(req, res){
  player.play();
  res.status(200).send("PLAY");
})

router.get('/pause', function(req, res){
  player.pause();
  res.status(200).send("PAUSE");
})

router.get('/stop', function(req, res){
  player.pause();
  res.status(200).send("STOP");
})

router.get('/next', function(req, res){
  player.next();
  res.status(200).send("NEXT");
})

router.post('/add', function(req, res){
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
module.exports = router;
