import React from 'react'

const alerty = () => {
  alert('Contact Us Button : will Open Contact Us Model or New Contact Us Route');
};

const Section7 = () => {
  return (
    <div className='flex flex-col justify-center items-center py-20 px-3 lg:py-48'>
    <h1 className='text-4xl lg:text-8xl font-bold text-[#101828] text-center py-3'>No long-term contracts. No catches. Simple.</h1>
    <p className='text-[#667085] py-2 text-center lg:py-3 text-lg'>Start your 30-day free trial. Cancel anytime.</p>
    <button className='bg-[#1F2937] text-[#F9FAFB] rounded-md py-4 px-8 my-5 hover:border-[#4B5563] hover:text-[#4B5563] hover:bg-white hover:border-2 border-2 ' onClick={alerty}>Contact us</button>
  </div>
  )
}

export default Section7