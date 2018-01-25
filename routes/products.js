var express = require('express');
var router = express.Router();
var Product     = require('../models/products');

/* GET users listing. */
router.route('/products')
    .get(function(req, res, next) {

      Product.find( function(err, products) {
        if (err)
          res.send(err);

        res.type('application/json');
        res.send(JSON.stringify(products, null, 1)); //\t or \n
      });

    });
router.route('/products/:category')
    .get(function(req, res, next) {

      Product.find({category: req.params.category}, function(err, products) {
        if (err)
          res.send(err);

        res.type('application/json');
        res.send(JSON.stringify(products, null, 1)); //\t or \n
      });

    });

module.exports = router;
