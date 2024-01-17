const express = require("express");
const router = express.Router();
const supabase = require('../config/supabase')
const mainController = require('../controllers/mainController')



router.get('/', mainController.homepage);
router.get('/signup', mainController.signup)
router.get('/login', mainController.login)




router.post('/signup', async (req, res) => {
  const { email, password, displayName } = req.body;

  try {
      const { user, error } = await supabase.auth.signUp({
          email,
          password,
          options:{
            data:{
                display_name: displayName,
            }
          }
      });

      if (error) {
          console.error(error);
          return res.status(500).json({ error: 'Internal Server Error' });
      }

      res.redirect('/admin')
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/login', async (req, res) => {
  
  const { email, password } = req.body;
  try {
      const { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password
      });

      if (error) {
          console.error(error);
          return res.status(500).json({ error: 'Internal Server Error' });
      }
      
      const { data: user, error: sessionError } = await supabase.auth.getSession()
      
      // User is logged in
      req.authenticated = true
      req.session.user = user;
      if (req.session && req.session.user) {
        return res.redirect('/admin')
      }

  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/logout', async (req, res) => {
  
    const { error } = await supabase.auth.signOut()
    req.session.destroy(error => {
      if(error) {
        console.log(error);
        res.send('Error loggin out');
      } else {
        res.redirect('/')
      }
    })
  });


module.exports = router;