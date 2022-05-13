import React from 'react'
import { Tag, Card, Avatar } from 'antd'
import Image from 'next/image'
import {EditOutlined} from '@ant-design/icons'
import styles from './shoppingbag.module.css'

const { Meta } = Card;

const ShoppingBag = () => {
    return (
        <>
            <div className={
                styles.shoppingHeading
            }>
                <h2>My shopping Bag</h2>
                <Tag color="#FF9900"
                    className={
                        styles.cartCount
                }>9 items</Tag>
            </div>
            <div className={
                styles.shoppingBag
            }>
          <Card
            className={styles.cartItem}
            actions={[
              <EditOutlined key="edit" />,
            ]}
          >
           <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Ripe bananas"
              description={
                <>
                   
                  <p>2 kg</p>
                  <p className={styles.price}>
              KES 7,678
            </p>

                </>
              }
              
            />
            
            

            
            
          </Card>
                
            </div>

        </>
    )
}

export default ShoppingBag
