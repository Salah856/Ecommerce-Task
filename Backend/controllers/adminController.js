const admin = require('../models/admin'); 
const category = require('../models/category'); 
const subcategory = require('../models/subcategory'); 
const product = require('../models/product'); 
const user = require('../models/user'); 


// categories actions CRUD ops for admin 
function getCategories (req, res, next){
    category.find((err, categories) => {
    if (err) return res.status(500).send(err); 

    return res.status(200).send(categories);
    })
}

function getCategory(req, res, next){
    let categoryID = req.params.id; 
    category.findById(categoryID, (err, category)=>{
        if(err) return res.status(500).send(err); 
        return res.status(200).send(category); 
    })
}

function deleteCategory(req, res, next){
    let categoryID = req.params.id; 
 category.findByIdAndDelete(categoryID, (err, category)=>{
     if(err) return res.satus(500).send(err); 
     return res.status(200).send("category successfully deleted"); 
 })

}
function  addCategory(req, res, next){
    let newCategory = new Category(req.body); 
    newCategory.save((function(err, newcategory){
        if(err) return res.status(500).send(err); 
        return res.status(200).send(`category is saved successfully`); 
    }));
}
function editCategory(req, res, next){
    let editedCategoryID = req.params.id; 
    category.findByIdAndUpdate(editedCategoryID, (err, category)=>{
        if(err) return res.status(500).send(err); 
        return res.status(200).send("category edited successfully "); 
    })
}

// products actions for admin 

function getProducts (req, res, next){
    product.find((err, products) => {
    if (err) return res.status(500).send(err); 

    return res.status(200).send(products);
    })
}

function getProduct(req, res, next){
    let productID = req.params.id; 
    product.findById(categoryID, (err, product)=>{
        if(err) return res.status(500).send(err); 
        return res.status(200).send(product); 
    })
}

function deleteProduct(req, res, next){
    let categoryID = req.params.id; 
 category.findByIdAndDelete(categoryID, (err, category)=>{
     if(err) return res.satus(500).send(err); 
     return res.status(200).send("product successfully deleted"); 
 })

}
function  addProduct(req, res, next){
    let newProduct = new Product(req.body); 
    newProduct.save((function(err, newproduct){
        if(err) return res.status(500).send(err); 
        return res.status(200).send(`product is saved successfully`); 
    }));
}

function editProduct(req, res, next){
    let editedProductID = req.params.id; 
    product.findByIdAndUpdate(editedProductID, (err, product)=>{
        if(err) return res.status(500).send(err); 
        return res.status(200).send("product edited successfully "); 
    })
}

// subcategories actions for admin 
function getSubcategories(req, res, next){
    subcategory.find((err, subcategories) => {
        if (err) return res.status(500).send(err); 
        return res.status(200).send(subcategories);
        })
}

function getSubcategory(req, res, next){
    let subcategoryID = req.params.id; 

    subcategory.findById(subcategoryID, (err, subcategory)=>{
        if(err) return res.status(500).send(err); 

        return res.status(200).send(subcategory); 
    })
}

function addSubcategory(req, res, next){
    let newSubcategory = new subcategory(req.body); 
    newSubcategory.save((function(err, newsubcategory){
        if(err) return res.status(500).send(err); 
        return res.status(200).send(`subcategory is saved successfully`); 
    }));
}
function deleteSubcategory(req, res, next){
    let subcategoryID = req.params.id; 
    subcategory.findByIdAndDelete(subcategoryID, (err, subcategory)=>{
        if(err) return res.satus(500).send(err); 
        return res.status(200).send("subcategory successfully deleted"); 
})
}

//admin users actions 
function getUsers(req, res, next){
    user.find((err, users) => {
        if (err) return res.status(500).send(err); 
    
        return res.status(200).send(users);
        })
    
}

function getUser(req, res, next){
    let userID = req.params.id; 
    user.findById(userID, (err, user)=>{
        if(err) return res.status(500).send(err); 
        return res.status(200).send(user); 
    })
}

//this action i think it like delete user but may be  there is another implementation: 
// like  i add field in user model called "disable " and check if it's true or false in request .... 
function disableUser(req, res, next){
    let userID = req.params.id; 
    user.findByIdAndDelete(userID, (err, user)=>{
        if(err) return res.satus(500).send(err); 
        return res.status(200).send("subcategory successfully deleted"); 
})
}

function  addUser(req, res, next){
    let newUser = new subcategory(req.body); 
    newUser.save((function(err, newuser){
        if(err) return res.status(500).send(err); 
        return res.status(200).send(`user is saved successfully`); 
    }));
}

// admin actions for other admins 
function addAdmin(req, res, next){

    let newAdmin = new admin(req.body); 
    newAdmin.save((function(err, newadmin){
        if(err) return res.status(500).send(err); 
        return res.status(200).send(`admin is saved successfully`); 
    }));
}

module.exports = {

        getCategories, 
        getCategory, 
        getSubcategories, 
        getSubcategory, 
        editCategory, 
        
        editProduct, 
        getProduct,
        getProducts, 
        deleteProduct, 
        addProduct, 
        
        getUser, 
        getUsers, 
        deleteCategory, 
        deleteSubcategory, 

        disableUser, 
        addAdmin, 
        addCategory, 
        addSubcategory, 
        addUser

}