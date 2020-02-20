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

async addSpecies(id, speciesId){
  return await _repository.findByIdAndUpdate(id, {$push: {species: speciesId}})
}

async removeSpecies(id, speciesId){
  let satelite = await _repository.findById(id)
  // @ts-ignore
  satelite.species.splice(speciesId) //NOTE Could also reference planet["species"] to clear type script error.  
  await satelite.save()
  return satelite
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