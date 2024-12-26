"use client";
import SecondGuy from "@/components/dusraBanda";
import React from "react";

const Page = ({ params }) => {
  const { userId } = params;
  return (
    <>
      <SecondGuy userId={userId} />
      <h1> Rate him </h1>
    </>
  );
};

export default Page;
