const express = require("express");
const path = require("path");
const logger = require("morgan");
const indexRouter = require("./routes/index-router");
const userRouter = require("./routes/user-router");
const productRouter = require("./routes/product-router");

const port = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.join(__dirname, "../", "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(logger("dev"));

app.use("/", indexRouter);
app.use("/product", productRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`server on in http://localhost:${port}`);
});

const multer = require("multer");
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

//router.post('/register', uploadFile.single('avatar'),
//usersController.create);
