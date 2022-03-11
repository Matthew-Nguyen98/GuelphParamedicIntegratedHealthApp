'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json())
app.use('/api',contactRoutes.routes);
app.get("/", (req, res) => {
    res.send("API running fine");
  });
    
app.listen(config.port, ()=> console.log('Express Server listening on http://localhost:' + config.port));