import { connectToDB } from "@/utils/db";
import User from "@/modals/user";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    console.log("Connecting to DB...");
    await connectToDB();
    const { userId } = await req.json();
    console.log("Fetched userId:", userId);
    
    const user = await User.findOne({ _id: userId }).populate("posts");
    console.log("Fetched user:", user);
    
    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    return NextResponse.json(user.posts); // Return only the user's posts
  } catch (error) {
    console.error("Error fetching posts:", error);
    return new Response("Failed to fetch", { status: 500 });
  }
};
