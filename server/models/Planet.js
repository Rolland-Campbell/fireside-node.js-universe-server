import mongoose from "mongoose";
const Schema = mongoose.Schema;
var ObjectId = mongoose.SchemaTypes.ObjectId;


const Planet = new Schema(
  {
    starId: {type: ObjectId, ref:"star", required: true},
    name: {type: String, required: true},
    species: [{type: ObjectId, ref: "species"}]
  }
);

export default Planet;