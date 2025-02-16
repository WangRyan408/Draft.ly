import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className='navbar'>
          <ul>
            <li className='nav-link'>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li className='nav-link'>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                About
              </NavLink>
            </li>
            <li className='nav-link'>
              <NavLink
                to="/Builder"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Builder
              </NavLink>
            </li>
          </ul>
        </nav>
      );
}