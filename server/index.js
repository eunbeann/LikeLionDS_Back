const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

//라우터
const studyRouter = require('./routes/Study');
const usersRouter = require('./routes/Users');

app.use("/study", studyRouter);
app.use("/auth", usersRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server Running on Port 3001");
    });
});

