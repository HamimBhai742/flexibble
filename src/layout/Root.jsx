import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Upload from '../components/Upload/Upload';

const Root = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const handleOpenUpload = () => {
    setIsUploadModalOpen(true);
  };

  const handleCloseUpload = () => {
    setIsUploadModalOpen(false);
  };

  return (
    <div>
      <Navbar onUploadClick={handleOpenUpload} />
      <Outlet />
      <Upload isOpen={isUploadModalOpen} onClose={handleCloseUpload} />
    </div>
  );
};

export default Root;
