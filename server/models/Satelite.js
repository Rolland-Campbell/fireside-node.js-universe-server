import mongoose from "mongoose";
const Schema = mongoose.Schema;
var ObjectId = mongoose.SchemaTypes.ObjectId;


const Satelite = new Schema(
  {
    planetId: {type: ObjectId, ref: "planet", required: true},
    galaxyId: {type: ObjectId, ref:"galaxy", required: true},
    starId: {type: ObjectId, ref:"star", required: true},
    name: {type: String, required: true},
  }
);

export default Satelite;