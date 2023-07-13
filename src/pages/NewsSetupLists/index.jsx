import React from 'react';
import {
    Row,
    Col,
    Card
} from 'antd';
import { useLocation } from 'react-router-dom';
import NewsSetupLists from '../../components/NewsSetupLists';


const NewsSetupListsPage=()=>{
    return(
        <>
            <NewsSetupLists/>
        </>
    )
}
export default NewsSetupListsPage;