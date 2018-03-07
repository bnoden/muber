const Driver = require('../models/driver');

const km = num => 1000.0 * num;
const miles = num => km(num) / 1.609344;

module.exports = {
  // GET
  index(req, res, next) {
    const { lng, lat } = req.query;

    Driver.geoNear(
      { type: 'Location', coordinates: [parseFloat(lng), parseFloat(lat)] },
      { spherical: true, maxDistance: miles(120) }
    )
      .then(drivers => res.send(drivers))
      .catch(next);
  },
  // POST
  create(req, res, next) {
    const driverProps = req.body;

    Driver.create(driverProps).then(driver => res.send(driver)).catch(next);
  },
  // PUT
  edit(req, res, next) {
    const driverId = req.params.id;
    const driverProps = req.body;

    Driver.findByIdAndUpdate({ _id: driverId }, driverProps)
      .then(() => Driver.findById({ _id: driverId }))
      .then(driver => res.send(driver))
      .catch(next);
  },
  // DELETE
  delete(req, res, next) {
    const driverId = req.params.id;

    Driver.findByIdAndRemove({ _id: driverId })
      .then(driver => res.status(204).send(driver))
      .catch(next);
  }
};
