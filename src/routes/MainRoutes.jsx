import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// Components
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';


// Pages
const Dashboard = Loadable(lazy(() => import('pages/dashboard')));
const MyAccount = Loadable(lazy(() => import('pages/my-accounts')));
const MyAttendance = Loadable(lazy(() => import('pages/my-attendance')));
const MyGrades = Loadable(lazy(() => import('pages/my-grades')));
const Messaging = Loadable(lazy(() => import('../pages/messages')));


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <DashboardLayout />,
    children: [
        {
            path: '/',
            element: <Navigate to="/dashboard" replace />
        },
        {
            path: 'dashboard',
            element: <Dashboard />
        },
        {
            path: 'messages',
            element: <Messaging />
        },
        {
            path: 'my-account',
            element: <MyAccount />
        },
        {
            path: 'my-attendance',
            element: <MyAttendance />
        },
        {
            path: 'my-grades',
            element: <MyGrades />
        },
    ]
};

export default MainRoutes;
