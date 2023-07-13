import React from 'react';
import NewsEditor from './Editor';

const AddNewNews=({isUpdate})=>{
    return(
        <>
            <NewsEditor isUpdate={isUpdate}/>
        </>
    )
}
export default AddNewNews;



