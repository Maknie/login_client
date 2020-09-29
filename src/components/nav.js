import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.module.css'


const Nav = () => {
    return (
        <div className={styles.navDiv}>
            <div className={styles.logo}> 
            <img src="https://www.flaticon.com/svg/static/icons/svg/3208/3208231.svg" alt=""/>
            <h2 >Ask for help</h2>
            </div>
           
            <ul className={styles.navList}>
                <Link className={styles.link} to="/home"><li>Home</li></Link>
                <Link className={styles.link} to="/about"><li>About</li></Link>
                <Link className={styles.link} to="/login"><li>Login</li></Link>
                <Link className={styles.link} to="/signup"><li>Sign up</li></Link>
            </ul>
        </div>
    );
}

export default Nav;
