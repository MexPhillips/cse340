const express = require('express');
const router = express.Router();

// Inventory page route
router.get('/inventory', (req, res) => {
  res.render('inventory', { title: 'Inventory' });
});

// About page route
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});

// Contact page route
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

module.exports = router;
