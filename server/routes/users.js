const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const bcrypt = require("bcrypt");

const {sign} = require('jsonwebtoken');
const { validateToken } = require('../middlewares/AuthMiddleware');

router.post("/", async(req,res) => {
    const { userID, userPW, userName, userMajor, userEmail, userPhone, isStaff } = req.body;
    bcrypt.hash(userPW, 10).then((hash) => {
        Users.create({
            userID: userID,
            userPW: hash,
            userName: userName,
            userMajor: userMajor,
            userEmail: userEmail,
            userPhone: userPhone,
            isStaff: isStaff,
        });
        res.json("SUCCESS");
    });
});

router.post('/login', async(req,res) => {
    const { userID, userPW } = req.body;
    const user = await Users.findOne({ where: { userID : userID }});
    if (!user) res.json({error:"User Doesn't Exist"});

    bcrypt.compare(userPW, user.userPW).then((match) => {
        if (!match) res.json({ error: "Wrong userID and userPW"});

        const accessToken = sign({userID: user.userID, id: user.id},"importantsecret");
        res.json({token: accessToken, userID: userID, id: user.id});
    });
});

router.get("/auth", validateToken, (req, res) => {
    res.json(req.user);
});

module.exports = router;