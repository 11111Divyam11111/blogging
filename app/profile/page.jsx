"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import React from "react";
import Posts from "@/components/Posts";
import Saved from "@/components/Saved";

export default function page({ name, img, email }) {
  const { data: session } = useSession();
  console.log('user id here is : ' , session?.user.id);
  return (
    <div>
      <h1 className="text-center text-3xl italic font-mono">Hello {session?.user.name} 👋👋</h1>
      <Posts userId={session?.user.id} />
      <Saved userId={session?.user.id} />
    </div>
  );
}
