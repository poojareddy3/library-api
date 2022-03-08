const res = require('express/lib/response');
const BorrowInfo = require('../models/borrowInfo');
const User = require('../models/user');
const Book = require('../models/book');
const Librarian = require('../models/librarian');

async function createBorrowedBooks(req, res) {
    try {
       const borrowedBook = await new BorrowInfo(req.body);
       await borrowedBook.save();
       return res.status(201).json({ borrowedBook }) ;
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
    createBorrowedBooks,
    getAllBorrowedBooks,
    getBorrowedBookById,
    updateBorrowedBook,
    deleteBorrowedBook
}