import { connectToDB } from "@/utils/db";
import Prompt from "@/modals/prompt";
import User from "@/modals/user";

export const DELETE = async (req) => {
  try {
    const { id, user } = await req.json();
    await connectToDB();

    const del = await Prompt.deleteOne({ _id: id });

    const userkPost = await User.findOne({ _id: user });
    console.log(userkPost);

    let PostArray = userkPost.posts;
    PostArray = PostArray.filter(
      (postId) => postId.toString() !== id.toString()
    );

    userkPost.posts = PostArray;

    await userkPost.save();

    console.log(PostArray);

    return new Response(
      del ? "Post deleted successfully" : "Failed to delete post",
      { status: 201 }
    );
  } catch (err) {
    console.error("Error delete post:", err);
    return new Response("Failed to delete post", { status: 500 });
  }
};
