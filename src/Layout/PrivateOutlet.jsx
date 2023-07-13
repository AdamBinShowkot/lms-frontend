import { Navigate, Outlet,Route } from "react-router-dom";

const PrivateLayout=()=>{
    let userName=localStorage.getItem("token")
    return userName?<Outlet />:<Navigate to="/login" replace />
}
export default PrivateLayout;