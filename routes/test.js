const express = require("express");

const app = express();
// json으로 데이터 받기
app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("get 요청");
  console.log(req.body);
});

app.post("/", (req, res, next) => {
  res.send("post 요청");
  console.log(req.body);
});
app.listen(8080);