import React from 'react';
import { AppBar ,Toolbar , IconButton , Button }from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

function Navbar() {
    return (
        <div className="navbar">
            <AppBar position="static">
  <Toolbar>
    <IconButton edge="start"  color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Button color="inherit">Live Score </Button>
  </Toolbar>
</AppBar>
        </div>
    )
}

export default Navbar
