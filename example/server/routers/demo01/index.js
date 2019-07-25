const express = require('express');
const router = express.Router();

router.get('/user', (req, res)  => {
    res.json({
        status: 200,
        message: 'hello word !'
    })
})

router.get('/get', (req, res) => {
    res.json(req.query)
})

router.post('/post', (req, res) => {
    res.json(req.query)
})

router.put('/put', (req, res) => {
    res.json(req.query)
})

router.delete('/delete', (req, res) => {
    res.json(req.query)
})

router.options('/options', (req, res) => {
    res.json(req.query)
})

router.head('/head', (req, res) => {
    res.json(req.query)
})

router.patch('/patch', (req, res) => {
    res.json(req.query)
})

module.exports = router