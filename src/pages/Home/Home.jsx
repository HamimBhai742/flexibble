import React, { useState } from 'react';
import { categories } from '../../json/categories';
import { projects } from '../../json/projects';
import { CiFilter } from 'react-icons/ci';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='bg-white py-12 lg:py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
              Showcase and discover
              <br />
              <span className='text-purple-600'>creative work</span>
            </h1>
            <p className='text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
              Get inspired by thousands of projects made by designers and
              developers from around the world
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors'>
                Start Creating
              </button>
              <button className='border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-full font-medium transition-colors'>
                Explore Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className='bg-white border-b border-gray-200 sticky top-16 z-40'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between py-4'>
            <div className='hidden md:flex text-black items-center space-x-2'>
              <select className='border-2  hover:outline-none  border-gray-300 rounded-lg px-2 py-2 text-sm '>
                <option value='following'>Following</option>
                <option value='popular'>Popular</option>
                <option value='new'>New</option>
              </select>
            </div>
            <div className='flex space-x-1 overflow-x-auto scrollbar-hide'>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#F3F3F4] text-black font-semibold'
                      : 'text-gray-600 hover:text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className='hidden md:flex text-black items-center space-x-2 border-2 hover:outline-none border-gray-300 rounded-lg px-2 py-2 text-sm'>
              <CiFilter size={16} />
              <span>Filters</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className='py-8 lg:py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projects.map((project) => (
              <div key={project.id} className='group cursor-pointer'>
                <div className='relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-shadow'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300' />
                  <div className='absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <button className='bg-white rounded-full p-2 shadow-lg hover:bg-gray-50'>
                      <svg
                        className='w-4 h-4 text-gray-600'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z' />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className='pt-4'>
                  <h3 className='font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors'>
                    {project.title}
                  </h3>
                  <p className='text-sm text-gray-600 mb-2'>
                    by {project.author}
                  </p>
                  <div className='flex items-center justify-between text-sm text-gray-500'>
                    <div className='flex items-center space-x-4'>
                      <span className='flex items-center space-x-1'>
                        <svg
                          className='w-4 h-4'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z' />
                        </svg>
                        <span>{project.likes}</span>
                      </span>
                      <span className='flex items-center space-x-1'>
                        <svg
                          className='w-4 h-4'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                          <path
                            fillRule='evenodd'
                            d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span>{project.views}k</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className='text-center mt-12'>
            <button className='bg-white border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-full font-medium transition-colors'>
              Load More Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
