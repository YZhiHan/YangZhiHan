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
        db.update('admin',req.body,'ID',function(e){
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
        db.update('customer',req.body,'ID',function(e){
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
        db.update('room_type',req.body,'type_id',function(e){
            res.send(e);
        })
    },
    // 删除房间类别
    deleteR_t(req,res){
        db.deletes('room_type',req.body,'type_id',function(e){
            console.log(req.body);
            res.send(e);
        })
    },
    // 添加房间位置
    addR_p(req,res){
        db.insert('room_position',req.body,function(e){
            res.send(e);
        })
    },
    // 查找房间位置
    selectR_p(req,res){
        db.select('room_position',req.body,function(e){
            res.send(e);
        })
    },
    // 多表联查(房间位置，房间，房间类型)
    selectMore(req,res){
        db.select_more('room_type','room','room_position',function(e){
            res.send(e);
        })
    },
    // 两表联查（房间，房间类型）
    selectTwo(req,res){
        db.select_two('room','room_type',req.body,function(e){
            res.send(e);
        })
    },
    // 修改房间信息
    updateRoom(req,res){
        db.update('room',req.body,'ID',function(e){
            res.send(e);
        })
    },
    // 删除房间信息
    deleteRoom(req,res){
        db.deletes('room',req.body,'ID',function(e){
            res.send(e);
        })
    },
    // 添加订单
    addO(req,res){
        db.insert('order_list',req.body,function(e){
            res.send(e);
        })
    },
    // 多表联查(订单列表，客户表，房间表，房间类型表)
    select_order(req,res){
        db.select_({table1:'order_list',table2:'customer',table3:'room',table4:'room_type'},function(e){
            res.send(e);
        })
    }
}
module.exports = hotel;