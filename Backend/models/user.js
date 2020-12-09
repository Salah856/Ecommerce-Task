const mongoose = require('../database/dbConnection'); 

const Schema= mongoose.Schema; 
const userSchema = new Schema({
    name: {
        type: string, 
        required: true
    }, 
    password: {
        type: string, 
        required: true
    }, 
    orders:[
        {
            type:Schema.Types.ObjectId, 
            ref: "Order"
        }
    ]
}); 

const userModel = mongoose.model("User", userSchema); 

module.exports= userModel; 