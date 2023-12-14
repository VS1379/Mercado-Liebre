const path = require("path");
const fs = require("fs");

const deleteFile = {
  deleteFile(ruta) {
    fs.unlinkSync(path.join(__dirname, "../../public/images/products",ruta));
  },
};

module.exports = deleteFile;
