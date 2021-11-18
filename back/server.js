'use strict'
const cors = require('cors');
const authRoutes = require('./auth/auth.routes');
const unitRoutes = require('./units-and-words/unit.routes');
const wordRoutes = require('./units-and-words/word.routes');
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
wordRoutes(router);
/*router.get('/', (req, res) => {
    res.send('Welcome to Stoody');
});*/
app.use(router);

app.listen(properties.PORT, () => console.log(`Server running on port ${properties.PORT}`));