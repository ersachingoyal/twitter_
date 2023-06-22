import Like from '../models/like.js'
import { CrudRepository } from'./index.js'

class LikeRepository extends CrudRepository{
    constructor(){
        super(Like);
    }
}

export default LikeRepository;