const mongoose = require('../database/dbConnection'); 

const Schema= mongoose.Schema; 
const adminSchema = new Schema({
    name: {
        type: string, 
        required: true
    }, 
    password: {
        type: string, 
        required: true
    }, 
    ref: "User"
}); 

const adminModel = mongoose.model("Admin", adminSchema); 

module.exports= adminModel; 