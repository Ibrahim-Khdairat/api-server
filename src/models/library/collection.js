'use strict'; 

class Collection {
    constructor(model){
        this.model = model;
    }

    async getAll(){
        let allRecords = await this.model.findAll();
        return allRecords;
    }

    async getOne(id){
        let record  = await this.model.findOne({where : { id : id }});
        return record;
    }

    async create(modelInfo){
        let newRecord = await this.model.create(modelInfo);
        return newRecord;
    }

    async update(modelInfo , id){
        let record = await this.model.findOne({where : {id : id}});
        let updatedRecord = await record.update(modelInfo);
        return updatedRecord;
    }

    async delete(id){
        await this.model.destroy({where : {id : id}});
    }

}

module.exports = Collection;