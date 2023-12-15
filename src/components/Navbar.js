import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const alerty = () => {
    alert('Contact Us Button : will Open Contact Us Model or New Contact Us Route');
  };

  return (
    <nav className='fixed top-0 w-full bg-[#e7d0ffe2] z-20'>
      <div className='flex flex-row lg:flex-row justify-between py-3 px-10 items-center'>
      <a className='font-bold text-2xl text-[#374151] cursor-pointer' href="#hero">UniCraft</a>
      <div className='flex flex-col justify-center items-end'>
        <div className='lg:hidden'>
          <button
            className='text-[#4B5563] hover:text-[#1F2937] focus:outline-none'
            onClick={toggleMenu}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              ></path>
            </svg>
          </button>
        </div>
        <div className={`lg:flex ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <ul className={`flex ${isMenuOpen ? 'flex-col' : ''} text-[#374151] text-lg`}>
            <a className='px-3 cursor-pointer hover:font-medium' href="#howItWorks">
              How it works
            </a>
            <a className='px-3 cursor-pointer hover:font-medium' href="#pricing">
              Pricing
            </a>
            <a className='px-3 cursor-pointer hover:font-medium' href="#faq">
              FAQ
            </a>
          </ul>
        </div>
      </div>

      <div className='hidden lg:block'>
        <button className='hover:bg-[#1F2937] hover:text-[#F9FAFB] border-2 border-[#4B5563] rounded-md py-2 px-3 text-[#4B5563]' onClick={alerty}>
          Contact us
        </button>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
