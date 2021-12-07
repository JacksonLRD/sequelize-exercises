const express = require('express')
const publisherRoutes = require('./publisherRoutes')
const authorRoutes = require('./authorRoutes')

module.exports = app => {
    app.use(express.json())
    app.use(publisherRoutes)
    app.use(authorRoutes)
}