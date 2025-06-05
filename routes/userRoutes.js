const express = require('express');
const auth = require('../middleware/authMiddleware');
const { getProfile, updateProfile } = require('../controllers/userController');
const router = express.Router();

router.get('/profile', auth, getProfile);
router.patch('/profile', auth, updateProfile);

module.exports = router;
