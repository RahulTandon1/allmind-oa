"use client"
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
const HeroSection = () => {
  // Refs for animation targets
  const heroSectionRef = useRef(null);
  const videoSectionRef = useRef(null);

  // Animation effect similar to the original 'hidden show' classes
  useEffect(() => {
    const heroSection = heroSectionRef.current;
    const videoSection = videoSectionRef.current;

    if (heroSection && videoSection) {
      setTimeout(() => {
        heroSection.classList.remove('opacity-0', 'blur-sm');
        heroSection.classList.add('opacity-100', 'blur-none');
        
        videoSection.classList.remove('opacity-0', 'blur-sm');
        videoSection.classList.add('opacity-100', 'blur-none');
      }, 100);
    }
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-6 bg-animated-gradient">
      {/* HERO SECTION */}
      <section 
        ref={heroSectionRef}
        className="opacity-0 blur-sm transform transition-all duration-300 ease-in-out"
      >
        <div className="relative overflow-hidden py-10 md:py-16">
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">The AI Data Analyst</h1>
          </div>
          
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl text-gray-200">Ask questions, get instant charts and insights from your data.</h3>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
            <Link 
              href="https://app.camelai.com/" 
              className="bg-white text-black w-40 h-[45px] rounded-full flex justify-around items-center text-base font-medium transition-all duration-300 ease-in-out relative overflow-hidden z-10 hover:-translate-y-1 animate-[subtle-glow_2s_infinite]"
            >
              Try free
              <img className="h-4 w-4" src="https://camelai.com/assets/images/chevron-right-black.png" alt="chevron right" />
            </Link>
            
            <Link 
              href="https://cal.com/ipr-camelai/book-a-demo" 
              className="text-white border-2 border-white/40 w-40 h-[45px] rounded-full flex justify-around items-center text-base font-medium transition-all duration-300 ease-in-out relative overflow-hidden z-10 hover:-translate-y-1 hover:border-white before:content-[''] before:absolute before:top-0 before:left-0 before:w-[200%] before:h-full before:bg-gradient-to-r before:from-white/10 before:via-white/20 before:to-white/10 before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-600 before:ease-in-out before:-z-10"
            >
              Book demo
              <img className="h-4 w-4 brightness-0 invert" src="https://camelai.com/assets/images/chevron-right-black.png" alt="chevron right" />
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 flex-wrap">
            <div className="flex items-center justify-center bg-white/10 rounded-lg w-[196px] h-[37px] px-3">
              <img src="https://camelai.com/assets/images/yc-logo.png" alt="yc logo" className="h-5 mr-1.5" />
              <p className="text-sm text-white">Y Combinator backed</p>
            </div>
            
            <div className="flex items-center justify-center bg-white/10 rounded-lg w-[196px] h-[37px] px-3">
              <img src="https://camelai.com/assets/images/lock-icon.png" alt="lock" className="h-5 mr-1.5" />
              <p className="text-sm text-white">Enterprise Security</p>
            </div>
            
            <div className="flex items-center justify-center bg-white/10 rounded-lg w-[196px] h-[37px] px-3">
              <img src="https://camelai.com/assets/images/shield-icon.png" alt="shield" className="h-5 mr-1.5" />
              <p className="text-sm text-white">100% Data Privacy</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* VIDEO SECTION */}
      <section 
        ref={videoSectionRef}
        className="opacity-0 blur-sm transform transition-all duration-300 ease-in-out"
      >
        <div className="py-8 md:py-12">
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Link href="/demo" className="absolute inset-0 flex items-center justify-center z-10">
                <img className="w-16 h-16 md:w-20 md:h-20" src="https://camelai.com/assets/images/play-icon-2.png" alt="play video" />
              </Link>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                disableRemotePlayback 
                poster="https://camelai.com/assets/images/camelai-gif-poster.jpg" 
                className="w-full"
              >
                <source src="https://camelai.com/assets/images/camelai-gif.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;