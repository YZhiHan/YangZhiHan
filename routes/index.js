var hotelRouter = require('./hotel');
var objRouter = {
  '/hotel':hotelRouter,
};
module.exports = objRouter;