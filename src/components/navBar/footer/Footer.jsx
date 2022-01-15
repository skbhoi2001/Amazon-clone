import { height } from "@mui/system"
import React from "react"
import { useState, useRef, useEffect } from "react"

import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import axios from "axios"
const countries = [
  "Australia",
  "Brazil",
  "Canada",
  "China",
  "Germany",
  "Italy",
  "Japan",
  "Mexico",
  "Netherlands",
  "Poland",
  "Singapore",
  "Spain",
  "Turkey",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
]
export default function Footer() {
  const [lang, setLang] = useState("English")
  const ref = useRef(null)

  return (
    <div className="App">
      <div
        ref={ref}
        style={{
          maxHeight: "50rem",

          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "38rem",
            marginTop: "30px",
            background: "#232f3e",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "80%",
              margin: "0 auto",
              height: "20rem",
            }}
          >
            <ul
              style={{
                color: "white",
                display: "flex",
                flexDirection: "column",
                height: "7rem",
                gap: "0.7rem",
                textAlign: "left",
                listStyleType: "none",
              }}
            >
              <li>
                <h3 style={{ marginBottom: "0" }}>Get to know us</h3>
              </li>
              <li style={{ color: "#d2c2ac", fontSize: "0.9rem" }}>About</li>
              <li style={{ color: "#d2c2ac", fontSize: "0.9rem" }}>Careers</li>
              <li style={{ color: "#d2c2ac", fontSize: "0.9rem" }}>
                Press Releases
              </li>
              <li style={{ color: "#d2c2ac", fontSize: "0.9rem" }}>
                Amazon Cares
              </li>
              <li style={{ color: "#d2c2ac", fontSize: "0.9rem" }}>
                Gift a Smile
              </li>
            </ul>
            <ul
              style={{
                color: "white",
                display: "flex",
                flexDirection: "column",
                height: "7rem",
                gap: "0.7rem",
                textAlign: "left",
                listStyleType: "none",
              }}
            >
              <li>
                <h3 style={{ marginBottom: "0" }}>Connect with Us</h3>
              </li>
              <li style={{ color: "#d2c2ac", fontSize: "0.9rem" }}>Facebook</li>
              <li style={{ color: "#d2c2ac", fontSize: "0.9rem" }}>Twitter</li>
              <li style={{ color: "#d2c2ac", fontSize: "0.9rem" }}>
                Instagram
              </li>
            </ul>
            <ul
              style={{
                color: "white",
                display: "flex",
                flexDirection: "column",
                height: "7rem",
                gap: "0.7rem",
                textAlign: "left",
                listStyleType: "none",
              }}
            >
              <li>
                <h3 style={{ marginBottom: "0" }}>Make money with us</h3>
              </li>
              <li style={{ color: "#d2c2ac", fontSize: "0.9rem" }}>
                Sell on Amazon
              </li>
              <li style={{ color: "#d2c2ac", fontSize: "0.9rem" }}>
                Sell under Amazon Accelerator
              </li>
              <li style={{ color: "#d2c2ac", fontSize: "0.9rem" }}>
                Amazon Global Selling
              </li>
              <li style={{ color: "#d2c2ac", fontSize: "0.9rem" }}>
                Become an Affiliate
              </li>
              <li style={{ color: "#d2c2ac", fontSize: "0.9rem" }}>
                Fulfilment by Amazon
              </li>
              <li style={{ color: "#d2c2ac", fontSize: "0.9rem" }}>
                Advertise Your Products
              </li>
              <li style={{ color: "#d2c2ac", fontSize: "0.9rem" }}>
                Amazon Pay on Merchants
              </li>
            </ul>
            <ul
              style={{
                color: "white",
                display: "flex",
                flexDirection: "column",
                height: "7rem",
                gap: "0.7rem",
                textAlign: "left",
                listStyleType: "none",
              }}
            >
              <li>
                <h3 style={{ marginBottom: "0" }}>Let Us Help You</h3>
              </li>
              <li style={{ color: "#d2c2ac", fontSize: "0.9rem" }}>
                COVID-19 and Amazon
              </li>
              <li style={{ color: "#d2c2ac", fontSize: "0.9rem" }}>
                Your Account
              </li>
              <li style={{ color: "#d2c2ac", fontSize: "0.9rem" }}>
                Returns Centre
              </li>
              <li style={{ color: "#d2c2ac", fontSize: "0.9rem" }}>
                100% Purchase Protection
              </li>
              <li style={{ color: "#d2c2ac", fontSize: "0.9rem" }}>
                Amazon App Download
              </li>
              <li style={{ color: "#d2c2ac", fontSize: "0.9rem" }}>
                Amazon Assistant Download
              </li>
              <li style={{ color: "#d2c2ac", fontSize: "0.9rem" }}>Help</li>
            </ul>
          </div>

          <div
            style={{
              width: "100%",
              height: "0.9px",
              background: "#37475a",
              marginBottom: "1rem",
            }}
          ></div>
          <div
            style={{
              width: "20%",
              margin: " 0 auto 1.2rem auto",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <img
              src="https://github.com/swethav08711/Amazon-clone/blob/authentication/src/Components/Authentication/amazon_white.png?raw=true"
              style={{ width: "7rem" }}
              alt=""
            />
            <Select
              size="small"
              value={lang}
              onChange={e => setLang(e.target.value)}
              style={{
                height: "40px",
                marginTop: "0.6rem",
                color: "#d2c2ac",
                border: "1px solid #d2c2ac",
              }}
            >
              <MenuItem value={"English"}> English </MenuItem>
              <MenuItem key={"0"} value={"Hindi"}>
                {" "}
                Hindi{" "}
              </MenuItem>
              <MenuItem key={"1"} value={"Bangle"}>
                {" "}
                Bangla{" "}
              </MenuItem>
              <MenuItem key={"2"} value={"Marathi"}>
                {" "}
                Marathi{" "}
              </MenuItem>
              <MenuItem key={"3"} value={"Gujarati"}>
                {" "}
                Gujarati{" "}
              </MenuItem>
              <MenuItem key={"3"} value={"Gujarati"}>
                {" "}
                Tamil{" "}
              </MenuItem>
              <MenuItem key={"3"} value={"Gujarati"}>
                {" "}
                Telugu{" "}
              </MenuItem>
            </Select>
          </div>
          <div style={{ marginBottom: "1.3rem" }}>
            <ul
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#d2c2ac",
                fontSize: "0.8rem",
                width: "80%",
                listStyleType: "none",
                margin: "auto",
              }}
            >
              {countries.map(country => {
                return <li>{country}</li>
              })}
            </ul>
          </div>
          <div
            style={{
              background: "#131a22",
              width: "100%",
              margin: "auto",
              paddingBottom: "1.4rem",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "75%",
                margin: "auto",
                justifyContent: "space-between",
              }}
            >
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  gap: "0.2rem",
                  color: "#d2c2ac",
                  flexDirection: "column",
                  fontSize: "0.6rem",
                  textAlign: "left",
                  marginBottom: "1rem",
                }}
              >
                <li style={{ color: "white", fontSize: "0.8rem" }}>AbeBooks</li>
                <li>Books, art</li>
                <li>collectibles</li>
              </ul>
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  gap: "0.2rem",
                  color: "#d2c2ac",
                  flexDirection: "column",
                  fontSize: "0.6rem",
                  textAlign: "left",
                }}
              >
                <li style={{ color: "white", fontSize: "0.8rem" }}>
                  Amazon Web Services
                </li>
                <li>Scalable Cloud</li>
                <li>Computing Services</li>
              </ul>
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  gap: "0.2rem",
                  color: "#d2c2ac",
                  flexDirection: "column",
                  fontSize: "0.6rem",
                  textAlign: "left",
                }}
              >
                <li style={{ color: "white", fontSize: "0.8rem" }}>Audible</li>
                <li>Download</li>
                <li>Audio Books</li>
              </ul>
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  gap: "0.2rem",
                  color: "#d2c2ac",
                  flexDirection: "column",
                  fontSize: "0.6rem",
                  textAlign: "left",
                }}
              >
                <li style={{ color: "white", fontSize: "0.8rem" }}>
                  {" "}
                  DPReview
                </li>
                <li>Digital</li>
                <li>Photography</li>
              </ul>
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  gap: "0.2rem",
                  color: "#d2c2ac",
                  flexDirection: "column",
                  fontSize: "0.6rem",
                  textAlign: "left",
                }}
              >
                <li style={{ color: "white", fontSize: "0.8rem" }}>IMDb</li>
                <li>Movies, TV</li>
                <li>Celebrities</li>
              </ul>
            </div>
            <div
              style={{
                display: "flex",
                width: "75%",
                margin: "auto",
                justifyContent: "space-between",
              }}
            >
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  gap: "0.2rem",
                  color: "#d2c2ac",
                  flexDirection: "column",
                  fontSize: "0.6rem",
                  textAlign: "left",
                  marginBottom: "1rem",
                }}
              >
                <li style={{ color: "white", fontSize: "0.8rem" }}>Shopbop</li>
                <li>Designer</li>
                <li>Fashion Brands</li>
              </ul>
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  gap: "0.2rem",
                  color: "#d2c2ac",
                  flexDirection: "column",
                  fontSize: "0.6rem",
                  textAlign: "left",
                }}
              >
                <li style={{ color: "white", fontSize: "0.8rem" }}>
                  Prime Now
                </li>
                <li>2-Hour Delivery</li>
                <li>on Everyday Items</li>
              </ul>
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  gap: "0.2rem",
                  color: "#d2c2ac",
                  flexDirection: "column",
                  fontSize: "0.6rem",
                  textAlign: "left",
                }}
              >
                <li style={{ color: "white", fontSize: "0.8rem" }}>
                  {" "}
                  Amazon Prime Music
                </li>
                <li>75 million songs, ad-free</li>
                <li>Audio Books</li>
              </ul>
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  gap: "0.2rem",
                  color: "#d2c2ac",
                  flexDirection: "column",
                  fontSize: "0.6rem",
                  textAlign: "left",
                }}
              >
                <li style={{ color: "white", fontSize: "0.8rem" }}>
                  {" "}
                  DPReview
                </li>
                <li>Digital</li>
                <li>Photography</li>
              </ul>
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  gap: "0.2rem",
                  color: "#d2c2ac",
                  flexDirection: "column",
                  fontSize: "0.6rem",
                  textAlign: "left",
                }}
              >
                <li style={{ color: "white", fontSize: "0.8rem" }}>IMDb</li>
                <li>Movies, TV</li>
                <li>Celebrities</li>
              </ul>
            </div>
            <div>
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#d2c2ac",
                  width: "50%",
                  margin: "1.6rem auto 1.8rem auto",
                  fontSize: "0.8rem",
                }}
              >
                <li>Conditions of Use & Sale</li>
                <li>Privacy policy</li>
                <li>Interest-Based Ads</li>
                <li>© 1996-2022, Amazon.com, Inc. or its affiliates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
