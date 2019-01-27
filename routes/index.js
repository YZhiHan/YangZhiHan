var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/add', function(req, res) {
  res.render('hotel/add', { title: 'Express' });
});
router.get('/home',function(req,res){
  res.render('hotel/home',{title:'Express'});
})
module.exports = router;
