const supabase = require('../config/supabase');

exports.viewProduct = async (req, res) => {
    try {
      const{ data: products, error} = await supabase
      .from('products')
      .select('*')
      .eq('product_id', req.params.id)
      //console.log(products)
      
      if(products){
        const product = products[0]
        res.render('product',{
          product,
          layout:'../views/layouts/product'
         })
        
      } else if (products === null){
        res.render('404',{
          layout:'../views/layouts/dashboard'
        })
      } else {
        res.render('404',{
          layout:'../views/layouts/dashboard'
        })
      }
      
      
    } catch (error) {
      console.log(error)
    }
    
  }