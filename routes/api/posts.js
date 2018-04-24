const express = require('express');
const router = express.Router();

// @route   GET /api/posts/test
// @desc    Test Post route
// @access  Public

router.get('/test', (req, res) => res.json({ msg: 'Posts Works' }));

module.exports = router;
