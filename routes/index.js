var express = require('express');
const passport = require('passport');
var router = express.Router();
router.use('/login', require('./auth'));
router.use('/logout', require('./auth'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* 로그인, 로그아웃 */
router.post('/login',
	passport.authenticate('local', { failureRedirect: '/auth' }),
	(req, res) => {
		res.redirect('/');
    res.send('login 성공! post로 받음!');
	}
);

router.get('/logout', async (req, res) => {
	try {
		if (req.session) {
			req.session.destroy();
		}
		res.redirect(req.headers.referer);
    res.send('logout 성공! (get)')
	} catch (err) {
		res.redirect(req.headers.referer);
	}
});

module.exports = router;
