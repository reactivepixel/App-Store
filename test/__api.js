const request = require('supertest');
const expect = require('chai').expect;
const rewire = require('rewire');
const server = rewire('../src/server.js');
const tools = require('../lib/tools');
// onst nock = require('nock');
// var sinon = require("sinon");


// This will chunk all the tests for this section
// into the title API.
describe('API', () => {

  // Grab the server for each test.
  beforeEach(() => {
    //nock('http://localhost:3000').get('/apps/1').reply(200, "Mock Dev Server");
    // this.testdata = [
    //   {
    //     "id": 1,
    //     "title": "Best routes Ever Ever",
    //     "description": "A fast paced side scrolling shooter",
    //     "releaseDate": "2016-06-15T22:29:20.000Z",
    //     "createdAt": "2016-06-08T01:35:54.000Z",
    //     "updatedAt": "2016-06-08T04:14:46.000Z",
    //     "userId": 1
    //   },
    //   {
    //     "id": 9,
    //     "title": "Best routes Ever Ever",
    //     "description": "A fast paced side scrolling shooter",
    //     "releaseDate": "2016-06-15T22:29:20.000Z",
    //     "createdAt": "2016-06-08T03:45:55.000Z",
    //     "updatedAt": "2016-06-08T03:45:55.000Z",
    //     "userId": null
    //   },
    // ]
    this.testdata = [

    ]
    testdata = require('../lib/testdata.js');
    server.__set__(testdata, this.testdata);
  });

  // Close the connection after test.
  // afterEach(() => {
  //   server.close();
  // });

  // exec the post to the Endpoint, send a header, send done callback
  it('The API Status:', () => {
    // var results = tools.status({ first: 'Kevin', last: 'Kevin'})
    // expect(results).to.equal('Kevin, Kevin')

    tools.loadWiki({ first: "app", last: 1 }, (html) => {
      expect(html).to.be.ok;
      done();
    })

    // request(server)
    //   .post('/status')
    //   .set('Accept', 'application/json')
    //   .expect('Content-Type', /json/)
    //   .expect(200)
    //   .end(done);
  });

  // // This will chunk these subtests for this section
  // // into the title Apps.
  // describe('Apps', () => {
  //
  //   it('POST Create App /api/apps', (done) => {
  //     request(server)
  //     .post('/api/apps')
  //     .send({
  //       title: 'Best routes Ever Ever',
  //       description: 'A fast paced side scrolling shooter',
  //       releaseDate: '2016-06-15T22:29:20.000Z',
  //       userId: 1,
  //     })
  //     .expect(200)
  //     .end(done);
  //   });
  //   it('GETS all Apps /api/apps', (done) => {
  //     request(server)
  //       .get('/api/apps')
  //       .set('Accept', 'application/json')
  //       .expect('Content-Type', /json/)
  //       .expect(200)
  //       .end(done);
  //   });
  //   it('GETS app by id /api/apps/1', (done) => {
  //     request(server)
  //       .get('/api/apps/1')
  //       .set('Accept', 'application/json')
  //       .expect('Content-Type', /json/)
  //       .expect(200)
  //       .end(done);
  //   });
  //   it('POST Update App /api/apps/1', (done) => {
  //     request(server)
  //       .post('/api/apps/1')
  //       .send({
  //         id: 1,
  //         title: 'Best routes Ever Ever 1',
  //         description: 'A fast paced side scrolling shooter',
  //         releaseDate: '2016-06-15T22:29:20.000Z',
  //         userId: 1,
  //       })
  //       .expect(200)
  //       .end(done);
  //   });
  //   it('GET Apps by user id /api/users/1/apps', (done) => {
  //     request(server)
  //     .get('/api/users/1/apps')
  //     .set('Accept', 'application/json')
  //     .expect('Content-Type', /json/)
  //     .expect(200)
  //     .end(done);
  //   });
  //   it('DELETE Apps by id /api/apps/1', (done) => {
  //     request(server)
  //     .delete('/api/apps/9')
  //     .expect(200)
  //     .end(done);
  //   });
  // });
  //
  // describe('Users', () => {
  //   it('POST Create User /api/users', (done) => {
  //     request(server)
  //     .post('/api/users')
  //     .send({
  //       name: 'Kevin',
  //     })
  //     .expect(200)
  //     .end(done);
  //   });
  //
  //   it('GETS all Users /api/users', (done) => {
  //     request(server)
  //       .get('/api/users')
  //       .set('Accept', 'application/json')
  //       .expect('Content-Type', /json/)
  //       .expect(200)
  //       .end(done);
  //   });
  //
  //   it('GETS User by id /api/users/1', (done) => {
  //     request(server)
  //       .get('/api/users/1')
  //       .set('Accept', 'application/json')
  //       .expect('Content-Type', /json/)
  //       .expect(200)
  //       .end(done);
  //   });
  //
  //   it('POST Update User /api/users/1', (done) => {
  //     request(server)
  //       .post('/api/users/1')
  //       .send({
  //         id: 1,
  //         name: 'Kevin1',
  //       })
  //       .expect(200)
  //       .end(done);
  //   });
  //
  //   it('DELETE User by id /api/users/9', (done) => {
  //     request(server)
  //     .delete('/api/users/9')
  //     .expect(200)
  //     .end(done);
  //   });
  // });
});
