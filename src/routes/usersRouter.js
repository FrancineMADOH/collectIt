const express = require('express')
const router = new express.Router()
const Users = require('../models/usersModel')
const bcrypt = require('bcrypt')

router.use(express.urlencoded({extended:false}))

//creating users + user sign_up route
router.post('/sign_up', async (req,res)=>{
    const user = new Users(req.body)
    try{
        //const password = bc
        await user.save({
            name: req.body.name,
            email:req.body.email,
            password:req.body.password,
            //confirmpw:req.body.confirmpw
        })
        //res.status(201).send(user)
        res.redirect('sign_in')
        console.log(user)
    }catch(e){
        //res.status(400).send(e)
        res.redirect('sign_up')
    }
})
// signup route
router.get('/sign_up', async (req,res)=>{
    // try{
    //     const users = await Users.find({})
    // }catch(e){
    //     res.status(500).send()
    // }
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

//creating users with post request
router.post('sign_up', (req,res)=>{
    
})

//reading a single user
// router.get('/:id', async (req,res)=>{
//     const _id = req.params.id
//     try{
//         const user = await Users.findById(_id)
//         //the user might not exist
//         if(!user){
//             res.status(404).send()
//         }
//     }catch(e){
//         res.status(500).send(e)
//     }
// })
//reading a single user profile
router.get('/profile', async(req,res)=>{
    try{
        res.render('profile')
    } catch(e){
        res.status(404).send(e)
    }
})

module.exports = router