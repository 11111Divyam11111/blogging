import { connectToDB } from "@/utils/db";
import User from "@/modals/user";

export const DELETE = async (req) => {
  try {
    const { user } = await req.json();
    await connectToDB();
    console.log("user id delete" , user);
    
    const result = await User.deleteOne({ _id: user });

    if (result.deletedCount === 0) {
      return new Response("User not found", { status: 404 });
    }

    return new Response("User deleted successfully", { status: 200 });
  } catch (err) {
    console.error("Error deleting user:", err);
    return new Response("Failed to delete user", { status: 500 });
  }
};
