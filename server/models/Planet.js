import mongoose from "mongoose";
const Schema = mongoose.Schema;
var ObjectId = mongoose.SchemaTypes.ObjectId;


const Planet = new Schema(
  {
    galaxyId: {type: ObjectId, ref:"galaxy", required: true},
    starId: {type: ObjectId, ref:"star", required: true},
    name: {type: String, required: true},
  }
);

export default Planet;