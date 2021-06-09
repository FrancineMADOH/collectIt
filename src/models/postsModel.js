const mongoose  = require("mongoose");
const validator = require('validator')
const Posts = mongoose.model('Posts',{
    title:{
        required: true,
        type:String,
    },
    description:{
        required:true,
        type: String,
        maxlength: 100,
        trim:true
    },
    category:{},
    content:{
        type: String,
        required: true,
        trim:true

    },
    publishedAt:{
        required:true,
        type: Date,
        default: Date.now()

    },
    image:{
        required:true,
        type:Buffer
    },
    author:{
        required:true,
        type:String
    }
})

module.exports = Posts