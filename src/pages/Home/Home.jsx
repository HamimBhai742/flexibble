import React, { useState } from 'react';
import { categories } from '../../json/categories';
import { projects } from '../../json/projects';
import { CiFilter } from 'react-icons/ci';
import ProjectCard from '../../components/Project/ProjectCard';

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
              <ProjectCard key={project.id} project={project} />
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
