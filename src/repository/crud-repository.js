// to create basic crud operation using this repo

class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            const result = await this.model.create(data);
            return result
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }

    async destroy(id){
        try {
            const result = await this.model.findByIdAndDelete(id);
            return result
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }

    async get(id){
        try {
            const result = await this.model.find(id);
            return result
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }

    async getAll(){
        try {
            const result = await this.model.find({});
            return result
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }

    async update(id, data){
        try {
            const result = await this.model.findByIdAndUpdate(id, data, {new :true});
            return result
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }
}

export default CrudRepository;