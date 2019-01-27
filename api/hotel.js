var router = require('express').Router();
var server_type = require('./../server/type_server');
// 添加客人
router.post('/add_custom',function(req,res){
    server_type.add_custom(req,res);
})
// 更新客人信息
router.post('/update_custom',function(req,res){
    server_type.update_custom(req,res);
})
module.exports = router;