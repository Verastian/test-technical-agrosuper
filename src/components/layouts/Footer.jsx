import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#005da7] text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm font-semibold">Copyright 2023</p>
        <div className="flex items-center">
          <p className="text-sm font-semibold mr-2">Follow us:</p>
          <a href="#" className="text-sm font-semibold hover:text-blue-500">
            Facebook
          </a>
          <a
            href="#"
            className="text-sm font-semibold hover:text-blue-500 ml-2"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
