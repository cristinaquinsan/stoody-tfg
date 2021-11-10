const Units = require('./units-words.controller');
module.exports = (router) => {
    router.get('/units', Units.getUnits);
    router.get('/units/:id', Units.viewUnit);
    router.post('/units', Units.newUnit);
    router.patch('/units/:id', Units.editUnit);
    router.delete('/units/:id',Units.deleteUnit);
}