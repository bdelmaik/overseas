
import React from 'react'
import { Outlet, Link } from "react-router-dom";

import styles from "./navBar.module.css"; 

export default function NavBar() {
  return (
    <div>
        <div className={styles.barLink}>
            <ul >
                <li><a class="active" href="#home">About Us</a></li>
                <li><a href="#news">Contact Us</a></li>
                <li><a href="#contact">Privacy Policy</a></li>
                <li><a href="#about">Terms</a></li>
            </ul>
        </div>
        <div className={styles.logo}>
            <img src="https://live-and-invest-overseas.vercel.app/logo.svg" alt="" />
        </div>
        <nav className={styles.navBar}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Post">Post</Link>
          </li>
          <li>
            <Link to="/Properties">Properties</Link>
          </li>
        </ul>
        <Outlet/>
        </nav>
    </div>
    
    
  )
}


