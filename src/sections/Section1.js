import React from 'react';
import logo1 from '../assets/logos/Card.png';
import logo2 from '../assets/logos/Card2.png';
import logo3 from '../assets/logos/Card3.png';
import logo4 from '../assets/logos/Card4.png';
import logo5 from '../assets/logos/Card5.png';
import logo6 from '../assets/logos/Card6.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const Section1 = () => {
  return (
    <div className='py-16 lg:py-48 px-3 bg-gradient-to-b from-[#e9d4ff66] via-[#ffffff] to-[#ffffff]' id="hero">
      <div className='flex flex-col justify-center items-center pb-16'>
        <h1 className='text-4xl lg:text-8xl font-bold text-[#1F2937] text-center py-3'>
          Elevate Your Presence with Seamless Design and Innovation.
        </h1>
        <p className='text-[#4B5563] py-2 text-center lg:py-3 text-lg leading-6'>
          From strategic planning to digital presence, we're your dedicated partner in achieving solo success.
        </p>
        <a className='bg-[#1F2937] text-[#F9FAFB] rounded-md py-4 px-8 my-5 border-2 hover:border-[#4B5563] hover:text-[#4B5563] hover:bg-white hover:border-2' href='#pricing'>View Pricing</a>
      </div>

      <div className='flex flex-col items-center'>
        <p className='text-[#9CA3AF] text-md text-center'>Trusted By 250+ Companies</p>
        <div className='flex justify-around flex-wrap py-5'>
          {logos.map((logo, index) => (
            <div key={index} className='px-5'>
              <img className='w-full' src={logo} alt={`Company Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section1;