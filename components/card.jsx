"use client"
import React , {useState} from 'react'
import Image from "next/image";
import { useSession } from 'next-auth/react';
import { usePathname , useRouter } from 'next/navigation';

 
const card = ({post , handleTagClick , handleEdit , handleDelete}) => {
  return (
    <div className='prompt_card'>
      
    </div>
  )
}

export default card