import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Booked from "../Pages/Booked/Booked";
import Booking from "../Pages/Booking/Booking";
import PrivateRoute from "../Pages/Private/PrivateRoute";
 const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,

      },
      {
        path:'/booking',
        element:<PrivateRoute><Booking></Booking></PrivateRoute>
      },
      {
        path:'/booked/:id',
        element:<Booked></Booked>,
        loader:({params})=>fetch(`https://doctor-mama-is-comming-projects.vercel.app/services/${params.id}`)

        
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      }
      
    ]
  },
]);

export default router