import React from 'react'
import { Button, Card } from 'antd'
import styles from './bestof.module.css'

const BestOf = (props) => {
  return (
      <div className={styles.bestOfCard}>
          <h2>Best of {props.type}</h2>
          <Button>Shop now</Button>
    </div>
  )
}

export default BestOf