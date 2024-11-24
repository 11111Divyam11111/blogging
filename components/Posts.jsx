"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/card";
const Posts = ({ userId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }), // Ensure userId is not undefined or null
      });
    
      if (!res.ok) {
        console.error("Failed to fetch posts", res);
      } else {
        const data = await res.json();
        setPosts(data);
      }
    };
    

    fetchPosts();
  }, [userId]);

  return (
    <div className="mb-5">
      {posts.length > 0 && (
        <>
          <h1 className="mb-10 text-left text-xl underline mt-10">
            Your Posts
          </h1>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
            {posts.map((post) => (
              <Card post={post} key={post._id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Posts;
