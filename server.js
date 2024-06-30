'use strict';

const express = require('express');

// Constants
const PORT = 5000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Wel-Come to this nodejs page, This is DevOPs Devployment Project on K8s/EKS/ECS');});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
