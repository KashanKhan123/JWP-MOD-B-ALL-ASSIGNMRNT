import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Product 1', description: 'This is product 1', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D', price: '$10' },
  { id: 2, name: 'Product 2', description: 'This is product 2', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D', price: '$20' },
  { id: 3, name: 'Product 3', description: 'This is product 3', image: 'https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D', price: '$30' },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="400"
                  image={product.image}
                  alt={product.name}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="h5" color="text.secondary" gutterBottom>
                {product.price}
              </Typography>
              <Typography variant="body1" paragraph>
                {product.description}
              </Typography>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </Container>
  );
};

export default ProductDetail;