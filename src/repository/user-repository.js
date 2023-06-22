import User from "../models/user.js";
import CrudRepository from "./crud-repository.js";

class UserRepostiory extends CrudRepository{
    constructor(){
        super(User);
    }
}

export default UserRepostiory;