const asyncHandler = require('express-async-handler');

const getMessage = asyncHandler(async (req, res) => {
  res.status(200).json({
    msg: 'get Message',
  });
});

const postMessage = asyncHandler(async (req, res) => {
  res.status(200).json({
    msg: 'post Message',
  });
});

module.exports = { getMessage, postMessage };
