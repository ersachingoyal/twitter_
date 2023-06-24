import { UserRepostiory } from '../repository/index.js'

class UserService{
    constructor(){
        this.userRepository = new UserRepostiory();
    }

    async signup(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            throw error;
        }
    }
}

export default UserService;