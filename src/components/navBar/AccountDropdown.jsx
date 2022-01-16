import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom"

export default function PositionedMenu({handleSignout}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOut = () =>{
      handleSignout()
  }
  return (
    <div>
      <span
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Account & List
      </span>
      <Menu
        style={{marginTop:"40px"}}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div style={{display:"flex",gap:"50px"}}>
            <div className="ccount_dropdown">
                <MenuItem ><h4>Your List</h4></MenuItem>
                <MenuItem ><span>Create a Wish List</span></MenuItem>
                <MenuItem ><span>Wish from any Account</span></MenuItem>
                <MenuItem ><span>Baby Your Style</span></MenuItem>
                <MenuItem ><span>Discover Your Style</span></MenuItem>
                <MenuItem ><span>Explore Showroom</span></MenuItem>
            </div>
            <div>
                <MenuItem><h4>Your Account</h4></MenuItem>
                <MenuItem><span> <Link to="./Account">Account</Link></span></MenuItem>
                <MenuItem><span><Link to="./order">Order</Link></span></MenuItem>
                <MenuItem><span>Prive Video</span></MenuItem>
                <MenuItem><span>Seller Account</span></MenuItem>
                <MenuItem><span>Subscribe</span></MenuItem>
                <MenuItem><span>Manage Device</span></MenuItem>
                <MenuItem><span>Switch Account</span></MenuItem>
                <br />
                <Link to={'./signup'}><MenuItem><span>Signout</span></MenuItem></Link>
            </div>
        </div>
      </Menu>
    </div>
  );
}