var router = require('express').Router();

// 页面渲染的路径
// 添加管理员
router.get('/addAdmin', function(req, res) {
  res.render('hotel/addAdmin', { title: '添加管理员' });
})
// 添加客人
router.get('/addCustom',function(req,res){
  res.render('hotel/addCustom',{title:'添加客人'});
})
// 客人列表
router.get('/customList',function(req,res){
  res.render('hotel/customList',{title:'查找客人'});
})
// 新增房间
router.get('/addRoom',function(req,res){
  res.render('hotel/addRoom',{title:'新增房间'});
})
// 添加房间类别
router.get('/addRoom_type',function(req,res){
  res.render('hotel/addRoom_type',{title:'新增房间类别'});
})
// 渲染房间类别列表
router.get('/roomtype_list',function(req,res){
  res.render('hotel/roomtype_list',{title:'新增房间类别'});
})
module.exports = router;