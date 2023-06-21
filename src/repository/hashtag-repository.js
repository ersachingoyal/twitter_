import Hashtag from '../models/hashtags.js'

class HashtagRepository{
    async create(data){
        try {
            const tag = Hashtag.create(data); //create method provided by mongose itself
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async bulkCreate(data){
        try {
            const tags = Hashtag.insertMany(data); //to create multiple data at one go
            return tags;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id){
        try {
            const tag = Hashtag.findById(id);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id){
        try {
            const response = Hashtag.findByIdAndRemove(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async findByName(titleList){
        try {
            const tags = await Hashtag.find({
                title: titleList
            })
            return tags;
        } catch (error) {
            console.log(error);
        }
    }
}

export default HashtagRepository;