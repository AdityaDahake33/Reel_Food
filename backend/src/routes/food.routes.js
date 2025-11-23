const express = require('express');
const foodController = require('../controllers/food.controller');
const authMiddleware = require('../middleware/auth.middleware');
const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage(),
});
const router = express.Router();


// food routes
router.post('/', 
    authMiddleware.authFoodPartnerMiddleware, 
    upload.single('video'), 
    foodController.createFood);

// /api/food
    router.get('/', foodController.getAllFoods);



module.exports = router;