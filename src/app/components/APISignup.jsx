import React from 'react';
import Image from 'next/image';
const APISignup = () => {
    return (
        <section>
        <div className="flex justify-center px-4 pb-20">
            <div className="flex flex-col justify-around w-full gap-12 md:flex-row">
            <div className="flex flex-col items-start w-full gap-10">
                <h2 className="font-['Roboto_Mono',_monospace] text-2xl md:text-3xl font-extralight">
                    Want to build with camelAI?
                </h2>
                <h3 className="text-lg md:text-xl text-white/80">
                    Embed AI-powered analytics directly in your application with our API
                </h3>
                <button 
                    className="bg-white text-black py-2 px-4 rounded-full flex items-center justify-between gap-2 text-base font-medium transition-all duration-300 ease-in-out hover:-translate-y-1"
                    data-tally-open="mV49Ba" 
                    data-tally-emoji-text="👋" 
                    data-tally-emoji-animation="wave"
                >
                    Join API Waitlist
                    <Image 
                    className="w-4 h-4" 
                    src="/assets/images/chevron-right-black.png" 
                    alt="chevron right" 
                    width={16} 
                    height={16}
                    />
                </button>
            </div>
        
            <div className="flex flex-col gap-6 w-full">
            <div className="api-signup-vp">
                <h3 className="text-lg font-medium text-white">Natural Language → SQL</h3>
                <p className="text-base text-white/60">Same powerful query engine that powers camelAI</p>
            </div>
            <div className="api-signup-vp">
                <h3 className="text-lg font-medium text-white">Secure Integration</h3>
                <p className="text-base text-white/60">Enterprise-grade security and permissions</p>
            </div>
            <div className="api-signup-vp">
                <h3 className="text-lg font-medium text-white">Flexible Integration</h3>
                <p className="text-base text-white/60">Full control over the user experience</p>
            </div>
            </div>
            </div>
        </div>
        </section>
    )
}

export default APISignup;
