const express = require('express');

const router = express.Router();
// Welcome Page 
router.get('/welcome', (req, res) =>res.render('welcome'));

module.exports = router;