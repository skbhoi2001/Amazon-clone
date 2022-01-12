import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  InputBase,
  FormControl,
  Select,
  Menu,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
// import Button from '@mui/material/Button';
import ButtonGroup from "@mui/material/ButtonGroup"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import ClickAwayListener from "@mui/material/ClickAwayListener"
import Grow from "@mui/material/Grow"
import Paper from "@mui/material/Paper"
import Popper from "@mui/material/Popper"
// import MenuItem from '@mui/material/MenuItem';
import MenuList from "@mui/material/MenuList"
import React, { useState, useEffect } from "react"
import { Link as RouterLink } from "react-router-dom"
import SimpleDialogDemo from "./Location"
import SearchBar from "./SearchBar"

const isAuthTrue = [
  {
    label: "Log Out",
    href: "/logout",
  },
  {
    label: "Returns/order",
    href: "/order",
  },
]
const isAuthFalse = [
  {
    label: "Listings",
    href: "/listings",
  },
  {
    label: "Log In",
    href: "/login",
  },
  {
    label: "Mentors",
    href: "/mentors",
  },
]

const useStyles = makeStyles(() => ({
  header: {
    "backgroundColor": "black",
    // paddingRight: "79px",
    // paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}))
const options = [
  "All",
  "Alexa Devices",
  "Amazon Fashion",
  "Applience",
  "Apps & games",
  "Baby",
  "Beauty",
  "Books",
]
export default function Navbar() {
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles()
  const [isAuth, setIsAuth] = useState(true)
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)
  const [selectedIndex, setSelectedIndex] = React.useState(1)

  const [anchorEl, setAnchorEl] = React.useState(null)
  const openD = Boolean(anchorEl)
  const handleOpen = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleX = () => {
    setAnchorEl(null)
  }
  // const handleClick = () => {
  //   console.info(`You clicked ${options[selectedIndex]}`);
  // };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index)
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  })

  const { mobileView, drawerOpen } = state

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState(prevState => ({ ...prevState, mobileView: true }))
        : setState(prevState => ({ ...prevState, mobileView: false }))
    }

    setResponsiveness()

    window.addEventListener("resize", () => setResponsiveness())

    return () => {
      window.removeEventListener("resize", () => setResponsiveness())
    }
  }, [])
  const handleClick = () => {
    alert("sfdxgvfs")
  }
  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {Amazonlogo}
        <div>
          <SimpleDialogDemo />
        </div>
        <div style={{ background: "white", display: "flex" }}>
          <ButtonGroup
            variant="contained"
            ref={anchorRef}
            aria-label="split button"
          >
            {/* <Button onClick={handleClick}>{options[selectedIndex]}</Button> */}
            <Button
              size="small"
              aria-controls={open ? "split-button-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-label="select merge strategy"
              aria-haspopup="menu"
              onClick={handleToggle}
            >
              {options[selectedIndex]}
              <ArrowDropDownIcon />
            </Button>
          </ButtonGroup>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList id="split-button-menu">
                      {options.map((option, index) => (
                        <MenuItem
                          key={option}
                          selected={index === selectedIndex}
                          onClick={event => handleMenuItemClick(event, index)}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
          {/* <InputBase style={{ 'color': "black",width:"500px",fontSize:"20px",padding:"5px" }} placeholder="Search..." />
            <SearchIcon onClick={handleClick} style={{ 'color': "black",padding:"10px 5px 5px 5px"}}/> */}
          <SearchBar />
        </div>
        <div>{getMenuButtons()}</div>
        <div>
          <Button
            style={{ color: "white" }}
            id="basic-button"
            aria-controls={openD ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openD ? "true" : undefined}
            onClick={handleOpen}
          >
            <h3>Account</h3>
          </Button>
          <Menu
            style={{ marginTop: "50px" }}
            id="basic-menu"
            anchorEl={anchorEl}
            open={openD}
            onClose={handleX}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <div style={{ display: "flex" }}>
              <div>
                <MenuItem onClick={handleX}>Profile</MenuItem>
                <MenuItem onClick={handleX}>My account</MenuItem>
                <MenuItem onClick={handleX}>Logout</MenuItem>
              </div>
              <div>
                <MenuItem onClick={handleX}>Profile</MenuItem>
                <MenuItem onClick={handleX}>My account</MenuItem>
                <MenuItem onClick={handleX}>Logout</MenuItem>
              </div>
            </div>
          </Menu>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ShoppingCartIcon />
          Count
        </div>
      </Toolbar>
    )
  }

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState(prevState => ({ ...prevState, drawerOpen: true }))
    const handleDrawerClose = () =>
      setState(prevState => ({ ...prevState, drawerOpen: false }))

    return (
      <Toolbar>
        <IconButton
          {...{
            "edge": "start",
            "color": "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            "onClick": handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
        <div style={{ margin: "auto" }}>{Amazonlogo}</div>
      </Toolbar>
    )
  }

  const getDrawerChoices = () => {
    return isAuth
      ? isAuthTrue.map(({ label, href }) => {
          return (
            <Link
              {...{
                component: RouterLink,
                to: href,
                color: "inherit",
                style: { textDecoration: "none" },
                key: label,
              }}
            >
              <MenuItem>{label}</MenuItem>
            </Link>
          )
        })
      : isAuthFalse.map(({ label, href }) => {
          return (
            <Link
              {...{
                component: RouterLink,
                to: href,
                color: "inherit",
                style: { textDecoration: "none" },
                key: label,
              }}
            >
              <MenuItem>{label}</MenuItem>
            </Link>
          )
        })
  }

  const Amazonlogo = (
    <Typography variant="h6" component="h1" className={logo}>
      <img
        style={{ width: "100px", height: "30px" }}
        src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/large-images-amazon-png-logo-vector-7.png3ft3d1416935166817"
        alt="img"
      />
    </Typography>
  )

  const getMenuButtons = () => {
    return isAuth
      ? isAuthTrue.map(({ label, href }) => {
          return (
            <Button
              {...{
                key: label,
                color: "inherit",
                to: href,
                component: RouterLink,
                className: menuButton,
              }}
            >
              {label}
            </Button>
          )
        })
      : isAuthFalse.map(({ label, href }) => {
          return (
            <Button
              {...{
                key: label,
                color: "inherit",
                to: href,
                component: RouterLink,
                className: menuButton,
              }}
            >
              {label}
            </Button>
          )
        })
  }

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  )
}
