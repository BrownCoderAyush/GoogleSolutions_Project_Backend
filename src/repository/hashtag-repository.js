const Hashtag = require('../models/hashtag.js');
const CrudRepository = require('./crud-repository.js');

class HashtagRepositroy extends CrudRepository{
    constructor(){
        super(Hashtag);
    }

    async bulkCreate(data){
        try{
            const response = Hashtag.insertMany(data);
            return response ;
        }catch(err){
            console.log("something went wrong in hashtag-repository-layer");
            throw err; 
        }
    }

    async findByName(titleList){
        try {
            const tags = await Hashtag.find({
                title : titleList
            });
            return tags;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = HashtagRepositroy;