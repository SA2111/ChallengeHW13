// api variable that requires api folder
const apiR = require('./api');

// router vaiable that requires express
const router = require('express').Router();


router.use('/api', apiR);

// in case route error
router.use((req, res) => {
  res.send("<h1>error</h1>")
});

module.exports = router;