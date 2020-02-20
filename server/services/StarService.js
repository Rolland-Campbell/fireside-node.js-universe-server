import mongoose from "mongoose";
import Star from "../models/Star";

const _repository = mongoose.model("star", Star)


class StarService {

async getAll(){
  return await _repository.find({});
}

async getById(id){
  return _repository.findById(id)
}

async getStars(id){
  return await _repository.find({galaxyId:id})
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

const starService = new StarService();
export default starService;