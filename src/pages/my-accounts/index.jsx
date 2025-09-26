// ==============================|| MY ACCOUNT (Enhanced School History Focus) ||============================== //

import { useTheme } from '@mui/material/styles';
import {
    Avatar,
    Box,
    Button,
    Chip,
    Divider,
    Grid,
    Paper,
    Stack,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Modal
} from '@mui/material';
import { UserOutlined, MailOutlined, PhoneOutlined, HomeOutlined, CalendarOutlined } from '@ant-design/icons';
import { useState } from 'react';

// project imports
import MainCard from 'components/MainCard';

export default function MyAccount() {
    const theme = useTheme();
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const academicHistory = [
        { year: '2024-2025', grade: '6th Grade', section: '6B', teacher: 'Ms. Emily Santos', room: 'Room 6B', gpa: '95%', attendance: '98%', rank: '1st', notes: 'Excellent performance' },
        { year: '2023-2024', grade: '5th Grade', section: '5A', teacher: 'Mr. John Cruz', room: 'Room 5A', gpa: '92%', attendance: '96%', rank: '2nd', notes: 'Strong in Math and Science' },
        { year: '2022-2023', grade: '4th Grade', section: '4C', teacher: 'Ms. Lara Reyes', room: 'Room 4C', gpa: '90%', attendance: '95%', rank: '3rd', notes: 'Active participant in class' },
    ];

    return (
        <MainCard
            title="General Information"
            contentSX={{ p: 4 }}
        >
            <Grid container spacing={4} alignItems="flex-start">
                {/* Profile Section */}
                <Grid
                    item
                    size={{ xs: 12, sm: 5, md: 4, lg: 3 }}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        gap: 2
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            width: 140,
                            height: 140,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                            bgcolor: theme.palette.primary.lighter,
                            mb: 1
                        }}
                    >
                        <Avatar
                            sx={{
                                width: 120,
                                height: 120,
                                bgcolor: theme.palette.primary.main,
                                fontSize: '2rem',
                                boxShadow: theme.customShadows.z2
                            }}
                        >
                            SJ
                        </Avatar>
                    </Box>

                    <Stack spacing={0.7} alignItems="center">
                        <Typography variant="h5" fontWeight={600}>
                            Sarah Johnson
                        </Typography>
                        <Typography color="text.secondary" variant="body2">
                            6th Grade Student
                        </Typography>
                        <Chip label="Active Student" color="success" variant="soft" sx={{ fontWeight: 500 }} />
                    </Stack>

                    <Divider flexItem sx={{ my: 2, width: '100%' }} />

                    <Stack spacing={1.5} sx={{ textAlign: 'left', width: '100%', maxWidth: 280 }}>
                        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                            <MailOutlined /> sarah@student.edu
                        </Typography>
                        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                            <PhoneOutlined /> +63 912 345 6789
                        </Typography>
                        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                            <UserOutlined /> ID: EL-2025-012
                        </Typography>
                        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                            <HomeOutlined /> Homeroom: Room 6B
                        </Typography>
                        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                            <CalendarOutlined /> Enrollment Date: June 2022
                        </Typography>
                    </Stack>
                </Grid>

                {/* Account Details */}
                <Grid item size={{ xs: 12, sm: 7, md: 8, lg: 9 }}>
                    {/* Academic Details */}
                    <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                        Academic Details
                    </Typography>
                    <Grid container spacing={3}>
                        {[
                            { label: 'Full Name', value: 'Sarah Johnson' },
                            { label: 'Grade Level', value: '6th Grade' },
                            { label: 'Section', value: '6B' },
                            { label: 'Advisor / Teacher', value: 'Ms. Emily Santos' },
                            { label: 'GPA', value: '95% (Honor Roll)' },
                            { label: 'Attendance', value: '98%' },
                            { label: 'Favorite Subjects', value: 'Math, Science, Art' }
                        ].map((item, index) => (
                            <Grid item size={{ xs: 12, sm: 6 }} key={index}>
                                <Paper
                                    variant="outlined"
                                    sx={{
                                        p: 2,
                                        borderRadius: 2,
                                        transition: '0.3s',
                                        '&:hover': {
                                            boxShadow: theme.customShadows.z1,
                                            borderColor: theme.palette.primary.light
                                        }
                                    }}
                                >
                                    <Stack spacing={0.5}>
                                        <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 500 }}>
                                            {item.label}
                                        </Typography>
                                        <Typography variant="body1" fontWeight={600}>
                                            {item.value}
                                        </Typography>
                                    </Stack>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Recent School Years Table */}
                    <Divider sx={{ my: 4 }} />
                    <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                        Recent School Years
                    </Typography>
                    <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
                        <Table size="small">
                            <TableHead sx={{ bgcolor: theme.palette.grey[100] }}>
                                <TableRow>
                                    <TableCell>Year</TableCell>
                                    <TableCell>Grade</TableCell>
                                    <TableCell>Section</TableCell>
                                    <TableCell>Teacher</TableCell>
                                    <TableCell>Room</TableCell>
                                    <TableCell>GPA</TableCell>
                                    <TableCell>Attendance</TableCell>
                                    <TableCell>Class Rank</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {academicHistory.map((row, index) => (
                                    <TableRow key={index} hover>
                                        <TableCell>{row.year}</TableCell>
                                        <TableCell>{row.grade}</TableCell>
                                        <TableCell>{row.section}</TableCell>
                                        <TableCell>{row.teacher}</TableCell>
                                        <TableCell>{row.room}</TableCell>
                                        <TableCell>{row.gpa}</TableCell>
                                        <TableCell>{row.attendance}</TableCell>
                                        <TableCell>{row.rank}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    {/* Parent / Guardian Info */}
                    <Divider sx={{ my: 4 }} />
                    <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                        Parent / Guardian Contact
                    </Typography>
                    <Stack spacing={1}>
                        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                            <UserOutlined /> Mrs. Johnson (Mother)
                        </Typography>
                        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                            <PhoneOutlined /> +63 912 987 6543
                        </Typography>
                        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                            <MailOutlined /> mother.johnson@email.com
                        </Typography>
                    </Stack>

                    {/* Actions */}
                    <Divider sx={{ my: 4 }} />
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        justifyContent="flex-end"
                    >
                        <Button variant="outlined" sx={{ borderRadius: 2, px: 3, transition: '0.2s' }} onClick={handleOpen}>
                            View Detailed Records
                        </Button>
                        <Button variant="contained" sx={{ borderRadius: 2, px: 3, boxShadow: theme.customShadows.z1 }}>
                            Settings
                        </Button>
                    </Stack>

                    {/* Modal for Detailed Academic Records */}
                    <Modal open={openModal} onClose={handleClose}>
                        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: theme.customShadows.z2, borderRadius: 2, p: 4, width: { xs: '90%', sm: 700 } }}>
                            <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>Detailed Academic Records</Typography>
                            {academicHistory.map((row, index) => (
                                <Paper key={index} sx={{ p: 2, mb: 2, borderRadius: 2, transition: '0.3s', '&:hover': { boxShadow: theme.customShadows.z1 } }}>
                                    <Stack spacing={1}>
                                        <Typography variant="subtitle1" fontWeight={600}>{row.year} - {row.grade}</Typography>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6} sm={3}><Typography variant="body2" color="text.secondary">Section</Typography><Typography variant="body1" fontWeight={600}>{row.section}</Typography></Grid>
                                            <Grid item xs={6} sm={3}><Typography variant="body2" color="text.secondary">Teacher</Typography><Typography variant="body1" fontWeight={600}>{row.teacher}</Typography></Grid>
                                            <Grid item xs={6} sm={3}><Typography variant="body2" color="text.secondary">Room</Typography><Typography variant="body1" fontWeight={600}>{row.room}</Typography></Grid>
                                            <Grid item xs={6} sm={3}><Typography variant="body2" color="text.secondary">GPA</Typography><Typography variant="body1" fontWeight={600}>{row.gpa}</Typography></Grid>
                                            <Grid item xs={6} sm={3}><Typography variant="body2" color="text.secondary">Attendance</Typography><Typography variant="body1" fontWeight={600}>{row.attendance}</Typography></Grid>
                                            <Grid item xs={6} sm={3}><Typography variant="body2" color="text.secondary">Class Rank</Typography><Typography variant="body1" fontWeight={600}>{row.rank}</Typography></Grid>
                                            <Grid item xs={12}><Typography variant="body2" color="text.secondary">Notes</Typography><Typography variant="body1" fontWeight={600}>{row.notes}</Typography></Grid>
                                        </Grid>
                                    </Stack>
                                </Paper>
                            ))}
                        </Box>
                    </Modal>
                </Grid>
            </Grid>
        </MainCard>
    );
}
