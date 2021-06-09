const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShoppingSchema = new Schema({
    name: String,
    amount: Number

});

module.exports = mongoose.model('Shoppinglist', ShoppingSchema);
