"use client"
import React, { useState } from 'react';

const FAQSection = () => {
    // State to track which FAQ is currently open
    const [openQuestion, setOpenQuestion] = useState(null);
    
    // FAQ data
    const faqs = [
        {
            id: 1,
            question: "How is my data stored?",
            answer: "camelAI's infrastructure is hosted on AWS. Data from applications is pulled only when necessary and limited to what you request in your prompt. It is stored in an EC2 cache for 5 minutes and then deleted. For more information, please see our <a href='/security'>Security Policy</a> and our <a href='https://camelai.com/blog/FAQ-security/'>security blog post</a>."
        },
        {
            id: 2,
            question: "Do you train on my data?",
            answer: "No, we do not train on your data. CamelAI is powered by OpenAI's API. We have opted out of data sharing for training. You can read more about OpenAI's API policies <a href='https://openai.com/enterprise-privacy/'>here</a>.</p>"
        },
        {
            id: 3,
            question: "Are my app connections secure?",
            answer: "Yes, your app connections are secure. We use OAuth 2.0 when available or secure key authentication to authenticate and authorize access to your applications. Your data is encrypted in transit and at rest. If you revoke access to an app, the connection is immediately destroyed and we will no longer have access to that application."
        },
        {
            id: 4,
            question: "How do you pull my data?",
            answer: "camelAI only communicates with your connected apps when you request data in the chat. We do not train on your data, nor do we access or store any data without your request and supervision."
        },
        // You can add more FAQ items here
    ];
    
    // Toggle function for opening and closing FAQ items
    const toggleQuestion = (id) => {
        setOpenQuestion(openQuestion === id ? null : id);
    };
    
    return (
        <section>
            <div className="py-12 flex flex-col items-center gap-y-7">
                <div className="text-center">
                    <h2>FAQs</h2>
                </div>
                
                <div className="w-[calc(100%-2rem)] max-w-[970px] flex flex-col">
                    {faqs.map((faq) => (
                        <div key={faq.id} className="flex flex-col">
                            <button 
                                className="w-full flex flex-row items-center justify-between"
                                onClick={() => toggleQuestion(faq.id)}
                            >
                                <p className="text-left my-6">{faq.question}</p>
                                <img 
                                    className="h-5 transition-transform duration-300 ease-in-out" 
                                    src="/assets/images/chevron-up-white.png" 
                                    alt="Expand" 
                                    style={{ transform: openQuestion === faq.id ? 'rotate(180deg)' : 'rotate(0deg)' }} 
                                />
                            </button>
                            
                            <div className="w-full h-[3px] bg-light-background-blue rounded-[10px]"></div>
                            
                            <div className={`
                                flex flex-col items-start gap-y-7 
                                bg-light-background-blue rounded-b-lg
                                transition-all duration-500 ease-in-out overflow-hidden
                                ${openQuestion === faq.id ? 
                                    'max-h-[1000px] opacity-100 py-2.5' : 
                                    'max-h-0 opacity-0 py-0'
                                }
                            `}>
                                <div 
                                    className="font-mono text-sm px-2.5 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;