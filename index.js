const express = require('express');
const path = require('path');

const app = express();
const APP_PORT = 3000;
//  enable express to find html templates
app.set('views', path.join(__dirname, 'views'));
// set express to render html using mustatch
app.set('view engine', 'mustache');
app.engine('mustache', require('hogan-middleware').__express);

// enable express to find static files (css, images, js) 
app.use(express.static(path.join(__dirname, 'public')))

// load routes
app.use('/', require('./routes/index'));

app.listen(APP_PORT);
console.log('Running app in http://localhost:' + APP_PORT)
