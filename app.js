const express = require('express')
const app = express()
const morgan = require('morgan');
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());


var player = require('./routes/player.js');
app.use('/player', player);
app.use(morgan('tiny'));

app.listen(port)
