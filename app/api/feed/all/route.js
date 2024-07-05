
import PromptSchema from "@/modals/prompt";
import { connectToDB } from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    connectToDB();
    const prompt = await PromptSchema.find().sort({createdAt:-1});
   return NextResponse.json(prompt);
  } catch (err) {
    res.status(500).send({ error: "failed to fetch data" });
  }
};
