'use client'
import SecondGuy from "@/components/dusraBanda";
import React from 'react'

const Page = ({ params }) => {
  const { userId } = params; // This will get the userId from the dynamic route

  return (
    <SecondGuy userId={userId} />  // Passing userId as a prop to SecondGuy component
  );
};

export default Page;
