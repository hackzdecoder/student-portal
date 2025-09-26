import React, { useState, useRef, useEffect } from 'react';
import {
    Grid,
    Box,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    IconButton,
    TextField,
    Divider
} from '@mui/material';
import { SendOutlined } from '@ant-design/icons';
import MainCard from 'components/MainCard';

export default function Messages() {
    const initialMessages = [
        { id: 1, sender: 'John Doe', subject: 'Project Update', content: 'Hey, the project is on track!', time: '2h ago' },
        { id: 2, sender: 'Jane Smith', subject: 'Exam Schedule', content: 'Don’t forget the math exam tomorrow.', time: '5h ago' },
        { id: 3, sender: 'Admin', subject: 'Portal Maintenance', content: 'The portal will be down tonight.', time: '1d ago' }
    ];

    const [messages, setMessages] = useState(initialMessages);
    const [selectedMessage, setSelectedMessage] = useState(initialMessages[0]);
    const [conversation, setConversation] = useState([initialMessages[0]]);
    const [reply, setReply] = useState('');

    const conversationRef = useRef(null);

    const handleSelectMessage = (msg) => {
        setSelectedMessage(msg);
        setConversation([msg]);
    };

    const handleSendReply = () => {
        if (!reply.trim()) return;
        const newReply = { id: Date.now(), sender: 'You', content: reply, time: 'Now' };
        setConversation([...conversation, newReply]);
        setReply('');
    };

    useEffect(() => {
        if (conversationRef.current) {
            conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
        }
    }, [conversation]);

    return (
        <MainCard title="Messages">
            <Grid container spacing={2} sx={{ height: '70vh' }}>
                {/* Messages List */}
                <Grid item size={4} sx={{ display: { xs: 'none', md: 'block' }, borderRight: 1, borderColor: 'divider', p: 1 }}>
                    <Box sx={{ height: '100%', overflowY: 'auto' }}>
                        <List disablePadding>
                            {messages.map((msg) => (
                                <React.Fragment key={msg.id}>
                                    <ListItem
                                        button
                                        selected={selectedMessage?.id === msg.id}
                                        onClick={() => handleSelectMessage(msg)}
                                        sx={{
                                            borderRadius: 2,
                                            mb: 1,
                                            cursor: 'pointer', // <-- Add this
                                            '&.Mui-selected': { bgcolor: 'primary.lighter' },
                                            '&:hover': { bgcolor: 'action.hover' },
                                            py: 1.5,
                                        }}
                                    >
                                        <ListItemAvatar>
                                            <Avatar sx={{ bgcolor: 'primary.main', color: '#fff' }}>{msg.sender.charAt(0)}</Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={<Typography sx={{ fontWeight: 600 }}>{msg.subject}</Typography>}
                                            secondary={
                                                <Typography variant="body2" color="text.secondary" noWrap>
                                                    <strong>{msg.sender}</strong> — {msg.content}
                                                </Typography>
                                            }
                                        />
                                        <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
                                            {msg.time}
                                        </Typography>
                                    </ListItem>
                                    <Divider />
                                </React.Fragment>
                            ))}
                        </List>
                    </Box>
                </Grid>

                {/* Conversation Panel */}
                <Grid item size={8} sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 0 }}>
                    {/* Messages */}
                    <Box
                        ref={conversationRef}
                        sx={{
                            flex: 1,
                            overflowY: 'auto',
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1.5,
                        }}
                    >
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                            {selectedMessage.subject}
                        </Typography>

                        {conversation.map((msg) => (
                            <Box
                                key={msg.id}
                                sx={{
                                    display: 'flex',
                                    justifyContent: msg.sender === 'You' ? 'flex-end' : 'flex-start',
                                    mb: 1,
                                }}
                            >
                                <Box
                                    sx={{
                                        bgcolor: msg.sender === 'You' ? 'primary.main' : 'grey.100',
                                        color: msg.sender === 'You' ? '#fff' : 'text.primary',
                                        p: 2,
                                        borderRadius: 2,
                                        maxWidth: '70%',
                                        wordBreak: 'break-word',
                                        boxShadow: 0.5,
                                    }}
                                >
                                    {msg.sender !== 'You' && (
                                        <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                                            {msg.sender}
                                        </Typography>
                                    )}
                                    <Typography variant="body1" sx={{ mb: 0.5 }}>
                                        {msg.content}
                                    </Typography>
                                    <Typography variant="caption" sx={{ display: 'block', textAlign: 'right' }}>
                                        {msg.time}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>

                    {/* Compose Box Full Width */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center', // vertically center
                            width: '100%',
                            borderTop: 1,
                            borderColor: 'divider',
                            bgcolor: 'background.paper',
                            p: 1,
                            gap: 1,
                        }}
                    >
                        <TextField
                            placeholder="Write a reply..."
                            multiline
                            minRows={2}
                            value={reply}
                            onChange={(e) => setReply(e.target.value)}
                            variant="outlined"
                            fullWidth
                            sx={{
                                '& .MuiInputBase-root': { borderRadius: 2 },
                            }}
                        />
                        <IconButton
                            color="primary"
                            onClick={handleSendReply}
                            sx={{ p: 2 }} // remove alignSelf
                        >
                            <SendOutlined />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </MainCard>
    );
}
