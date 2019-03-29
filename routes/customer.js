const express = require('express');
const router = express.Router();


// User model
const Contacte = require('../models/Contacte');

//contact Page
router.get('/contact', (req, res) =>res.render('contact'));


//Submit Handle
router.post('/contact', (req, res) => {
    const { name, email, phone, work, message } = req.body;
    let errors = [];
    

    // Check required fields
    if(!name || !email || !phone || !work){
        errors.push({ msg: 'Please fill in all fields' })

    } else {
        // Validation Passed
                const newMessage = new Message ({
                    name,
                    email,
                    phone,
                    work,
                    message
                });
                        // Save message
                    newMessage.save(function(err, newMessage){
                        if(err){
                            console.log(err);
                        } else {
                            res.json(newMessage);
                        }
                    })
                    .then(message => {
                        req.flash('success_msg', 'Your Message has been sent');
                        res.redirect('/contact');
                        console.log(newMessage);
                    })
                    .catch(err => console.log(err));
                    
                    

    }
});
module.exports = router;