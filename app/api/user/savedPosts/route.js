import { connectToDB } from "@/utils/db";
import User from "@/modals/user";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectToDB();
    const { userId } = await req.json();
    const user = await User.findOne({ _id: userId }).populate("saved");
    return NextResponse.json(user.saved); // Return only the user's posts
  } catch (error) {
    console.error("Error fetching posts:", error);
    return new Response("Failed to fetch", { status: 500 });
  }
};
