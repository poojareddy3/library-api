const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => {
    res.send('This is Library API!');
})

router.post('/books', controllers.createBook);

router.get('/books', controllers.getAllBooks);

router.get('/books/:id', controllers.getBookById);

router.put('/books/:id', controllers.updateBook);

router.delete('/books/:id', controllers.deleteBook);


router.post('/users', controllers.createUser);

router.get('/users', controllers.getAllUsers);

router.get('/users/:id', controllers.getUserById);

router.put('/users/:id', controllers.updateUser);

router.delete('/users/:id', controllers.deleteUser);



router.get('/librarian', controllers.getAllLibrarian);


router.post('/borrowInfo', controllers.createBorrowedBooks);

router.get('/borrowInfo', controllers.getAllBorrowedBooks);

router.get('/borrowInfo/:id', controllers.getBorrowedBookById);

router.put('/borrowInfo/:id', controllers.updateBorrowedBook);

router.delete('/borrowInfo/:id', controllers.deleteBorrowedBook);


module.exports = router;