const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/me', function(req, res, next) {
  /*
  * TODO: implement me
  * */
  res.status(200).json({ userName: 'test user' });
});

module.exports = router;
