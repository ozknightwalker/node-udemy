const express = require('express');
const path = require('path');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');
app.engine('mustache', require('hogan-middleware').__express);

app.get('/', (request, response, next) => {
    response.send('Hello Express!!');
});

app.get('/json', (request, response, next) => {
    const data = {
        'greeting': 'Hello!!'
    };
    response.json(data);
});

app.get('/home', (request, response, next) => {
    response.render('home', null)
});

app.listen(3000);
