const fs = require('fs');
const mm = require('musicmetadata');


var tracksController = class tracksController {

  constructor() {
    this.list = this.list.bind(this);
    this.getMetadata = this.getMetadata.bind(this);
    this._dir = "assets/tracks/";
  }

  getMetadata(req, res){
    var file = req.body.filename;
    return new Promise((resolve, reject) =>{
        mm(fs.createReadStream(file), function (err, metadata) {
          if(err){
            reject(err)
          }else{
            resolve(metadata)
          }
        });
    })
  }

  list(req, res){
    fs.readdir(this._dir,function(err,files){
      if(err) throw err;
      res.status(200).send(files);
    });
  }

}

module.exports = tracksController
