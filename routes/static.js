const express = require('express');
const path = require('path');
const router = express.Router();

// Static Routes
// Serve the project's public folder reliably regardless of cwd
const publicDir = path.join(__dirname, '..', 'public');
router.use(express.static(publicDir));

// Provide explicit mounts for convenience
router.use('/css', express.static(path.join(publicDir, 'css')));
router.use('/js', express.static(path.join(publicDir, 'js')));
router.use('/images', express.static(path.join(publicDir, 'images')));

module.exports = router;



