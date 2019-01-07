var request = require("request");

var base_url = "http://localhost:3000/api/v1/questions";

const questions = {
    user:'fred',
    meetup:1,
    title:'agile development',
    body:'what will be discused'
};

describe("questions List API Exists", function() {
     describe("GET /questions", function() {
         it("returns status code 200", function(done) {
             request.get(base_url, function(error, response, body) {
             expect(response.statusCode).toBe(200);
             done();
         });
    });
 });
});