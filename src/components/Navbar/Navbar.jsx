import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
  <nav className="Navbar">
    <ul>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/new-post'>New Post</NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar