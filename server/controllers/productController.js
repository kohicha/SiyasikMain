const supabase = require('../config/supabase');

exports.viewProduct = async (req, res) => {
  const header = req.session.user ? `seshHeader` : `header`
    try {
      const{ data: products, error} = await supabase
      .from('products')
      .select('*')
      .eq('product_id', req.params.id)
      //console.log(products)
      
      if(products){
        const product = products[0]
        res.render('product',{
          header,
          product,
          layout:'../views/layouts/product'
         })
        
      } else if (products === null){
        res.render('404',{
          header,
          layout:'../views/layouts/404'
        })
      } else {
        res.render('404',{
          header,
          layout:'../views/layouts/404'
        })
      }
      
      
    } catch (error) {
      console.log(error)
    }
    
  }