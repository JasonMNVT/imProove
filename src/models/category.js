const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    course: {
        type: Boolean
    },
    sportsCollectifs: {
        type: Boolean
    }
})

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;