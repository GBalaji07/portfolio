require('dotenv').config();



const express =require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const UserModel = require('./models/Users');


const app=express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 3002; // Use PORT from .env or default to 3001
const MONGO_URI = process.env.MONGO_URI;


// mongoose.connect('mongodb://127.0.0.1:27017/curd')
// .then(()=>console.log('MongoDb connected'))
// .catch((err)=>console.log('error connecting to mongoDB',err));

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('Error connecting to MongoDB:', err));

app.post('/createUser',(req,res)=>{
    UserModel.create(req.body)
    .then(user=>res.json(user))
    .catch(err=>{
        console.error(err);
        res.status(500).json({message:'server Error',error:err});
    })
})


app.listen(PORT, () => {
    
    console.log(`Server is running on port ${PORT}`);
});