'use client'
import React, { useEffect, useState } from "react";
import PromptCard from "@/components/card";


const page = () => {
    const [searchText , setSearchText] = useState('');
  

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e)=>{setSearchText(e.target.value)}}
          required
          className="search_input peer"
        />
      </form>
    </section>
  );
};

export default page;
