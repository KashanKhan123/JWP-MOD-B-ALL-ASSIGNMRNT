import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Grid, Card, CardContent, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user details from JSONPlaceholder API
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (!user) {
    return <Typography variant="h6">User not found</Typography>;
  }

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Typography variant="h3" gutterBottom>
            {user.name}
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Contact Information
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Email:</strong> {user.email}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Phone:</strong> {user.phone}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Website:</strong> {user.website}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Address
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Street:</strong> {user.address.street}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Suite:</strong> {user.address.suite}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>City:</strong> {user.address.city}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Zipcode:</strong> {user.address.zipcode}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </Container>
  );
};

export default UserDetail;