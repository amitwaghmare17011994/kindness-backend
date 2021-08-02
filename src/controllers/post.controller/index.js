import Sequelize from "sequelize";
import db from "../../sequelize/index.js";
const Op = Sequelize.Op;
class PostController {
  Post = db.post;
  PostMeta = db.postMeta;

  getAllPost = async (req, res) => {
    try {
      const allPost = req.params.userId
        ? await await this.Post.findAll({
            where: { post_author: req.params.userId },
          })
        : await this.Post.findAll();
      const postIdList = allPost.map((ins) => ins.id);
      const allPostMeta = await this.PostMeta.findAll({
        where: {
          post_id: {
            [Op.in]: postIdList,
          },
        },
      });
      res.send({ allPost, allPostMeta });
    } catch (err) {
      res.status(500).send(err);
    }
  };

  initiateBisoo = async (req, res) => {
    const post = await this.Post.create({
      post_author: "",
      post_date: "",
      post_date_gmt: "",
      post_content: "",
      post_title: "",
      post_status: "",
      comment_status: "",
      post_type: "",
      post_name: "",
    });

    res.send({ id: post.id });
  };

  createPostWithImage = async (req, imageLink) => {
    const post = await this.Post.create({
      post_author: req.params.id,
      post_date: new Date(),
      post_date_gmt: new Date(),
      post_content: "",
      post_title: "Add picture",
      post_status: "Inherit",
      comment_status: "open",
      post_modified: new Date(),
      post_modified_gmt: new Date(),
      post_type: "attachment",
      post_name: "add-picture",
      post_mime_type: "image/jpeg",
      guid: `http://${req.headers.host}/${imageLink}`,
    });

    return post.dataValues;
  };

  createPost = async (req, res) => {
    try {
      const post = await this.Post.create({
        post_author: req.body.author,
        post_date: new Date(),
        post_date_gmt: new Date(),
        post_content: req.body.content,
        post_title: req.body.content,
        post_status: req.body.postStatus, // 'Publish', // Inherit
        comment_status: req.body.commentStatus, // 'Open', // Closed for bisso & Closed for attachment
        post_modified: new Date(),
        post_modified_gmt: new Date(),
        post_type: req.body.postType, //'act', // bispo
        post_name: req.body.postName || req.body.content, // tittle for bisso
        // post_content_filtered: {type: Sequelize.STRING},
        // post_parent: 0,
        // menu_order: 0,
        // post_mime_type: {type: Sequelize.STRING},
        // comment_count: 0
        // ping_status: {type: Sequelize.STRING},
        // post_password: {type: Sequelize.STRING},
        // post_name: {type: Sequelize.STRING},
        // to_ping: {type: Sequelize.STRING},
        // pinged: {type: Sequelize.STRING},
        // post_excerpt: {type: Sequelize.STRING},
      });

      post.update({
        guid: `https://seekindness.org/${req.headers.host}/${req.body.postType}/${post.id}`,
      });

      const postMeta = JSON.parse(req.body.postMeta);
      const postMetaList = Object.keys(postMeta).map(function (key) {
        return {
          post_id: post.id,
          meta_key: key,
          meta_value: postMeta[key],
        };
      });
      await this.PostMeta.bulkCreate(postMetaList);

      // Meta: { //POST
      //     postanonymously: yes/no,
      //     location: Karkapal, Chhattisgarh, India,
      //     longitude: 82.03798929999999,
      //     latitude: 19.0606401,
      //     likeCnt: '',
      //     upwardUserId: ''
      //     likeUserId: '',
      //     upwardCnt: ''

      // Bisoo: {
      //     sendername: name1, name2,
      //     sendermail: mail1, mail2,
      //     recipientname: namer1, namer2,
      //     recipientemail: mailr1, mailr2,
      //     card_template: Background Colour and Overlay Image
      //     main_header: New Test Bissoo
      //     message: Hii There test description
      //     font_colour: #000000
      //     card_colour: #ffcc4c
      //     imageId: 2463 we need to create a post for it and will add image id there.
      //     card_signing: Public/Private
      //     card_viewing:  Public/Private

      // }

      res.status(200).send({ status: "Ok", data: { ...post, postMeta } });
    } catch (err) {
      res.status(500).send(err);
    }
  };

  getAllPostMeta = async (req, res) => {
    try {
      const postIdList = JSON.parse(req.body.postIdList);
      const allPostMeta = await this.PostMeta.findAll({
        where: {
          post_id: {
            [Op.in]: postIdList,
          },
        },
      });
      res.send(allPostMeta);
    } catch (err) {
      res.status(500).send(err);
    }
  };

  getPostById = async (req, res) => {
    try {
      const allPost = await this.Post.findByPk(req.params.id);
      res.send(allPost);
    } catch (err) {
      res.status(500).send(err);
    }
  };

  getPostLikedByUser = async (req, res) => {
    try {
      const allPost = await this.PostMeta.findAll({
        where: { meta_key: "likeUserId" },
      });
      res.send(allPost);
    } catch (err) {
      res.status(500).send(err);
    }
  };
}

export default new PostController();
