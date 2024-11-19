"use client"
import React, { useEffect, useState } from "react";
import PromptCard from "@/components/card";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [post, setPost] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch('/api/prompt');
      const data = await res.json();
      setPost(data);
    };

    fetchPost();
  }, []);

  const PromptCardList = ({ posts, handleTagClick }) => {
    return (
      <div className="mt-16 prompt_layout">
        {posts.map((post) => (
          <PromptCard
            post={post}
            key={post._id}
            handleTagClick={handleTagClick}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      
      <PromptCardList posts={post} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
