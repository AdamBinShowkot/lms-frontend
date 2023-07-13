import React from 'react';
import {
    Row,
    Col,
    Card
} from 'antd';

const CategoryMain=()=>{
    return(
        <>
            <Row>
                <Col span={24}>
                    <Card>
                        <h2>I'm Category Component</h2>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default CategoryMain;