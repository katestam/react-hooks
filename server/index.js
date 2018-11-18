const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 1337;

app.use(express.static(path.join(__dirname, './../client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Listening on ${PORT}...`));