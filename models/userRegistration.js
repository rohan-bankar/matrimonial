const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    phone:{
        type:Number,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    // confirmPassword:{
    //     type:String,
    //     require:true
    // },
    is_admin:{
        type:Number,
        require:true
    },
    is_verified:{
        type:Number,
        default:0
    },
    token:{
        type:String,
        default:''
    },
    // formRegistration: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'FormRegistration',
    // },
    
 });

 /*userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
        this.confirmPassword = await bcrypt.hash(this.confirmPassword,10);
    }
       next();  
     })*/

module.exports = mongoose.model('User',userSchema);