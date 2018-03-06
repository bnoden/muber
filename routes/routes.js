const DriversController = require('../controllers/drivers_controller');

module.exports = app => {
  // Watch for incoming request of GET to route localhost:3050/api
  app.get('/api', DriversController.greeting);
};
