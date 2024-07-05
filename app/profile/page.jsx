"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function page({ name, img, email }) {
  const {data:session} = useSession();
  return (
    <div>
      <div className="text-center">
        <p>Name : {session?.user.name}</p>
        <p>Email : {session?.user.email}</p>
        <p>ID : {session?.user.id}</p>
        {/* <div>
          posts : {session?.user.posts.populate()}
        </div> */}

      </div>
    </div>
  );
}
