const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/collectIt',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true,
    useCreateIndex:true,
    
}).then(()=>{
    console.log(
        'db connected'
    );
}).catch((e)=>{
    console.log(e);
})