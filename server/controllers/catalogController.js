const supabase = require('../config/supabase');

exports.main = async (req, res) => {
  try {
    const{ data: products, error} = await supabase
    .from('products')
    .select('*')
    .limit(16)
    //console.log(products)

    res.render('catalog', {
      products,
      layout: '../views/layouts/catalog'
    });
    
  } catch (error) {
    console.log(error)
  }
  }

  exports.catalog = async (req, res) => {
    try {
      const{ data: products, error} = await supabase
      .from('products')
      .select('*')
      .eq('catalog', req.params.id)
      .limit(16)
       res.render('catalog',{
        products,
        layout:'../views/layouts/catalog'
       })
      
    } catch (error) {
      console.log(error)
    }
    
  }