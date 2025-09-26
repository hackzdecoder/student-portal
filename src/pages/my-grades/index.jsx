// material-ui
import React from 'react';
import { Box, Card, CardContent, Typography, Grid, Stack, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// ==============================|| MY GRADES - UNDER MAINTENANCE ||============================== //

export default function MyGrades() {
    return (
        <Box sx={{ p: 3 }}>
            <Grid container justifyContent="center">
                <Grid size={12} sm={8} md={6}>
                    <Card sx={{ textAlign: 'center', py: 5, px: 3, borderRadius: 3, boxShadow: 3 }}>
                        <CardContent>
                            <Stack spacing={3} alignItems="center">
                                {/* Using emoji instead of external icon */}
                                <Typography variant="h1" component="div">
                                    🛠️
                                </Typography>
                                <Typography variant="h4" component="div">
                                    My Grades
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    This page is currently under maintenance.
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    We are working hard to bring you this feature. Please check back later.
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    component={RouterLink}
                                    to="/"
                                >
                                    Back to Dashboard
                                </Button>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}
