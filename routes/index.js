const DriversController = require('../controllers/drivers_controller');

module.exports = app => {
  // Watch for incoming request of GET to route localhost:<PORT>/api
  app.post('/api/drivers', DriversController.create);
  app.put('/api/drivers/:id', DriversController.edit);
  app.delete('/api/drivers/:id', DriversController.delete);
  app.get('/api/drivers', DriversController.index);
};
