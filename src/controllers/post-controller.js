const PostService = require("../service/post-service.js");

const postService = new PostService();
const create = async(req , res)=>{
    try {
            console.log("body" , req.body);
           const response = await postService.create(req.body);
           return res.status(201).json({
                success : true , 
                message : "Post Created Successfully" , 
                data : response , 
                err : {}
           });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'something went wrong while creating Post',
            data:{},
            err : error
        });
    }
} 

module.exports = {
    create 
}