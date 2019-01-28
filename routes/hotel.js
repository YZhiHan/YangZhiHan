var router = require('express').Router();

// 页面渲染的路径
router.get('/add', function(req, res) {
  res.render('hotel/add', { title: '添加管理员' });
})
// router.get('/home',function(req,res){
//   res.render('hotel/home',{title:'Express'});
// })
module.exports = router;