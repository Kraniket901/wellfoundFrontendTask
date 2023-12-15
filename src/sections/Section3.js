import React from 'react';
import arrow from '../assets/Arrow.png';

const Step = ({ number, title, description }) => (
  <div className='w-[350px] relative my-10 hover:-translate-y-4 transition-transform duration-200 ease-in'>
    <h1 className='text-2xl lg:text-5xl font-bold text-[#1F2937] text-center py-2 lg:py-3'>{title}</h1>
    <p className='text-[#6B7280] py-2 lg:py-3 text-md lg:text-lg text-center'>{description}</p>
    <span className='absolute text-[220px] lg:text-[250px] bottom-[-65px] lg:bottom-[-30px] font-extrabold left-[30%] z-[-10] bg-gradient-to-b from-[#D8B4FE] to-[#ffffff] inline-block text-transparent bg-clip-text'>{number}</span>
  </div>
);

const Section3 = () => {
  return (
    <div className='px-3' id='howItWorks'>
      <h1 className='text-4xl lg:text-7xl font-medium text-[#101828] text-center py-3'>How it works</h1>
      <p className='text-[#667085] py-2 lg:py-8 text-md lg:text-2xl text-center'>Premium designs, unlimited requests, super fast delivery, for one flat monthly fee.</p>
      <div className='flex justify-around flex-wrap pt-20 lg:pt-32 pb-20 lg:pb-24 relative'>
        <img src={arrow} alt="Arrow" className='absolute top-[30%] left-[30%] hidden lg:block'/>
        <img src={arrow} alt="Arrow" className='absolute top-[30%] left-[65%] hidden lg:block'/>

        <Step number="1" title="Subscribe" description="Subscribe to a plan & get instant access to your private Slack channel." />
        <Step number="2" title="Request" description="Submit any number of requests. We'll work through them consistently." />
        <Step number="3" title="Revise" description="Need changes? We guarantee unlimited revisions until you're satisfied." />
      </div>
    </div>
  );
};

export default Section3;