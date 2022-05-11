import React, {useEffect} from 'react';
import {Input} from 'antd';
import {SearchOutlined, MenuOutlined} from '@ant-design/icons';
import Image from 'next/image';
import MediaQuery from 'react-responsive'
import styles from './Navbar.module.css'
import Link from 'next/link';


const {Search} = Input;
const onSearch = (value) => console.log(value)

export const Navbar = () => {
    useEffect(() => {}, [])
    return (
        <nav className={styles.navbar}>

            <div className={
                styles.topbar
            }>
                <br/>
            </div>
            <div className={
                styles.bottombar
            }>
                <div className={
                    styles.navbarbrand
                }>
                    <div className={styles.imagecontainer}>
                    <Image src={'/logo.png'}
                        width={'80px'}
                        height={'80px'}
                        alt={'logo'}
                        className={styles.logo}
                    />
                    </div>
                    <h2 className={
                        styles.title
                    }>Marketplace</h2>
                </div>
                <Search placeholder="Search produce" allowClear enterButton="Search" size="large"
                    className={
                        styles.search
                    }
                    prefix={<SearchOutlined width={'100%'} />}
                    onSearch={onSearch} />
                <MenuOutlined className={styles.hamburger}/>
                <div className={
                    styles.userActions
                }>
                    <h2 className={
                        styles.account
                    }>

                        <Link href={'/account'}>
                            <a className={
                                styles.link
                            }>Account</a>
                        </Link>
                        <p>|</p>
                    </h2>
                    <h2 className={
                        styles.wishlist
                    }>

                        <Link href={'/wishlist'}>
                            <a className={
                                styles.link
                            }>Wishlist</a>
                        </Link>
                        <p>|</p>
                    </h2>
                    <h2 className={
                        styles.farmer
                    }>

                        <Link href={'/farmer'}>
                            <a className={
                                styles.link
                            }>Farmer</a>
                        </Link>
                        <p>|</p>
                    </h2>
                    <h2 className={
                        styles.assistance
                    }>
                        <Link href={'/assistance'}>
                            <a className={
                                styles.link
                            }>Assistance</a>
                        </Link>
                    </h2>

                </div>

            </div>


        </nav>

    )
}
export default Navbar
