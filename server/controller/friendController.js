const asyncHandler = require('express-async-handler');

const getFriend = asyncHandler(async (req, res) => {
  res.status(200).json({
    msg: 'get Friend',
  });
});

const postFriend = asyncHandler(async (req, res) => {
  res.status(200).json({
    msg: 'post Friend',
  });
});

module.exports = { getFriend, postFriend };
