const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = require('../../modules/multer');

router.post('/single', upload.single('image'), async (req, res) => {
	const image = req.file.location;
  console.log(req.file);
  console.log(req.body);
  res.send({
    imageUrl: image,
    file: req.file,
    body: req.body
  });
});

module.exports = router;