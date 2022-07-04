import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/" >Register</Link>
        <Link to="/login" >Login</Link>

    </div>
  )
}

export default Navbar