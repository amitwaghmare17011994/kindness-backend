import fs from "fs";
import postController from "../post.controller/index.js";

class ImageController {
  uploadImage = async (req, res) => {
    const tmp_path = req.file.path;
    const fileName = Math.random().toString() + req.file.originalname;
    const target_path = "var/www/" + fileName;
    const src = fs.createReadStream(tmp_path);
    const dest = fs.createWriteStream(target_path);
    src.pipe(dest);
    src.on("end", async function () {
      console.log(target_path.replace("var/www/", ""));
      const imageDetails = await postController.createPostWithImage(req, fileName)
      res.send(imageDetails);
    });
    src.on("error", function (err) {
      res.send(err);
    });
  };
}

export default new ImageController();


