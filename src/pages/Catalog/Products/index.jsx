import React from 'react';
import ItemsMain from '../../../components/Catalog/Products'
// import { useLocation } from 'react-router-dom';


const ItemsMainPage=()=>{
    // const location = useLocation();
    // //console.log("My Props",location)
    // const isUpdate=location.state?location.state.isUpdate:false

    return(
        <>
            <ItemsMain/>
        </>
    )
}
export default ItemsMainPage;