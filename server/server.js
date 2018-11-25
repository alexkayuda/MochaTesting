const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('Hello There');
});

app.get('/users', (request, response) => {
    response.send(
        [
            {
                name: 'Mike',
                age: 42
            },
            {
                name: 'Alex',
                age: 24
            },
            {
                name: 'Jane',
                age: 23
            }
        ]
    )
})

//app.listen(3000);


if(!module.parent) {
    app.listen(3000);
 }
//for testing purposes
module.exports.app = app;