import express from "express";
import planetService from "../services/PlanetService";
import sateliteService from "../services/SateliteService";
import speciesService from "../services/SpeciesService";

export default class PlanetController {
  constructor(){
    this.router = express
    .Router()
    .get("", this.getAll)
    .get("/:id", this.getById)
    .get("/:id/satelite", this.getSatelites)
    .post("", this.create)
    .put("/:id", this.edit)
    .put("/:id/addSpecies/:speciesId", this.addSpecies)
    .delete("/:id", this.delete)
  }

  async getAll(req, res, next){
    try {
      let data = await planetService.getAll();
      return res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  
  async getById(req, res, next){
    try {
     let data = await planetService.getById(req.params.id);
     res.send(data);
    } catch (error) {
     next(error);
    }
  }
  
async getSatelites(req, res, next){
  try {
    let data = await sateliteService.getSatelites(req.params.id)
    res.send(data);
  } catch (error) {
    next(error)
  }
}

  async create(req, res, next){
    try {
      let data = await planetService.create(req.body)
      res.send(data);
    } catch (error) {
      next(error)
    }
  }
  
  async addSpecies(req, res, next){
try {
  let data = await planetService.addSpecies(req.body)
  res.send(data)
} catch (error) {
  next(error)
}
  }
  async edit(req, res, next){
    try {
      let data = await planetService.edit(req.params.id, req.body)
      res.send(data);
    } catch (error) {
      next(error)
    }
  }
  
  async delete(req, res, next){
    try {
      let data = planetService.delete(req.params.id)
      res.send("Planet deleted")
    } catch (error) {
      next(error);
    }
  }
  
}