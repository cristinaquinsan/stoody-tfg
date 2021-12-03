const { Unit } = require('./unit.model');

module.exports.getUnits = (req, res) => {
    Unit.find({
        username: req.params.username
    }).then((units) => {
        return res.send(units);
    }).catch((e) => {
        return res.status(500).send("Server error + ", e);
    })
}

module.exports.getUnitsByLanguage = (req, res) => {
    Unit.find({
        username: req.params.username,
        language: req.params.language
    }).then((units) => {
        return res.send(units);
    }).catch((e) => {
        return res.status(500).send("Server error + ", e);
    })
}

module.exports.viewUnit = (req, res) => {
    Unit.findOne({
        _id: req.params.id
    }).then((unit) => {
        return res.send(unit);
    }).catch((e) => {
        return res.status(500).send("Server error + ", e);
    })

}

module.exports.newUnit = (req, res) => {
    const newUnit = {
        unitname: req.body.unitname,
        username: req.body.username,
        language: req.body.language,
        words: req.body.words
    }

    Unit.create(newUnit, (err, unit) => {
        if (err) {
            return res.status(500).send("Server error + ", err);
        }
        const dataUnit = {
            unitname: unit.unitname,
            username: unit.username,
            language: unit.language,
            words: unit.words
        }
        res.send(dataUnit);
    })

}

module.exports.editUnit = (req, res) => {
    const updateUnit = {
        unitname: req.body.unitname,
        words: req.body.words
    }
    Unit.findOneAndUpdate({
        _id: req.params.id}, updateUnit, 
        {$set: updateUnit}, (data) => {
        return res.send(data);
    });
}

module.exports.updateFeedback = (req, res) => {
    const updateUnit = {
        words: req.body.words        
    }
    Unit.findOneAndUpdate({
        _id: req.body._id,}, updateUnit, {
     $set: updateUnit
    }, (data) => {
        return res.send(data);
    });
}

module.exports.deleteUnit = (req, res) => {
    Unit.findByIdAndDelete({
        _id: req.params.id
    }).then((unit) => {
        res.send(unit);
    })
}