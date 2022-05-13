import React from 'react';
import {Row, Col} from 'antd';
import { Sidebar } from './Sidebar';
import CategoryPicker from './CategoryPicker';

export const Main = () => { 
    return (
        <div className={'main'}>
            <Row>
                <Col span={6}>
                    <Sidebar />
                </Col>
                <Col span={18}>
                    
                        <CategoryPicker/>
                    
                </Col>
            </Row>

            
            </div>
            )
}
export default Main;