const express = require('express')
const router = new express.Router()
const  Posts = require('../models/postsModel')

//setting up routes for users
router.get('/',(req,res)=>{
    //res.send('hello post')
    res.render('my_posts')
})

//get to the new post page 
router.get('/new', (req,res)=>{
    res.render('new_post')
})

// Edit posts
router.get('/edit', (req,res)=>{
    res.render('edit_post')
})

//Delete post
router.delete('/delete', (req,res)=>{

})

module.exports = router