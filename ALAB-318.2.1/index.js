const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const morgan = require('morgan');

const aboutRoute = require('./routes/about');
const greetRoute = require('./routes/greet');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extends: true }));
app.use(morgan('dev'));

app.use('/about', aboutRoute);
app.use('/greet', greetRoute);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello from lab =>  318.2.1');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});