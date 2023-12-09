const express = require("express");
const path = require("path");
const logger = require("morgan");
const indexRouter = require("./routes/index.routes");
const userRouter = require("./routes/user.routes");
const productRouter = require("./routes/product.routes");
const methodOverride = require("method-override");

const port = process.env.PORT || 3001;
const app = express();

app.use(methodOverride("_method")); //permite utilizar put y delete
app.use(express.static(path.join(__dirname, "../", "public"))); //definir la carpeta publica
app.set("view engine", "ejs"); //motor vistas
app.set("views", path.join(__dirname, "views")); //setear la carpeta de views
app.use(express.urlencoded({ extended: false })); //Enviar y recibir informacion con los metodos http
app.use(express.json()); //Enviar y recibir informacion con los metodos http

app.use(logger("dev"));

app.use("/", indexRouter);
app.use("/product", productRouter);
app.use("/user", userRouter);
app.use((req,res, next)=>{
  res.status(404).render("not-found")
})

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
