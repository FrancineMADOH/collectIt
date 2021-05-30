const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
require('./mongoose')
const port = process.env.PORT || 3000

const app = express()
app.use(express.static(path.join(__dirname, '../public/')))

app.set('view engine','ejs')
app.set('views', path.join(__dirname,'../views/'))
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())


app.get('/', (req,res)=>{
    res.render('index')
})

app.listen(port, ()=>{
    console.log('listening on port ' + port)
})