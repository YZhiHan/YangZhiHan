var router = require('express').Router();

// 页面渲染的路径
router.get('/addAdmin', function(req, res) {
  res.render('hotel/addAdmin', { title: '添加管理员' });
})
router.get('/addCustom',function(req,res){
  res.render('hotel/addCustom',{title:'添加客人'});
})
router.get('/customList',function(req,res){
  res.render('hotel/customList',{title:'查找客人'});
})
module.exports = router;