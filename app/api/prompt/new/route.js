import { connectToDB } from "@/utils/db";
import Prompt from "@/modals/prompt";
import User from "@/modals/user";

export const POST = async (req) => {
  const { userId, prompt, description , likes , likeArr} = await req.json();

  try {
    await connectToDB();
    const newPrompt = new Prompt({
      description,
      creator: userId,
      prompt,
      likes,
      likeArr,
    });

    await newPrompt.save();
    
    const banda = await User.findOne({ _id: userId });
    if (!banda) throw new Error("User not found");

    
    banda.posts.push(newPrompt._id);
    await banda.save();   

    return new Response(JSON.stringify(newPrompt), {
      status: 201,
    });
  } catch (error) {
    console.error("Error creating prompt:", error);
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
