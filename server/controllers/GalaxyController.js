import express from "express";
import galaxyService from "../services/GalaxyService";
import starService from "../services/StarService";

export default class GalaxyController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/star", this.getGalaxyStars)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await galaxyService.getAll();
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await galaxyService.getById(req.params.id)
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getGalaxyStars(req, res, next){
    try {
      let data = await starService.getStars(req.params.id)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let data = await galaxyService.create(req.body);
      res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next){
    try {
      let data = await galaxyService.edit(req.params.id, req.body)
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next){
    try {
      let data = await galaxyService.delete(req.params.id)
      res.send("Delorted")
    } catch (error) {
      next (error);
    }
  }
}
