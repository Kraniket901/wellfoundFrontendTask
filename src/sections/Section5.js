import React from 'react'
import tickdark from '../assets/circle-tick.png'
import ticklight from '../assets/circle-tick-light.png'
import tickwhite from '../assets/circle-tick-white.png'

const Section5 = () => {
  return (
    <div className='flex flex-col justify-center items-center py-20 lg:py-48' id='pricing'>
      <h1 className='px-3 text-4xl lg:text-7xl font-medium text-[#101828] text-center py-3'>Pricing made for collaborative support.</h1>
      <p className='px-3 text-[#667085] py-2 lg:py-8 text-md lg:text-2xl text-center'>Plain is made for your entire company. Only pay for users that actually <br />message customers. Everyone else is free, forever.</p>
      <div className='flex justify-center flex-wrap py-8'>
        <div className='hover:scale-105 transition-transform duration-200 ease-in border-2 px-6 py-12 w-full lg:w-96 rounded-xl m-4'>
          <h1 className='text-2xl font-medium text-[#191D23]'>Freebie</h1>
          <p className='text-[#6B7280]'>Ideal for individuals who need quick access to basic features.</p>
          <div className='flex items-center py-3'>
            <span className='text-5xl text-[#1F2937]'>$0&nbsp;</span>
            <span className='text-lg text-[#4B5563]'>/month</span>
          </div>
          <div className='text-center'><button className='hover:bg-[#1F2937] hover:text-[#F9FAFB] text-[#4B5563] border-[#4B5563] border-2 rounded-md py-4 w-full my-5'>Get Started Now</button></div>
          <ul>
            <li className='flex items-center'><img src={tickdark} alt="tick" /><p className='pl-2 text-[#1F2937]'>20,000+ of PNG & SVG graphics</p></li>
            <li className='flex items-center'><img src={tickdark} alt="tick" /><p className='pl-2 text-[#1F2937]'>Access to 100 million stock images</p></li>
            <li className='flex items-center'><img src={ticklight} alt="tick" /><p className='pl-2 text-[#9CA3AF]'>Upload custom icons and fonts</p></li>
            <li className='flex items-center'><img src={ticklight} alt="tick" /><p className='pl-2 text-[#9CA3AF]'>Unlimited Sharing</p></li>
            <li className='flex items-center'><img src={ticklight} alt="tick" /><p className='pl-2 text-[#9CA3AF]'>Upload graphics & video in up to 4k</p></li>
            <li className='flex items-center'><img src={ticklight} alt="tick" /><p className='pl-2 text-[#9CA3AF]'>Unlimited Projects</p></li>
            <li className='flex items-center'><img src={ticklight} alt="tick" /><p className='pl-2 text-[#9CA3AF]'>Instant Access to our design system</p></li>
            <li className='flex items-center'><img src={ticklight} alt="tick" /><p className='pl-2 text-[#9CA3AF]'>Create teams to collaborate on designs</p></li>
          </ul>
        </div>
        <div className='hover:scale-105 transition-transform duration-200 ease-in border-2 px-6 py-12 w-full lg:w-96 rounded-xl m-4 bg-[#1F2937]'>
          <h1 className='text-2xl font-medium text-[#FFFFFF]'>Professional</h1>
          <p className='text-[#FFFFFF]'>Ideal for individuals who who need advanced features and tools for client work.</p>
          <div className='flex items-center py-3'>
            <span className='text-5xl text-[#FFFFFF]'>$25&nbsp;</span>
            <span className='text-lg text-[#FFFFFF]'>/month</span>
          </div>
          <div className='text-center'><button className='hover:bg-[#1F2937] hover:text-[#F9FAFB] text-[#1F2937] bg-[#FFFFFF] rounded-md py-4 w-full my-5'>Get Started Now</button></div>
          <ul>
            <li className='flex items-center'><img src={tickwhite} alt="tick" /><p className='pl-2 text-[#F9FAFB]'>20,000+ of PNG & SVG graphics</p></li>
            <li className='flex items-center'><img src={tickwhite} alt="tick" /><p className='pl-2 text-[#F9FAFB]'>Access to 100 million stock images</p></li>
            <li className='flex items-center'><img src={tickwhite} alt="tick" /><p className='pl-2 text-[#F9FAFB]'>Upload custom icons and fonts</p></li>
            <li className='flex items-center'><img src={tickwhite} alt="tick" /><p className='pl-2 text-[#F9FAFB]'>Unlimited Sharing</p></li>
            <li className='flex items-center'><img src={tickwhite} alt="tick" /><p className='pl-2 text-[#F9FAFB]'>Upload graphics & video in up to 4k</p></li>
            <li className='flex items-center'><img src={ticklight} alt="tick" /><p className='pl-2 text-[#9CA3AF]'>Unlimited Projects</p></li>
            <li className='flex items-center'><img src={ticklight} alt="tick" /><p className='pl-2 text-[#9CA3AF]'>Instant Access to our design system</p></li>
            <li className='flex items-center'><img src={ticklight} alt="tick" /><p className='pl-2 text-[#9CA3AF]'>Create teams to collaborate on designs</p></li>
          </ul>
        </div>
        <div className='hover:scale-105 transition-transform duration-200 ease-in border-2 px-6 py-12 w-full lg:w-96 rounded-xl m-4'>
          <h1 className='text-2xl font-medium text-[#191D23]'>Freebie</h1>
          <p className='text-[#6B7280]'>Ideal for individuals who need quick access to basic features.</p>
          <div className='flex items-center py-3'>
            <span className='text-5xl text-[#1F2937]'>$0&nbsp;</span>
            <span className='text-lg text-[#4B5563]'>/month</span>
          </div>
          <div className='text-center'><button className='hover:bg-[#1F2937] hover:text-[#F9FAFB] text-[#4B5563] border-[#4B5563] border-2 rounded-md py-4 w-full my-5'>Get Started Now</button></div>
          <ul>
            <li className='flex items-center'><img src={tickdark} alt="tick" /><p className='pl-2 text-[#1F2937]'>20,000+ of PNG & SVG graphics</p></li>
            <li className='flex items-center'><img src={tickdark} alt="tick" /><p className='pl-2 text-[#1F2937]'>Access to 100 million stock images</p></li>
            <li className='flex items-center'><img src={tickdark} alt="tick" /><p className='pl-2 text-[#1F2937]'>Upload custom icons and fonts</p></li>
            <li className='flex items-center'><img src={tickdark} alt="tick" /><p className='pl-2 text-[#1F2937]'>Unlimited Sharing</p></li>
            <li className='flex items-center'><img src={tickdark} alt="tick" /><p className='pl-2 text-[#1F2937]'>Unlimited Projects</p></li>
            <li className='flex items-center'><img src={tickdark} alt="tick" /><p className='pl-2 text-[#1F2937]'>Unlimited Projects</p></li>
            <li className='flex items-center'><img src={tickdark} alt="tick" /><p className='pl-2 text-[#1F2937]'>Instant Access to our design system</p></li>
            <li className='flex items-center'><img src={tickdark} alt="tick" /><p className='pl-2 text-[#1F2937]'>Create teams to collaborate on designs</p></li>
            <li className='flex items-center'><img src={tickdark} alt="tick" /><p className='pl-2 text-[#1F2937]'>Create teams to collaborate on designs</p></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Section5