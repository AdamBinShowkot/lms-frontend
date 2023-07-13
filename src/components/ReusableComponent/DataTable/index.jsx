import React from 'react';
import {
    Table,
    Row,
    Col
} from 'antd';
import './index.css';


const DataTable=({tableProps})=>{
    const {columns,data}=tableProps
    return(
        <>
            <Row>
                <Col 
                span={24}
                className="reusable-data-table"
                >
                    <Table
                    className="table-striped-rows"
                    rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' :  'table-row-dark'}
                    dataSource={data}
                    columns={columns}
                    />
                </Col>
            </Row>
        </>
    )
}
export default DataTable;