import React, { useEffect, useState } from "react";
import Posts from "./Posts";
import Image from "next/image";

const SecondGuy = ({ userId }) => {
  const [person, setPerson] = useState(0);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const api = await fetch("/api/user/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId }),
        });
        const data = await api.json();
        if (api.ok) {
            setPerson(data);
          setFollowers(data.followersCount);
          setFollowing(data.followingCount);
        } else {
          console.error("Failed to fetch user data.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div className="flex flex-col gap-y-5 w-full">
      <div className="flex text-2xl justify-around">
        <div className="flex flex-col items-center space-y-3">
          <Image
            src={person.image}
            width={40}
            height={10}
            alt="person"
            className="rounded-full"
          />
          <p>{person.username}</p>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <p>{person.followersCount}</p>
          <p>Followers</p>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <p>{person.followingCount}</p>
          <p>Following</p>
        </div>
      </div>
      <Posts userId={userId} />

    </div>
  );
};

export default SecondGuy;
