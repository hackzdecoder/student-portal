// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// react-router
import { useLocation } from 'react-router-dom';

// project imports
import AuthWrapper from 'sections/auth/AuthWrapper';
import ResetPassword from 'sections/auth/AuthResetPassword';
import PasswordReset from 'sections/auth/AuthPasswordReset';
import AuthLogin from 'sections/auth/AuthLogin';

// ================================|| Auth Wrapper Page ||================================ //

export default function AuthPage() {
    const location = useLocation();

    // Determine page title dynamically
    const getPageTitle = () => {
        switch (location.pathname) {
            case '/login':
                return 'Login';
            case '/reset-password':
                return 'Reset Password';
            case '/password-reset':
                return 'Password Reset';
            default:
                return '';
        }
    };

    // Determine which component to render
    const renderComponent = () => {
        switch (location.pathname) {
            case '/login':
                return <AuthLogin />;
            case '/reset-password':
                return <ResetPassword />;
            case '/password-reset':
                return <PasswordReset />;
            default:
                return null;
        }
    };

    return (
        <AuthWrapper>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Stack
                        direction="row"
                        sx={{
                            alignItems: 'baseline',
                            justifyContent: 'space-between',
                            mb: { xs: -0.5, sm: 0.5 }
                        }}
                    >
                        <Typography variant="h3">{getPageTitle()}</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    {renderComponent()}
                </Grid>
            </Grid>
        </AuthWrapper>
    );
}
