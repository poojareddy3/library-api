const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Author = new Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true}
    }
)

const Book = new Schema(
    {
        ISBN: { type: Number, required: true },
        title: { type: String, required: true },
        author: Author,
        publisher_name: { type: String, required: true},
        year_published: { type: Number, required: true }
    },
    { timestamps: true }
)

module.exports = mongoose.model('book', Book);