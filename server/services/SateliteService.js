import mongoose from "mongoose";
import Satelite from "../models/Satelite";

const _repository = mongoose.model("satelite", Satelite)

class SateliteService {

async getAll(){
  return await _repository.find({});
}

async getById(id){
  return await _repository.findById(id)
}

async getSatelites(planetId){
return await _repository.find({planetId: planetId})
}
async create(body){
  return await _repository.create(body)
}

async edit(id, update){
  return await _repository.findByIdAndUpdate(id, update, { new:true})
}

async delete(id){
  return await _repository.findByIdAndDelete(id)
}

}

const sateliteService = new SateliteService();
export default sateliteService;