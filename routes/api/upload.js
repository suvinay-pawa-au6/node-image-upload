const express = require("express");
const multer = require("multer");
const router = express.Router();
const store = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/");
    console.log("dsfhjlkds");
  },
  filename: function (req, file, cb) {
    console.log("asdkjhjasdhkjsadhk");
    cb(null, Date.now() + file.originalname);
  },
});
var upload = multer({ storage: store });
router.post("/img", upload.array("image", 5), (req, res, next) => {
  console.log("hi");
  var fileinfo = req.files;
  /*
  for (i = 0; i < fileinfo.image.length; i++) {
    console.log(fileinfo.image[i]);
    var fu = multer({ storage: store }).single(fileinfo.image[i]);
    fu(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
      } else if (err) {
        // An unknown error occurred when uploading.
      }
      console.log("yay");
      // Everything went fine.
    });
  }*/
  res.send(fileinfo);
});

router.get("/", (req, res, next) => {
  res.sendFile("upload.html");
});
module.exports = router;
