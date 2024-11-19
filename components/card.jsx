"use client";
import React, { useState } from "react";
import "@/styles/globals.css";

const card = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  return (
    <div className="prompt_card">
      <h1 className="text-xl font-bold">{post.prompt}</h1>
      <p className="text-sm">{post.description}</p>
      <div className="flex  justify-end text-xs space-x-2 mt-5">
        <p>{post.creator.username}</p>
        {post.creator?.image && (
          <img
            src={post.creator.image}
            alt={post.creator.username}
            width={20}
            className="rounded-full"
            height={20}
          />
        )}
      </div>
    </div>
  );
};

export default card;
