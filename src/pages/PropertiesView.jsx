import React from 'react'
import { PrismicRichText, usePrismicDocumentByUID } from '@prismicio/react'
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import styles from "../components/detailView.module.css";

export default function PropertiesView() {
   const { id } = useParams();
   const [properties, {state}] =  usePrismicDocumentByUID('properties', id)
   
    console.log([properties]);
      
     return (
   
       <div>
         <NavBar></NavBar>
         <div className={styles.detail}>
         {state === 'loading' ? (
           <p>Loading…</p>
         ) : (
           properties && 
           <>
                <div className={styles.container1}>
                    <PrismicRichText field={properties.data.title} />
                </div>
                <div className={styles.container2}>
                    <img src={properties.data.image.url} alt={properties.data.title}/>
                </div>
                <div className={styles.container3}>
                    <PrismicRichText field={properties.data.description} />
                </div>
               
               
           </>
         )}
         </div>
             
       </div>
      
     );
   }