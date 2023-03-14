const user = require('../models/user.js');
const crudRepository = require('./crud-repository.js')
class userRepository extends crudRepository{
    constructor(){
        super(user);
    }

    async getUser(data){
        try{
            const response = await user.findOne(data);
            return response;            
        }catch(error){
            console.log("Something went wrong in user-repository.js");
            throw error;
        }
    }

    
    

}


module.exports =  userRepository;