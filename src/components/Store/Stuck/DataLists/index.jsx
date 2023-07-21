import React,{
    useEffect,
    useState
} from 'react';
import { 
    Button, 
    Col, 
    Row 
} from 'antd';
import DataTable from '../../../ReusableComponent/DataTable';
import { useDispatch,useSelector } from 'react-redux';
import { getStuckLists,createNewStuck } from '../../../../Redux/features/store/Async';


const DataLists=()=>{
    const dispatch=useDispatch();
    const stucks=useSelector((state)=>state.store.stucks);

    useEffect(()=>{
        dispatch(getStuckLists());
        //dispatch(createNewStuck())
    },[])
    const columns = [
        {
            title: 'Serial',
            dataIndex: 'sl',
            key: 'sl',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Row No',
            dataIndex: 'rowNo',
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
                data:stucks,
                noDataText:'Stuck Data Is Not Available.'
            }}
            />
        </>
    )
}
export default DataLists;