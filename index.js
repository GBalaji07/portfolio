const express =require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const UserModel = require('./models/Users');


const app=express();
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/curd')
.then(()=>console.log('MongoDb connected'))
.catch((err)=>console.log('error connecting to mongoDB',err));

app.post('/createUser',(req,res)=>{
    UserModel.create(req.body)
    .then(user=>res.json(user))
    .catch(err=>{
        console.error(err);
        res.status(500).json({message:'server Error',error:err});
    })
})


app.listen(3002,()=>{
    console.log('server is running on port 3002');
    
})