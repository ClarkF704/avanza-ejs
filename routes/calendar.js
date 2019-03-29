const express = require('express');

const router = express.Router();
// Welcome Page 
router.get('/calendar', (req, res) =>res.render('calendar'));


module.exports = router;