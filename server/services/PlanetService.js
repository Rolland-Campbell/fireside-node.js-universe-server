import mongoose from "mongoose";
import Planet from "../models/Planet";

const _repository = mongoose.model("planet", Planet)

class PlanetService {

  async getAll(){
    return await _repository.find({});
  }
  
  async getById(id){
    return _repository.findById(id)
  }
  
  async create(body){
    return await _repository.create(body)
  }
  
  async edit(id, update){
    return await _repository.findByIdAndUpdate(id, update, {new :true})
  }
  
  async delete(id){
    return await _repository.findByIdAndDelete(id)
  }
  
  }
  
  const planetService = new PlanetService();
  export default planetService;