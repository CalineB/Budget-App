const express = require('express');
const router = express.Router();

const renderHomepage = require('../controllers/routesController')

router.get('/', renderHomepage);

module.exports = router;