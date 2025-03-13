const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('about', { title: 'Test Now' });
});



module.exports = router;