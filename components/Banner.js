import React from 'react'
import {Carousel} from 'antd'
import Image from 'next/image'
import styles from './banner.module.css'

const Banner = () => {
    return (
        <Carousel autoplay
            className={
                styles.carousel
        }>
            <div className={
                styles.contentStyle
            }>
                <h4 className={
                    styles.bannerText
                }>Get fresh farm produce whenever you need it!</h4>
                
            </div>
            <div className={
                styles.contentStyle
            }>
                <h4 className={
                    styles.bannerText
                }>Get fresh farm produce whenever you need it!</h4>
               
            </div>
            <div className={
                styles.contentStyle
            }>
                <h4 className={
                    styles.bannerText
                }>Get fresh farm produce whenever you need it!</h4>
                
            </div>
            <div className={
                styles.contentStyle
            }>
                <h4 className={
                    styles.bannerText
                }>Get fresh farm produce whenever you need it!</h4>
                
            </div>
        </Carousel>
    )
}

export default Banner
