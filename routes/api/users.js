const express = require('express')
const router = express.Router()

router.get('/test', (req,res)=> {res.json({msg: "Users Working"})})

module.exports = router