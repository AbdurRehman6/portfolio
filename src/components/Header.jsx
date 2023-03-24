import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from "react-router-hash-link"
const Header = () => {
  return (
    <nav>
        <h1>PORTFOLIO</h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <Link to={"/Services"}>Services</Link>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#skills"}>Skills</HashLink>
            <Link to={"/experience"}>Experience</Link>
            <Link to={"/portfolio"}>Portfolio</Link>
            <Link to={"/contact"}>Contact</Link>
            
        </main>
    </nav>
  )
}

export default Header
