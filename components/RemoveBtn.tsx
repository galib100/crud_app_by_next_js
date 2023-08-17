'use client';
import { useRouter } from '@/node_modules/next/navigation';
import React from 'react'
import {HiOutlineTrash} from "react-icons/hi"
const RemoveBtn = ({id}) => {
  const router = useRouter();
  const removeTopic = async()=>{
    const confirmed  = confirm('Are you sure to delete?');
    if(confirmed){
     const res =  await fetch(`${process.env.L_URL}/api/topics?id=${id}`,{
        method:"DELETE",
      });
      if(res.ok){
        router.refresh();
      }
    }
  }
  return (
    <button onClick={removeTopic} className='text-red-400'>
        <HiOutlineTrash  size={24}/>
    </button>
  )
}

export default RemoveBtn