const express = require('express')
const router = express.Router()


router.get('/postagens/', (req, res) => {
    res.json({
        titulo: "Meu primeiro Post",
        content: "Era uma vez uma publicação",
        author: "Eu mesmo"
    })
})


module.exports = router