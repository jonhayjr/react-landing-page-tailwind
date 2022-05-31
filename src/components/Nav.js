import {useState} from "react";
import {Link} from "react-router-dom";
import {FaTimes, FaBars} from "react-icons/fa";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(prevToggle => !prevToggle);
  }

  return (
    <>
        <nav className="flex items-center justify-between p-5 bg-gray-700 text-white">
          <h1 className="m-0 text-3xl font-semibold">JH</h1>
          {toggle ? <FaTimes size={30} onClick={handleClick} className="z-10 md:hidden cursor-pointer"/> : <FaBars size={30} onClick={handleClick} className="z-10 md:hidden cursor-pointer"/>}
          {toggle && 
          <ul className="mobile-nav md:hidden h-full absolute flex flex-col top-0 left-0 w-full bg-gray-700 items-center justify-center">
            <li className="text-3xl p-10 hover:underline hover:opacity-75">
              <Link to="/" onClick={handleClick}>Home</Link>
            </li>
            <li className="text-3xl p-10 hover:underline hover:opacity-75">
              <Link to="/about" onClick={handleClick}>About</Link>
            </li>
            <li className="text-3xl p-10 hover:underline hover:opacity-75">
              <Link to="/projects" onClick={handleClick}>Projects</Link>
            </li>
            <li className="text-3xl p-10 hover:underline hover:opacity-75">
              <Link to="/contact" onClick={handleClick}>Contact</Link>
            </li>
          </ul>
          }
          <ul className="desktop-nav hidden md:flex">
            <li className="text-2xl p-5 hover:underline hover:opacity-75">
              <Link to="/">Home</Link>
            </li>
            <li className="text-2xl p-5 hover:underline hover:opacity-75">
              <Link to="/about">About</Link>
            </li>
            <li className="text-2xl p-5 hover:underline hover:opacity-75">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="text-2xl p-5 hover:underline hover:opacity-75">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
    </>
  )
}

export default Nav