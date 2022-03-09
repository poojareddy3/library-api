const res = require('express/lib/response');
const BorrowInfo = require('../models/borrowInfo');
const User = require('../models/user');
const Book = require('../models/book');
const Librarian = require('../models/librarian');

async function createBook(req, res) {
    try {
       const book = await new Book(req.body);
       await book.save();
       return res.status(201).json({ book }) ;
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}
async function createUser(req, res) {
    try {
       const user = await new User(req.body);
       await user.save();
       return res.status(201).json({ user }) ;
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

async function createBorrowedBooks(req, res) {
    try {
       const borrowedBook = await new BorrowInfo(req.body);
       await borrowedBook.save();
       return res.status(201).json({ borrowedBook }) ;
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

async function getAllBooks(req, res){
    try {
        const books = await Book.find();
        return res.status(200).json({ books});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

async function getAllUsers(req, res){
    try {
        const users = await User.find();
        return res.status(200).json({ users});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

async function getAllLibrarian(req, res){
    try {
        const librarian = await Librarian.find();
        return res.status(200).json({ librarian});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

async function getAllBorrowedBooks(req, res){
    try {
        const borrowedBooks = await BorrowInfo.find().populate("borrowBook_id").populate("user_id").populate("librarian_id");
        return res.status(200).json({ borrowedBooks});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

async function getBookById(req, res){
    try {
        const {id} = req.params;
        const book = await Book.findById(id);
        if(book){
            return res.status(200).json(book);
        }
        return res.status(400).send('Book with specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getUserById(req, res){
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        if(user){
            return res.status(200).json(user);
        }
        return res.status(400).send('user with specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getBorrowedBookById(req, res){
    try {
        const {id} = req.params;
        const borrowedBook = await BorrowInfo.findById(id);
        if(borrowedBook){
            return res.status(200).json(borrowedBook);
        }
        return res.status(400).send('Book is not borrowed!')
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateBook = (req, res) => {
    try {
        const { id } = req.params;
        Book.findByIdAndUpdate(id, req.body, { new: true}, (err, book)=> {
            if(err !== null){
                console.log(err, 'error');
                res.status(404).send(err.message);
            } else {
                console.log(book);
                res.json(book);
            }
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateUser = (req, res) => {
    try {
        const { id } = req.params;
        User.findByIdAndUpdate(id, req.body, { new: true}, (err, user)=> {
            if(err !== null){
                console.log(err, 'error');
                res.status(404).send(err.message);
            } else {
                console.log(user);
                res.json(user);
            }
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateBorrowedBook = (req, res) => {
    try {
        const { id } = req.params;
        BorrowInfo.findByIdAndUpdate(id, req.body, { new: true}, (err, borrowedBook)=> {
            if(err !== null){
                console.log(err, 'error');
                res.status(404).send(err.message);
            } else {
                console.log(borrowedBook);
                res.json(borrowedBook);
            }
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


async function deleteBook(req, res) {
    try {
        const { id } = req.params;
        const deleted = await Book.findByIdAndDelete(id);
        if(deleted){
            return res.status(200).send('Book deleted');
        }
        throw new Error('Book not found!')
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function deleteUser(req, res) {
    try {
        const { id } = req.params;
        const deleted = await User.findByIdAndDelete(id);
        if(deleted){
            return res.status(200).send('user deleted');
        }
        throw new Error('user not found!')
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function deleteBorrowedBook(req, res) {
    try {
        const { id } = req.params;
        const deleted = await BorrowInfo.findByIdAndDelete(id);
        if(deleted){
            return res.status(200).send('Borrowed Book deleted');
        }
        throw new Error('Borrowed Book not found!')
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    createBook,
    createUser,
    createBorrowedBooks,
    getAllBooks,
    getAllUsers,
    getAllLibrarian,
    getAllBorrowedBooks,
    getBookById,
    getUserById,
    getBorrowedBookById,
    updateBook,
    updateUser,
    updateBorrowedBook,
    deleteBook,
    deleteUser,
    deleteBorrowedBook
}