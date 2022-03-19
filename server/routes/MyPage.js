const express = require('express');
const router = express.Router();
const { MyPage } = require('../models');
const { validateToken } = require("../middlewares/AuthMiddleware");
const multer= require('multer');
const db = require('../models');

router.get("/", async(req,res) => {
    const listOfMyPage = await MyPage.findAll()
    res.json(listOfMyPage);
})

router.post("/", async(req,res) => {
    const mypage = req.body;
    await MyPage.create(mypage);
    res.json(mypage);
});

module.exports = router;