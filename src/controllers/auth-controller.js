import UserService from "../services/user-service.js";

const userService = new UserService();

export const signup = async (req, res) => {
    try {
        const respose = await userService.signup({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        })
        return res.status(201).json({
            message: 'Successfully createad a user',
            data: respose,
            success: true,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error
        })
    }
}