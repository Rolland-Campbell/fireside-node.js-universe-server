import mongoose from "mongoose";
const Schema = mongoose.Schema;
var ObjectId = mongoose.SchemaTypes.ObjectId;


const Satelite = new Schema(
  {
    planetId: {type: ObjectId, ref: "planet", required: true},
    name: {type: String, required: true},
    species: [{type: ObjectId, ref: "species"}]
  }
);

export default Satelite;