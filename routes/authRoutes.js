const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
const protect = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);

// ✅ Protected route
router.get('/profile', protect, (req, res) => {
  res.json({ message: 'Profile fetched successfully', user: req.user });
});

module.exports = router;
