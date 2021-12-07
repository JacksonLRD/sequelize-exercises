const { Router } = require('express')
const AuthorController = require('../controllers/AuthorController')

const router = Router()
// 
// 
// Route that adds a author to the database
    router.post('/author', AuthorController.createAuthor)
// 
// 
// Route that adds a book to the database
    router.post('/author/:authorId/book', AuthorController.createBook)
// Route that get some book from database
    router.get('/author/:authorId/book/:bookId', AuthorController.getBookById)
// Route that update some book from database and returns updated
    router.put('/author/:authorId/book/:bookId', AuthorController.updateBook)
// Method that delete some book from database
    router.delete('/author/:authorId/book/:bookId', AuthorController.deleteBook)

module.exports = router