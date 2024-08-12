const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    name: String,
    address: String,
    contactNumber: String,
    video: {
        filename: String,
        originalname: String,
        path: String,
    },
    status: {
        type: String,
        default: 'Pending',
    },
    confirmedByAdmin: {
        type: Boolean,
        default: false,
    },
    category: {
        type: String,
        required: true, // Ensure a category is provided
    },
});

module.exports = mongoose.model('Workout', workoutSchema);
