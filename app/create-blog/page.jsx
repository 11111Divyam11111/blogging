"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@/components/Form";

const Create = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    description:""
  });

  const {data:session }= useSession();
  const router = useRouter();
  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try{
      const res = await fetch('/api/prompt/new' ,{
          method:'POST',
          body:JSON.stringify({
            prompt:post.prompt,
            userId:session?.user.id,
            description:post.description
          })
      })

      if(res.ok){
        router.push('/');
      }
    }
    catch(error){
      console.log(error);
    }
    finally{
      setSubmitting(false);
    }
  }
  return (
    <Form
      post={post}
      handleSubmit={createPrompt}
      type="Create"
      setPost={setPost}
      submitting={submitting}

    />
  )
};

export default Create;
