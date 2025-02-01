import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Card, CardContent, Avatar, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';

const GitHubUserFinder = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchUserData = async () => {
    if (!username) {
      setError('Please enter a GitHub username.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('User not found');
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      setError('User not found. Please check the username and try again.');
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
        color: '#fff',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          py: 8,
          maxWidth: '600px', // This will keep the content centered and limit width
          width: '100%',
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          GitHub User Finder
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 4, textAlign: 'center' }}>
          Search for any GitHub user by their username
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mb: 4,
            width: '100%',
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              '& .MuiOutlinedInput-root': {
                color: '#fff',
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                },
              },
            }}
          />
          <Button
            variant="contained"
            onClick={fetchUserData}
            disabled={loading}
            sx={{
              backgroundColor: '#fff',
              color: '#6a11cb',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            {loading ? <CircularProgress size={24} /> : 'Search'}
          </Button>
        </Box>
        {error && (
          <Typography variant="body1" color="error" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}
        {userData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '24px',
                width: '100%',
                textAlign: 'center',
              }}
            >
              <CardContent>
                <Avatar
                  src={userData.avatar_url}
                  alt={userData.name}
                  sx={{
                    width: '120px',
                    height: '120px',
                    margin: '0 auto 16px',
                    border: '4px solid #fff',
                  }}
                />
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {userData.name || userData.login}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.8)' }}>
                  {userData.bio || 'No bio available'}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 3,
                    mt: 2,
                  }}
                >
                  <Box>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                      Followers
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {userData.followers}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                      Following
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {userData.following}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                      Repos
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {userData.public_repos}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </Container>
    </Box>
  );
};

export default GitHubUserFinder;
