import mongoose from "mongoose";
const Schema = mongoose.Schema;
var ObjectId = mongoose.SchemaTypes.ObjectId;


const Star = new Schema(
  {
    galaxyId: {type: ObjectId, ref:"galaxy", required: true},
    name: {type: String, required: true},
  }
);

export default Star;