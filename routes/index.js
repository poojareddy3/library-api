const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => {
    res.send('This is the Library API!');
})

//endpoints for books schema CRUD
router.post('/books', controllers.createBook);
router.get('/books', controllers.getAllBooks);
router.get('/books/:id', controllers.getBookById);
router.put('/books/:id', controllers.updateBook);
router.delete('/books/:id', controllers.deleteBook);

//endpoints for users schema CRUD
router.post('/users', controllers.createUser);
router.get('/users', controllers.getAllUsers);
router.get('/users/:id', controllers.getUserById);
router.put('/users/:id', controllers.updateUser);
router.delete('/users/:id', controllers.deleteUser);

//endpoints for librarian schema CRUD
router.get('/librarian', controllers.getAllLibrarian);
router.put('/librarian/:id', controllers.updateLibrarian);
router.delete('/librarian/:id', controllers.deleteLibrarian);

//endpoints for borrowInfo schema CRUD
router.post('/borrowInfo', controllers.createBorrowedBooks);
router.get('/borrowInfo', controllers.getAllBorrowedBooks);
router.get('/borrowInfo/:id', controllers.getBorrowedBookById);
router.put('/borrowInfo/:id', controllers.updateBorrowedBook);
router.delete('/borrowInfo/:id', controllers.deleteBorrowedBook);


module.exports = router;