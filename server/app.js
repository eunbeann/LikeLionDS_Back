var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
// var logger = require('morgan');
var morgan = require('morgan');

/*시퀼라이즈를 통해 익스프레스 앱과 MySQL연결*/
const { sequelize } = require('./models');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

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
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
