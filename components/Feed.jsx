"use client"
import React, { useEffect } from "react";
import Posts from "@/components/Posts";
import PromptCard from "@/components/card";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [post, setPost] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(()=>{
    const fetchPost = async () => {
      const res = await fetch('/api/prompt');
      setPost(res);
    }

    fetchPost();
  },[]);

  const PromptCardList = ({data, handleTagClick}) => {
    return (
      <div className="mt-16 prompt_layout">
        {
            data.map((post)=>{
              <PromptCard
                post={post}
                key={post._id}
                handleTagClick={handleTagClick}
              />
            })
        }
      </div>
    )
  }

  return (
    <section className="feed">
      <form className="realtive w-full flex-center"></form>
      <input
        type="text"
        placeholder="Search for a tag or username"
        value={searchText}
        onChange={handleSearchChange}
        required
        className="search_input peer"
      />

      <PromptCardList data={post} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
