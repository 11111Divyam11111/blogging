"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/card";

const Saved = ({ userId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/user/savedPosts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        });
        const data = await res.json();
        console.log("hehe : " , data );
        setPosts(data);
       
      } catch (error) {
        console.error("Error fetching posts:", error);
       
      }
    };

    fetchPosts();
  }, [userId]);

 


  return (
    <div className="mb-5">
      {posts.length > 0 && (
        <>
          <h1 className="mb-10 text-left text-xl underline mt-10">
             Saved Posts
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

export default Saved;
