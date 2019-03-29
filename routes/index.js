const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');







// Welcome Page 
router.get('/', (req, res) =>res.render('home'));
// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>res.render ('dashboard', { name: req.user.name }));
// Development Page
router.get('/development', (req,res)=>res.render('development'));
// Analytics Page
router.get('/analytics', (req,res)=>res.render('analytics'));
// Client Page
router.get('/clients', (req,res)=>res.render('clients'));
//About Page
router.get('/about', (req,res)=>res.render('about'));
// Contact Page
router.get('/contact', (req,res)=>res.render('contact'))

//////////





module.exports = router;