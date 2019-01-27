var db = require('./../db/db');
var hotel = {
    add_custom(req,res){
        db.add('custom',req.body,function(e){
            res.send(e);
        })
    },
    update_custom(req,res){
        db.update('custom',req.body,function(e){
            res.send(e);
        })
    }
}
module.exports = hotel;