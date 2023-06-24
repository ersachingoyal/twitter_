import JWT from 'passport-jwt';
import User from '../models/user.js';

const JwtStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;

const opts = {  //need to do this as per docs
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),  // to extract the jwt from the request
    secretOrKey: 'twitter_Secret'
}

export const passportAuth = (passport) => {
    try {
        passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
            const user = await User.findById(jwt_payload.id);
            if(!user){
                done(null, false);  //done is a callback provided by this strategy
            }else{
                done(null, user); 
            }
        }))
    } catch (error) {
        console.log(error);
        throw error;
    }
    
}