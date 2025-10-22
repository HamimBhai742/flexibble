import React, { useState, useEffect } from 'react';
import { CiSearch } from 'react-icons/ci';
import { LuUpload } from 'react-icons/lu';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ onUploadClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className=' mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex items-center'>
            <Link to='/' className='flex items-center space-x-2'>
              <svg className='w-8 h-8' viewBox='0 0 32 32' fill='none'>
                <circle cx='16' cy='16' r='16' fill='#8B5CF6' />
                <path d='M12 10h8v2h-6v4h5v2h-5v4h6v2h-8V10z' fill='white' />
              </svg>
              <span className='text-xl font-bold text-gray-900'>Flexibble</span>
            </Link>
          </div>

          {/* Center Navigation */}
          <div className='hidden lg:flex items-center space-x-8'>
            <NavLink
              to='/'
              className='text-sm text-gray-700 hover:text-purple-600 font-medium'
            >
              Inspiration
            </NavLink>
            <NavLink
              to='/find-work'
              className='text-sm text-gray-700 hover:text-purple-600 font-medium'
            >
              Find Work
            </NavLink>
            <NavLink
              to='/learn-design'
              className='text-sm text-gray-700 hover:text-purple-600 font-medium'
            >
              Learn Design
            </NavLink>
            <NavLink
              to='/go-pro'
              className='text-sm text-gray-700 hover:text-purple-600 font-medium'
            >
              Go Pro
            </NavLink>
            <NavLink
              to='/hire-designers'
              className='text-sm text-gray-700 hover:text-purple-600 font-medium'
            >
              Hire Designers
            </NavLink>
          </div>

          {/* Right Side Actions */}
          <div className='flex items-center space-x-4'>
            {/* Search Icon */}
            <div className='hidden md:flex items-center border border-gray-200 bg-gray-100 rounded-full px-3 py-1'>
              <button className='hidden md:block p-2 text-gray-500 hover:text-gray-700'>
                <CiSearch size={20} />
              </button>
              <input
                type='text'
                placeholder='Search'
                className='bg-gray-100 focus:outline-none text-black'
              />
            </div>

            <div className='dropdown dropdown-end'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle avatar'
              >
                <div className='w-10 rounded-full'>
                  <img
                    alt='Tailwind CSS Navbar component'
                    src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                  />
                </div>
              </div>
              <ul
                tabIndex='-1'
                className='menu  dropdown-content bg-white text-gray-800 rounded-box z-1 mt-3 w-fit p-2 shadow'
              >
                <li>
                  <NavLink to='/profile' className='justify-between'>
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/logout' className='justify-between '>
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Upload Button */}
            <button
              onClick={onUploadClick}
              className='hidden md:flex items-center space-x-2 bg-[#9C27B0] text-white px-4 py-3 rounded-xl text-sm font-medium transition-colors'
            >
              <LuUpload size={20} />
              <span>Upload</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='lg:hidden p-2 text-gray-500 hover:text-gray-700'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='lg:hidden bg-white border-t border-gray-100'>
          <div className='px-4 py-3 space-y-3'>
            {/* Mobile Search */}
            <div className='md:hidden flex items-center border border-gray-200 bg-gray-100 rounded-full px-3 py-1'>
              <button className='hidden md:block p-2 text-gray-500 hover:text-gray-700'>
                <CiSearch size={20} />
              </button>
              <input
                type='text'
                placeholder='Search'
                className='bg-gray-100 focus:outline-none text-black'
              />
            </div>

            {/* Mobile Navigation Links */}
            <div className='space-y-2'>
              <NavLink
                to='/inspiration'
                className='block py-2 text-gray-700 font-medium'
              >
                Inspiration
              </NavLink>
              <NavLink
                to='/find-work'
                className='block py-2 text-gray-700 font-medium'
              >
                Find Work
              </NavLink>
              <NavLink
                to='/learn-design'
                className='block py-2 text-gray-700 font-medium'
              >
                Learn Design
              </NavLink>
              <NavLink
                to='/go-pro'
                className='block py-2 text-gray-700 font-medium'
              >
                Go Pro
              </NavLink>
              <NavLink
                to='/hire-designers'
                className='block py-2 text-gray-700 font-medium'
              >
                Hire Designers
              </NavLink>
            </div>

            {/* Mobile Actions */}
            <div className='pt-3 border-t border-gray-100 space-y-2 md:hidden'>
              {/* Upload Button */}
              <button
                onClick={onUploadClick}
                className='flex items-center space-x-2 bg-[#9C27B0] text-white px-4 py-3 rounded-xl text-sm font-medium transition-colors'
              >
                <LuUpload size={20} />
                <span>Upload</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
