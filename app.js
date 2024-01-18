const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session')
const app = express()
const supabase = require('./server/config/supabase')
const path = require('path')
require('dotenv').config();

app.use(session({
    secret: 'iloveducks',
    resave: false,
    saveUninitialized: true,
}))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//set ports
const port = process.env.PORT;

//default file routing
app.use(express.static(__dirname + '/public'))


//templates
app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

//routing
app.use('/', require('./server/routes/auth'))
app.use('/', require('./server/routes/adminDashboard'))
app.use('/', require('./server/routes/product'))
app.use('/', require('./server/routes/catalog'))
app.use('/', require('./server/routes/about'))
//init port
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

app.get('*', function(req, res) {
    //res.status(404).send('404 Page Not Found.')
    res.status(404).render('404');
  })






