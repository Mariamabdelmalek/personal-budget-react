// src\server.js
const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const port = 3000;
app.use(cors()); 
app.use('/',express.static('public'));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});
app.get('/budget', (req, res) => {
    

    fs.readFile('budget_data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send("Error reading budget data");
            return;
        }
        res.json(JSON.parse(data));
          
    });


});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});