import { useRef, useState } from 'react';

// material-ui
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';
import Transitions from 'components/@extended/Transitions';

// ant design icons
import CheckCircleOutlined from '@ant-design/icons/CheckCircleOutlined';
import { MailOutlined } from '@ant-design/icons';

// styles
const avatarSX = { width: 36, height: 36, fontSize: '1rem' };
const actionSX = { mt: '6px', ml: 1, top: 'auto', right: 'auto', alignSelf: 'flex-start', transform: 'none' };

export default function Messages() {
    const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [unread, setUnread] = useState(3);

    const handleToggle = () => setOpen((prev) => !prev);
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) return;
        setOpen(false);
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 0.75 }}>
            <IconButton
                color="secondary"
                variant="light"
                sx={{ color: 'text.primary', bgcolor: open ? 'grey.100' : 'transparent' }}
                aria-label="open messages"
                ref={anchorRef}
                aria-controls={open ? 'messages-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                <Badge badgeContent={unread} color="success">
                    <MailOutlined style={{ fontSize: '1rem' }} />
                </Badge>
            </IconButton>

            <Popper
                placement={downMD ? 'bottom' : 'bottom-end'}
                open={open}
                anchorEl={anchorRef.current}
                transition
                disablePortal
                popperOptions={{ modifiers: [{ name: 'offset', options: { offset: [downMD ? -5 : 0, 9] } }] }}
            >
                {({ TransitionProps }) => (
                    <Transitions type="grow" position={downMD ? 'top' : 'top-right'} in={open} {...TransitionProps}>
                        <Paper sx={{ boxShadow: 3, width: '100%', minWidth: 285, maxWidth: { xs: 285, md: 420 } }}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MainCard
                                    title="Messages"
                                    elevation={0}
                                    border={false}
                                    content={false}
                                    secondary={
                                        unread > 0 && (
                                            <IconButton color="success" size="small" onClick={() => setUnread(0)}>
                                                <CheckCircleOutlined style={{ fontSize: '1.15rem' }} />
                                            </IconButton>
                                        )
                                    }
                                >
                                    <List
                                        component="nav"
                                        sx={{
                                            p: 0,
                                            '& .MuiListItemButton-root': {
                                                py: 0.5,
                                                px: 2,
                                                '&.Mui-selected': { bgcolor: 'grey.50', color: 'text.primary' },
                                                '& .MuiAvatar-root': avatarSX,
                                                '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
                                            }
                                        }}
                                    >
                                        <ListItem component={ListItemButton} divider selected>
                                            <ListItemAvatar>
                                                <Avatar sx={{ color: 'primary.main', bgcolor: 'primary.lighter' }}>
                                                    <MailOutlined />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={
                                                    <Box sx={{ display: 'flex', flexDirection: 'column', wordBreak: 'break-word' }}>
                                                        <Typography variant="subtitle1">John Doe</Typography>
                                                        <Typography variant="body2">sent you a message</Typography>
                                                    </Box>
                                                }
                                                secondary="2 min ago"
                                            />
                                            <Typography variant="caption" noWrap sx={{ ml: 1 }}>
                                                3:00 AM
                                            </Typography>
                                        </ListItem>

                                        <ListItem component={ListItemButton} divider>
                                            <ListItemAvatar>
                                                <Avatar sx={{ color: 'primary.main', bgcolor: 'primary.lighter' }}>
                                                    <MailOutlined />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={
                                                    <Box sx={{ display: 'flex', flexDirection: 'column', wordBreak: 'break-word' }}>
                                                        <Typography variant="subtitle1">Alice Smith</Typography>
                                                        <Typography variant="body2">mentioned you in a comment</Typography>
                                                    </Box>
                                                }
                                                secondary="5 min ago"
                                            />
                                            <Typography variant="caption" noWrap sx={{ ml: 1 }}>
                                                6:00 AM
                                            </Typography>
                                        </ListItem>

                                        <ListItem component={ListItemButton} divider>
                                            <ListItemAvatar>
                                                <Avatar sx={{ color: 'primary.main', bgcolor: 'primary.lighter' }}>
                                                    <MailOutlined />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={
                                                    <Box sx={{ display: 'flex', flexDirection: 'column', wordBreak: 'break-word' }}>
                                                        <Typography variant="subtitle1">Bob Johnson</Typography>
                                                        <Typography variant="body2">replied to your message</Typography>
                                                    </Box>
                                                }
                                                secondary="10 min ago"
                                            />
                                            <Typography variant="caption" noWrap sx={{ ml: 1 }}>
                                                9:10 PM
                                            </Typography>
                                        </ListItem>

                                        <ListItemButton sx={{ textAlign: 'center', py: 1 }}>
                                            <ListItemText
                                                primary={
                                                    <Typography variant="h6" color="primary">
                                                        View All
                                                    </Typography>
                                                }
                                            />
                                        </ListItemButton>
                                    </List>
                                </MainCard>
                            </ClickAwayListener>
                        </Paper>
                    </Transitions>
                )}
            </Popper>
        </Box>
    );
}
