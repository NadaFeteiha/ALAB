const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

// morgan is a middleware that logs HTTP requests to the console.
// It is used here to log the requests to the console.
const morgan = require('morgan');

// Import the routes from the routes folder.
const aboutRoute = require('./routes/about');
const greetRoute = require('./routes/greet');
const imageRoute = require('./routes/image');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extends: true }));
app.use(morgan('dev'));


// Use the routes in the app. 
app.use('/about', aboutRoute);
app.use('/greet', greetRoute);
app.use('/image', imageRoute);
app.set('view engine', 'ejs');
app.use(express.static('images'));


app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.post('/submit-form', (req, res) => {
    const message = req.body.message;
    res.send(`You submitted: ${message} successfully.`);
});

// Start the server that listens on localhost. 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});