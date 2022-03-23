const express = require('express');
const router = express.Router();
const { Study } = require('../models');
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", async(req,res) => {
    const listOfStudy = await Study.findAll()
    res.json(listOfStudy);
});

router.get('/studies/:id', async(req,res) => {
    const id = req.params.id;
    const study = await Study.findByPk(id);
    res.json(study);
});

router.post("/", async(req,res) => {
    const study = req.body;
    await Study.create(study);
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

module.exports = router