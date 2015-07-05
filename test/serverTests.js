var request = require('supertest');

describe('Routing', function () {
  var url = 'http://localhost:8888';

  describe('GET /', function () {
    it('response "Hello World!"', function (done) {
      request(url)
        .get('/')
        .send()
        .expect(200, done);
    });
  });
});
