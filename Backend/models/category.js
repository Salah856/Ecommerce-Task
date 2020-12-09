const mongoose = require('../database/dbConnection'); 

const Schema= mongoose.Schema; 
const categorySchema = new Schema({
    name: {
        type: string, 
        required: true
    }, 
    details: {
        type: string, 
        required: true
    }, 
    ref: "Subcategory"
}); 

const categoryModel = mongoose.model("Category", categorySchema); 

module.exports= categoryModel; 