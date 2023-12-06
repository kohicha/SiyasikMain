const express = require("express");
const router = express.Router();
const supabase = require('../config/supabase')
const mainController = require('../controllers/mainController')



router.get('/', mainController.homepage);
router.get('/signup', mainController.signup)
router.get('/login', mainController.login)
router.get('/confirm-signup', mainController.confirmSignup)




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

      res.redirect('/confirm-signup')
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
      const { user, error } = await supabase.auth.signInWithPassword({
          email,
          password,
      });

      if (error) {
          console.error(error);
          return res.status(500).json({ error: 'Internal Server Error' });
      }

      // User is logged in
      req.session.authenticated = true
      req.session.user = user;
      res.redirect('/dashboard')
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/logout', (req, res) => {
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