import mongoose, { Schema, model, models } from "mongoose";

const promptSchema = new Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true, 
  },
  prompt: {
    type: String,
    required: [true, 'Prompt title is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  }
});


const Prompt = models.Prompt || model("Prompt", promptSchema);


export default Prompt;
