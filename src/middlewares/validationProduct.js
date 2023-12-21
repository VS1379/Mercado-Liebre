const { body } = require("express-validator");
const validateRegister = [
  body("name").notEmpty().withMessage("El nombre no puede estar vacio"),
  body("description")
    .notEmpty()
    .withMessage("La descripcion no puede estar vacia"),
  body("price").notEmpty().withMessage("El precio no puede estar vacio"),
  body("discount").notEmpty().withMessage("El descuento no puede estar vacio"),
  body("img").custom((value, { req }) => {
    if (!req.file) {
      throw new Error("Se necesita 1 o mas imagenes");
    }
    if (
      req.file.mimetype == "image/png" ||
      req.file.mimetype == "image/jpg" ||
      req.file.mimetype == "image/jpeg"
    ) {
      return true;
    } else {
      throw new Error("¡Solo .png, .jpg y .jpeg son los formatos permitidos!");
    }
  }),
];

module.exports = validateRegister;
