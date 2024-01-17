const supabase = require('../config/supabase');


exports.homepage = async (req, res) => {
    const header = req.session.user ? `seshHeader` : `header`
    try {

      const{ data: products, error} = await supabase
      .from('products')
      .select('*')
      .limit(8)
      //console.log(products)

      res.render('index', {
        products,
        header,
        layout: '../views/layouts/main'
      });
      
    } catch (error) {
      console.log(error)
    }
    
  }

exports.signup = async (req, res) => {
  const header = req.session.user ? `seshHeader` : `header`
  const locals = {
    title: "Sign up"
  }
  res.render('signup',{
    locals,
    header,
    layout:'../views/layouts/auth'
  })
}

exports.login = async (req, res) => {
  const header = req.session.user ? `seshHeader` : `header`
  const locals = {
    title: "Login"
  }
  res.render('login',{
    locals,
    header,
    layout:'../views/layouts/auth'
  })
}