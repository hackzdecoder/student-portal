import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';

// jwt auth
const Login = Loadable(lazy(() => import('pages/authentication/login')));
const ResetPassword = Loadable(lazy(() => import('pages/authentication/reset-password')));
const PasswordReset = Loadable(lazy(() => import('pages/authentication/password-reset')));

// ==============================|| AUTH ROUTING ||============================== //

const AuthRoutes = {
    path: '/',
    children: [
        {
            path: '/',
            children: [
                {
                    path: '/login',
                    element: <Login />
                },
                {
                    path: '/reset-password',
                    element: <ResetPassword />
                },
                {
                    path: '/password-reset',
                    element: <PasswordReset />
                }
            ]
        }
    ]
};

export default AuthRoutes;
