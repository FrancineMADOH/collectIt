const express = require('express')
const router = new express.Router()
const Users = require('../models/usersModel')

//creating users
router.post('/',(req,res)=>{
    const user = new Users(req.body)
    user.save().then(()=>{
        res.send(user)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})

module.exports = router