'use strict';

const express = require('express');

// Constants
const PORT = 5000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello DevOps Cloud World  Training !!! . Welcome To DevOps session. final approch is good welcome');});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
