const Units = require('./units-words.controller');
module.exports = (router) => {
    router.get('/units/:username', Units.getUnits);
    router.get('/unit/:id', Units.viewUnit);
    router.post('/units', Units.newUnit);
    //router.patch('/units/:id', Units.editUnit);
    router.delete('/units/:id',Units.deleteUnit);
}