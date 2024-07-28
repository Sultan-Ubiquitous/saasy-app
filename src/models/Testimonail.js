const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    paragraph: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', testimonialSchema);

module.exports = Testimonial; 