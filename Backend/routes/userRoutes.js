const express = require('express');
const router = express.Router();
const authHelper = require('../middlewares/authHelper'); 
const userController = require('../controllers/userController');

router.get('/list-categories', userController.getCategories)
router.get('/list-subcategories', userController.getSubcategories); 
router.get('/get-category', userController.getSubcategory); 
router.get('list-products/', userController.getProducts); 
router.get('/get-product', userController.getProduct); 

router.post('/register', userController.createUser); 
router.post('/login', userController.loginUser); 

//protected routes 
router.post('/profile/add-product-to-order', authHelper.verifyToken, userController.addProductToOrder);
router.delete('/profile/remove-product-from-order', authHelper.verifyToken, userController.removeProductFromOrder); 

module.exports = router;