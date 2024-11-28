import mongoose, { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, "email already exists!"],
    required: [true, "email is required!"],
  },
  username: {
    type: String,
    require: [true, "Username is required!"],
  },
  image: {
    type: String,
  },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Prompt' }],
  saved: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Prompt' }],
  followersCount : {
    type:Number,
  },
  followingCount: {
    type:Number,
  },
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const User = models.User || model("User", userSchema);

export default User;
