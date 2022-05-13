import React from 'react'
import { Card, Meta } from 'antd'
import styles from './productitem.module.css'

const ProductItem = () => {
  return (
    <Card
    className={styles.productItem}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  )
}

export default ProductItem