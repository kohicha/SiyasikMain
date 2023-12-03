const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session')
const app = express()
require('dotenv').config();


app.use(express.urlencoded({extended:true}))
app.use(express.json())



//set ports
const port = process.env.PORT;



//default file routing
app.use(express.static('public'))

//templates
app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

//routing
app.use('/', require('./server/routes/index'))

//init port
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})