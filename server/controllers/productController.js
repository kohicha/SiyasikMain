const supabase = require('../config/supabase');

exports.viewProduct = async (req, res) => {
    try {
      const{ data: products, error} = await supabase
      .from('products')
      .select('*')
      .eq('product_id', req.params.id)
      //console.log(products)
      const product = products[0]
       res.render('product',{
        product,
        layout:'../views/layouts/product'
       })
      
    } catch (error) {
      console.log(error)
    }
    
  }