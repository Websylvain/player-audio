var express = require('express'), routes = express.Router();

const tracksController = new (require('../controllers/tracksController.js'))();

routes.route('/list')
  .get(tracksController.list);
  //.post(tracksController.upload);

module.exports = routes;
