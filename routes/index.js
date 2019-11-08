const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    response.send('Hello Express from routes!!');
});

router.get('/json', (request, response, next) => {
    response.json({
        'greeting': 'from routes folder!!'
    });
});

router.get('/home', (request, response, next) => {
    response.render('home', null)
});

module.exports = router;
