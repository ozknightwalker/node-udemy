const express = require('express');
const app = express();

app.get('/', (request, response, next) => {
    response.send('Hello Express!!');
});

app.listen(3000);
