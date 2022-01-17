import React, { useState, useEffect } from "react"
import ReactDom from "react-dom"
import "./signup.css"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { Container } from "@mui/material"
import Box from "@mui/material/Box"
import { Input } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { border, textAlign, width, color } from "@mui/system"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import { orange, brown } from "@mui/material/colors"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import axios from "axios"
import { Link, NavLink } from "react-router-dom"

const { palette } = createTheme()
const theme = createTheme({
  palette: {
    primary: {
      main: "#f2cb69",
      contrastText: "#212121",
    },
  },
})

const useStyles = makeStyles({
  root: {
    display: "flex",
    textAlign: "left",
    flexDirection: "column",
    margin: "0 auto 1rem auto",
  },

  main: {
    border: "1px ridge #D3D3D3",
    margin: "3.4rem auto 1.8rem auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  disp: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "1rem",
  },
  select: {
    height: 27,
    marginRight: "1rem",
  },
  button: {
    width: "97%",
    height: "29px",
    color: "black",
    fontSize: "0.7rem",
    margin: "auto",
  },
})
const countries = [
  {
    value: "US",
    label: "+1",
  },
  {
    value: "UK",
    label: "+44",
  },
  {
    value: "SA",
    label: "+27",
  },
  {
    value: "IND",
    label: "+91",
  },
  {
    value: "AF",
    label: "+93",
  },
  {
    value: "PAK",
    label: "+92",
  },
  {
    value: "AUS",
    label: "+61",
  },
  {
    value: "ZIM",
    label: "+263",
  },
]
var height = 27
function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [password, setPassword] = useState("")
  const [code, setCode] = useState("+91")
  const classes = useStyles()

  const handlePost = () => {
    if (!name || !email || !mobile || !password) {
      alert("Please provide input")
      return
    }
    const payload = {
      email: email,
      name: name,
      mobile: `${code} ${mobile}`,
      password: password,
    }
    const config = {
      url: "http://localhost:3004/data",
      method: "post",
      data: payload,
    }

    return axios(config)
  }

  return (
    <>
      <Container maxWidth="xs" className={classes.main} sx={{ width: "26%" }}>
        <h2
          style={{
            textAlign: "left",
            fontSize: "1.5rem",
            color: "000000",
            fontWeight: "500",
          }}
        >
          Create Account
        </h2>
        <Box className={classes.root}>
          <label
            style={{
              display: "block",
              fontStyle: "bold",
              marginBottom: "4px",
              fontWeight: "bolder",
              fontSize: "0.8rem",
            }}
          >
            Your name
          </label>
          <TextField
            color="warning"
            value={name}
            onChange={e => setName(e.target.value)}
            inputProps={{
              style: {
                height,
                padding: "0 14px",
              },
            }}
          />
        </Box>
        <label
          style={{
            display: "block",
            textAlign: "start",
            margin: "auto auto 0.5rem 0",
            fontWeight: "bolder",
            fontSize: "0.8rem",
          }}
          for="sel"
        >
          Mobile number
        </label>

        <Box className={classes.disp}>
          <Select
            color="warning"
            id="sel"
            value={code}
            onChange={e => setCode(e.target.value)}
            className={classes.select}
            size="small"
            style={{ fontSize: "0.8rem", backgroundColor: "#e7e9ec" }}
          >
            {countries.map(option => (
              <MenuItem
                key={option.value}
                value={option.label}
                style={{ fontSize: "0.8rem" }}
              >
                {option.value} {option.label}
              </MenuItem>
            ))}
          </Select>

          <TextField
            color="warning"
            placeholder="Mobile number"
            type="tel"
            
            inputProps={{
              style: {
                height: 27,
                padding: "1px 24px",
                width: "170",
                fontSize: "0.8rem",
              },
            }}
            value={mobile}
            onChange={e => setMobile(e.target.value)}
          />
        </Box>
        <Box className={classes.root}>
          <label
            style={{
              display: "block",
              fontWeight: "bolder",
              marginBottom: "4px",
              fontSize: "0.8rem",
            }}
          >
            Email
          </label>
          <TextField
            color="warning"
            type="email"
            inputProps={{
              style: {
                height,
                padding: "0 12px",
              },
            }}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Box>
        <Box className={classes.root}>
          <label
            style={{
              display: "block",
              fontWeight: "bolder",
              marginBottom: "4px",
              fontSize: "0.8rem",
            }}
          >
            Password
          </label>
          <TextField
            type="password"
            color="warning"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="At least 6 characters"
            helperText="Passwords must be at least 6 characters."
            inputProps={{
              style: {
                height,
                padding: "1px 17px",
                fontSize: "0.8rem",
              },
            }}
          />
        </Box>
        <Box>
          <div
            style={{
              color: "#756c6a",
              textAlign: "start",
              fontSize: "0.7rem",
              fontWeight: "500",
              width: "87%",
              lineHeight: "18px",
              margin: "auto 0 1.2rem 0.3rem",
            }}
          >
            We will send you a text to verify your phone. Message and Data rates
            may apply.
          </div>
        </Box>

        <NavLink to="/login">
          <ThemeProvider theme={theme}>
            <Box mx={"auto"}>
              <Button
                variant="contained"
                className={classes.button}
                style={{ textTransform: "none" }}
                onClick={handlePost}
              >
                Continue
              </Button>
            </Box>
          </ThemeProvider>
        </NavLink>
        <Box>
          <div
            style={{
              color: "#756c6a",
              textAlign: "start",
              fontSize: "0.7rem",
              fontWeight: "500",
              width: "15rem",
              lineHeight: "18px",
              margin: "2rem 0 0 0.3rem",
            }}
          >
            Already have an account ?{" "}
            <Link to={'./login'}><a href="#" style={{ textDecoration: "none" }}>
              Sign in
            </a></Link>{" "}
          </div>
        </Box>
        <Box>
          <div
            style={{
              color: "#756c6a",
              textAlign: "start",
              fontSize: "0.7rem",
              fontWeight: "500",
              width: "18rem",
              lineHeight: "18px",
              margin: "0 0 1rem 0.3rem",
            }}
          >
            Buying for work?{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Create a free business account
            </a>{" "}
          </div>
        </Box>
      </Container>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "16%",
          margin: "auto",
        }}
      >
        <a
          className="helpBar"
          href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=200545940"
          target="_blank"
        >
          {" "}
          Conditions of Use
        </a>
        <a
          className="helpBar"
          href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=200534380"
          target="_blank"
        >
          {" "}
          Privacy Notice{" "}
        </a>
        <a
          className="helpBar"
          href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=508510"
          target="_blank"
        >
          {" "}
          Help{" "}
        </a>
      </Box>
      <div
        style={{ fontSize: "0.7rem", margin: "0.7rem", textAlign: "center" }}
      >
        © 1996-2022, Amazon.com, Inc. or its affiliates
      </div>
    </>
  )
}
export { Signup }
