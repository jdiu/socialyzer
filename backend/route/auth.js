const router = require('express').Router();

router.route('/reddit').post((req, res) => {
  console.log('redirecting');
  res.redirect('https://google.ca');
});

module.exports = router;