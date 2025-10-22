import React, { useState } from 'react';
import ProjectCardDetails from '../../components/Project/ProjectCardDetails';
import { userProjects } from '../../json/userProjects';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('work');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      {/* Profile Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
            {/* Profile Image */}
            <div className="shrink-0 mb-6 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                alt="John Doe"
                className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full object-cover"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    John Doe
                  </h1>
                  <p className="text-lg text-gray-600 mb-4">
                    Senior UI/UX Designer & Frontend Developer
                  </p>
                  <p className="text-gray-600 max-w-2xl mb-6">
                    Passionate designer with 5+ years of experience creating beautiful and functional digital experiences.
                    I specialize in user interface design, user experience research, and frontend development.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:ml-6">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
                    Follow
                  </button>
                  <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-2 rounded-full font-medium transition-colors">
                    Message
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 sm:gap-8 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">24</div>
                  <div className="text-sm text-gray-500">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">1.2k</div>
                  <div className="text-sm text-gray-500">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">856</div>
                  <div className="text-sm text-gray-500">Following</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">4.8k</div>
                  <div className="text-sm text-gray-500">Likes</div>
                </div>
              </div>

              {/* Skills/Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  UI Design
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  UX Research
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Frontend Dev
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                  Figma
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                  React
                </span>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>john.doe@email.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                  </svg>
                  <span>johndoe.design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('work')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'work'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Work ({userProjects.length})
            </button>
            <button
              onClick={() => setActiveTab('liked')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'liked'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Liked (12)
            </button>
            <button
              onClick={() => setActiveTab('collections')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'collections'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Collections (3)
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'about'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              About
            </button>
          </nav>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'work' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {userProjects.map((project) => (
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
                    <button className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50">
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
        )}

        {activeTab === 'liked' && (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">
              <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No liked projects yet</h3>
              <p className="text-gray-500">Projects you like will appear here</p>
            </div>
          </div>
        )}

        {activeTab === 'collections' && (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No collections yet</h3>
              <p className="text-gray-500">Create collections to organize your favorite projects</p>
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="max-w-4xl">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About John</h2>
              <div className="prose prose-gray max-w-none">
                <p className="mb-4">
                  I'm a passionate UI/UX designer and frontend developer with over 5 years of experience in creating
                  digital experiences that are both beautiful and functional. I believe in the power of good design
                  to solve complex problems and improve people's lives.
                </p>
                <p className="mb-4">
                  My expertise spans across user interface design, user experience research, prototyping, and frontend
                  development. I'm proficient in tools like Figma, Adobe Creative Suite, and have strong coding skills
                  in React, JavaScript, and CSS.
                </p>
                <p>
                  When I'm not designing or coding, you can find me exploring new design trends, contributing to
                  open-source projects, or sharing my knowledge through blog posts and speaking at design conferences.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      <ProjectCardDetails
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Profile;
