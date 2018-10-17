const express = require('express')
const router = express.Router()


router.get('/comentarios/:postid', (req, res) => {
    res.json({
        content: "Gostei bastante",
        author: "Vinicius Berto"
    })
})


module.exports = router