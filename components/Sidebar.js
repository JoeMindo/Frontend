import React from 'react';
import Filters from './Filters';
import styles from './Sidebar.module.css'
import ShoppingBag from './ShoppingBag';


export const Sidebar = () => { 
    return (
        <section className={styles.sidebar}>
            <Filters />
            <ShoppingBag />
        </section>
    )
}

export default Sidebar;