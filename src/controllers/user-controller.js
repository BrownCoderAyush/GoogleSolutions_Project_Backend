const UserService = require('../service/user-service.js');

const userService = new UserService();

const signUp = async (req, res) => {
    try {
        console.log("body", req.body);
        const response = await userService.signUp(req.body);
        return res.status(201).json({
            success: true,
            message: "User Created Successfully", 
            data: response,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'something went wrong while creating User',
            data: {},
            err: error
        });
    }
}

const login = async(req,res)=>{
    try {
            console.log('here');
        const response = await userService.login(req.body);
        return res.status(201).json({
            success: true,
            message: "User logged In", 
            data: response,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'something went wrong while logging In',
            data: {},
            err: error
        });
    }
}


module.exports = {
    signUp ,
    login
}