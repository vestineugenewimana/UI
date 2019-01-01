
var request = require("request");

var base_url = "http://localhost:3000/api/v1/meetups";

const meetups = {
    id:'',
    createdon:'',
    location:'',
    images:'',
    topic:'',
    happeningOn:'',
    tags:''
};

describe("meetups List API Exists", function() {
     describe("GET /meetups", function() {
         it("returns status code 200", function(done) {
             request.get(base_url, function(error, response, body) {
             expect(response.statusCode).toBe(200);
             done();
         });
    });
 });
});
