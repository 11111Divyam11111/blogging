"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@/components/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Create = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    description: "",
    kkk: 0,
    amAM: [],
  });

  const { data: session } = useSession();
  const router = useRouter();

  const created = () =>
    toast("Post created!👍", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/prompt/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          description: post.description,
          likes: post.kkk,
          likeArr: post.amAM,
        }),
      });

      setTimeout(() => {
        created();
      }, 1000);

      router.push("/feed");
    } catch (error) {
      console.error("Error creating prompt:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Form
        post={post}
        handleSubmit={createPrompt}
        type="Create"
        setPost={setPost}
        submitting={submitting}
      />
      <ToastContainer />
    </>
  );
};

export default Create;
