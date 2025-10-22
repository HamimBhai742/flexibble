import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Flexibble
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover and showcase amazing development projects
          </p>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600">
              This is where featured projects will be displayed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
