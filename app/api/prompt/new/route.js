import { connectToDB } from "@/utils/db";
import Prompt from "@/modals/prompt";

export const POST = async (req) => {
  const { userId, prompt, description } = await req.json();

  try {
    await connectToDB();
    const newPrompt = new Prompt({
      description,
      creator: userId,
      prompt,
    });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), {
      status: 201,
    });
  } catch (error) {
    console.error("Error creating prompt:", error);
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
