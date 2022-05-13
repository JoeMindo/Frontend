import React from 'react';
import {Row, Col} from 'antd';
import { Sidebar } from './Sidebar';
import CategoryPicker from './CategoryPicker';
import Banner from './Banner';

export const Main = () => { 
    return (
        <div className={'main'}>
            <Row>
                <Col span={4}>
                    <Sidebar />
                </Col>
                <Col span={18}>
                    
                        <CategoryPicker/>
                        <Banner/>
                    
                </Col>
            </Row>

            
            </div>
            )
}
export default Main;