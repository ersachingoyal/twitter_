import passport from "passport";

export const authenticate = (req, res, next) => {
    passport.authenticate('jwt', (err, user) => {
        if(err) next(err);
        if(!user){
            return res.status(401).json({
                message: 'unauthorised access no token'
            })
        }
        req.user = user;  // added a user parameter in req object so that we can fetch user details directly from reques
        next();
    })(req, res, next);
}