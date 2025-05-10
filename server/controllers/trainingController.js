const Training = require('../models/Training');

exports.createTraning = async (req, res)=>{

    try{

        const{ title, description, imageUrl} = req.body;
        
        const training = new Training({
            title,
            description,
            imageUrl
        });

        await training.save();
        res.status(201).json({
            message: 'Training created successfully',
            training
        });

    }
    catch(err){
        res.status(500).json({
            error:err.message
        });
    }
};

exports.getAllTraining = async (req, res)=>{
    try{
        const trainings = await Training.find();
        res.json(trainings)
    }catch(err){
        res.status(500).json({error:err.message});
    }
};


exports.updateTraning = async (req,res)=>{
    try{
        const updated = await Training.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updated)
        {
            return res.status(404).json({message:'training not found'});

        }

        res.json({
            message:'Training updated successfully',
            training: updated
        }); 
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

exports.deleteTraining = async (req,res)=>{
    try{
        const  deleted = await Training.findByIdAndDelete(req.params.id);

        if(!deleted){
            return res.status(404).json({message:'Training not found'});
        }
        res.json({
            message:'Training deleted successfully',
            training: deleted
        });

    }   catch(err){
        res.status(500).json({error:err.message});
    }
};

