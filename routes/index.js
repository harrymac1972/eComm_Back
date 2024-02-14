
const { Category, Product } = require('../models');
const router = require('express').Router();
const apiRoutes = require('./api');


router.post('/category/new/',async(req,res) => {
  try {
    const category_new = await Category.create(req.body);
    res.status(200).json(category_new);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1><h3>Heroku Testing?</h3>")
});

module.exports = router;