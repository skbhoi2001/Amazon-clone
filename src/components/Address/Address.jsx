import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../navBar/NavBar'
import './Address.css'
import AddressMain from './AddressMain'


function Address() {
  return (
    <>
    <NavBar/>
    {/* <h2 style={{width:"80%",margin:"auto"}}>Address</h2> */}
    <AddressMain/>
    </>
  )
}

export default Address