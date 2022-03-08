const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => {
    res.send('This is Library API!');
})


router.post('/borrowInfo', controllers.createBorrowedBooks);

router.get('/borrowInfo', controllers.getAllBorrowedBooks);

router.get('/borrowInfo/:id', controllers.getBorrowedBookById);

router.put('/borrowInfo/:id', controllers.updateBorrowedBook);

router.delete('/borrowInfo/:id', controllers.deleteBorrowedBook);

module.exports = router;