import React from 'react';
import {
    Row,
    Col,
    Card
} from 'antd';
import { useLocation } from 'react-router-dom';
import AddNewNewsSetup from '../../components/SetupNews';


const AddNewNewsSetupPage=()=>{
    const location = useLocation();
    //console.log("My Props",location)
    const isUpdate=location.state?location.state.isUpdate:false
    return(
        <>
            <AddNewNewsSetup isUpdate={isUpdate}/>
        </>
    )
}
export default AddNewNewsSetupPage;