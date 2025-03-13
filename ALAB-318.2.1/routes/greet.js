const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('greet', { name: 'Nada' });
}
);

module.exports = router;