import { createBrowserRouter } from 'react-router-dom';

// project imports
import MainRoutes from './MainRoutes';
import AuthRoutes from './AuthRoutes';

// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter([MainRoutes, AuthRoutes], { basename: import.meta.env.VITE_APP_BASE_NAME });

export default router;
