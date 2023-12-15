import React from 'react';
import logo from '../assets/logos/Logomark.png';
import avatar from '../assets/Avatar.png';

const Section4 = () => {
  return (
    <div className='bg-[#F9FAFB] flex justify-center flex-col items-center py-5 px-3 lg:py-10'>
      <div className='flex justify-center items-center'>
        <img src={logo} alt="Logo" />
        <span className='text-[#101828] pl-2 py-8 text-2xl font-medium'>Sisyphus</span>
      </div>
      
      <div className='text-[#1F2937] text-3xl lg:text-5xl text-center font-medium leading-9 lg:leading-snug lg:px-[200px]'>
        We’ve been with Unicraft to kickstart every new project and can’t imagine working without it.
      </div>

      <div className='flex justify-center flex-col items-center py-12'>
        <img src={avatar} alt="Avatar" />
        <h6 className='text-[#101828] py-2 text-lg font-medium'>Candice Wu</h6>
        <p className='text-[#667085]'>Product Manager, Sisyphus</p>
      </div>
    </div>
  );
};

export default Section4;