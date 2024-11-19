"use client";
import React, { useEffect, useState } from "react";
import PromptCard from "@/components/card";

const Page = () => {
  const [searchText, setSearchText] = useState("");
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch("/api/prompt/");
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
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
        {feed.map((p) => (
          <PromptCard post={p} key={p._id} />
        ))}
      </div>
    </>
  );
};

export default Page;
