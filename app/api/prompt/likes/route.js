import { connectToDB } from "@/utils/db";
import Prompt from "@/modals/prompt";

export const PUT = async (req) => {
  try {
    await connectToDB();
    const { id, user } = await req.json();
    
    // Find the post by ID
    const post = await Prompt.findOne({ _id: id });

    if (!post) {
      return new Response("Post not found", { status: 404 });
    }

    // Check if the user has already liked the post
    const userAlreadyLiked = post.likeArr.includes(user);

    if (userAlreadyLiked) {
      // User has already liked the post, return current likes count
      return new Response(post.likes.toString(), { status: 200 });
    } else {
      // Add user to the likeArr and increment likes count
      post.likeArr.push(user);
      post.likes += 1;  // Increment the likes count

      // Save the post after updating likeArr and likes
      await post.save();

      // Return the updated number of likes
      return new Response(post.likes.toString(), { status: 201 });
    }

  } catch (err) {
    console.error("Error updating likes:", err);
    return new Response("Failed to update likes", { status: 500 });
  }
};
