import { Outlet,Navigate,useLocation } from 'react-router-dom';

const SettingsIndex = () => {
  const loaction=useLocation();
  const {pathname}=loaction;
  return (
    <div>
      {pathname==="/settings"?<Navigate replace to="/store/addUser" />:""}
      <Outlet />
    </div>
  );
}

export default SettingsIndex;