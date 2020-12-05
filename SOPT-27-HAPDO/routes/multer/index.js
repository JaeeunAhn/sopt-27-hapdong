const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({
  dest: 'upload/'
})

router.post('/single', upload.single(image), async (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send({
    imageUrl: image,
    file: req.file,
    body: req.body
  });
});

module.exports = router;