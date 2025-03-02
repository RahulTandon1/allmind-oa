import React from 'react';

const StartForFree = () => {
  return (
    <section className="transition-all duration-300 opacity-100 blur-none translate-x-0 translate-y-0">
      <div className="flex flex-col items-start gap-y-5 m-[50px_20px_20px_20px]">
        <div className="pr-[15px]">
          <h2>
            Get started for{' '}
            <span className="font-semibold inline-block bg-gradient-to-br from-[#6e7f42] via-[#c37842] to-[#f04e42] bg-clip-text text-transparent">
              free.
            </span>
          </h2>
        </div>
        <div className="flex flex-col items-start gap-y-5">
          <a 
            href="https://app.camelai.com/" 
            className="text-black bg-white box-border w-[160px] h-[45px] flex justify-around items-center rounded-[20px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative overflow-hidden z-[1]"
          >
            Try Free
            <img 
              className="h-[14px] ml-[7px]" 
              src="/assets/images/chevron-right-black.png" 
              alt="chevron right"
            />
          </a>
          <a 
            href="https://cal.com/ipr-camelai/book-a-demo" 
            className="text-white border-2 border-white/40 box-border w-[160px] h-[45px] flex justify-around items-center rounded-[20px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative overflow-hidden z-[1] hover:translate-y-[-2px] hover:border-white before:content-[''] before:absolute before:top-0 before:left-0 before:w-[200%] before:h-full before:bg-gradient-to-r before:from-white/10 before:via-white/20 before:to-white/10 before:-translate-x-full before:transition-transform before:duration-600 before:ease-[cubic-bezier(0.4,0,0.2,1)] before:z-[-1] hover:before:translate-x-0"
          >
            Contact us
            <img 
              className="h-[14px] ml-[7px] invert-[100%]" 
              src="/assets/images/chevron-right-black.png" 
              alt="chevron right"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default StartForFree;