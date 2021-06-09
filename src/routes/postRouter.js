const express = require('express')
const router = new express.Router()
const  Posts = require('../models/postsModel')

//setting up routes for users
router.get('/',(req,res)=>{
    res.send('hello post')
})

module.exports = router