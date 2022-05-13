import React from 'react';
import {Row, Col} from 'antd';
import { Sidebar } from './Sidebar';
import CategoryPicker from './CategoryPicker';
import Banner from './Banner';
import BestOf from './BestOf';
import ProductItem from './ProductItem';
import styles from './main.module.css'

export const Main = () => { 
    return (
        <div className={'main'}>
            <Row>
                <Col span={4}>
                    <Sidebar />
                </Col>
                <Col span={18}>
                    
                        <CategoryPicker/>
                    <Banner />
                    <section className={styles.bestOf}>
                        <BestOf type={'corn'} />
                        <BestOf type={'corn'} />
                        <BestOf type={'corn'} />
                        <BestOf type={'corn'}/>
                    </section>
                    <section className={styles.recommendations}>
                        <h2>Selected by us for you</h2>
                        {/* <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem/> */}
                    </section>
                    
                </Col>
            </Row>

            
            </div>
            )
}
export default Main;