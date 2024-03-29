// Handles the request for the homepage
// Handles the POST method request for adding a new item

const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get("/", homeController.getIndex) // read
router.post('/new', homeController.createItem) // create

module.exports = router