import { connectToDB } from "@/utils/db";
import User from "@/modals/user";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDB();
    const users = await User.find();
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return new Response("Failed to fetch", { status: 500 });
  }
};
