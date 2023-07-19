import React from 'react';
import DataTable from '../../../ReusableComponent/DataTable';
import { Button, Col, Row } from 'antd';


const DataLists=()=>{
    const columns = [
        {
            title: 'Column One',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Column Two',
            dataIndex: 'age',
            key: 'age',
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
                data
            }}
            />
        </>
    )
}
export default DataLists;