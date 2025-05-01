const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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

exports.signIn = async(req,res)=>{
    try {
        const {email,password} = req.body;

        const user =  await Users.findOne({where: {email:email}});

        if(user){
            const passwordMatch = await bcrypt.compare(password,user.password);

            if(passwordMatch){
                const token = jwt.sign({userId:user.id},process.env.SECRETKEY,{expiresIn:'1h'});
                res.status(200).json({
                    message:'User logged in sucessfully',
                    token:token,
                    user:user
                })
            }else{
                return res.status(400).json({
                    message:'password doesnt match, please try again'
                })
            }
        }else{
            return res.status(400).json({
                message:'User does not exists please sign-up first'
            })
        }        
    } catch (error) {
        return res.status(500).json({
            error:`Something went wrong: ${error}`
        })
    }
}

exports.currentUser = async(req,res)=>{
    try {
        const user = req.user;
        if(!user){
            return res.status(404).json({ 
                message: 'User not found' 
            });
        }
      
        return res.status(200).json({ user });        
    } catch (error) {
        res.status(500).json({ 
            message: 'Something went wrong', error 
        });
    }
}