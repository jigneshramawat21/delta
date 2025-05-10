const mongoose = require('mongoose');

const trainingSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageUrl:String,
    CreatedAt:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model('Training',trainingSchema);