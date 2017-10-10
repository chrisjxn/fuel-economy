const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    refuel = require('./controllers/controller'),
    port = 3000,
    app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/api/refuel', refuel.create);
app.get('/api/refuel', refuel.read);
app.put('/api/refuel/:id', refuel.update);
app.delete('/api/refuel/:id', refuel.delete);

app.listen(port, () => console.log(`listening on port ${port}`));