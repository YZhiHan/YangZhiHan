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
    },
    // 新增房间
    addR(req,res){
        db.insert('room',req.body,function(e){
            res.send(e);
        })
    },
    // 新增房间类别
    addR_t(req,res){
        db.insert('room_type',req.body,function(e){
            res.send(e);
        })
    },
    // 查询房间类别表
    selectR_t(req,res){
        db.selectWhere('room_type',req.body,function(e){
            res.send(e);
        })
    },
    // 修改房屋类别信息
    updateR_t(req,res){
        db.update('room_type',req.body,function(e){
            res.send(e);
        })
    }
}
module.exports = hotel;