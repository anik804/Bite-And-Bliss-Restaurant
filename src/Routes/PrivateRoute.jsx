import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

  const {user,loading} = use(AuthContext);

  const location = useLocation();
  console.log(location);

  if(loading){
    return <span class="loading loading-dots loading-xl"></span>
  }

  if(!user)
  {
    return <Navigate to="/login" state={location.pathname} ></Navigate>
  }

  return children;
};

export default PrivateRoute;