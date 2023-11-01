const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const loginUser = asyncHandler(async (req, res) => {
  const user = {
    id: 1,
    name: 'alim',
  };
  const token = jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });

  // set cookie
  res
    .cookie(process.env.COOKIE_NAME, token, {
      maxAge: process.env.JWT_EXPIRY,
      httpOnly: true,
      signed: true,
    })
    .status(200)
    .json(user);
});

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    id: 1,
    name: 'alim',
  });
});

const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie(process.env.COOKIE_NAME);
  res.status(200).json({
    response: 'logout successfully',
  });
});

module.exports = { loginUser, registerUser, logoutUser };
