const router = require('express').Router();
// const { Post } = require('../models');
// const { User } = require('../models');

const apiRoutes = require('./api');
const userRoutes = require('./api./userRoutes.js');

router.use('/', apiRoutes);
router.use('/', userRoutes);

router.get('/', (req, res) => res.send('Pedagogue Under Construction'));

module.exports = router;
