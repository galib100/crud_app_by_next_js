import Link from '@/node_modules/next/link'
import React from 'react'
import RemoveBtn from './RemoveBtn'
import {HiPencilAlt}  from "react-icons/hi"
import {L_URL} from '../url'
const getTopics = async ()=>{
    try {
        const res = await fetch(`${L_URL}/api/topics`,{
            cache:"no-store",
            method:"GET"
        });
        if(!res.ok){
            throw new Error("failed to fetch topics");
        }
        return res.json();
    } catch (error) {
        console.log("Failed loading topics",error);
    }
}

const TopicList = async () => {
    const {topics} = await getTopics();
  return <>
    {topics.map((t:any)=>(
   
        <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
            <div>
                <h2 className='font-bold text-2xl'>
                    {t.title}
                </h2>
                <div> 
                   {t.description}
                </div>
                </div>
                <div className='flex gap-2'>
                    <RemoveBtn id={t._id} />
                    <Link href={`/editTopic/${t._id }`}>
                        <HiPencilAlt  size={24}/>
                    </Link>
            </div>
        </div>
    ))}
    </>

}

export default TopicList