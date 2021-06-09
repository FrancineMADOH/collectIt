const express = require('express')
const router = new express.Router()
const Users = require('../models/usersModel')

//setting up routes for users
router.get('/',(req,res)=>{
    res.send('hello users')
})

module.exports = router