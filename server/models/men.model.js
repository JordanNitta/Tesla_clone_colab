const mongoose = require('mongoose')

const MenSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: [String],
        required: true
    },
    image:{
        type: [String],
        required: true
    },
    size: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['tees', 'sweatshirts and hoodies', 'outerwear', 'joggers', 'hats', 'socks'], //Enum allows for categories
    },
});

const Men = mongoose.model('Men', MenSchema)
module.exports = Men