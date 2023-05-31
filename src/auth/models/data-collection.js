'use strict';

// THIS IS THE STRETCH GOAL ...
// It takes in a schema in the constructor and uses that instead of every collection
// being the same and requiring their own schema. That's not very DRY!

class DataCollection {

  constructor(model) {
    this.model = model;
  }

  read(id) {
    if (id) {
      return this.model.findOne({where: { id }});
    }
    else {
      return this.model.findAll({});
    }
  }

  create(record) {
    return this.model.create(record);
  }

  // intial record is grabbed and then we modify data, then return modified data
  async update(id, data) {
    let result = await this.model.findOne({ where: { id }});
    // console.log(result);
    let modifiedData = await result.update(data);
    return modifiedData;
    // return this.model.findOne({ where: { id } })
    //   .then(record => record.update(data));
  }

  async delete(id) {
    let deletedRecord = await this.model.findOne({ where: { id }});
    await this.model.destroy({ where: { id }});
    return deletedRecord;
  }

// make sure to use async and await for delete

}

module.exports = DataCollection;
