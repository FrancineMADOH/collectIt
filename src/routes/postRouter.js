const express = require('express')
const router = new express.Router()
const  Posts = require('../models/postsModel')

//setting up routes for post
router.use(express.urlencoded({extended:false}))

//get all my posts
router.get('/',(req,res)=>{
    const posts = [{
        title:'test title',
        description:'test description',
        content:'content',
        category:'society',
        publishedAt: new Date().toLocaleDateString()
    }]
    //res.send('hello post')
    res.render('my_posts',{posts:posts}
    )
})

//get to the new post page 
router.get('/new_post', (req,res)=>{
    res.render('new_post', { 
        post: new Posts()
    })
})

//get to the single article page 
router.get('/:id', async (req,res)=>{
    const post = await Posts.findById(req.params.id)
    try{
        res.render('index', { post:post })
    } catch(e){
        if(post == null) res.status(404).redirect('/')
        console.log(e)
    }
    //check if our article exist
    // if(post == null) res.redirect('/')// a debugger ca ne renvoie pas a la page precedente 
    // res.render('index', { post:post })
    
})

//create a new post with a post request
router.post('/', async (req,res)=>{
    let post = new Posts({
        title: req.body.title,
        description:req.body.description,
        category:req.body.category,
        content:req.body.content,
        author: req.body.author,
        image:req.body.image
    })
    try{
        post = await post.save()
        res.redirect(`posts/${post.id}`)
        console.log(post);
    } catch(e){
        //res.status(400).send(e)
        res.render('/new_post', { post:post })
    }
})


// Edit posts
router.get('/edit', (req,res)=>{
    res.render('edit_post')
})

//Delete post
router.delete('/delete', (req,res)=>{

})

module.exports = router