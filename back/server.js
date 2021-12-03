'use strict'
const cors = require('cors');
const authRoutes = require('./auth/auth.routes');
const unitRoutes = require('./units-and-words/unit.routes');
const express = require('express');
const properties = require('./config/properties');
const DB = require('./config/db');

DB();

const app = express();
const router = express.Router();

app.use(express.json());
app.use(cors());
app.use('/api', router);

authRoutes(router);
unitRoutes(router);
app.use(router);

app.listen(properties.PORT, () => console.log(`Server running on port ${properties.PORT}`));