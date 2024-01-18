const supabase = require('../config/supabase');

exports.main = async (req, res) => {
  const header = req.session.user ? `seshHeader` : `header`
  const itemsPerPage = 12;
  const currentPage = parseInt(req.params.id, 10) || 1;
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
    const currentPage = parseInt(req.params.id, 10) || 1;
    const offset = (currentPage - 1) * itemsPerPage;
    let catalogParam = req.params.page
    try {
      const{ data: products, error} = await supabase
      .from('products')
      .select("*")
      .eq('catalog', catalogParam)
      //console.log(products)
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
