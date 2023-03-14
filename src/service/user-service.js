const UserRepository = require('../repository/user-repository.js');


class userService {
    constructor(){
        this.userRepository = new UserRepository();
    }

    async signUp(data){
        try{
            const response = await this.userRepository.create(data);
            return response;
        }catch(error){
            console.log("something went wrong in user-service.js");
            throw error;
        }
    }


    async login(data){
        console.log(data , "login data");
        try {
            const response = await this.userRepository.getUser({email : data.email});
            // if user not found 
            if(!response){
                throw  {message : "User Not Found"};
            }
            // if user found but password dont match 
            if(!response.comparePassword(data.password)){
                throw {
                    message: "Incorrect password",
                }
            }
            // if user found and password match 
              const token = response.createJWT();
              return token;
               
        } catch (error) {
            console.log("something went wrong in user-service.js");
            throw error;
        }
    }


}


module.exports = userService;