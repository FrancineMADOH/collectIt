const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000

const app = express()

app.set('view engine','ejs')
app.set('views', path.join(__dirname,'/views/'))
app.set('public', path.join(__dirname, '/public/'))
app.use(express.urlencoded({extended:false}))
console.log(__dirname,'views');


app.get('/', (req,res)=>{
    res.send('Welcome to our awesome blog')
})

app.listen(port, ()=>{
    console.log('listening on port ' + port)
})