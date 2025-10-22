import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuUpload } from 'react-icons/lu';
import { CiSearch } from 'react-icons/ci';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className='bg-white shadow-sm border-b border-gray-100'>
      <div className='px-2'>
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
            <Link
              to='/inspiration'
              className='text-sm text-gray-700 hover:text-purple-600 font-medium'
            >
              Inspiration
            </Link>
            <Link
              to='/find-work'
              className='text-sm text-gray-700 hover:text-purple-600 font-medium'
            >
              Find Work
            </Link>
            <Link
              to='/learn-design'
              className='text-sm text-gray-700 hover:text-purple-600 font-medium'
            >
              Learn Design
            </Link>
            <Link
              to='/go-pro'
              className='text-sm text-gray-700 hover:text-purple-600 font-medium'
            >
              Go Pro
            </Link>
            <Link
              to='/hire-designers'
              className='text-sm text-gray-700 hover:text-purple-600 font-medium'
            >
              Hire Designers
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className=' flex items-center space-x-4'>
            <h3 className='text-[#9747FF] text-sm font-semibold'>Apply Now</h3>
            <div className='flex gap-2 '>
              <div className='flex  items-center lg:py-1 border bg-gray-100 border-gray-300 rounded-full px-2 '>
                <button className='hidden md:block p-2 text-gray-500 hover:text-gray-700'>
                  <CiSearch className='w-5 h-5' />
                </button>
                <input
                  type='text'
                  placeholder='Search'
                  className='text-black focus:outline-none bg-gray-100'
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
                  className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
                >
                  <li>
                    <a className='justify-between'>
                      Profile
                      <span className='badge'>New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Upload Button */}
            <button className='hidden hover:cursor-pointer md:flex items-center space-x-1 bg-[#9747FF] text-white px-4 py-3 rounded-xl text-sm font-medium transition-colors'>
              <LuUpload className='w-4 h-4' />
              <span>Upload</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-white border-t border-gray-100'>
          <div className='px-4 py-3 space-y-3'>
            {/* Mobile Search */}
            <div className='relative'>
              <input
                type='text'
                placeholder='Search...'
                className='w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
              />
              <svg
                className='absolute left-3 top-2.5 w-4 h-4 text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </div>

            {/* Mobile Navigation Links */}
            <div className='space-y-2'>
              <Link
                to='/inspiration'
                className='block py-2 text-gray-700 font-medium'
              >
                Inspiration
              </Link>
              <Link
                to='/find-work'
                className='block py-2 text-gray-700 font-medium'
              >
                Find Work
              </Link>
              <Link
                to='/learn-design'
                className='block py-2 text-gray-700 font-medium'
              >
                Learn Design
              </Link>
              <Link
                to='/go-pro'
                className='block py-2 text-gray-700 font-medium'
              >
                Go Pro
              </Link>
              <Link
                to='/hire-designers'
                className='block py-2 text-gray-700 font-medium'
              >
                Hire Designers
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className='pt-3 border-t border-gray-100 space-y-2'>
              <button className='w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-full font-medium'>
                Upload
              </button>
              <button className='w-full text-gray-700 py-2 font-medium'>
                Log in
              </button>
              <button className='w-full bg-gray-900 text-white py-2 rounded-full font-medium'>
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
