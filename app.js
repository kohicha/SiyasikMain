const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session')
const app = express()
const store = new session.MemoryStore();
const supabase = require('./server/config/supabase')
const path = require('path')
require('dotenv').config();

app.use(session({
    secret: 'iloveducks',
    resave: false,
    saveUninitialized: true,
    store
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
app.use('/', require('./server/routes/index'))
app.use('/', require('./server/routes/auth'))
app.use('/', require('./server/routes/dashboard'))
app.use('/', require('./server/routes/adminDashboard'))
//init port
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

app.get('*', function(req, res) {
    //res.status(404).send('404 Page Not Found.')
    res.status(404).render('404');
  })

  app.use(async (req, res, next) => {
    const { user, error } = await supabaseClient.auth.api.getUserByCookie(req);
    req.session.user = user;
    next();
  });