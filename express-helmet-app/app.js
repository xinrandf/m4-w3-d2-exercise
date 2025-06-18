'use strict'

const express = require('express');
const helmet = require('helmet'); // Add this line
const app = express();

app.use(helmet()); // Add this line

app.get('/', (req, res) => {
    console.log('route \'/\' called!');
    res.send({res: 'Sending 200 as response'});
});

app.listen(3000)
console.log('Express app is up and running on port 3000!');