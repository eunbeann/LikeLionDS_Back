const passport = require('passport');
const local = require('./localStrategy'); // 로컬서버로 로그인할때

const User = require('../models/User');

//직렬화(Serialization): 객체를 직렬화하여 전송 가능한 형태로 만드는 것.
module.exports = () => {
  passport.serializeUser((User, done) => {
    done(null, User.id);
});

//역직렬화(Deserialization) : 직렬화된 파일 등을 역으로 직렬화하여 다시 객체의 형태로 만드는 것.

passport.deserializeUser((id, done) => {
  // req.session에 저장된 사용자 아이디를 바탕으로 DB 조회로 사용자 정보를 얻어낸 후 req.user에 저장. 
  // 즉, id를 sql로 조회해서 전체 정보를 가져오는 복구 로직이다.
  User.findOne({ where: { id } })
     .then(User => done(null, User)) //? done()이 되면 이제 다시 req.login(user, ...) 쪽으로 되돌아가 다음 미들웨어를 실행하게 된다.
     .catch(err => done(err));
});

//^ 위의 이러한 일련의 과정은, 그냥 처음부터 user객체를 통째로 주면 될껄 뭘 직렬화/역직렬화를 하는 이유는
//^ 세션 메모리가 한정되어있기때문에 효율적으로 하기위해, user.id값 하나만으로 받아와서, 
//^ 이를 deserialize 복구해서 사용하는 식으로 하기 위해서다.

/* ---------------------------------------------------------------------- */

local();
//kakao();
};
