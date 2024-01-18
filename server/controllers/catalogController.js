const supabase = require('../config/supabase');

exports.main = async (req, res) => {
  const header = req.session.user ? `seshHeader` : `header`
  const itemsPerPage = 12;
  const currentPage = parseInt(req.params.page, 10) || 1;
  const offset = (currentPage - 1) * itemsPerPage;
  try {
    const{ data: products, error} = await supabase
    .from('products')
    .select('*')
    .range(offset, offset + itemsPerPage - 1);
    //console.log(products)
    let catalogParam = "Catalog"
    res.render('catalog', {
      catalogParam,
      products,
      layout: '../views/layouts/catalog',
      header,
      currentPage,
      itemsPerPage
    });
    
  } catch (error) {
    console.log(error)
  }
  }

  exports.catalog = async (req, res) => {
    const header = req.session.user ? `seshHeader` : `header`
    const itemsPerPage = 12;
    const currentPage = parseInt(req.params.page, 10) || 1;
    const offset = (currentPage - 1) * itemsPerPage;
    try {
      const{ data: products, error} = await supabase
      .from('products')
      .select('*')
      .eq('catalog', req.params.id)
      .range(offset, offset + itemsPerPage - 1);
      
      if(products.length === 0){
        
        res.render('404', {
          layout:"../views/layouts/404",
          header
        })
      }else{
        let catalogParam = products[0].catalog
        res.render('catalog',{
          header,
          products,
          catalogParam,
          layout:'../views/layouts/catalog',
          currentPage,
          itemsPerPage
         })
      }
       
      
    } catch (error) {
      console.log(error)
    }
    
  }