/**
 * Created by SaddeM on 28/12/2017.
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var ReviewSchema = new Schema({
    "rating" : { type : Number },
    "content" : { type : String }
});
var ProductSchema = new Schema({
    "productName" : { type : String  },
    "basePrice" : { type : Number },
    "category" : { type : String },
    "brand" : { type : String },
    "productMaterial" : { type : String },
    "imageUrl" : { type : String },
    "delivery" : { type : Date },
    "details" : { type : String },
    "reviews" : [ReviewSchema]

});


module.exports = mongoose.model('products', ProductSchema);