import React from 'react'
import '../../App.css'
import {Link} from 'react-router-dom'
import GitHubIcon from '@material-ui/icons/GitHub';
const Navbar = () => {
     
     return (
          <nav className = "navbar bg-primary">
               <h1> 
                   <GitHubIcon /> Github Finder 
               </h1>
               
               <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
               </ul>
               

          </nav>
     )
}
export default Navbar;