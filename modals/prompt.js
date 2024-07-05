import mongoose, { Schema, model, models } from "mongoose";

const promptSchema = new Schema({
  creator:{
    type : mongoose.Schema.Types.ObjectId,
    ref:'User',
  },
  prompt:{
    type:String,
    required:[true,'Title is required']
  },
  description:{
    type:String,
    required:[true,'description is required']
  }
});

const Prompt = models.Prompt || model("prompt" , promptSchema);

export default Prompt;