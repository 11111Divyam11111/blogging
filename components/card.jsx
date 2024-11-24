"use client";
import React, { useEffect, useState } from "react";
import "@/styles/globals.css";
import like from "@/public/assets/icons/like.png";
import like2 from "@/public/assets/icons/like2.png";
import bin from "@/public/assets/icons/bin.png";
import save from "@/public/assets/icons/save.png";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const card = ({ post, handleTagClick, handleEdit }) => {
  const router = useRouter();
  const [val, setVal] = useState(post.likes);
  const [clicked, setClicked] = useState(false);
  const { data: session } = useSession();
  const id = post._id;
  const user = session?.user.id;
  const banda = post.creator;

  console.log(post);

  const del = () =>
    toast("Post deleted! Please refresh", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleLike = async (e) => {
    e.preventDefault();
    try {
      const api = await fetch("/api/prompt/likes", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, user }),
      });
      if (!api.ok) {
        router.push("/");
      }
      const data = await api.json();
      setVal(data);
      setClicked(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const api = await fetch("/api/prompt/likes/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, user }),
      });
      router.refresh();
    } catch (err) {
      console.log(err);
    }
  };

  // to save the post to users profile.
  const handleSave = async (e) => {
    e.preventDefault();
    try{
      const api = fetch("/api/user/saved",{
        method:"PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, user }),
      });
      const data = await api.json();
      console.log("saved : " , data);
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className="prompt_card">
      <div className="flex justify-between text-xs">
        <form onSubmit={handleSave}>
          <button type="submit">
            <Image
              className="hover:cursor-pointer"
              src={save}
              width={15}
              height={10}
              alt="save"
            />
          </button>
        </form>
        <div className="flex space-x-2">
          {post.creator?.image && (
            <img
              src={post.creator.image}
              alt={post.creator.username}
              width={20}
              className="rounded-full"
              height={20}
            />
          )}
          <p>{session.user.username}</p>
        </div>
      </div>
      <h1 className="text-xl font-bold">{post.prompt}</h1>
      <p className="text-sm">{post.description}</p>
      <div className="flex justify-between mt-3">
        <form onSubmit={handleLike}>
          <button className="flex text-sm space-x-2" type="submit">
            {clicked == false ? (
              <>
                <Image
                  className="hover:cursor-pointer"
                  src={like}
                  width={20}
                  height={10}
                  alt="like"
                />
              </>
            ) : (
              <>
                <Image
                  className="hover:cursor-pointer"
                  src={like2}
                  width={20}
                  height={10}
                  alt="like"
                />
              </>
            )}
            <p>{val}</p>
          </button>
        </form>
        {banda === user && (
          <form onSubmit={handleDelete}>
            <button className="flex text-sm space-x-2" type="submit">
              <Image
                className="hover:cursor-pointer"
                src={bin}
                width={20}
                height={10}
                alt="delete"
              />
            </button>
          </form>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default card;
