import PropTypes from 'prop-types';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

// third-party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from 'components/@extended/AnimateButton';

// ============================|| JWT - RESET PASSWORD ||============================ //

export default function AuthResetPassword({ isDemo = false }) {
    return (
        <>
            <Formik
                initialValues={{
                    email: 'info@codedthemes.com',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required')
                })}
            >
                {({ errors, handleBlur, handleChange, touched, values }) => (
                    <form noValidate>
                        <Grid container spacing={3}>
                            <Grid size={12}>
                                <Stack sx={{ gap: 1 }}>
                                    <InputLabel htmlFor="email-reset">Email Address</InputLabel>
                                    <OutlinedInput
                                        id="email-reset"
                                        type="email"
                                        value={values.email}
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        fullWidth
                                        error={Boolean(touched.email && errors.email)}
                                    />
                                </Stack>
                                {touched.email && errors.email && (
                                    <FormHelperText error id="standard-weight-helper-text-email-reset">
                                        {errors.email}
                                    </FormHelperText>
                                )}
                            </Grid>

                            <Grid size={12}>
                                <AnimateButton>
                                    <Button fullWidth size="large" variant="contained" color="primary">
                                        Send Reset Link
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
        </>
    );
}

AuthResetPassword.propTypes = { isDemo: PropTypes.bool };
