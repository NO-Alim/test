const express = require('express');
const { getMessage, postMessage } = require('../controller/messageController');
const { loginCheck } = require('../middlewares/authMiddlerware');

const router = express.Router();

router.get('/', loginCheck, getMessage);
router.post('/', loginCheck, postMessage);

module.exports = router;
