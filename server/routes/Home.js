const express = require('express');
const router = express.Router();
const { Home } = require('../models');
const { Users } = require('../models/Users');
const { validateToken } = require("../middlewares/AuthMiddleware");

// GET /로 접속했을 때 라우터
// Home.findAll로 home 테이블에 있는 데이터를 가져온다.
router.get("/", async(req, res) => {
    const home = await Home.findAll()
    res.json(home);
});

// 명예의 전당 1등 이름을 Home 모델에 저장한다.(운영진만 가능)
router.post('/', async(req,res) => {
    // const first_winner = req.body.id;
    const first_winner = await Home.create({
      first_winner: req.body.first_winner,
    });
    res.json(first_winner);
});
// 명예의 전당 2등 이름을 Home 모델에 저장한다.(운영진만 가능)
router.post('/', async(req,res) => {
  const second_winner = await Home.create({
    second_winner: req.body.second_winner,
  });
  res.json(second_winner);
});
// 명예의 전당 3등 이름을 Home 모델에 저장한다.(운영진만 가능)
router.post('/', async(req,res) => {
  const third_winner = await Home.create({
    third_winner: req.body.third_winner,
  });
  res.json(third_winner);
});
// 명예의 전당을 1등을 수정한다.
router.route('/update')
.patch(async (req, res, next) => {
  try{
    const result = await Home.update({
      first_winner: req.body.first_winner,
      second_winner: req.body.second_winner,
      third_winner: req.body.third_winner,
    }, {
      where: { first_winner: req.body.first_winner, second_winner: req.body.second_winner, third_winner: req.body.third_winner },
    });
    res.json(result);
  } catch (err){
    console.error(err);
    next(err);
  }
})
// 명예의 전당 1등을 삭제한다.
.delete(async (req, res, next) =>{
  try{
    const result = await Home.destory({
      where: {first_winner: req.body.first_winner, second_winner: req.body.second_winner, third_winner: req.body.third_winner,
      }
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//대표님의 한 말씀 저장
router.post('/', async (req, res, next)=> {
  try{
    const leader_notice = await Home.create({
      leader_notice: req.body.leader_notice,
    });
    console.log(leader_notice);
    res.status(201), json(leader_notice);
  } catch (err){
    console.error(err);
    next(err);
  }
});
//대표님의 한 말씀 수정
router.route('/notice_result')
.patch(async (req, res, next) => {
  try{
    const notice_result = await Home.update({
      notice_result: req.body.notice_result,
    },{
      where:{notice_result: req.body.notice_result},
    });
    res.json(notice_result);
  } catch(err){
    console.error(err);
    next(err);
  }
})
.delete(async (req, res, next) => {
  try {
    const notice_result = await Home.destory({
      where: {id: req.body.id } });
    res.json(notice_result);
    }
    catch(err) {
      console.error(err);
      next(err);
    }
});



module.exports = router