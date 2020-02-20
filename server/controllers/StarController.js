import express from "express";
import starService from "../services/StarService"
import planetService from "../services/PlanetService";

export default class StarController {
  constructor(){
    this.router = express
    .Router()
    .get("", this.getAll)
    .get("/:id", this.getById)
    .get("/:id/planet", this.getPlanets)
    .post("", this.create)
    .put("/:id", this.edit)
    .delete("/:id", this.delete)
  }

async getAll(req, res, next){
  try {
    let data = await starService.getAll();
    return res.status(201).send(data)
  } catch (error) {
    next(error)
  }
}

async getById(req, res, next){
  try {
   let data = await starService.getById(req.params.id);
   res.send(data);
  } catch (error) {
   next(error);
  }
}

async getPlanets(req, res, next){
  try {
    let data = await planetService.getByStarId(req.params.id)
    res.send(data)
  } catch (error) {
    next(error);
  }
}

async create(req, res, next){
  try {
    let data = await starService.create(req.body)
    res.send(data);
  } catch (error) {
    next(error)
  }
}

async edit(req, res, next){
  try {
    let data = await starService.edit(req.params.id, req.body)
    res.send(data);
  } catch (error) {
    next(error)
  }
}

async delete(req, res, next){
  try {
    let data = starService.delete(req.params.id)
    res.send("Star deleted")
  } catch (error) {
    next(error);
  }
}

}