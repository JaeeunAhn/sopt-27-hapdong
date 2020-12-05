const express = require('express');
const router = express.Router();
const util = require('../../modules/util');
const responseMessage = require('../../modules/responseMessage');
const statusCode = require('../../modules/statusCode');
const { Profile } = require('../../models')

// 프로필 json 리턴 구현
router.get('/', async (req, res) =>{
	try {
			const profile = await Profile.findOne({
				attributes: ['profileImageUrl','badgeImageUrl', 'level', 'point', 'coupon'],
			});
		return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.PROFILE_READ_SUCCESS, profile));
	} catch (err) {
		console.log(err);
		return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
	}
});

module.exports = router;