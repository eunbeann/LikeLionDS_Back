const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

//라우터
const studyRouter = require('./routes/Study');
const usersRouter = require('./routes/Users');
const checkRouter = require('./routes/Check');
const mypageRouter = require('./routes/MyPage');

app.use("/study", studyRouter);
app.use("/auth", usersRouter);
app.use("/check", checkRouter);
app.use("/mypage", mypageRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server Running on Port 3001");
    });
});

