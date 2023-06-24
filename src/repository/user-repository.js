import User from "../models/user.js";
import CrudRepository from "./crud-repository.js";

class UserRepostiory extends CrudRepository{
    constructor(){
        super(User);
    }

    async findBy(data){
        try {
            const resposne = await User.findOne(data);
            return resposne;
        } catch (error) {
            throw error;
        }
    }
}

export default UserRepostiory;