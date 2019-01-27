var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/add', function(req, res) {
  res.render('index/add', { title: 'Express' });
});
router.get('/home',function(req,res){
  res.render('index/home',{title:'Express'});
})
module.exports = router;
