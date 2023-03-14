const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');

const userSchema = new mongoose.Schema({

    email : {
        type : String ,
        required : true ,
        unique : true 
    }, 
    // optional due to google auth 
    password : {
        type : String , 
        required : true 
    } , 
    posts : [
        {
            type : mongoose.Schema.Types.ObjectId , 
            ref : 'Post'
        }
    ]
},{
    timestamps : true 
});

userSchema.methods.createJWT = function(){
    const token = JWT.sign( { id : this.id  , email : this.email }, 'secret' , {
        expiresIn : '1h'
    });
    return token ; 
}
userSchema.methods.comparePassword = function compare(password){
    return bcrypt.compareSync(password , this.password);
}

userSchema.pre('save',function(next){
    const user = this;
    const SALT = bcrypt.genSaltSync(9);
    const encryptedPassword = bcrypt.hashSync(user.password , SALT);
    user.password = encryptedPassword;
    next();
});




const User = mongoose.model('User',userSchema);
module.exports = User;