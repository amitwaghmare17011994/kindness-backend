import express from "express";
import Routes from "./src/routes/index.js";
import db from "./src/sequelize/index.js";
import multer from "multer";
import path from "path";

 
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.static("var/www/"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(Routes);
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

db.sequelize.sync();

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: "./var/www/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Init Upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("myImage");

// Check File Type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.send("index", {
        msg: err,
      });
    } else {
      if (req.file == undefined) {
        res.send({
          msg: "Error: No File Selected!",
        });
      } else {
        res.send({
          msg: "File Uploaded!",
          file: `uploads/${req.file.filename}`,
        });
      }
    }
  });
});
