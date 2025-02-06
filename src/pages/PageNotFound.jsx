import React from 'react';
import NotFound from "../assets/404-page-not-found.png";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5 text-center">
      <img 
        src={NotFound} 
        alt="404" 
        className="w-full max-w-md mb-6" 
      />
      <h3 className="text-3xl font-semibold text-gray-800 mb-4">404 Page Not Found</h3>
      <p className="text-lg text-gray-600">We are sorry but the page you are looking for does not exist.</p>
    </div>
  );
};

export default PageNotFound;
