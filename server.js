const { animals } = require('./data/animals.json');
const express = require('express');
const app = express();

// to add route
app.get('/api/animals', (req, res) => {
    let results = animals;
    console.log(req.query)
    res.json(results);
});

// listener
app.listen(3001, () => {
    console.log(`API server now on port 3001`);
});