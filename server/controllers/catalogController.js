const supabase = require('../config/supabase');

exports.main = async (req, res) => {
  const header = req.session.user ? `seshHeader` : `header`
  try {
    const{ data: products, error} = await supabase
    .from('products')
    .select('*')
    .limit(16)
    //console.log(products)
    let catalogParam = "Catalog"
    res.render('catalog', {
      catalogParam,
      products,
      layout: '../views/layouts/catalog',
      header
    });
    
  } catch (error) {
    console.log(error)
  }
  }

  exports.catalog = async (req, res) => {
    const header = req.session.user ? `seshHeader` : `header`
    try {
      const{ data: products, error} = await supabase
      .from('products')
      .select('*')
      .eq('catalog', req.params.id)
      .limit(16)
      
      if(products.length === 0){
        
        res.render('404', {
          layout:"../views/layouts/dashboard"
        })
      }else{
        let catalogParam = products[0].catalog
        res.render('catalog',{
          header,
          products,
          catalogParam,
          layout:'../views/layouts/catalog'
         })
      }
       
      
    } catch (error) {
      console.log(error)
    }
    
  }