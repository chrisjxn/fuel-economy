const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = 3000,
    refuel = require('./controllers/controller');

app.use(bodyParser.json());
// app.use(express.static(__dirname + '/../public'));

app.post('/api/refuel', refuel.create);
// add read, update and read here
// make sure to convert strings to numbers (see examples using +)

app.listen(port, () => console.log(`listening on port ${port}`));