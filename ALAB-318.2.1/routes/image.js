const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('image', { title: 'Image' });
}
);

router.post('/download-image', (req, res) => {
    const { image } = req.body;
    const filePath = path.join(__dirname, '../images/', image);
    res.download(filePath);
}
);

module.exports = router;