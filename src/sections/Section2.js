import React from 'react';
import frame1 from '../assets/frames/Frame.png';
import frame2 from '../assets/frames/Frame2.png';
import frame3 from '../assets/frames/Frame3.png';
import frame4 from '../assets/frames/Frame4.png';
import frame5 from '../assets/frames/Frame5.png';

const frames = [frame2, frame3, frame4, frame5, frame1];

const alerty = () => {
  alert('View recent work : will Open Recent Work Model or New Recent Work Route');
};

const Section2 = () => {
  return (
    <div className='py-20 lg:py-28'>
      <div className='flex justify-between overflow-x-auto'>
        {frames.map((frame, index) => (
          <img key={index} className='mx-2 h-36 lg:h-full lg:mx-0' src={frame} alt={`Frame ${index + 2}`} />
        ))}
      </div>
      <div className='text-center py-6'>
        <button className='hover:bg-[#1F2937] hover:text-[#F9FAFB] text-[#4B5563] border-[#4B5563] border-2 rounded-md py-4 px-8 my-5' onClick={alerty}>
          View recent work
        </button>
      </div>
    </div>
  );
};

export default Section2;
