"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@/app/profile/page";
import React from "react";

const Profile = () => {
  return (
    <div>
      <Profile
        name={sessionStorage.user.name}
        email={user.session.email}
        img={user.session.image}
        handleEdit={}
        handleDelete={}
      />
    </div>
  );
};

export default Profile;
