const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { JWT_SECRET } = process.env;

router.post('/register', (req, res) => {
  // Dummy register logic
  res.json({ message: 'Registered successfully' });
});

router.post('/login', (req, res) => {
  const token = jwt.sign({ id: 1 }, JWT_SECRET);
  res.json({ token });
});

module.exports = router;