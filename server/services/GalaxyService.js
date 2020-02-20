import mongoose from "mongoose";
import Galaxy from "../models/Galaxy";

const _repository = mongoose.model("Galaxy", Galaxy);

class GalaxyService {
  async getAll() {
    return await _repository.find({});
  }

  async getById(id){
    return await _repository.findById(id)
  }

  async  create(body) {
    return await _repository.create(body)
  }

  async edit(id, update){
    //NOTE {new: true} insures I get the object back after the change
    return await _repository.findByIdAndUpdate(id, update, {new:true})
  }

  async delete(id){
    return await _repository.findByIdAndDelete(id)
  }
}

const galaxyService = new GalaxyService();
export default galaxyService;
