const express = require('express');
const bodyParser = require('body-parser');
const connect = require('./config/database.js');
const {PORT} = require('./config/config.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const PostRepository = require('./repository/post-repository.js');


const PostService = require('./service/post-service.js');

app.get('/',(req,res)=>{
    res.json({
        msg : "homePage"
    })
})

app.listen(PORT,async()=>{
    console.log("server running at port ", PORT);
    await connect();
    const postRepo = new PostRepository();
    const postService = new PostService();
    await postService.create({
        title : "fun" , 
        content : "hey #bunny #buns #move "
    })
})



