import { Outlet,Navigate,useLocation } from 'react-router-dom';

const StoreIndex = () => {
  const loaction=useLocation();
  const {pathname}=loaction;
  return (
    <div>
      {pathname==="/store"?<Navigate replace to="/store/addDonner" />:""}
      <Outlet />
    </div>
  );
}

export default StoreIndex;