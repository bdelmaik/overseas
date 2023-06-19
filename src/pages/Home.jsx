import React from 'react'
import styles from "../components/home.module.css";
import { PrismicRichText, useFirstPrismicDocument, useAllPrismicDocumentsByType } from '@prismicio/react'
import * as prismic from '@prismicio/client'
import NavBar from '../components/NavBar';

export default function Home() {
  const [post] = useAllPrismicDocumentsByType('post')
  // const src = prismic.asImageSrc(post.data.post_img)

  //console.log(post);
   return (
    <>
      <NavBar></NavBar>
      <div className={styles.home}>
      <div className={styles.fsection}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quidem? Enim atque mollitia eos, deleniti accusamus quibusdam aspernatur ipsam magni pariatur eius quod, dolorem eaque officia dignissimos officiis ab ducimus?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa perferendis numquam, voluptas suscipit atque sunt minima expedita possimus aperiam corrupti culpa laborum neque laudantium ipsam unde ea magni dignissimos animi.</p>
      </div>
      <div className={styles.tsection}>Best Properties</div>
      <div className={styles.container}>
      {post && 
        
        post.map(post => (
                <div className={styles.fpost}>
                  <PrismicRichText field={post.data.title} />
                  <img src={post.data.post_img.url} alt={post.data.title}/>
                </div>
        ))
      }
      </div>
      </div>
      <div className={styles.csection}>
            <div>
              <p>The people in charge of taking you to enjoy</p>
            </div>
            <div>
              <img src="https://ca.res.keymedia.com/files/image/iStock-group-person-happy-work.jpg" alt="" />
            </div>
        </div>
      </>
    
  )
}
