import { connectToDB } from "@/utils/db";
import Prompt from "@/modals/prompt";
import User from "@/modals/user";

export const PUT = async (req) => {
  try {
    await connectToDB();
    const { id, user } = await req.json();
    const banda = await User.findOne({ _id: user });
    const post = await Prompt.findOne({ _id: id });

    if (!banda.saved.includes(post._id)) {
      banda.saved.push(post._id);
      await banda.save();
    }
    else{
      let SavedArray = banda.saved;
      SavedArray = SavedArray.filter(
      (postId) => postId.toString() !== id.toString()
    );
    banda.saved = SavedArray;
    await banda.save();
    }

    return new Response("hehe", { status: 201 });
  } catch (err) {
    console.error("Error updating likes:", err);
    return new Response("Failed to update likes", { status: 500 });
  }
};
