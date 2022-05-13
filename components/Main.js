import React from 'react';
import {Row, Col} from 'antd';
import { Sidebar } from './Sidebar';

export const Main = () => { 
    return (
        <div className={'main'}>
            <Row>
                <Col span={6}>
                    <Sidebar />
                </Col>
            </Row>

            
            </div>
            )
}
export default Main;