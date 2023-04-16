import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav className="flex w-full h-14 bg-slate-400">
        <div id='nav-logo'>
          KATFLIX
        </div>
        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/contact/'}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}
