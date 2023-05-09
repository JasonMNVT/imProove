const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;