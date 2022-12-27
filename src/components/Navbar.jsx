import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import CV from "../assets/Fight-resume.pdf";
// import Logo from "../assets/logo.jpg";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-8 bg-[#1B1C1E] text-gray-300'>
      <div>
        {/* <img src={Logo} alt='Logo Image' style={{ width: '200px' }} /> */}
        <Link to='home' smooth={true} duration={500}>
        <h1 className='text-2xl font-bold text-yellow-300 cursor-pointer'>
         Fight.sint 
        </h1>
        </Link>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:font-bold hover:text-yellow-300'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:font-bold hover:text-yellow-300'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:font-bold hover:text-yellow-300'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:font-bold hover:text-yellow-300'>
          <Link to='portfolio' smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:font-bold hover:text-yellow-300'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#1B1C1E] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl transition ease-in-out hover:font-bold hover:text-yellow-300'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl transition ease-in-out hover:font-bold hover:text-yellow-300'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl transition ease-in-out hover:font-bold hover:text-yellow-300'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl transition ease-in-out hover:font-bold hover:text-yellow-300'>
          {' '}
          <Link onClick={handleClick} to='portfolio' smooth={true} duration={500}>
            Portfolio
          </Link>
        </li> 
        <li className='py-6 text-4xl transition ease-in-out hover:font-bold hover:text-yellow-300'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/sitthipon-sinthuwongpusa-830166256/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/Fighter05'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4267B2]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.facebook.com/profile.php?id=100001974973986'
            >
              Facebook <BsFacebook size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FF5733]'>
            <a download=''
              className='flex justify-between items-center w-full text-gray-300'
              href={CV}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
