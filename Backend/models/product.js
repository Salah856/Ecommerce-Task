const mongoose = require('../database/dbConnection'); 

const Schema= mongoose.Schema; 
const productSchema = new Schema({
    name: {
        type: string, 
        required: true
    }, 
    details: {
        type: string, 
        required: true
    }, 
    price: {
        type: Number, 
        required: true
    }
}); 

const productModel = mongoose.model("Product", productSchema); 

module.exports= productModel; 