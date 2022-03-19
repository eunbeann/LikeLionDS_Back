const express = require('express');
const router = express.Router();
const { CheckA } = require('../models');
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/",async(req,res) => {
//     const checkH = req.body;
//     await CheckH.create(checkH);
//     res.json(checkH);
});

router.post("/attend" ,async(req,res) => {
    const checkA = req.body;
    await CheckA.create(checkA);
    res.json(checkA);
});

router.get("/attend",async(req,res) => {
    try {
    const listofattend = await CheckA.findAll()
    res.json(listofattend);
    }
    catch{
        console.log('attend error')
    }
});
module.exports = router