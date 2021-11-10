const Units = require('./units-words.controller');
module.exports = (router) => {
    router.get('/units/:unitid', Units.getWords);
    router.get('/units/:unitid/:id', Units.viewWord);
    router.post('/units/:id', Units.newWord);
    router.delete('/units/:unitid/:id',Units.deleteWord);
}