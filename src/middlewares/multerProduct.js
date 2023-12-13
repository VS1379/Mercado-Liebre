const multer = require("multer");

const storage = multer.diskStorage({
    //destino en el cual se guarda.
    destination: function (req, file, cb) {
      const path  = require("express/lib/application");
      let ruta = path.join(__dirname, "../../public/images/products")
    cb(null, ruta);
  },
  //nombre con el que se guarda.
  filename: function (req, file, cb) {
    cb(null, `img-${Date.now()}${path.extname(file.originalname)}`);
  },
});
const uploadFile = multer({ storage });
module.exports = uploadFile;

//router.post('/register', uploadFile.single('avatar'),
//usersController.create);
