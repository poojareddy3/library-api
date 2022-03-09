const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Address = new Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: Number, required: true }
},
{ timestamps: true }
);

const Librarian = new Schema(
    {
        name: { type: String, required: true},
        address: Address,
        phone: { type: Number, required: true},
        email: { type: String, required: true}
    },
    { timestamps: true}
)

module.exports = mongoose.model('librarian', Librarian);