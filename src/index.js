const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
require('./mongoose')
const Posts = require('./models/postsModel')
const Users = require('./models/usersModel')
const usersRouter = require('./routes/usersRouter')
const postRouter = require('./routes/postRouter')
const port = process.env.PORT || 3000

const app = express()
app.use(express.static(path.join(__dirname, '../public/')))
app.use(express.json())
app.use('/users',usersRouter)
app.use('/posts',postRouter)

app.set('view engine','ejs')
app.set('views', path.join(__dirname,'../views/'))
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

app.get('/', (req,res)=>{
    //res.render('sign_up')
})

app.listen(port, ()=>{
    console.log('listening on port ' + port)
})