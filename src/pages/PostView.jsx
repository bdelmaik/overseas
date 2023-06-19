
import React from 'react';
import { PrismicRichText, usePrismicDocumentByUID } from '@prismicio/react'
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';


export default function PostView() {
 const { id } = useParams();
const [post, {state}] =  usePrismicDocumentByUID('post', id)

 console.log([post]);
   
  return (

    <>
      <NavBar></NavBar>
      <div>
      {state === 'loading' ? (
        <p>Loading…</p>
      ) : (
        post && 
        <div>
            <PrismicRichText field={post.data.title} />
            <img src={post.data.post_img.url} alt={post.data.title}/>
            <PrismicRichText field={post.data.content} />
            <PrismicRichText field={post.data.priority_level} />
        </div>
      )}
      </div>
          
    </>
   
  );
}