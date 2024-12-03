const express = require('express');
const router = express.Router();

// const userRoutes = require('./users');
const transactionRoutes = require('./transactions');
const categoryRoutes = require('./categories');
const home = require('./home');

// router.use('/client', userRoutes);
router.use('/transactions', transactionRoutes);
// router.use('/catégorie', categoryRoutes);
router.use('/', home);
 
// router.post('./register', userRoutes);

module.exports = router;