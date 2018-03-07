const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');

const app = require('../../app');
const Driver = mongoose.model('driver');

describe('Drivers controller', () => {
  it('POST to /api/drivers creates a new driver', done => {
    const postEmail = 'post@test.com';
    Driver.count().then(count => {
      request(app).post('/api/drivers').send({ email: postEmail }).end(() => {
        Driver.count().then(newCount => {
          // console.log('count:', count);
          // console.log('newCount:', newCount);
          assert(count + 1 === newCount);
        });
      });
    });
    done();
  });

  it('PUT to /api/drivers/id edits an existing driver', done => {
    const putEmail = 'put@test.com';
    const driver = new Driver({ email: putEmail, driving: false });

    driver.save().then(() => {
      request(app)
        .put(`/api/drivers/${driver._id}`)
        .send({ driving: true })
        .end(() => {
          Driver.findOne({ email: putEmail }).then(driver => {
            assert(driver.driving);
            done();
          });
        });
    });
  });

  it('DELETE to /api/drivers/id can delete a driver', done => {
    const deleteEmail = 'delete@test.com';
    const driver = new Driver({ email: deleteEmail });

    driver.save().then(() => {
      request(app).delete(`/api/drivers/${driver._id}`).end(() => {
        Driver.findOne({ email: deleteEmail }).then(driver => {
          assert(!driver);
          done();
        });
      });
    });
  });
});
