"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/card";

const Saved = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

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
        setPosts(data);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false); // Handle loading state in case of error
      }
    };

    fetchPosts();
  }, [userId]);

  console.log("posts in saved", posts);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while fetching posts
  }

  return (
    <div className="mb-5">
      {posts.length > 0 ? (
        <>
          <h1 className="mb-10 text-left text-xl underline mt-10">
            Your Saved Posts
          </h1>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
            {posts.map((post) => (
              <Card post={post} key={post._id} />
            ))}
          </div>
        </>
      ) : (
        <p>No saved posts found.</p> // Show message if no posts are saved
      )}
    </div>
  );
};

export default Saved;
