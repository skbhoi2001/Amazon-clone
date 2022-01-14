import React, { useState, useEffect } from "react"
import ReactDom from "react-dom"

import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { Container } from "@mui/material"
import Box from "@mui/material/Box"
// import { Input } from '@mui/material';
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
    margin: "3.4rem auto 0rem auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "17rem",
  },
  disp: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "1rem",
  },
  button: {
    width: "100%",
    height: "29px",
    color: "black",
    fontSize: "0.7rem",
    margin: "auto",
  },
})

var height = 27
export default function Login() {
  const [detail, setDetail] = useState("")
  // const [paths, setPaths] = useState("/Login")
  const classes = useStyles()

  const handleGet = () => {
    axios.get("http://localhost:8000/data").then(resp => {
      if (resp.data[0].email !== detail) {
        alert("Please register first")
        return
      }
    })
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
          Sign - in
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
            Email or mobile phone number
          </label>
          <TextField
            color="warning"
            value={detail}
            onChange={e => setDetail(e.target.value)}
            inputProps={{
              style: {
                height,
                padding: "0 14px",
              },
            }}
          />
        </Box>
        <NavLink to="/">
          <ThemeProvider theme={theme}>
            <Box mx={"auto"}>
              <Button
                variant="contained"
                className={classes.button}
                style={{ textTransform: "none" }}
                onClick={handleGet}
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
              width: "17rem",
              lineHeight: "18px",
              margin: "1rem 0 0 0.3rem",
            }}
          >
            By continuing, you agree to Amazon's{" "}
            <a href="#" style={{ textDecoration: "none", color: "blue" }}>
              Conditions of Use{" "}
            </a>{" "}
            and{" "}
            <a href="#" style={{ textDecoration: "none", color: "blue" }}>
              Privacy Notice.{" "}
            </a>{" "}
          </div>
        </Box>
        <Box style={{ textAlign: "start", margin: "1rem 0.2rem" }}>
          <a
            href="#"
            style={{
              textDecoration: "none",
              fontSize: "0.7rem",
              color: "blue",
              fontWeight: "500",
            }}
          >
            Need help ?
          </a>
        </Box>
      </Container>
      <div
        style={{
          height: "0.1rem",
          width: "27%",
          display: "flex",
          gap: "0",
          margin: "1.3rem auto 1rem auto",
          fontSize: "0.7rem",
          color: "grey",
        }}
      >
        <hr
          style={{
            color: "#000000",
            width: "37%",
            textAlign: "start",
            borderBottom: "1px solid #fff",
            marginTop: "0.5rem",
            opacity: "30%",
          }}
        />
        <span style={{}}>New to Amazon?</span>
        <hr
          style={{
            color: "#000000",
            width: "37%",
            textAlign: "start",
            borderBottom: "1px solid #fff",
            marginTop: "0.5rem",
            opacity: "30%",
          }}
        />
      </div>
      <NavLink to="/signup">
        <Box
          mx={"auto"}
          style={{
            margin: "1.7rem auto 2rem auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            style={{
              textTransform: "none",
              width: "26%",
              height: "29px",
              backgroundColor: "#ebecef",
              color: "black",
            }}
          >
            Create your amazon account
          </Button>
        </Box>
      </NavLink>
      <hr className="hr" />
      <Box className="conditionsBottom">
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
