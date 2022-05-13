import React from 'react';
import {
    Tooltip,
    Button,
    Menu,
    Dropdown,
    Space
} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import styles from './categorypicker.module.css'
const CategoryPicker = () => {
    let text = 'some'
    return (
        <div className={
            styles.categoryPicker
        }>
            <Tooltip placement="topLeft" title='All Produce'>
                <Button className={
                    styles.categoryButton
                }>All Produce</Button>
            </Tooltip>
            <Tooltip placement="top"
                title={text}>
                <Button className={
                    styles.categoryButton
                }>Cereals</Button>
            </Tooltip>
            <Tooltip placement="topRight"
                title={text}>
                <Button className={
                    styles.categoryButton
                }>Tubers</Button>
            </Tooltip>
            <Tooltip placement="topRight"
                title={text}>
                <Button className={
                    styles.categoryButton
                }>Vegetables</Button>
            </Tooltip>
            <Tooltip placement="topRight"
                title={text}>
                <Button className={
                    styles.categoryButton
                }>Fruits</Button>
            </Tooltip>

            <Dropdown className={ styles.dropdown} overlay={
                <Menu items={
                    [
                        {
                            label: <a href="https://www.antgroup.com">1st menu item</a>,
                            key: '0'
                        }, {
                            label: <a href="https://www.aliyun.com">2nd menu item</a>,
                            key: '1'
                        }, {
                            type: 'divider'
                        }, {
                            label: '3rd menu item',
                            key: '3'
                        },
                    ]
                }/>
            }
                
                trigger={
                    ['click']
            }>
                <a onClick={
                    (e) => e.preventDefault()
                    
                }>
                    
                    <Space>
                        More categories
                        <DownOutlined/>
                    </Space>
                </a>
            </Dropdown>
        </div>
    )
}


export default CategoryPicker;
