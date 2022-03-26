const express = require('express');
const router = express.Router();
const { Study } = require('../models');
const { Img } = require('../models');
const { validateToken } = require("../middlewares/AuthMiddleware");
const multer = require('multer');
const { hash } = require('bcrypt');
const fs = require('fs');

const bodyParser = require('body-Parser');

router.use(bodyParser.json())



router.get("/", async(req,res) => {
    const listOfStudy = await Study.findAll()
    res.json(listOfStudy);
});

router.get('/studies/:id', async(req,res) => {
    const id = req.params.id;
    const study = await Study.findByPk(id);
    res.json(study);
});

router.delete("/:studyId", async(req,res) => {
    const studyId = req.params.studyId;
    await Study.destroy({
        where: {
            id: studyId,
        },
    });
    res.json("DELETE STUDY POST");
});

router.put("/update", async(req,res) => {
    await Study.update({
        title:req.body.title,
        studyText:req.body.studyText,
        username:req.body.username,
        studyDate:req.body.studyDate},{
        where:{
            id:req.body.id
        }}
    );
    res.json("UPDATE STUDY POST");
});

    try {
        fs.readdirSync('uploads');
    } catch (error) {
        console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
        fs.mkdirSync('uploads');
    } 

const randomstring = require("randomstring");

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); //저장할 폴더
    },
    filename: (req, file, cb) => {
      var fileName = randomstring.generate(25); // 파일 이름 - 랜덤
      var mimeType;
      switch (
        file.mimetype // 파일 타입
      ) {
        case "image/jpeg":
          mimeType = "jpg";
          break;
        case "image/png":
          mimeType = "png";
          break;
        case "image/gif":
          mimeType = "gif";
          break;
        case "image/bmp":
          mimeType = "bmp";
          break;
        default:
          mimeType = "jpg";
          break;
      }
      cb(null, fileName + "." + mimeType); // 파일 이름 + 파일 타입 형태로 이름 설정
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024, // 크기제한 : 5byte
  },
});


router.post("/", upload.single("img"), async (req, res) => {
  //const { user_id } = res.locals.user;
    const { title,
    studyText,
    username,
    studyDate } = req.body;
    const img = req.file.path;
  //각종 예외처리 생략
  
    const all = await Study.create({
        title,
        studyText,
        username,
        studyDate,
        img
    });
    res.json(all);
})


module.exports = router
