import React from 'react'
import NavBar from '../components/NavBar'
import * as prismic from '@prismicio/client'

import { PrismicRichText, useFirstPrismicDocument, useAllPrismicDocumentsByType } from '@prismicio/react'
import {Route, Link, Routes, useParams} from 'react-router-dom';
import styles from "../components/listCard.module.css";

export default function Post() {

  const [post] = useAllPrismicDocumentsByType('post')
  const params = useParams();

  //console.log(params);console.log(post)
  return (
    
    <>
      <NavBar></NavBar>
      <div className={styles.container}>
      <h3 className={styles.bartitle}>Posts</h3>
      <div className={styles.barFiltros}>
        <span>Filtros</span>
        <button className={styles.botonUno}>Hoy</button>
        <button className={styles.botonUno}>Más Vistos</button>
        <button className={styles.botonUno}>Ofertas</button>
        <button className={styles.botonUno}>Noticias</button>
      </div>
      <div className={styles.listCard}>
      
       {post && 
        post.map(post => (
          
            <div key={post.uid} >
                  <div className={styles.postCard}>
                    <Link to={`/Post/${post.uid}`} >
                    <img src={post.data.post_img.url} alt={post.data.title}/>
                    </Link>

                    
                    <div className={styles.contenidos}>
                      <div className={styles.cont1}>
                        <PrismicRichText field={post.data.title} />
                      </div>
                      
                      <div className={styles.cont2}>
                          <time
                              datetime={prismic.asDate(post.data.created).toISOString()}
                          >
                              {prismic.asDate(post.data.created).toLocaleString()}
                          </time>
                      </div>
                    
                    <div className={styles.cont3}>
                      <button className={styles.botonUno}>More</button>
                    </div>
                    

                    </div>
                  </div>
            </div>
        ))
      } 
      </div>
      </div>
    </>
  )
}
