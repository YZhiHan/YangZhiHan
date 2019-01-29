var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 渲染视图的路由
var Routerobject = require('./routes/index');
// var usersRouter = require('./routes/users');
// api路由
var ApiRouterobj = require('./api/index');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// 静态资源的挂载
app.use('/static',express.static(path.join(__dirname, 'public')));

// 挂载视图路由
for(var i in Routerobject){
  app.use(i,Routerobject[i]);
}
// 挂载api路由
for(var i in ApiRouterobj){
  app.use('/api'+ i,ApiRouterobj[i]);
}
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
