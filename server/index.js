const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

//라우터
const studyRouter = require('./routes/Study');
const usersRouter = require('./routes/Users');
const homeRouter = require('./routes/Home');

app.use("/study", studyRouter);
app.use("/auth", usersRouter);
app.use("/home", homeRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server Running on Port 3001");
    });
});

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
})

