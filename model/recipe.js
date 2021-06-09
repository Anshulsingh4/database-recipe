const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: String,
    image: String,
    description: String,
    ingredients: [
        {
            ingname: String,
            amount: Number
        }
    ]

});

module.exports = mongoose.model('Recipe', RecipeSchema);