var request = require("supertest");

describe('API', function() {
    var server;

    beforeEach(function(){
        server = require("../src/server.js");
    });

    afterEach(function() {
        server.close;
    });

    it("/ should return hello: 'world'", function test(done) {
        request(server)
        .get('/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, {"hello": "World"}, done);
    });
})

