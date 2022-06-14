import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PublicRoutes = () => {
    const {auth} = useAuth();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    return (
      auth?.user?  <Navigate to={from}/> : <Outlet/>
  )
}

export default PublicRoutes