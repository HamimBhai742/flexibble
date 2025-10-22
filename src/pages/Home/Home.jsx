import React, { useState } from 'react';
import ProjectCardDetails from '../../components/ProjectCardDetails';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'Web Design', 'Mobile', 'UI/UX', 'Branding', 'Illustration', 'Photography'];

  const projects = [
    {
      id: 1,
      title: 'Modern Dashboard Design',
      author: 'John Doe',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop',
      likes: 124,
      views: 2.1
    },
    {
      id: 2,
      title: 'Mobile App Interface',
      author: 'Jane Smith',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
      likes: 89,
      views: 1.8
    },
    {
      id: 3,
      title: 'Brand Identity Design',
      author: 'Mike Johnson',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop',
      likes: 156,
      views: 3.2
    },
    {
      id: 4,
      title: 'E-commerce Website',
      author: 'Sarah Wilson',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      likes: 203,
      views: 4.1
    },
    {
      id: 5,
      title: 'Creative Portfolio',
      author: 'Alex Brown',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      likes: 78,
      views: 1.5
    },
    {
      id: 6,
      title: 'Social Media App',
      author: 'Emma Davis',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      likes: 167,
      views: 2.9
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Showcase and discover
              <br />
              <span className="text-purple-600">creative work</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get inspired by thousands of projects made by designers and developers from around the world
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                Start Creating
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-full font-medium transition-colors">
                Explore Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Popular</option>
                <option>Recent</option>
                <option>Most Liked</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-shadow">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle like functionality
                      }}
                    >
                      <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">by {project.author}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                        </svg>
                        <span>{project.likes}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
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
          <div className="text-center mt-12">
            <button className="bg-white border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-full font-medium transition-colors">
              Load More Projects
            </button>
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <ProjectCardDetails
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Home;
