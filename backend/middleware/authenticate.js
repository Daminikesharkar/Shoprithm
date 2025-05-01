const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.authenticate = async(req,res,next)=>{
    try {
        const token = req.header('Authorization');
        const userId = jwt.verify(token, process.env.SECRETKEY);

        const user = await User.findOne({where:{id:userId.userId}});
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
      
        req.user = user; 
        next();   
    } catch (error) {
        console.log(error)
        res.status(500).json({ err: 'Internal Server Error - please login again' });
    }
}