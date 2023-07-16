import React from 'react';
import {
    Button, 
    Row,
    Col
} from 'antd';
import { useNavigate } from 'react-router-dom';
import ContentHeader from '../../../../utils/ContentHeader';
import AddNew from '../../../../components/Store/AddNewBook/Form';
import './index.css';

const AddNewForm=()=>{
    const history=useNavigate();

    return(
        <>
            <ContentHeader>
                <Button 
                className='add-new-btn'
                onClick={()=>{
                    history('/store/addNewBook')
                }}
                >
                    New
                </Button>
                <Button 
                className='list-all-btn'
                onClick={()=>{
                    history('/store/addNewBook/lists')
                }}
                >
                   Lists
                </Button>
            </ContentHeader>
            <Row className='inner-container'>
                <Col span={24}>
                    <AddNew/>
                </Col>
            </Row>
        </>
    )
}
export default AddNewForm
