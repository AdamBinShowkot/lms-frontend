import React from 'react';
import { 
    Row,
    Col,
    Card 
} from 'antd';
import { useSelector } from 'react-redux';
import './index.css'

const Index=({children})=>{
    const {isCollapsed}=useSelector((state)=>state.ui)
    return(
        <>
            <Row className={`${isCollapsed?'inside-header collapsed-header':'inside-header expand-header'}`}>
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