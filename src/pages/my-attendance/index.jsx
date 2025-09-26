import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Paper,
    Stack,
    useMediaQuery,
    IconButton,
    TextField,
    TablePagination,
    Autocomplete,
    Chip
} from '@mui/material';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import Dot from 'components/@extended/Dot';
import attendanceData from '../../data/attendanceData.json';
import MainCard from 'components/MainCard';

// ==============================|| HELPER FUNCTIONS ||============================== //

const formatTime12 = (time24) => {
    const [hour, minute] = time24.split(':').map(Number);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 === 0 ? 12 : hour % 12;
    return `${hour12}:${minute.toString().padStart(2, '0')} ${ampm}`;
};

function AttendanceStatus({ time_in }) {
    const isLate =
        parseInt(time_in.split(':')[0]) > 8 ||
        (parseInt(time_in.split(':')[0]) === 8 && parseInt(time_in.split(':')[1]) > 5);

    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <Dot color={isLate ? 'error' : 'success'} />
            <Typography variant="body2">{isLate ? 'Late' : 'On Time'}</Typography>
        </Stack>
    );
}

AttendanceStatus.propTypes = { time_in: PropTypes.string };

// ✅ Helper to get weekday
function getDayName(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
}

// ==============================|| MY ATTENDANCE PAGE ||============================== //

export default function MyAttendance() {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [expandedRow, setExpandedRow] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const months = [
        { value: '', label: 'All Months' },
        { value: 0, label: 'January' },
        { value: 1, label: 'February' },
        { value: 2, label: 'March' },
        { value: 3, label: 'April' },
        { value: 4, label: 'May' },
        { value: 5, label: 'June' },
        { value: 6, label: 'July' },
        { value: 7, label: 'August' },
        { value: 8, label: 'September' },
        { value: 9, label: 'October' },
        { value: 10, label: 'November' },
        { value: 11, label: 'December' }
    ];

    // Auto-select current month on mount
    useEffect(() => {
        const currentMonth = new Date().getMonth();
        setSelectedMonth(months.find((m) => m.value === currentMonth));
    }, []);

    const toggleRow = (id) => {
        setExpandedRow(expandedRow === id ? null : id);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // ==============================|| FILTERING ||============================== //
    const filteredData = attendanceData.filter((row) => {
        const rowDate = new Date(row.date);
        const start = startDate ? new Date(startDate) : null;
        const end = endDate ? new Date(endDate) : null;

        const matchesDate = (!start || rowDate >= start) && (!end || rowDate <= end);
        const matchesMonth =
            !selectedMonth || selectedMonth.value === '' || rowDate.getMonth() === Number(selectedMonth.value);

        return matchesDate && matchesMonth;
    });

    const paginatedData = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    // ==============================|| RENDER ||============================== //
    return (
        <MainCard>
            {/* Interactive Month Filter + Date Range */}
            <Stack direction={isMobile ? 'column' : 'row'} spacing={2} mb={3}>
                <Autocomplete
                    options={months}
                    getOptionLabel={(option) => option.label}
                    value={selectedMonth}
                    onChange={(_, newValue) => setSelectedMonth(newValue)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Filter by Month"
                            size="small"
                            InputLabelProps={{
                                shrink: true,
                                sx: {
                                    display: 'flex',
                                    alignItems: 'center', // centers vertically
                                    left: 0,              // stays left aligned
                                }
                            }}
                        />
                    )}
                    sx={{ minWidth: 200 }}
                    clearOnEscape
                    renderOption={(props, option) => (
                        <li {...props}>
                            <Chip
                                label={option.label}
                                color={option.value === new Date().getMonth() ? 'primary' : 'default'}
                                variant={selectedMonth?.value === option.value ? 'filled' : 'outlined'}
                            />
                        </li>
                    )}
                />

                <TextField
                    label="Start Date"
                    type="date"
                    size="small"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                />

                <TextField
                    label="End Date"
                    type="date"
                    size="small"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                />
            </Stack>

            {/* Attendance Table */}
            <TableContainer sx={{ maxHeight: 500 }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {isMobile ? (
                                <>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell align="right">Expand</TableCell>
                                </>
                            ) : (
                                <>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Day</TableCell> {/* ✅ New Column */}
                                    <TableCell>Status</TableCell>
                                    <TableCell>Time In</TableCell>
                                    <TableCell>Time Out</TableCell>
                                </>
                            )}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {paginatedData.map((row) => (
                            <React.Fragment key={row.id}>
                                <TableRow hover>
                                    {isMobile ? (
                                        <>
                                            <TableCell>{row.date}</TableCell>
                                            <TableCell>
                                                <AttendanceStatus time_in={row.time_in} />
                                            </TableCell>
                                            <TableCell align="right">
                                                <IconButton size="small" onClick={() => toggleRow(row.id)}>
                                                    {expandedRow === row.id ? <UpOutlined /> : <DownOutlined />}
                                                </IconButton>
                                            </TableCell>
                                        </>
                                    ) : (
                                        <>
                                            <TableCell>{row.date}</TableCell>
                                            <TableCell>{getDayName(row.date)}</TableCell> {/* ✅ Weekday */}
                                            <TableCell>
                                                <AttendanceStatus time_in={row.time_in} />
                                            </TableCell>
                                            <TableCell>{formatTime12(row.time_in)}</TableCell>
                                            <TableCell>{formatTime12(row.time_out)}</TableCell>
                                        </>
                                    )}
                                </TableRow>

                                {/* Accordion for mobile only */}
                                {isMobile && expandedRow === row.id && (
                                    <TableRow>
                                        <TableCell colSpan={3}>
                                            <Stack spacing={1} sx={{ pl: 1 }}>
                                                <Typography>
                                                    <strong>Day:</strong> {getDayName(row.date)}
                                                </Typography>
                                                <Typography>
                                                    <strong>Time In:</strong> {formatTime12(row.time_in)}
                                                </Typography>
                                                <Typography>
                                                    <strong>Time Out:</strong> {formatTime12(row.time_out)}
                                                </Typography>
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </React.Fragment>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Pagination */}
            <Box
                sx={{
                    mt: 2,
                    display: 'flex',
                    justifyContent: { xs: 'center', sm: 'flex-end' }
                }}
            >
                <TablePagination
                    component="div"
                    count={filteredData.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowsPerPageOptions={[5, 10, 25]}
                />
            </Box>
        </MainCard>
    );
}
