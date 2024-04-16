import React, {useState} from 'react';
import {IconButton, Menu, MenuItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const IconBar = () => {
    const [anchor, setAnchor] = useState(null);

    const handleClick = (event) =>{
        setAnchor(event.currentTarget);
    };

    const handleClose = () => {
        setAnchor(null);
    }
  return (
    <div>
        <IconButton
            onclick={handleClick}
            aria-controls="menu"
            aria-haspopup="true"
            ><MenuIcon />
            </IconButton>
        <Menu
        id="menu"
        anchor={anchor}
        open={Boolean(anchor)}
        onClose={handleClose}>
            <MenuItem onclick={handleClose}>Edit</MenuItem>
            <MenuItem onclick={handleClose}>Delete</MenuItem>
        </Menu>
    </div>
  )
}

export default IconBar;
