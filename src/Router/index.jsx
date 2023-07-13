import react from 'react';
import { BrowserRouter, HashRouter,Outlet,Route, Routes } from 'react-router-dom';
import MainLayout from '../Layout';
import PrivateLayout from '../Layout/PrivateOutlet';
import Login from '../components/Login';

const MyRouter=()=>{
    return(
        <>
            <div>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    {/* <Route path="/*" element={<PrivateLayout />}>
                        <Route path="dashboard" element={<MainLayout title="Dashboard" />} />
                    </Route> */}
                    <Route element={<PrivateLayout />}>
                        <Route path='/*' element={<MainLayout />} />
                    </Route>
                </Routes>
            </div>
        </>
    )
}
export default MyRouter;