var express = require('express');
var router = express.Router();
<<<<<<< HEAD
<<<<<<< HEAD

const {login, register, processLogin} = require('../controllers/userController');
const {loginValidator} = require('../validations');
=======
const {login, register,processRegiter} = require('../controllers/userController');
>>>>>>> 8c62c6713ed6a5af2983b95262b49b3155968b7a
=======
const {login, register, logout} = require('../controllers/userController');

const userSessionCheck = require('../middlewares/userSessionCheck');

>>>>>>> Abril


/* Users */
router
      .get('/register', register)
      .get('/login', login)
<<<<<<< HEAD
<<<<<<< HEAD
      .post('/login',loginValidator,processLogin)
=======
      .get('/register', register)
      .get('/logout', logout)
      .get('/profile', userSessionCheck, profile)
>>>>>>> Abril

=======
      .get('/register', register)
      .post('/register',processRegiter)
>>>>>>> 8c62c6713ed6a5af2983b95262b49b3155968b7a
module.exports = router;
