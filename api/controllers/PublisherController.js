const database = require('../models')

class PublisherController {
// Method that get all publishers from database
    static async readAllPublishers(req, res) {

        try {
            const allPublishers = await database.Publishers.findAll()
            return res.status(200).json(allPublishers)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
// Method that get some publisher from database
    static async getPublisherById(req, res) {
        const { id } = req.params

        try {
            const onePublisher = await database.Publishers.findOne({ 
                where: { 
                    id:Number(id) 
                }
            })
            return res.status(200).json(onePublisher)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
// Method that adds a publisher to the database
    static async createPublisher(req, res) {
        const publisher = req.body

        try {
            const newPublisher = await database.Publishers.create(publisher)
            return res.status(200).json(newPublisher)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
// Method that update some publisher from database and returns updated
    static async updatePublisher(req, res) {
        const publisher = req.body
        const { id } = req.params

        try {
            await database.Publishers.update(publisher, {
                where:{
                    id:Number(id)
                }
            })
            const publisherUpdated = await database.Publishers.findOne({ 
                where: { 
                    id:Number(id) 
                }
            })
            return res.status(200).json(publisherUpdated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
// Method that delete some publisher from database
    static async deletePublisher(req, res) {
        const { id } = req.params
        try {
            await database.Publishers.destroy({
                where: {
                    id:Number(id)
                }
            })
            return res.status(200).json({ message: `Editora com id: ${id} deletada com sucesso!` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PublisherController