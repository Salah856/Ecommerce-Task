const mongoose = require('../database/dbConnection'); 

const Schema= mongoose.Schema; 
const subcategorySchema = new Schema({
    name: {
        type: string, 
        required: true
    }, 
    
   ref: "Product"
    
}); 

const subcategoryModel = mongoose.model("Subcategory", subcategorySchema); 

module.exports= subcategoryModel; 