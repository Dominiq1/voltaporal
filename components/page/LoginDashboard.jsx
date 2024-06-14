import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, CssBaseline, Paper } from '@mui/material';
import { useRouter } from 'next/router';

const LoginDashboard = () => {
    const [username, setUsername] = useState('');
    const [id, setId] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        if (username && id) {
            router.push(`/?id=${id}`);
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 4,
                    mt: 8,
                    backgroundImage: 'url("https://source.unsplash.com/random/house")',
                    backgroundSize: 'cover',
                    color: '#ffffff'
                }}
            >
                <Typography component="h1" variant="h5" sx={{ color: '#fff' }}>
                    Homeowner Portal Sign In
                </Typography>
                <Box sx={{ mt: 3 }}>
                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        InputProps={{
                            style: { color: 'black' },
                        }}
                        sx={{
                            input: {
                                color: '#333',
                                backgroundColor: '#fff',
                                borderRadius: '5px',
                            },
                            '& .MuiFilledInput-underline:before': {
                                borderBottomColor: 'transparent',
                            },
                            '& .MuiFilledInput-underline:hover:before': {
                                borderBottomColor: 'transparent',
                            },
                            '& .MuiFilledInput-underline:after': {
                                borderBottomColor: 'transparent',
                            },
                        }}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        name="id"
                        label="ID"
                        type="text"
                        id="id"
                        InputProps={{
                            style: { color: 'black' },
                        }}
                        sx={{
                            input: {
                                color: '#333',
                                backgroundColor: '#fff',
                                borderRadius: '5px',
                            },
                            '& .MuiFilledInput-underline:before': {
                                borderBottomColor: 'transparent',
                            },
                            '& .MuiFilledInput-underline:hover:before': {
                                borderBottomColor: 'transparent',
                            },
                            '& .MuiFilledInput-underline:after': {
                                borderBottomColor: 'transparent',
                            },
                        }}
                        autoComplete="off"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.dark' } }}
                        onClick={handleLogin}
                    >
                        Sign In
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default LoginDashboard;
