import React from 'react';
import AddNewNews from '../../components/AddNewNews/index'
import { useLocation } from 'react-router-dom';


const AddNewNewsPage=(props)=>{
    const location = useLocation();
    //console.log("My Props",location)
    const isUpdate=location.state?location.state.isUpdate:false

    return(
        <>
            <AddNewNews isUpdate={isUpdate}/>
        </>
    )
}
export default AddNewNewsPage;