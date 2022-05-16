import React from 'react'
import { Button, Card, Input, Tooltip } from 'antd'
import {HeartOutlined, LineOutlined, PlusOutlined} from '@ant-design/icons'
import styles from './productitem.module.css'
import Image from 'next/image';


const { Meta } = Card;
const ProductItem = () => {
  return (
    <div className={styles.productItemContainer}>
       <Card
    className={styles.productItem}
      >
        <HeartOutlined className={styles.wishlist} />
        <Image
          width={'125px'}
          height={'125px'}
          alt='product'
          src={'/pepper.png'}
        >

        </Image>
        <Meta title="Item" description="price" />
        <br/>
        <Input
      placeholder="Quantity"
      prefix={<LineOutlined className="site-form-item-icon" />}
      suffix={
        <Tooltip title="Extra information">
          <PlusOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
        </Tooltip>
      }
    />
      </Card>
      <Button className={styles.buyButton}>
        Buy
      </Button>
   </div>
  )
}

export default ProductItem