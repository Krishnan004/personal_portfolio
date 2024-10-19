import logo from './images/Logo.png'
import { Link } from "react-router-dom";


const Header = () => {

  return (
    <header className="  bg-white bg-opacity-25">
      <div className="flex items-center justify-between p-2 sm:p-4 ">
        <div className="w-20">
          <Link to="/" >
            <img src={logo} alt="Company Logo" className="size-16 rounded-full" />
          </Link  >
        </div>
        <nav className="flex-1 mx-16 ">
          <ul className="hidden sm:flex justify-end gap-8 font-semibold font-navfont">
          <Link to="/" className="focus:animate-pulse hover:animate-pulse">
            Home
            </Link  >
            <Link to="/about">
            <li><a href="#about" className="hover:animate-pulse focus:animate-pulse">About</a></li>
            </Link>
            <Link to="/project" className="hover:animate-pulse focus:animate-pulse" >
            Project
            </Link>
            <Link to="/contact">
            <li><a href="#contact" className="hover:animate-pulse focus:animate-pulse">Contact</a></li>
            </Link>
          </ul>
        </nav>
        <div className="flex gap-4">
        <a href="https://mail.google.com/mail/u/0/?fs=1&to=sunilkrish2004@gmail.com&su=Job+Opportunity&body=I+would+like+to+discuss+a+potential+job+opportunity+with+you.&tf=cm" target="_blank" rel="noopener noreferrer">
          <button className="text-white px-4 py-2 bg-black rounded-xl  transition-all">
            Hire me
      </button>
      </a>
        </div>
      </div>
    </header>


  )
}

export default Header
