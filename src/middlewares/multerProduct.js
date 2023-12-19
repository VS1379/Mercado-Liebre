const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  //destino en el cual se guarda.
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/images/products"));
  },
  //nombre con el que se guarda.
  filename: function (req, file, cb) {
    let ext = file.originalname.substring(
      file.originalname.lastIndexOf("."),
      file.originalname.length
    );
    cb(null, `img-${req.body.name}-${Date.now()}${ext}`);
  },
});

const uploadFile = multer({ storage });
module.exports = uploadFile;
