import React from 'react';
import {
    Row,
    Col,
    Card
} from 'antd';

const BrandMain=()=>{
    return(
        <>
            <Row>
                <Col span={24}>
                    <Card>
                        <h2>I'm Brand Component</h2>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default BrandMain;