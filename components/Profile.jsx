"use client";
import { useSession, signOut } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Posts from "@/components/Posts";
import Saved from "@/components/Saved";
import Image from "next/image";
import del from "@/public/assets/icons/bin2.png";


export default function Page({ params }) {
  const { data: session } = useSession();
  const { id: userId, image: img, name: username } = session?.user || {};
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  useEffect(() => {
    try {
      const hehe = async () => {
        const api = await fetch('/api/user/', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        });
        const data = await api.json();
        if (!api.ok) {
          console.log("xhud gaye guru");
        }
        setFollowers(data.followersCount);
        setFollowing(data.followingCount);
      };

      hehe();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleUserDel = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/user/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: userId }),
      });

      if (!response.ok) throw new Error("Failed to delete account");
      signOut({ callbackUrl: "/" });
    } catch (err) {
      console.error("Error deleting account:", err);
      alert("Failed to delete account. Please try again.");
    }
  };

  return (
    <div className="flex flex-col gap-y-5 w-full">
      <div className="flex text-2xl justify-around">
        <div className="flex flex-col items-center space-y-3">
          <Image
            src={img}
            width={40}
            height={10}
            alt="person"
            className="rounded-full"
          />
          <p>{username}</p>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <p>{followers}</p>
          <p>Followers</p>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <p>{following}</p>
          <p>Following</p>
        </div>
      </div>
      <Posts userId={userId} />
      <Saved userId={userId} />
      <form
        onSubmit={handleUserDel}
        className="mt-20 mb-10 flex justify-center"
      >
        <button
          type="submit"
          className="flex items-center space-x-5 btn bg-slate-700 p-5 rounded-lg text-white"
        >
          <p>Delete Your Account</p>
          <Image src={del} width={20} height={10} alt="delete" />
        </button>
      </form>
    </div>
  );
}
