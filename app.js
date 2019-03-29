const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');


const app = express();


// Passport Config
require('./config/passport')(passport)

// DB Config
const db = require('./config/keys').MongoURI;


// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
.then(() => console.log("MongoDB Connected ..."))
.catch(err => console.log(err));


// EJS
app.use(express.static('public'));
app.use(expressLayouts);
app.set('view engine', 'ejs');


// Bodyparser
app.use(express.urlencoded({ extended: false }));

app.use(express.json());
/////////////////////////////////// email posting------------>

app.post('/contact', function(req, res){
  
  
var api_key = '4f1494c6588d1a739552333e0646a229-e51d0a44-319075c1';
var domain = 'sandbox8bf5cd56cd564a9c9abb218e63dcfef1.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'Mail Gun Avanza Analytics <postmaster@sandbox8bf5cd56cd564a9c9abb218e63dcfef1.mailgun.org>',
  to: 'avanzaanalyticsllc@gmail.com',
  subject: req.body.userName,
  text: req.body.body
};
 
mailgun.messages().send(data, function (error, body) {
  console.log(body);
  if(!error){
    res.render("notmes");
  } else {
    res.render("wrong");
  }
  
});

})


///////////////////////////////////------------>

// Express session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  }))

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

  // Connect Flash
  app.use(flash());

  // Global Vars
  app.use((req, res, next) => {
      res.locals.success_msg = req.flash('success_msg');
      res.locals.error_msg = req.flash('error_msg');
      res.locals.error = req.flash('error');
      next();
  })

// ROUTES

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.get('/welcome', require('./routes/welcome'));
app.use('/calendar', require('./routes/calendar'));
app.get('/contact', require('./routes/index'));





const PORT = process.env.PORT || 5050;

app.listen(PORT, console.log(`Server started on port ${PORT}`));