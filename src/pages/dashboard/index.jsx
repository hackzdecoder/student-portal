// material-ui
import { Card, CardContent, Grid, Box, Typography } from '@mui/material';

// ant design icons
import { UserOutlined, TeamOutlined, NotificationOutlined } from '@ant-design/icons';

// project imports
import MainCard from 'components/MainCard';

// ==============================|| DASHBOARD PAGE ||============================== //

export default function Dashboard() {
    return (
        <Box>
            {/* Top Statistic Cards */}
            <Grid container spacing={3} mb={3}>
                {/* Students Panel */}
                <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
                    <Card
                        sx={{
                            borderRadius: 2,
                            p: 2,
                            color: '#fff',
                            background: 'linear-gradient(135deg, #64b5f6 0%, #90caf9 100%)',
                        }}
                    >
                        <CardContent>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Box>
                                    <Typography variant="subtitle2" color="inherit">
                                        No. of Students
                                    </Typography>
                                    <Typography variant="h4">1200</Typography>
                                    <Typography variant="body2" color="inherit">
                                        +12% this month
                                    </Typography>
                                </Box>
                                <UserOutlined style={{ fontSize: 36, color: '#fff' }} />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Teachers Panel */}
                <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
                    <Card
                        sx={{
                            borderRadius: 2,
                            p: 2,
                            color: '#fff',
                            background: 'linear-gradient(135deg, #ba68c8 0%, #ce93d8 100%)',
                        }}
                    >
                        <CardContent>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Box>
                                    <Typography variant="subtitle2" color="inherit">
                                        No. of Teachers
                                    </Typography>
                                    <Typography variant="h4">75</Typography>
                                    <Typography variant="body2" color="inherit">
                                        -5% this month
                                    </Typography>
                                </Box>
                                <TeamOutlined style={{ fontSize: 36, color: '#fff' }} />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Announcements Panel */}
                <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
                    <Card
                        sx={{
                            borderRadius: 2,
                            p: 2,
                            color: '#fff',
                            background: 'green',
                        }}
                    >
                        <CardContent>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Box>
                                    <Typography variant="subtitle2" color="inherit">
                                        Announcements
                                    </Typography>
                                    <Typography variant="h4" color="inherit">
                                        3
                                    </Typography>
                                    <Typography variant="body2" color="inherit">
                                        You have 3 Announcement
                                    </Typography>
                                </Box>
                                <NotificationOutlined style={{ fontSize: 36, color: '#fff' }} />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Recent Activity Panel (Full Width) */}
                <Grid item size={{ xs: 12 }}>
                    <MainCard title="Recent Activity">
                        <Typography variant="body2" gutterBottom>
                            Recent updates:
                        </Typography>
                        <ul style={{ marginLeft: '1.5rem', lineHeight: 1.8 }}>
                            <li>✔ Student John Doe enrolled in Science Class</li>
                            <li>✔ Teacher Jane Smith updated her profile</li>
                            <li>✔ 3 new announcements posted</li>
                        </ul>
                    </MainCard>
                </Grid>
            </Grid>
        </Box>
    );
}
