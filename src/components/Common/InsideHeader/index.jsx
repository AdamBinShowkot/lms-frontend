import React from 'react';
import { 
    Row,
    Col,
    Card 
} from 'antd';

const Index=({children})=>{
    return(
        <>
            <Row>
                <Col span={24}>
                    {children}
                </Col>
            </Row>
        </>
    )
}
export default Index;