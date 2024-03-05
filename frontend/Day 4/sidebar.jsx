import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DescriptionIcon from '@mui/icons-material/Description';

export default function Sidebar() {

  return (
    <div>
      <Drawer variant="permanent" sx={{ width: '240px', flexShrink: 0 }}>
        <List>
          <ListItem>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Your Profile" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Bio" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
