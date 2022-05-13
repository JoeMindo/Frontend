import React from 'react';
import {FilterOutlined} from '@ant-design/icons';
import {Card} from 'antd';
import styles from './Filters.module.css';


export const Filters = () => {
    const onClick = (e) => {
        console.log('click ', e);
    };

    return (
        <>

            <Card title="Filters"
                className={
                    styles.card
            }>
                <div className={
                    styles.filterGroup
                }>  
                    <h3>Grade</h3>
                    <input type={'radio'} id="grade1" name="radio-group" checked/>
                    <label htmlFor='grade1'>Grade 1</label><br /><br/>
                    <input type={'radio'} id="grade2" name="radio-group"/>
                    <label htmlFor='grade1'>Grade 2</label><br /><br/>
                </div>
                
                <div className={
                    styles.filterGroup
                }>
                    <h3>Price</h3>
                    <input type={'radio'} id="hightolow" name="radio-group" checked/>
                    <label htmlFor='hightolow'>High To Low</label><br /><br/>
                    <input type={'radio'} id="lowtohigh" name="radio-group" checked/>
                    <label htmlFor='lowtohigh'>Low to High</label><br /><br/>
                </div>
                

                <div className={
                    styles.filterGroup
                }>
                    <h3>Rating</h3>
                    <input type={'radio'} id="fourstar" name="radio-group" checked/>
                    <label htmlFor='fourstar'>4 stars</label><br /><br/>
                    <input type={'radio'} id="threestar" name="radio-group" />
                    <label htmlFor='threestar'>3 stars</label><br /><br/>
                    <input type={'radio'} id="twostar" name="radio-group" />
                    <label htmlFor='twostar'>2 stars</label><br /><br/>
                </div>
               


            </Card>
        </>
    )
}
export default Filters;
