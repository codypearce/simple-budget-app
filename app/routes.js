module.exports = function(app, passport) {
  app.get('/', function(req, res) {
    res.render('index');
  });
  app.get('/budget-planning', function(req, res) {
    res.render('budgetPlanning');
  });
  app.get('/login', function(req, res) {
    res.render('login', {message: req.flash('loginMessage')});
  });
  app.post(
    '/login',
    passport.authenticate('local-login', {
      successRedirect: '/dashboard',
      failureRedirrect: '/login',
      failureFlash: true,
    })
  );
  app.get('/signup', function(req, res) {
    res.render('signup', {message: req.flash('signupMessage')});
  });
  app.post(
    '/signup',
    passport.authenticate('local-signup', {
      successRedirect: '/dashboard',
      failureRedirect: '/signup',
      failureFlash: true,
    })
  );
  app.get('/profile', isLoggedIn, function(req, res) {
    res.render('auth/profile', {
      user: req.user,
    });
  });
  app.get('/dashboard', isLoggedIn, function(req, res) {
    res.render('auth/dashboard');
  });
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
};
function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated()) return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}
