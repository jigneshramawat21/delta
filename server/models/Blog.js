const mongoose = require('mongoose'); // <-- ADD THIS LINE!


const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});

module.exports = mongoose.model('Blog', blogSchema);
