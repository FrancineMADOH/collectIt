const mongoose = require('mongoose')
const validator = require('validator')

const Users = mongoose.model('Users',{
    username:{
        required:true,
        type:String,
        trim:true
    }, 
    email:{
        required:true,
        type:String,
        trim:true,
        lowerCase:true,
        validator(value){
            if(validator.isEmail(value)){
                throw new Error('Please provide a valid email')
            }
        }
    },
    password:{
        required:true,
        type: String,
        minlength:8,
        trim:true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('The string password must not be part of your password')
            }
        
        }
    },
    role:{
        type: String,
    }
})

module.exports = Users