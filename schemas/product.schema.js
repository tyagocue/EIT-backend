const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Se pone en capital por que es una clase

const productSchema = new Schema({
    name: String,
    price: Number,
    description: String
});

module.exports = mongoose.model('Product', productSchema);
