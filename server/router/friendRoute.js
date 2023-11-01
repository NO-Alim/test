const express = require('express');
const { loginCheck } = require('../middlewares/authMiddlerware');
const { getFriend, postFriend } = require('../controller/friendController');

const router = express.Router();

router.get('/', loginCheck, getFriend);
router.post('/', loginCheck, postFriend);

module.exports = router;
