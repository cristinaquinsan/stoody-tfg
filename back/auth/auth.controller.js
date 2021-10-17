const User = require('./auth.dao');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'st00dy'

exports.createUser = (req, res) => {
    const newUser = {
        username: req.body.username,
        email: req.body.email,
        passwd: bcrypt.hashSync(req.body.passwd),
        motherlang: req.body.motherlang,
        studlangs: req.body.studlangs
    }

    User.create(newUser, (err, user) => {
        if (err && err.code === 11000) return res.status(409).send('Email already exists');
        if (err) return res.status(500).send("Server error");
        const expiration = 24 * 60 * 60;
        const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, { expiration: expiration });
        const dataUser = {
            name: user.name,
            email: user.email,
            motherlang:motherlang,
            studlangs: studlangs,
            accessToken: accessToken,
            expiration: expiration
        }

        res.send({dataUser})
    })
}

exports.loginUser = (req, res) => {
    const userData = {
        email: req.body.email,
        passwd: req.body.passwd
    }
    User.findOne({ email: userData.email }, (err, user) => {
        if (err) return res.status(500).send("Server error");
        if (!user) return res.status(409).send("Something is wrong");
        else {
            const passwdUncrypted = bcrypt.compareSync(userData.passwd, user.passwd);
            if (passwdUncrypted) {
                const expiration = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, { expiration: expiration });
                const dataUser = {
                    username: user.username,
                    email: user.email,
                    accessToken: accessToken,
                    expiration: expiration
                }
                res.send({dataUser})
            }
            else{
                return res.status(409).send("Something is wrong");
            }
        }
    })
}