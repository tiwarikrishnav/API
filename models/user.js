const mongoose= require('mongoose')
const UserSchema = new mongoose.Schema({

 name:{
    type:String,
    require:true
 },
 email:{
    type:String,
    require:true
 },
 password:{
    type:String,
    require:true
 },

 image: {
    public_id:{
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
},
    createdAt:{
        type:Date,
        default: Date.now,
    },
    
});


var UserModel = mongoose.model('user',UserSchema);
module.exports= UserModel