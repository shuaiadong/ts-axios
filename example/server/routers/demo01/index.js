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

// router.post('/post', (req, res) => {
//     console.log(req, 'req.body')
//     res.json(req.body)
// })
router.post('/post', function(req, res) {
    console.log(req.query)
    console.log(req.body)
    res.json({
        body: req.body,
        query: req.query
    })
  })


  router.post('/post/user', function(req, res) {
    res.json({
        message: 'req.body',
        number: 200,
        data: [1,2,3]
    })
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