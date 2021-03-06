const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/my-blog');
mongoose.Promise = Promise;

const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send();
});

app.use('/api/users', require('./routes/users'));
app.use('/api/blogs', require('./routes/blogs'));

app.get('*', function( req, res){
  res.status(404).send('Sorry, no page was found at this address');
});

module.exports = app;
