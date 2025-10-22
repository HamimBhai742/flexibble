import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className='group cursor-pointer'>
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
        <p className='text-sm text-gray-600 mb-2'>by {project.author}</p>
        <div className='flex items-center justify-between text-sm text-gray-500'>
          <div className='flex items-center space-x-4'>
            <span className='flex items-center space-x-1'>
              <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                <path d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z' />
              </svg>
              <span>{project.likes}</span>
            </span>
            <span className='flex items-center space-x-1'>
              <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
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
  );
};

export default ProjectCard;
