const express = require('express');
const {
  loginUser,
  registerUser,
  logoutUser,
} = require('../controller/loginController');

const router = express.Router();

// login

router.post('/login', loginUser);

// register
router.post('/register', registerUser);

router.delete('/logout', logoutUser);

module.exports = router;
