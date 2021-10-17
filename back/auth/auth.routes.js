const Users = require('./auth.controller');
module.exports = (router) => {
    router.post ('/signup', Users.createUser);
    router.post ('/login', Users.loginUser);
}