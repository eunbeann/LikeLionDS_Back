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

module.exports = router