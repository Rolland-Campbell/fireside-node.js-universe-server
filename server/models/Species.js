import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Species = new Schema(
  {
    name: {type: String, required:true},
    description: {type: String, required: true}
  }
);

export default Species;