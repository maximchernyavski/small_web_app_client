import React from 'react'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import RemoveIcon from '@mui/icons-material/Remove';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import './admin_drawer.css'

function AdminDrawer() {
    const navigate = useNavigate()

    const handleRegisterUserClick = () => {
        
    }

    const handleManageUsersClick = () => {

    }

    const handleAddPostClick = () => {

    }

    const handleManagePostsClick = () => {

    }

    const handleStatsClick = () => {

    }

    const handleBackClick = () => {
        navigate("/blog", {replace: true})
    }

  const DrawerList = (
    <Box sx={{ width: 250}}>
      <List>
          <ListItem key='Register User' disablePadding className='drawer_item'>
            <ListItemButton onClick={handleRegisterUserClick}>
              <ListItemIcon><PersonAddIcon className='drawer_icon'/></ListItemIcon>
              <ListItemText primary='Register User' />
            </ListItemButton>
          </ListItem>

          <ListItem key='Manage Users' disablePadding className='drawer_item'>
            <ListItemButton onClick={handleManageUsersClick}>
              <ListItemIcon><ManageAccountsIcon className='drawer_icon'/></ListItemIcon>
              <ListItemText primary='Manage Users' />
            </ListItemButton>
          </ListItem>

          <ListItem key='Add Post' disablePadding className='drawer_item'>
            <ListItemButton onClick={handleAddPostClick}>
              <ListItemIcon><AddIcon className='drawer_icon'/></ListItemIcon>
              <ListItemText primary='Add Post' />
            </ListItemButton>
          </ListItem>

          <ListItem key='Manage Posts' disablePadding className='drawer_item'>
            <ListItemButton onClick={handleManagePostsClick}>
              <ListItemIcon><EditIcon className='drawer_icon'/></ListItemIcon>
              <ListItemText primary='Manage Posts' />
            </ListItemButton>
          </ListItem>

          <ListItem key='Get stats' disablePadding className='drawer_item'>
            <ListItemButton onClick={handleStatsClick}>
              <ListItemIcon><QueryStatsIcon className='drawer_icon'/></ListItemIcon>
              <ListItemText primary='Get stats' />
            </ListItemButton>
          </ListItem>

          <ListItem key='Back' disablePadding className='drawer_item'>
            <ListItemButton onClick={handleBackClick}>
              <ListItemIcon><FirstPageIcon className='drawer_icon'/></ListItemIcon>
              <ListItemText primary='Back' />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer variant='permanent' PaperProps={{
        sx: {
            backgroundColor: "#734FCF",
            color: "#F7ECE1",
        }
        }}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default AdminDrawer