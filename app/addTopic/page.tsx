"use client";

import { useRouter } from '@/node_modules/next/navigation';
import React, { useState } from 'react'

const AddTopic =  () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("");
    const router = useRouter();
// console.log("client side working ")
    const handleSubmit = async (e:any)=>{
        // console.log("submit clicked!!")
        e.preventDefault();
        if(!title || !description){
            alert("Title  and description are required !");
            return;
        }
        try {
           const res =  await fetch(`${process.env.L_URL}/api/topics`,{
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                },
                body: JSON.stringify({title,description}),
            });
            console.log("is it res? ",res);
            if(res.ok){
                router.refresh();
                router.push('/');
            
            }else{
                throw new Error("Failed to create new error !");
            }
        } catch (error) {
            console.log("Failed to create New Post")   
        }

    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type='text'
                placeholder='Topic Title'
                className='border border-slate-500 px-8 py-2' />
            <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                type='text'
                placeholder='Topic Description'
                className='border border-slate-500 px-8 py-2' />
            <button
            type='submit'
                className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>
                Add Topic
            </button>
        </form>
    )
}

export default AddTopic 