var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
// var logger = require('morgan');
var morgan = require('morgan');
var session = require('express-session');
const passport = require('passport');
const passportConfig = require('./passport');
/*시퀼라이즈를 통해 익스프레스 앱과 MySQL연결*/
const { sequelize } = require('./models');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const authRouter = require('./routes/auth'); // 인증 라우터
var app = express();
passportConfig(); // 패스포트 설정

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3001);
app.set('view engine', 'jade');

//db.sequelize를 불러와서 sync 메서드를 사용해 서버 실행 시 MySQL과 연동
sequelize.sync({ force: false }) //true로 설정하면 서버 실행 시 마다 테이블을 재생성. 테이블을 잘못 만든 경우에 true로 설정하면 됨
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan('dev'));
//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// passport module code
app.use(cookieParser('ThisisSecret'));

app.use(
   session({
      resave: false,
      saveUninitialized: false,
      secret: 'ThisisSecret',
      cookie: {
         httpOnly: true,
         secure: false, //https가 아닌 환경에서도 사용, 그러나 배포 시에는 https를 적용하고 secure도 true로 설정하는 것이 좋다
      },
   }),
);

//! express-session에 의존하므로 뒤에 위치해야 함
app.use(passport.initialize()); // 요청 객체에 passport 설정을 심음
app.use(passport.session()); // req.session 객체에 passport정보를 추가 저장
// passport.session()이 실행되면, 세션쿠키 정보를 바탕으로 해서 passport/index.js의 deserializeUser()가 실행하게 한다.

//* 라우터
app.use('../routes/auth', authRouter);
app.use('../routes/index', indexRouter);
app.use('../routes/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});

module.exports = app;
