const Contact = require('../models/Contact');

exports.getContacts = async (req, res)=>{
    try {
        const {name, email, message} = req.body;
        const contact = new Contact({
            name, email, message
        });

        await contact.save();
        res.status(201).json({
            success: true,
            message: 'Contact created successfully',
            contact
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }   
};

exports.getAllContacts = async (req,res)=>{
    try{
        const contacts = await Contact.find();
        res.json(contacts);

    }
    catch(err){
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: err.message
        });
    }
};