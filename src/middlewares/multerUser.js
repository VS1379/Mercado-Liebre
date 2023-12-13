const storage = multer.diskStorage({
  //destino en el cual se guarda.
  destination: function (req, file, cb) {
    cb(null, "./public/images/avatars");
  },
  //nombre con el que se guarda.
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
  },
});

const uploadFile = multer({ storage });

module.exports = uploadFile;

//router.post('/register', uploadFile.single('avatar'),
//usersController.create);
