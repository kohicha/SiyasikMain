const supabase = require('../config/supabase');


exports.homepage = async (req, res) => {
    try {

      const{ data:products, error} = await supabase
      .from('products')
      .select('*')
      console.log(products)

      res.render('index', {
        products,
        layout: '../views/layouts/main'
      });
      
    } catch (error) {
      console.log(error)
    }
    
  }
exports.confirmSignup = async (req, res) => {
  const locals = {
    title: "Confirm Signup"
  }
  res.render('confirmAuth',{
    locals,
    layout:'../views/layouts/auth'
  }) 
}

exports.signup = async (req, res) => {
  const locals = {
    title: "Sign up"
  }
  res.render('signup',{
    locals,
    layout:'../views/layouts/auth'
  })
}

exports.login = async (req, res) => {
  const locals = {
    title: "Login"
  }
  res.render('login',{
    locals,
    layout:'../views/layouts/auth'
  })
}