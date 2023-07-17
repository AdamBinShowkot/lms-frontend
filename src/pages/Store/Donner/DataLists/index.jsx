import React from 'react';
import {
    Button, Col, Row
} from 'antd';
import { useNavigate  } from 'react-router-dom';
import DataTable from '../../../../components/Store/Donner/DataLists';
import ContentHeader from '../../../../utils/ContentHeader';
import './index.css'

const DataLists=()=>{
    const history=useNavigate();

    return(
        <>
            <ContentHeader>
                <Button 
                className='add-new-btn'
                onClick={()=>{
                    history('/store/addDonner')
                }}
                >
                    New
                </Button>
                <Button 
                className='list-all-btn'
                onClick={()=>{
                    history('/store/addDonner/lists')
                }}
                >
                   Lists
                </Button>
            </ContentHeader>
            <Row className='inner-container'>
                <Col span={24}>
                    <DataTable/>
                </Col>
            </Row>
        </>
    )
}
export default DataLists;