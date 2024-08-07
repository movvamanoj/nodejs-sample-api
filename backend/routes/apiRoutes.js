const express = require('express');
const { getName } = require('../controllers/apiController');

const router = express.Router();

router.get('/name', getName);
module.exports = router;
