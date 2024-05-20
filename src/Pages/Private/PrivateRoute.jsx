import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loding} = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname)
    if(loding){
        return <div><span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span></div>
    }
    if(user?.email){
        return children
    }
    return <Navigate to='/login'></Navigate>

    
};

export default PrivateRoute;