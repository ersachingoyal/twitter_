import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, {timestamps: true});

//to encrypt the password
userSchema.pre('save', function(next){  //hooks to do something before creating the document
    const user = this;
    const SALT = bcrypt.genSaltSync(9);
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
    next();
})

// we can attach methods to the schema our own methods;

userSchema.methods.comparePassword = function compare(password){  //thsi is the incoming password
    return bcrypt.compareSync(password, this.password);
}

userSchema.methods.genJWT = function generate(){  //to generate the jwt use the same npm i jsonwebtoken
    return jwt.sign({id: this._id, email: this.email}, 'twitter_Secret',{
        expiresIn: '1h'
    });
}

const User = mongoose.model('User', userSchema);

export default User;