const express = require('express');
const router = express.Router();

router.get('/user', (req, res)  => {
    res.json({
        status: 200,
        message: 'hello word !'
    })
})

module.exports = router