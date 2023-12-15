import React, { useState } from "react";

const AccordionItem = ({ isOpen, onClick, title, children }) => (
  <div>
    <button onClick={onClick} className="w-full text-left py-4 px-6 focus:outline-none hover:bg-[#e7d0ffe2]">
      <span className="font-medium text-lg text-[#1F2937]">{title}</span>
      <span className="float-right text-2xl font-medium border-2 border-black rounded-[100%] w-8 h-8 text-center flex justify-center items-center text-[#1F2937]">
        {isOpen ? "-" : "+"}
      </span>
    </button>
    {isOpen && <div className="py-2 px-6">{children}</div>}
  </div>
);

const Section6 = () => {
  const [isOpen, setIsOpen] = useState([true, false, false, false, false, false]);

  const toggleAccordion = (index) => {
    const newIsOpen = isOpen.map((state, i) => (i === index ? !state : false));
    setIsOpen(newIsOpen);
  };

  const accordionData = [
    {
      title: "Is there a free trial available?",
      description: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "Can I change my plan later?",
      description: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "What is your cancellation policy?",
      description: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "Can other info be added to an invoice?",
      description: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "How does billing work?",
      description: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "How do I change my account email?",
      description: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center" id="faq">
      <h1 className="text-4xl lg:text-7xl font-medium text-[#101828] text-center py-3">Frequently asked questions</h1>
      <p className="text-[#667085] py-2 lg:py-8 text-md lg:text-2xl text-center">Everything you need to know about the product and billing.</p>
      <div className="border-t border-[#e4e7eb] w-full md:w-[500px] lg:w-[900px]">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            isOpen={isOpen[index]}
            onClick={() => toggleAccordion(index)}
            title={item.title}
          >
            <p className="text-[#6B7280]">{item.description}</p>
          </AccordionItem>
        ))}
      </div>
    </div>
  );
};

export default Section6;