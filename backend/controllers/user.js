const bcrypt = require('bcrypt');
const Users = require('../models/user');


exports.signUp = async(req, res)=>{

    try {
        const { username, email, password } = req.body;

        const existingUser = await Users.findOne({where:{email:email}});

        if(existingUser){
            return res.status(400).json({
                message:'User already exists, please Login'
            })
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const createdUser = await Users.create({
            username:username,
            email:email,
            password:hashedPassword
        })

        if(createdUser){
            return res.status(201).json({
                message:'User Added successfully, Proceed to Login'
            })
        }    

    } catch (error) {
        return res.status(500).json({
            error:`Something went wrong: ${error}`
        })
    }

}