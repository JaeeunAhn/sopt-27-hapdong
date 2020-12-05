const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const util = require('../../modules/util');
const responseMessage = require('../../modules/responseMessage');
const statusCode = require('../../modules/statusCode');
const { Product } = require('../../models');
const { Banner } = require('../../models');
const { stat } = require('fs');
const { resolve } = require('url');


router.get('/banner', async (req, res) => {
    try {
        const banners = await Banner.findOne({
            attributes: ['bannerImgUri']
        });
      // status:200
    return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.BANNER_READ_SUCCESS, banners));
    } catch (error) {
        console.error(error);
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.BANNER_READ_FAIL));
    }
})

router.get('/product', async (req, res) => {

  try {
      const productList = await Product.findAll({
          attributes: ['image_url', 'tag', 'name', 'seller', 'price', 'rating', 'review'],
      });
      // status:200
      return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.PRODUCT_READ_SUCCESS, productList));
  } catch (error) {
      console.error(error);
      return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.PRODUCT_READ_FAIL));
  }
})

module.exports = router;