import React from 'react';
import { 
    Row,
    Col,
    Card 
} from 'antd';
import './index.css'

const Index=({children})=>{
    return(
        <>
            <Row className='inside-header'>
                <Col span={24}>
                    <Card>
                        {children}
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default Index;