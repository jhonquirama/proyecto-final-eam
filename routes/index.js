let express = require('express');
let PlaceController = require('../controllers/PlaceController');

let router = express.Router();

router.get('/places', PlaceController.show);
router.post('/places', PlaceController.store);

module.exports = router;