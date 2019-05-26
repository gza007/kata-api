const express = require('express');
const numbersController = require('../controllers/numbers');

const router = express.Router();

router.get('/add/:a/and/:b', numbersController.add);
router.get('/subtract/:a/from/:b', numbersController.subtract);
router.post('/multiply', numbersController.multiply);
router.post('/divide', numbersController.divide);

module.exports = router;
