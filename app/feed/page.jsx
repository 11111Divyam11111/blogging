"use client";
import React, { useEffect, useState } from "react";
import PromptCard from "@/components/card";

const Page = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
          const res = await fetch("/api/prompt");
          
          if (!res.ok) throw new Error("Failed to fetch prompts");
  
          const data = await res.json();
          setFeed(data);
      } catch (error) {
          console.error("Error fetching posts:", error);
      }
  };
  

    fetchPost();
  }, []);

  console.log(feed);

  return (
    <>
      {feed.length === 0 ? (
        <>
          <h1 className="text-center font-bold text-2xl">Sorry! No posts to show 😴</h1>
        </>
      ) : (
        <>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
         { feed.map((p) => <PromptCard post={p} key={p._id} />)}
        </div>
        </>
      )}
    </>
  );
};

export default Page;
