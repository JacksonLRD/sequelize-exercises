const database = require('../models')

class AuthorController {
// 
// 
// Method that adds a author to the database
    static async createAuthor(req, res) {
        const author = req.body

        try {
            const newAuthor = await database.Authors.create(author)
            return res.status(200).json(newAuthor)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
// 
// 
// Method that add a book with a author
    static async createBook(req, res) {
        const { authorId } = req.params
        const book = { ...req.body, author_id: Number(authorId)}
        try {
            const newBook = await database.Books.create(book)
            return res.status(200).json(newBook)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
// Method that get a book by id
    static async getBookById(req, res) {
        const { authorId, bookId } = req.params
        try {
            const book = await database.Books.findOne({ 
                where: { 
                    id:Number(bookId) ,
                    author_id:Number(authorId)
                }
            })
            return res.status(200).json(book)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
// Method that update some book from database and returns updated
    static async updateBook(req, res) {
        const { authorId, bookId } = req.params
        const book = req.body

        try {
            await database.Books.update(book, {
                where:{
                    id:Number(bookId),
                    author_id:Number(authorId)
                }
            })
            const bookUpdated = await database.Books.findOne({ 
                where: { 
                    id:Number(bookId),
                    author_id:Number(authorId)
                }
            })
            return res.status(200).json(bookUpdated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
// Method that delete some book from database
    static async deleteBook(req, res) {
        const { authorId, bookId } = req.params
        try {
            await database.Books.destroy({
                where:{
                    id:Number(bookId),
                    author_id:Number(authorId)
                }
            })
            return res.status(200).json({ message: `Livro com id: ${bookId} deletado com sucesso!` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = AuthorController