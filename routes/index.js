let express = require('express');
let PlaceController = require('../controllers/PlaceController');
let UserController = require('../controllers/UserController');

let router = express.Router();
//listar todos los lugares
router.get('/places', PlaceController.show);
//buscar un lugar por id
router.get('/places/:id', PlaceController.find);
//crear un lugar
router.post('/places', PlaceController.store);
//actualizar un lugar
router.put('/places/:id', PlaceController.update);
//eliminar un lugar
router.delete('/places/:id', PlaceController.destroy);


//listar todos los usuarios
router.get('/user',UserController.show);
//buscar un usuario por id
router.get('/user/:id', UserController.find);
//crear un usuario
router.post('/user', UserController.store);
//actualizar un ususario
router.put('/user/:id', UserController.update);
//eliminar un usuario
router.delete('/user/:id', UserController.destroy);

module.exports = router;