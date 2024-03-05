import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: 'black',
  color: 'white', 
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor: 'black',
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Admin() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              color:'blue',
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ color: 'white' }}>
            JobLink Express - Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon sx={{ color: 'blue' }} /> : <ChevronLeftIcon sx={{ color: 'white' }} />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon sx={{ color: 'blue' }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" sx={{ color: 'white' }} /> 
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <WorkIcon sx={{ color: 'blue' }} />
            </ListItemIcon>
            <ListItemText primary="Jobs" sx={{ color: 'white' }} /> 
          </ListItemButton>
          <ListItemButton>
          <ListItemButton component={Link} to="/logout">
            <ListItemIcon>
              <ExitToAppIcon sx={{ color: 'blue' }} />
              </ListItemIcon>
              <ListItemText primary="Log out" sx={{ color: 'white' }} /> 
            </ListItemButton>
          </ListItemButton>
        </List>
        {/* more sidebar icons*/}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Avatar
            src="https://cdn-icons-png.flaticon.com/512/2206/2206368.png"
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 2, width: '60px', height: '60px' }}
          />
          <Typography variant="h6" noWrap sx={{ color: 'black' }}>Welcome, Admin</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item x={6}>
            <img src="src\assets\images\jobss.png" />
          </Grid>
          <Grid item x={6}>
            <img src="src\assets\images\jobs2.png" alt="image_2" />
          </Grid> 
        </Grid>
        {/* display */}
      </Box>
    </Box>
  );
}