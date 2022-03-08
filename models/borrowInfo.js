const mongoose = require('mongoose');
//const User = require('./user');
//const Book = require('./book');
//const Librarian = require('./librarian');

const Schema = mongoose.Schema;

const BorrowInfo = new Schema(
    {
        borrowBook_id: { type: Schema.Types.ObjectId, ref: 'book'},
        user_id: { type: Schema.Types.ObjectId, ref: 'user'},
        librarian_id: { type: Schema.Types.ObjectId, ref: 'librarian'},
        issueDate: { type: String, required: true},
        dueDate: { type: String, required: true },
    },
    { timestamps: true}
)

// module.exports = mongoose.model('user', User);
// // module.exports = mongoose.model('librarian', Librarian);
// module.exports = mongoose.model('book', Book);
module.exports = mongoose.model('borrowInfo', BorrowInfo);