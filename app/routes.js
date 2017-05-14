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
      successRedirect: '/profile',
      failureRedirrect: '/login',
      failureFlash: true,
    })
  );
  app.get('/signup', function(req, res) {
    res.render('signup', {message: req.flash('signupMessage')});
  });
  app.post(
    '/signup',
    passport.authenticat('local-signup', {
      successRedirect: '/profile',
      failureRedirect: '/signup',
      failureFlash: true,
    })
  );
  app.get('/profile', isLoggedIn, function(req, res) {
    res.render('profile', {
      user: req.user,
    });
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
