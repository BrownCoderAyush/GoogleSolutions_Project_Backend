const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index.js')
const connect = require('./config/database.js');
const {PORT} = require('./config/config.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api' , apiRoutes );


const PostRepository = require('./repository/post-repository.js');
const PostService = require('./service/post-service.js');
const userRepository = require('./repository/user-repository.js');
const UserRepo = new userRepository();

app.listen(PORT,async()=>{
    console.log("server running at port ", PORT);
    await connect();
    // const postRepo = new PostRepository();
    // const postService = new PostService();
    // await postService.create({
    //     title : "fun" , 
    //     content : "hey #bunny #buns #move "
    // })
    // const response = await UserRepo.getUserByEmail({email : "ayushchopra0@gmail.com"});
    // console.log(response);
})



