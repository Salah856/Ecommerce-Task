const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/add-admin',adminController.addAdmin);
router.post('/add-category',adminController.addCategory );
router.post('/add-product', adminController.addProduct); 
router.post('/add-', adminController.addSubcategory); 
router.post('add-user', adminController.addUser); 

router.get('/get-categories', adminController.getCategories); 
router.get('/get-category', adminController.getCategory); 
router.get('/get-products', adminController.getProducts); 
router.get('/get-product', adminController.getProduct); 
router.get('/get-subcategories', adminController.getSubcategories); 
router.get('get-subcategory', adminController.getSubcategory); 
router.get('get-users', adminController.getUsers); 
router.get('get-user', adminController.getUser); 

router.put('edit-category', adminController.editCategory); 
router.put('edit-product', adminController.editProduct);

router.delete('delete-category', adminController.deleteCategory); 
router.delete('delete-product', adminController.deleteProduct); 
router.delete('delete-subcategory', adminController.deleteSubcategory); 
router.delete('disable-user', adminController.disableUser); 

module.exports = router;