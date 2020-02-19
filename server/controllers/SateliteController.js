import express from "express";
import sateliteService from "../services/SateliteService";

export default class SateliteController {
  constructor(){
    this.Router = express
    .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next){
    try {
      let data = await sateliteService.getAll();
      return res.staus(201).send(data);
    } catch (error) {
      next(error);
    }
  }
}
