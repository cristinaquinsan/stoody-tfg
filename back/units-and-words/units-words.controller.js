const { Unit } = require('./unit.model');
const { Word } = require('./word.model');

/** Units */

module.exports.getUnits = (req, res) => {
    Unit.find({
        _username: req.body.username
    }).then((units) => {
        return res.send(units);
    }).catch((e) => {
        console.log(e);
        return res.status(500).send("Server error + ", e);
    })
}

module.exports.viewUnit = (req, res) => {
    Unit.findOne({
        _unitId: req.params.id
    }).then((unit) => {
        return res.send(unit);
    }).catch((e) => {
        console.log(e);
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

    newUnit.save()
        .then((unit) => {
            console.log(unit)
            res.send(unit);
        }).catch((e) => {
            console.log(e);
            return res.status(500).send("Server error + ", e);
        })

}

/*module.exports.editUnit = (req, res) => {
    Unit.findByIdAndUpdate({ 
        _id:req.params.id, 
        _username: req.body.username
    }, $set: req.body)
}*/

module.exports.deleteUnit = (req, res) => {
    Unit.findByIdAndDelete({
        _id: req.params.id
    }).then((unit) => {
        res.send(unit);
    })
}

/** Words */

module.exports.getWords = (req, res) => {
    Unit.find({
        _username: req.body.username
    }).then((units) => {
        return res.send(units);
    }).catch((e) => {
        console.log(e);
        return res.status(500).send("Server error + ", e);
    })
}

module.exports.viewWord = (req, res) => {
    Unit.findOne({
        _unitId: req.params.unitid,
        _wordId: req.params.id
    }).then((unit) => {
        return res.send(unit);
    }).catch((e) => {
        console.log(e);
        return res.status(500).send("Server error + ", e);
    })

}

module.exports.newWord = (req, res) => {
    const newWord = {
        front: req.body.front,
        back: req.body.back,
        unitid: req.body.unitid,
        feedback: req.body.feedback
    }

    newWord.save()
        .then((word) => {
            console.log(word)
            res.send(word);
        }).catch((e) => {
            console.log(e);
            return res.status(500).send("Server error + ", e);
        })

}

module.exports.deleteWord = (req, res) => {
    Unit.findByIdAndDelete({
        _id: req.params.id
    }).then((word) => {
        res.send(word);
    })
}