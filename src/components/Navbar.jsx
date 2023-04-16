import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav className="w-full h-12 px-5 fixed top-0 font-montserrat font-medium text-text flex justify-between bg-brown shadow shadow-slate-500 hover:shadow-lg hover:shadow-slate-500 transition duration-300">
        <NavLink to={'/'}>
          <div id="nav-logo" className="h-full font-semibold text-xl flex items-center transition duration-300 hover:scale-110">
            <span className="">KAT</span>
            <span className="text-cream">FLIX</span>
            <box-icon name="cat" type="solid" animation="fade-left" color="var(--color-cream-)"></box-icon>
          </div>
        </NavLink>
        <div id="nav-links" className="h-full flex items-center">
          <ul className="flex gap-16">
            <li className="hover:text-cream hover:scale-105 transition duration-150">
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li className="hover:text-cream hover:scale-105 transition duration-150">
              <NavLink to={'/movies/'}>Movies</NavLink>
            </li>
            <li className="hover:text-cream hover:scale-105 transition duration-150">
              <NavLink to={'/tvseries/'}>TV Series</NavLink>
            </li>
            <li className="hover:text-cream hover:scale-105 transition duration-150">
              <NavLink to={'/contact/'}>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div id="nav-right" className="h-full flex items-center gap-3">
          <div className=" hover:text-cream">Search</div>
          <div className=" hover:text-cream">Login</div>
        </div>
      </nav>
    </>
  )
}
