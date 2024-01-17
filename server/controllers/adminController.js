exports.dashboard = async (req, res) => {
    const locals = {
      title: "admin",
      description: "Free admin App.",
    }
    const header = req.session.user ? `seshHeader` : `header`
    res.render('admin', {
      showModal: false,
      url: '',
      locals,
      layout: '../views/layouts/adminDashboard',
      header
    });
  }