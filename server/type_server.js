var db = require('./../db/db');
var hotel = {
    // 添加管理员
    add(req,res){
        db.insert('admin',req.body,function(e){
            res.send(e);
        })
    },
    // 查找管理员
    select(req,res){
        db.selectWhere('admin',req.body,function(e){
            res.send(e);
        })
    },
    // 更新管理员
    update(req,res){
        db.update('admin',req.body,function(e){
            res.send(e);
        })
    },
    // 添加客人信息
    addC(req,res){
        db.insert('customer',req.body,function(e){
            res.send(e);
        })
    },
    // 查询客人信息
    selectC(req,res){
        db.selectWhere('customer',req.body,function(e){
            res.send(e);
        })
    },
    // 更改客人信息
    updateC(req,res){
        db.update('customer',req.body,function(e){
            res.send(e);
        })
    }
}
module.exports = hotel;