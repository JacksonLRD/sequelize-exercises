const { Router } = require('express')
const PublisherController = require('../controllers/PublisherController')

const router = Router()

// Route that get all publishers from database
    router.get('/publishers', PublisherController.readAllPublishers)
// Route that get some publisher from database 
    router.get('/publishers/:id', PublisherController.getPublisherById)
// Route that adds a publisher to the database
    router.post('/publishers', PublisherController.createPublisher)
// Route that update some publisher from database and returns updated
    router.put('/publishers/:id', PublisherController.updatePublisher)
// Route that delete some publisher from database
    router.delete('/publishers/:id', PublisherController.deletePublisher)

module.exports = router