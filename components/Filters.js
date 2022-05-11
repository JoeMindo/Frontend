import React from 'react';
import { AppstoreOutlined, FilterOutlined, SettingOutlined, Card } from '@ant-design/icons';
import { Menu } from 'antd';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
    getItem('Filters', 'sub1', <FilterOutlined />, [
      getItem('Grade', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
        getItem('Price', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
        getItem('Rating', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
    ]),
]

export const Filters = () => {
    const onClick = (e) => {
        console.log('click ', e);
      };
    
    return (
        <>
            
            <Card title="Filters" bordered={false} className = {'filters'}>
                <Menu
                    onClick={onClick}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={items}
                >


                </Menu>
                {/* <label className={'label'}>Grade 1</label>
                <input type={'radio'} />
                    <span className={'checkmark'}>Grade 2</span>
                
                <h3>Price</h3>
                <label className={'label'}>high to low</label>
                <input type={'radio'} />
                    <span className={'checkmark'}>low to high</span>
                
                <h3>Rating</h3>
                <label className={'label'}>4 star</label>
                <input type={'radio'} />
                    <span className={'checkmark'}>3 star</span>
                
                <input type={'radio'} />
                    <span className={'checkmark'}>2 star</span> */}
                

            </Card>
        </>
    )
}