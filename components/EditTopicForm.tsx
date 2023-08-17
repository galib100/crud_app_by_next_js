"use client"

import { useRouter } from "@/node_modules/next/navigation";
import { useState } from "react"
import {L_URL} from '../url'
export default function ({ id, title, description }:any) {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const router = useRouter();
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            const res = await fetch(`${L_URL}/api/topics/${id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ newTitle, newDescription })
            })
            if (!res.ok) {
                throw new Error("failed to  update the value !")

            }
            router.refresh();
            router.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    return <>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3 p-2'>
            <input
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
                type='text'
                placeholder='Topic Title'
                className='border border-slate-500 px-8 py-2' />
            <input
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
                type='text'
                placeholder='Topic Description'
                className='border border-slate-500 px-8 py-2' />
            <button
            type="submit"
                className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>
                Update Topic
            </button>
        </form>
    </>
}