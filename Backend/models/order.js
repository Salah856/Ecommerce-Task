const mongoose = require('../database/dbConnection'); 

const Schema= mongoose.Schema; 
const orderSchema = new Schema({
   products: [
       {
           type: Schema.Types.ObjectId, 
           ref:"Product"
       }, 
       createdAt:{
           type: Schema.Types.Date
       }
   ]
   
}); 

const orderModel = mongoose.model("Order", orderSchema); 

module.exports = orderModel; 