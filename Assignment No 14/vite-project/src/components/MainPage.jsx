import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box, CssBaseline, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Icon for Products
import PeopleIcon from '@mui/icons-material/People'; // Icon for Users
import GitHubIcon from '@mui/icons-material/GitHub'; // Icon for GitHub
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#0d47a1',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
});

const DrawerContainer = styled(Box)({
  width: 280,
  backgroundColor: '#f4f6f8',
  height: '100%',
  padding: '16px 0',
});

const MainPage = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const menuItems = [
    { label: 'Products', to: '/products', icon: <ShoppingCartIcon /> },
    { label: 'Users', to: '/users', icon: <PeopleIcon /> },
    { label: 'GitHub User Finder', to: '/github', icon: <GitHubIcon /> },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <StyledAppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Dashboard
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <DrawerContainer role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <Typography variant="h6" sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold', color: '#0d47a1' }}>
            Navigation
          </Typography>
          <Divider />
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index} component={Link} to={item.to} sx={{ '&:hover': { backgroundColor: '#e3f2fd' } }}>
                <IconButton edge="start" color="inherit" aria-label={item.label} sx={{ mr: 2 }}>
                  {item.icon}
                </IconButton>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </DrawerContainer>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#0d47a1' }}>
          Welcome to the Dashboard
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Use the menu to navigate through sections
        </Typography>
      </Box>
    </Box>
  );
};

export default MainPage;
