import mongoose from "mongoose";
import Species from "../models/Species"

const _repository = mongoose.model("species", Species)

class SpeciesService {

async getAll(){
  return await _repository.find({});
}

async getById(id){
  return await _repository.findById(id)
}

async create(body){
  return await _repository.create(body)
}

async edit(id, update){
  return await _repository.findByIdAndUpdate(id, update, {new:true})
}

async delete(id){
  return await _repository.findByIdAndDelete(id)
}
}

const speciesService = new SpeciesService();
export default speciesService;