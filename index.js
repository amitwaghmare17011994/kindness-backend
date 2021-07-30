import express from "express";
import Routes from "./src/routes/index.js";
import db from "./src/sequelize/index.js";
import multer from "multer";
import imageController from "./src/controllers/image.controller/index.js";

const PORT = process.env.PORT || 5000;
const app = express();

const upload = multer({ dest: "var/www/" });
const type = upload.single("file");

app.use(express.static("var/www/"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(Routes);
 
db.sequelize.sync();

 
app.post("/upload", type,imageController.uploadImage);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
