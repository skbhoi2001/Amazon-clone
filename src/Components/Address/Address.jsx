import React from 'react'
import { Link } from 'react-router-dom'
import './Address.css'
import AddressMain from './AddressMain'


function Address() {
  return (
    <>
    <h2 style={{width:"80%",margin:"auto"}}>Address</h2>
    <AddressMain/>
    </>
  )
}

export default Address