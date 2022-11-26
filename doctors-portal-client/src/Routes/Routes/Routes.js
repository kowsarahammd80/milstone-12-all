import { createBrowserRouter } from 'react-router-dom';
import DashboardLaout from '../../Laout/DashboardLaout/DashboardLaout';
import Main from '../../Laout/Main/Main';
import AddDoctors from '../../Pages/AddDoctors/AddDoctors';
import AllUsers from '../../Pages/AllUsers/AllUsers';
import Appointment from '../../Pages/Appointments/Appointment/Appointment';
import Dashboard from '../../Pages/DeshBoard/Dashboard/Dashboard';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import ManageDoctors from '../../Pages/ManageDoctors/ManageDoctors';
import Payment from '../../Pages/Payment/Payment';
import DisplayError from '../../Pages/Sheard/DisplayError/DisplayError';
import SignUp from '../../Pages/SignUp/SignUp';
import AdminRoute from '../AdminRoute/AdminRoute';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },

      {
        path: '/appointment',
        element: <Appointment></Appointment>
      },


    ]
  },

  {
    path: '/dashboard',
    element: <PrivateRoutes><DashboardLaout></DashboardLaout></PrivateRoutes>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
      },
      {
        path: '/dashboard/allusers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: '/dashboard/adddoctor',
        element: <AdminRoute> <AddDoctors></AddDoctors> </AdminRoute>
      },
      {
        path: '/dashboard/managedoctors',
        element: <AdminRoute> <ManageDoctors></ManageDoctors> </AdminRoute>
      },
      {
        path: '/dashboard/payment/:id',
        element: <Payment></Payment>,
        loader: ({ params }) => fetch(`https://doctors-portal-server-kowsarahammd80.vercel.app/bookings/${params.id}`)
      }
    ]
  }
])

export default router;

