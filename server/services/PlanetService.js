import mongoose from "mongoose";
import Planet from "../models/Planet";
import speciesService from "./SpeciesService";

const _repository = mongoose.model("planet", Planet)

class PlanetService {

  async getAll(){
    return await _repository.find({});
  }
  
  async getById(id){
    return _repository.findById(id)
  }
  
  async getByStarId(id){
    return await _repository.find({starId:id})
  }

  async create(body){
    return await _repository.create(body)
  }
  
async addSpecies(id, speciesId){
  return await _repository.findByIdAndUpdate(id, {$push: {species: speciesId}}) //NOTE uses mongoose push method.
  // let planet = await _repository.findById(id)
  // // @ts-ignore
  // planet.species.push(speciesId)
  // await planet.save()
  // return planet
}

async removeSpecies(id, speciesId){
  let planet = await _repository.findById(id)
  // @ts-ignore
  planet.species.splice(speciesId) //NOTE Could also reference planet["species"] to clear type script error.  
  await planet.save()
  return planet
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