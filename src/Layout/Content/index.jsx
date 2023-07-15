import React from 'react';
import { Button, Layout, Menu, theme } from 'antd';
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import storeRouteMap from '../../pages/Store/routeMap';
import StoreIndex from '../../pages/Store';
import bookRouteMap from '../../pages/Book/routeMap';
import BookIndex from '../../pages/Book';
import settingsRouteMap from '../../pages/Settings/routeMap';
import SettingsIndex from '../../pages/Settings';
import './index.css'

const { Content } = Layout;

const ContentMain=({colorBgContainer,collapsed})=>{
    const roles=localStorage.getItem("role");
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
                            <Route path='/store' element={<StoreIndex/>}>
                                {storeRouteMap.map((data,i)=>{
                                    return <Route 
                                    key={data.path} 
                                    path={data.path} 
                                    element={data.component}
                                    />
                                })}
                            </Route>

                            <Route path='/book' element={<BookIndex/>}>
                                {bookRouteMap.map((data,i)=>{
                                    return <Route 
                                    key={data.path} 
                                    path={data.path} 
                                    element={data.component}
                                    />
                                })}
                            </Route>

                            <Route path='/settings' element={<SettingsIndex/>}>
                                {settingsRouteMap.map((data,i)=>{
                                    return <Route 
                                    key={data.path} 
                                    path={data.path} 
                                    element={data.component}
                                    />
                                })}
                            </Route>
                        </Routes>
                    </Content>
                {/* </CSSTransition>
            </SwitchTransition> */}
        </>
    )
}
export default ContentMain;