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
// signup route
router.get('/sign_up', (re,res)=>{
    res.render('sign_up')
})

//signin route
router.get('/sign_in', (req,res)=>{
    res.render('sign_in')
})

//reset password
router.get('/reset_password', (req, res)=>{
    res.render('reset_password')
})

//creatting users with post request
router.post('sign_up', (req,res)=>{
    
})

module.exports = router