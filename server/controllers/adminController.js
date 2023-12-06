exports.dashboard = async (req, res) => {
    const locals = {
      title: "admin",
      description: "Free admin App.",
    }
    res.render('admin', {
      locals,
      layout: '../views/layouts/adminDashboard'
    });
  }