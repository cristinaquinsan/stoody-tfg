const mongoose = require('mongoose');
const dbURL = require('./properties').DB;

module.exports = () => {
    mongoose.connect(dbURL, { useNewURLParser: true })
        .then(() => console.log(`Mongo is connected on ${dbURL}`))
        .catch(err => console.log(`Connection has an error ${err}`));

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Mongo is disconnected');
            process.exit(0);
        });
    });
}