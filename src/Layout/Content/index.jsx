import React from 'react';
import { Button, Layout, Menu, theme } from 'antd';
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { useState } from 'react';
import AddNewNewsPage from '../../pages/AddNewNews';
import ListsMain from '../../components/NewsLists';
import DetailsMain from '../../components/ListDetails';
import ContentMain2 from '../../components/SetupNews';
import ReportMain from '../../components/ReportLists';
import PrintMain from '../../components/ReportDetails';
import { Routes,Route } from 'react-router-dom';
import routeMap from '../../config/routeMap';
import './index.css'

const { Content } = Layout;

const ContentMain=({colorBgContainer,collapsed})=>{
    const roles=localStorage.getItem("role");
    const filterRoute=routeMap.filter((route)=>route.roles.includes(roles))
    return(
        <>
            {/* <SwitchTransition>
                <CSSTransition
                //key={location.pathname}
                //nodeRef={nodeRef}
                timeout={2000}
                classNames="page"
                unmountOnExit
                > */}
                    <Content
                    className={`${collapsed?'collapsed-content':'expand-content'}`}
                    style={{
                    margin: '10px',
                    marginTop:'64px',
                    padding: 10,
                    minHeight: 280,
                    background: colorBgContainer,
                    }}
                    >
                        <Routes>
                            {/* <Route path='addNewPost' element={<AddNewNewsPage/>}/>
                            <Route path='lists' element={<ListsMain/>}/>
                            <Route path='lists/:id' element={<DetailsMain/>}/>
                            <Route path='content' element={<ContentMain2/>}/>
                            <Route path='report' element={<ReportMain/>}/>
                            <Route path='report/:id' element={<PrintMain/>}/> */}
                            {
                                filterRoute.length?filterRoute.map((rte,index)=>{
                                    return <Route
                                    element={rte.component}
                                    key={rte.path}
                                    path={rte.path}
                                    />
                                }):""
                            }
                        </Routes>
                    </Content>
                {/* </CSSTransition>
            </SwitchTransition> */}
        </>
    )
}
export default ContentMain;