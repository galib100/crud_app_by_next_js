'use client';

import EditTopicForm from '@/components/EditTopicForm'
import React from 'react'

const getTopicById = async (id) => {
    try {
      const res = await fetch(`${process.env.L_URL}/api/topics/${id}`, {
        cache: "no-store",
        
      }) 
      if (!res.ok) {
        throw new Error("Failed to fetch the topic")
      }
      return res.json();
    } catch (error) {
      console.log(error)
    }
  }
const editTopic = async({ params }) => {
  const { id } = params;
 const {topic}= await getTopicById(id);
  // console.log(id);
  const {title,description} = topic;

  return <EditTopicForm id={id} title={title} description={description}  />
}

export default editTopic