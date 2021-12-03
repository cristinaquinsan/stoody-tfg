const Units = require('./unit.controller');
module.exports = (router) => {
    router.get('/units/:username', Units.getUnits);
    router.get('/unit/:id', Units.viewUnit);
    router.get('/myLanguages/:username/:language', Units.getUnitsByLanguage);
    router.post('/units', Units.newUnit);
    router.put('/updateUnit:id', Units.editUnit);
    router.put('/updateFeedback', Units.updateFeedback)
    router.delete('/units/:id',Units.deleteUnit);
}