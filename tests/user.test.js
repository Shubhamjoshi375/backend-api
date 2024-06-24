// tests/user.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const mongoose = require('mongoose');

chai.use(chaiHttp);
chai.should();

describe('Users', () => {
  before((done) => {
    mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => done());
  });

  after((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(() => done());
    });
  });

  describe('GET /api/worko/user', () => {
    it('should get all users', (done) => {
      chai.request(app)
        .get('/api/worko/user')
        .auth('admin', 'password')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  });

  // Add more tests for other endpoints...
});
