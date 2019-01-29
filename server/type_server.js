var db = require('./../db/db');
var hotel = {
    add_custom(req,res){
        db.insert('customer',req.body,function(e){
            res.send(e);
        })
    },
    select_custom(req,res){
        db.select('customer',req.body,function(e){
            res.send(e);
        })
    },
    update_custom(req,res){
        db.update('hotel',req.body,function(e){
            res.send(e);
        })
    }
}
module.exports = hotel;