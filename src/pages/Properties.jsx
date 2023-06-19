import React from 'react'
import NavBar from '../components/NavBar'
import { PrismicRichText, useFirstPrismicDocument, useAllPrismicDocumentsByType } from '@prismicio/react'
import styles from "../components/listCardP.module.css"
import Footer from '../components/FooterAll'
import {Route, Link, Routes, useParams} from 'react-router-dom';
export default function Properties() {
  const [properties] = useAllPrismicDocumentsByType('properties')

  return (
    <>
      <NavBar></NavBar>
      <div className={styles.containerP}>
      <h3 className={styles.bartitleP}>Properties</h3>
      <div className={styles.barFiltrosP}>
        <span></span>
        <button className={styles.botonUnoP}>Houses</button>
        <button className={styles.botonUnoP}>Apartment</button>
        <button className={styles.botonUnoP}>Lots</button>
        <button className={styles.botonUnoP}>VIP</button>
      </div>

      <div className={styles.listCardP}>
      {properties && 
        
        properties.map(properties => (
                <div key={properties.uid} className={styles.postCardP}>
                  <div className={styles.contenidosP}>
                    <div className={styles.cont1P}>
                      <Link to={`/Properties/${properties.uid}`} >
                        <img src={properties.data.image.url} alt={properties.data.title}/>
                      </Link>
                    </div>
                    <div className={styles.cont2P}>
                      <PrismicRichText field={properties.data.title} />
                      <PrismicRichText field={properties.data.description} />
                    </div>
                    <div className={styles.cont3P}>
                      <div>
                        <span>💲Price</span>
                        <span>✅Available</span>
                        <span>📏Size</span>
                      </div>
                      <div>
                        <button className={styles.botonUnoP}>Ver</button>
                      </div>
                      
                    </div>
                  </div>
                </div>
        ))
      } 
      </div></div>
     
      
    </>
  )
}
