import { connectToDB } from "@/utils/db";
import Prompt from "@/modals/prompt";

export const GET = async (req)=>{
    try {
        await connectToDB();
        const prompts = await Prompt.find({}).populate('creator');
        return new Response(JSON.stringify(prompts),{status:200});
    } catch (error) {
        return new Response("Failed to fetch",{status:500});
    }   
}
