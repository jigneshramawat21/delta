const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');   
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

const blogRoutes= require('./routes/blogRoutes');
const trainingRoutes = require('./routes/trainingRoutes');
const contactRoutes = require('./routes/contactRoutes');

const adminRoutes = require('./routes/adminRoutes');

app.use('/api/admin', adminRoutes);

app.use('/api/contacts', contactRoutes);

app.use('/api/trainings', trainingRoutes);

app.use('/api/blogs', blogRoutes);

app.get('/', (req, res)=>{
    res.send("hello world running.....");
});

const PORT = process.env.PORT || 5000;

mongoose
.connect(process.env.MONGO_URI, {

    useNewUrlParser :true,
    useUnifiedTopology:true,

})
.then(()=>{

    console.log("mongodb connected");
    app.listen(PORT,()=>
        console.log(`server is running on port ${PORT}`)
    )
})
.catch((err)=>
    console.log(err)
);