const Admin = require('../models/Admin');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const allowedEmails = ['delta@gmail.com','j@gmail.com'];

exports.registerAdmin = async (req, res)=>{
    const{email,password} = req.body;

    if (!allowedEmails.includes(email)) {
        return res.status(403).json({ error: 'registration is only allowed for the admin email' });
    }
    
    try{
        const existingAdmin = await Admin.findOne({email});
        if(existingAdmin) {
            return res.status(400).json({error:'Admin already exists'});
        }


        const hashedPassword = await bcrypt.hash(password,3);

        const newAdmin = new Admin({email,password:hashedPassword});
        await newAdmin.save();
        return res.status(201).json({message:'Admin registered successfully'});

    }
    catch(error){
        console.error('Error registering admin:', error);
        return res.status(500).json({error:'Internal server error'});
    }
}

exports.loginAdmin = async (req, res) => {
    const {email , password} = req.body;

    try{

        const admin = await Admin.findOne({email});
        if(!admin)
            return res.status(400).json({error:'Invalid email '});
           
            const isMatch = await bcrypt.compare(password,admin.password);
            if(!isMatch)
                return res.status(400).json({error:'Invalid password'});
            const token = jwt.sign({adminId:admin._id},process.env.JWT_SECRET, {expiresIn:'2m'});
            res.json({token});
        }
    
    catch (err) {
            res.status(500).json({ error: err.message });
          }
    
};