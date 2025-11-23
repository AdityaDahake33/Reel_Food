const express = require('express');
const foodPartnerController = require('../routes/food-partner');

const router = express.Router();

router.get('/:id', foodPartnerController.getFoodPartnerById);

module.exports = router;