
 let Place = require('../models/Place')

let PlaceController = {
    //listar todos los lugares
    show(req, res) {
        Place.find({})
            .then(docs => {
                res.json(docs)
            }).catch(err => {
                res.json(err)
            })
    }
    ,
    //buscar lugar por id
    find(req,res){
        Place.findById({
            _id: req.params.id
        })
        .then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    },
//eliminar un lugar
    destroy(req,res){
        Place.findByIdAndRemove({
            _id: req.params.id
        })
        .then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    },
    //actualizar un  lugar
    update(req,res){
        Place.update({
            _id: req.params.id
        },{
            name:req.body.name,
            description:req.body.description,
            location:req.body.location
        })
        .then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    },
    //crear lugares
    store(req, res) {
        Place.create({
            name: req.body.name,
            description: req.body.description,
            location: req.body.location
        }).then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    },

}

module.exports = PlaceController;
