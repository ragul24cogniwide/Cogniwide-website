import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 fixed w-full top-0 z-50">
      <div className="font-bold text-xl">COGNIWIDE</div>
      <nav className="flex-grow">
        <ul className="flex justify-center space-x-6 list-none">
          {['Products', 'Solutions', 'Services', 'Industries', 'Company', 'Contact'].map(item => (
            <li key={item} className="mx-3">{item}</li>
          ))}
        </ul>
      </nav>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Demo
      </button>
    </header>
  );
};

export default Header;

