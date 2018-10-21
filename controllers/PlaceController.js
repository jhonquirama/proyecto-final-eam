
 let Place = require('../models/Place')

let PlaceController = {
    show(req, res) {
        Place.find({})
            .then(docs => {
                res.json(docs)
            }).catch(err => {
                res.json(err)
            })
    }
    ,
    store(req, res) {
        Place.create({
            name: req.body.name,
            descripcion: req.body.descripcion
        }).then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    }
}

module.exports = PlaceController;
