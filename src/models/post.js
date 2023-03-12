const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema({
    title : {
        type : String , 
        required : true , 
        min : [3 , 'Title should be more than 2 characters']
    } , 
    content : {
        type : String ,
        required : true ,
        max: [250, 'Post cannot be more than 250 characters'] 
    }

}, { timestamps: true });

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;

