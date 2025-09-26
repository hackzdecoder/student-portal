import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from 'components/@extended/IconButton';
import Link from '@mui/material/Link';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

// third-party
import * as Yup from 'yup';
import { Formik } from 'formik';

// assets
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';

// project imports
import AnimateButton from 'components/@extended/AnimateButton';

// ============================|| JWT - NEW PASSWORD RESET ||============================ //

export default function AuthNewPassword({ isDemo = false }) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState({ level: '', percent: 0, color: 'error.main' });

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleClickShowConfirm = () => setShowConfirm(!showConfirm);
    const handleMouseDown = (event) => event.preventDefault();

    const calculatePasswordStrength = (password) => {
        let score = 0;
        if (password.length >= 6) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[a-z]/.test(password)) score++;
        if (/\d/.test(password)) score++;
        if (/[@$!%*?&]/.test(password)) score++;

        if (score <= 2) return { level: 'Weak', percent: 33, color: 'error.main' };
        if (score === 3 || score === 4) return { level: 'Medium', percent: 66, color: 'warning.main' };
        if (score === 5) return { level: 'Strong', percent: 100, color: 'success.main' };
    };

    return (
        <Formik
            initialValues={{
                password: '',
                confirmPassword: '',
                submit: null
            }}
            validationSchema={Yup.object().shape({
                password: Yup.string()
                    .required('Password is required')
                    .min(6, 'Password must be at least 6 characters')
                    .max(20, 'Password must be less than 20 characters')
                    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
                    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
                    .matches(/\d/, 'Password must contain at least one number')
                    .matches(/[@$!%*?&]/, 'Password must contain at least one special character'),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    .required('Confirm password is required')
            })}
            onSubmit={(values, { setSubmitting }) => {
                if (passwordStrength.level === 'Weak') {
                    setSubmitting(false);
                    return;
                }
                setSubmitting(true);
                console.log('New password submitted:', values.password);
                setSubmitting(false);
            }}
        >
            {({ errors, handleBlur, handleChange, touched, values, handleSubmit, isSubmitting }) => (
                <form noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid size={12}>
                            <Stack sx={{ gap: 1 }}>
                                <InputLabel htmlFor="password-new">New Password</InputLabel>
                                <OutlinedInput
                                    id="password-new"
                                    type={showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    name="password"
                                    onBlur={handleBlur}
                                    onChange={(e) => {
                                        handleChange(e);
                                        setPasswordStrength(calculatePasswordStrength(e.target.value));
                                    }}
                                    placeholder="Enter new password"
                                    fullWidth
                                    error={Boolean(touched.password && errors.password)}
                                    sx={{
                                        borderColor:
                                            passwordStrength.level === 'Weak'
                                                ? 'error.main'
                                                : passwordStrength.level === 'Medium'
                                                    ? 'warning.main'
                                                    : passwordStrength.level === 'Strong'
                                                        ? 'success.main'
                                                        : undefined,
                                    }}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDown}
                                                edge="end"
                                                color="secondary"
                                            >
                                                {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />

                                {/* Password Strength Bar with Text */}
                                {values.password && (
                                    <Box sx={{ mt: 1 }}>
                                        <LinearProgress
                                            variant="determinate"
                                            value={passwordStrength.percent}
                                            sx={{
                                                height: 8,
                                                borderRadius: 5,
                                                backgroundColor: 'divider',
                                                '& .MuiLinearProgress-bar': { backgroundColor: passwordStrength.color },
                                            }}
                                        />
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color: passwordStrength.color,
                                                fontWeight: 600,
                                                mt: 0.5,
                                                display: 'block',
                                                textAlign: 'right'
                                            }}
                                        >
                                            {passwordStrength.level}
                                        </Typography>
                                    </Box>
                                )}
                            </Stack>
                            {touched.password && errors.password && (
                                <FormHelperText error>{errors.password}</FormHelperText>
                            )}
                        </Grid>

                        <Grid size={12}>
                            <Stack sx={{ gap: 1 }}>
                                <InputLabel htmlFor="confirm-password-new">Confirm Password</InputLabel>
                                <OutlinedInput
                                    id="confirm-password-new"
                                    type={showConfirm ? 'text' : 'password'}
                                    value={values.confirmPassword}
                                    name="confirmPassword"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder="Confirm new password"
                                    fullWidth
                                    error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowConfirm}
                                                onMouseDown={handleMouseDown}
                                                edge="end"
                                                color="secondary"
                                            >
                                                {showConfirm ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </Stack>
                            {touched.confirmPassword && errors.confirmPassword && (
                                <FormHelperText error>{errors.confirmPassword}</FormHelperText>
                            )}
                        </Grid>

                        <Grid size={12}>
                            <AnimateButton>
                                <Button
                                    fullWidth
                                    size="large"
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    disabled={isSubmitting || passwordStrength.level === 'Weak'}
                                >
                                    Reset Password
                                </Button>
                            </AnimateButton>
                        </Grid>

                        <Grid size={12}>
                            <Typography variant="body2" align="center">
                                Remember your password?{' '}
                                <Link component={RouterLink} to="/login" color="primary">
                                    Login
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </form>
            )}
        </Formik>
    );
}

AuthNewPassword.propTypes = {
    isDemo: PropTypes.bool
};
