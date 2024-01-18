exports.main = async (req, res) => {
    const locals = {
      title: "About",
      description: "About",
    }
    const header = req.session.user ? `seshHeader` : `header`
    res.render('about', {
      locals,
      layout: '../views/layouts/about',
      header
    });
  }