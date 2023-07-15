import { Outlet,Navigate,useLocation } from 'react-router-dom';

const BookIndex = () => {
  const loaction=useLocation();
  const {pathname}=loaction;
  return (
    <div>
      {pathname==="/book"?<Navigate replace to="/book/addBook" />:""}
      <Outlet />
    </div>
  );
}

export default BookIndex;