exports.dashboard = async (req, res) => {
    const locals = {
      title: "NodeJs Notes",
      description: "Free NodeJS Notes App.",
    }
    res.render('dashboard', {
      locals,
      layout: '../views/layouts/dashboard'
    });
  }