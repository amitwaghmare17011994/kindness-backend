 import fs from "fs";

class ImageController {
  uploadImage = (req, res) => {
    const tmp_path = req.file.path;
    const target_path = "var/www/" + Math.random().toString()+ req.file.originalname;
    const src = fs.createReadStream(tmp_path);
    const dest = fs.createWriteStream(target_path);
    src.pipe(dest);
    src.on("end", function () {
      console.log(target_path.replace('var/www/',''));
      res.send(dest);

    });
    src.on("error", function (err) {
      res.send(err);
    });
  };
}

export default new ImageController();
