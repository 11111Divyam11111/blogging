import { connectToDB } from "@/utils/db";
import Prompt from "@/modals/prompt";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({}).sort({createdAt : -1}).populate('creator','username image email');
    console.log(prompts);
    return NextResponse.json(prompts);
  } catch (error) {
    console.error("Error fetching prompts:", error);
    return new Response("Failed to fetch", { status: 500 });
  }
};
