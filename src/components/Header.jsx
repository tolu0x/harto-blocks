import React from 'react'

const Header = () => {
  return (
    <div className="w-full fixed bg-black px-9 sm:px-4 py-4 sm:py-2 flex items-center justify-between">
      <div className="logo text-3xl text-white">
       <a href="#">blocks</a>
        </div>

      <a
        href="https://foundation.app/collection/125blocks"
        target="_blank"
        rel="noreferrer noopener"
        className="p-3 bg-red-600 text-white font-semibold rounded-2xl w-32 sm:w-24 text-center hover:bg-white hover:text-red-600"
      >
        Mint
      </a>
    </div>
  );
}

export default Header