let User = require('../models/User')

let UserController = {
    //listar todos los usuarios
    show(req, res) {
        User.find({})
            .then(docs => {
                res.json(docs)
            }).catch(err => {
                res.json(err)
            })
    }
    ,
    //buscar usuario por id
    find(req,res){
        User.findById({
            _id: req.params.id
        })
        .then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    },
//eliminar un usuario
    destroy(req,res){
        User.findByIdAndRemove({
            _id: req.params.id
        })
        .then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    },
    //actualizar un  usuario
    update(req,res){
        User.update({
            _id: req.params.id
        },{
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            cedula:req.body.cedula,
            fechanaci:req.body.fechanaci,
            direccion:req.body.direccion
        })
        .then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    },
    //crear usuarios
    store(req, res) {
        User.create({
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            cedula:req.body.cedula,
            fechanaci:req.body.fechanaci,
            direccion:req.body.direccion
        }).then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    },

}

module.exports = UserController;
