var router = require('express').Router();
var server_type = require('./../server/type_server');
// 添加管理员
router.post('/addAdmin',function(req,res){
    server_type.add(req,res);
})
// 查找管理员
router.post('/selectAdmin',function(req,res){
    server_type.select(req,res);
})
// 修改管理员密码
router.post('/updateAdmin',function(req,res){
    server_type.update(req,res);
})
// 添加客人
router.post('/addCustom',function(req,res){
    server_type.addC(req,res);
})
// 查找客人信息
router.post('/selectCustom',function(req,res){
    server_type.selectC(req,res);
})
// 更改客人个人信息
router.post('/updateCustom',function(req,res){
    server_type.updateC(req,res);
})
// 新增房间
router.post('/addRoom',function(req,res){
    server_type.addR(req,res);
})
// 新增房间类别
router.post('/addRoom_type',function(req,res){
    server_type.addR_t(req,res);
})
// 查询房间类别表
router.post('/select_type',function(req,res){
    server_type.selectR_t(req,res);
})
// 修改房间类别信息
router.post('/update_type',function(req,res){
    server_type.updateR_t(req,res);
})
module.exports = router;