import React from 'react';
import DataTable from '../../../ReusableComponent/DataTable';
import { Button, Col, Row } from 'antd';


const DataLists=()=>{
    const columns = [
        {
            title: 'Serial',
            dataIndex: 'sl',
            key: 'sl',
        },
        {
            title: 'Cupboard Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Row No',
            dataIndex: 'rowNO',
            key: 'rowNo',
        },
        {
            title: 'Column No',
            dataIndex: 'colNo',
            key: 'colNo',
        },
        {
            title:"Action",
            key:"action",
            render:(record)=>{
                <Row>
                    <Col span={24}>
                        <Button type='primary'>Action</Button>
                    </Col>
                </Row>
            }
        }
    ]

    const data=[]
    return(
        <>
            <DataTable
            tableProps={{
                columns,
                data:[],
                noDataText:'Stuck Data Is Not Available.'
            }}
            />
        </>
    )
}
export default DataLists;