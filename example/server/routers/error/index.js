const express = require('express');
const router = express.Router();

router.get('/error', (req, res) => {
    
    if(Math.random() > 0.5) {
        res.json({
            status: 'ok'
        })
    }else {
        res.status(500)
        res.end()
    }
})



router.get('/timeout', (req, res) => {
    
    setTimeout(() => {
        res.json({
          msg: `hello world`
        })
      }, 3000)
})


module.exports = router;