
// /**
//  * Supertest lib is used to test express
//  */
// const request = require('supertest');

// const app = require('./server').app;


// describe('Testing get request', () => { 
//     /**
//      * Method: GET
//      * Route: "/"
//      */
//     it('should return \'Hello World\' response ', (done) => {
//         request(app) 
//             .get('/')                   //type of request (get, post, ... )
//             .expect(200)                //status code 200
//             .expect('Hello There')      //What do you expect to get back? 
//             .end(done);                 //call done callback function to let mocha know that function is ready to be tested.
//     });

//     /**
//      * Method: GET
//      * Route: "/users"
//      */
//     it('should should return my user object', (done) => {
//         request(app)
//             .get('users')
//             .expect(200)
//             .expect((res) => {
//                 expect(res.body).arrayContaining({name: 'Alex', age: 24});
//             })
//             .end(done);
//     });

// })