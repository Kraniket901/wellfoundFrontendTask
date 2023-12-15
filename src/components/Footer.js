import React from 'react'
import icon1 from '../assets/social-icons/icon.png'
import icon2 from '../assets/social-icons/icon2.png'
import icon3 from '../assets/social-icons/icon3.png'
import icon4 from '../assets/social-icons/icon4.png'
import icon5 from '../assets/social-icons/icon5.png'
import icon6 from '../assets/social-icons/icon6.png'

const alerty = () => {
  alert('Will Redirect to Particular Link');
};

const Footer = () => {
  return (
    <footer className='border-t-2 py-8 px-3 lg:mx-24'>
      <div className='w-full flex flex-col justify-start'>
      <a className='font-bold text-2xl text-[#374151]' href='#hero'>UniCraft</a>
      <p className='text-[#9CA3AF] text-md lg:text-lg'>Design amazing digital experiences that <br />create more happy in the world.</p>
      </div>
      <div className='flex justify-between pt-10'>
        <p className='text-[#98A2B3] text-sm lg:text-md pr-3'>© 2077 Untitled UI. All rights reserved.</p>
        <ul className='flex flex-wrap'>
          <li className='m-2 cursor-pointer' onClick={alerty}><img src={icon1} alt="" /></li>
          <li className='m-2 cursor-pointer' onClick={alerty}><img src={icon2} alt="" /></li>
          <li className='m-2 cursor-pointer' onClick={alerty}><img src={icon3} alt="" /></li>
          <li className='m-2 cursor-pointer' onClick={alerty}><img src={icon4} alt="" /></li>
          <li className='m-2 cursor-pointer' onClick={alerty}><img src={icon5} alt="" /></li>
          <li className='m-2 cursor-pointer' onClick={alerty}><img src={icon6} alt="" /></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer